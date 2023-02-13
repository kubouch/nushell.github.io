import{_ as o,M as l,p as s,q as i,R as h,Q as t,t as e,N as r,a1 as a}from"./framework-344bb0e4.js";const d={},u=t("h1",{id:"nushell-0-34",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-34","aria-hidden":"true"},"#"),e(" Nushell 0.34")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=t("p",null,"Today, we're releasing 0.34 of Nu. This release is the first to support dataframes and also includes a set of usability improvements.",-1),m=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f={href:"https://github.com/nushell/nushell/releases/tag/0.34.0",target:"_blank",rel:"noopener noreferrer"},g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"cargo install nu",-1),b=a(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="dataframes-elferherrera" tabindex="-1"><a class="header-anchor" href="#dataframes-elferherrera" aria-hidden="true">#</a> Dataframes (elferherrera)</h2><p>With 0.34, we&#39;ve introduced a new family of commands to work with dataframes. Dataframes are an efficient way of working with large datasets by storing data as columns and offering a set of operations over them.</p><p>To create a dataframe, you can use the <code>dataframe open</code> command and pass it a source file to load. This command currently supports CSV and parquet files.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let df = (dataframe open .\\Data7602DescendingYearOrder.csv)
</code></pre></div><p>Once loaded, there are a variety of commands you can use to interact with the dataframe (you can get the full list with <code>dataframe --help</code>). For example, to see the first few rows of the dataframe we just loaded, we can use <code>dataframe first</code>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $df | dataframe first

───┬──────────┬─────────┬──────┬───────────┬──────────
 # │ anzsic06 │  Area   │ year │ geo_count │ ec_count
───┼──────────┼─────────┼──────┼───────────┼──────────
 0 │ A        │ A100100 │ 2000 │        96 │      130
 1 │ A        │ A100200 │ 2000 │       198 │      110
 2 │ A        │ A100300 │ 2000 │        42 │       25
 3 │ A        │ A100400 │ 2000 │        66 │       40
 4 │ A        │ A100500 │ 2000 │        63 │       40
───┴──────────┴─────────┴──────┴───────────┴──────────
</code></pre></div><p>Where dataframes really shine is their performance.</p><p>For example, the above dataset is 5 columns and ~5.5 million rows of data. We&#39;re able to process group it by the year column, sum the results, and display it to the user in 557ms:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># process.nu
let df = (dataframe open Data7602DescendingYearOrder.csv)
let res = ($df | dataframe group-by year | dataframe aggregate sum | dataframe select geo_count)
$res
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; benchmark {source process.nu}

───┬───────────────────
 # │     real time
───┼───────────────────
 0 │ 557ms 658us 500ns
───┴───────────────────
</code></pre></div><p>By comparison, here&#39;s the same example in pandas:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>import pandas as pd

df = pd.read_csv(&quot;Data7602DescendingYearOrder.csv&quot;)
res = df.groupby(&quot;year&quot;)[&quot;geo_count&quot;].sum()
print(res)
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; benchmark {python .\\load.py}

───┬────────────────────────
 # │       real time
───┼────────────────────────
 0 │ 1sec 966ms 954us 800ns
───┴────────────────────────
</code></pre></div><blockquote><p>System Details: The benchmarks presented in this section were run using a machine with a processor Intel(R) Core(TM) i7-10710U (CPU @1.10GHz 1.61 GHz) and 16 gb of RAM.</p></blockquote><p>While these results are still early, we&#39;re excited to see what can be possible using Nushell for processing large datasets.</p>`,19),w={href:"https://www.nushell.sh/book/dataframes.html",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>Note: while all the dataframe functionality is currently grouped behind the <code>dataframe</code> top-level command, we hope to extend support for dataframes to other common Nushell commands.</p><h2 id="improved-multiline-support-jt" tabindex="-1"><a class="header-anchor" href="#improved-multiline-support-jt" aria-hidden="true">#</a> Improved multiline support (jt)</h2><p>We&#39;ve extended multiline expression support to more areas. Now, you can span tables over multiple lines more naturally:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>[
  [name, value];
  [foo, 2]
  [bar, 7]
]
</code></pre></div><p>Subexpression now also span multiple lines. Everything inside of the parentheses are treated as if they were written together:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(echo foo
| str length)
</code></pre></div><p>This also gives you a way to split up commands that have many arguments over multiple lines:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(echo foo
bar)
</code></pre></div><h2 id="multiple-shorthand-environment-vars-jt" tabindex="-1"><a class="header-anchor" href="#multiple-shorthand-environment-vars-jt" aria-hidden="true">#</a> Multiple shorthand environment vars (jt)</h2><p>A long-time shortcoming is now fixed in 0.34. You can now pass multiple environment shorthands to the same command:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; FOO=bar BAR=baz $nu.env.FOO + $nu.env.BAR
barbaz
</code></pre></div><h2 id="variable-completions-andrasio" tabindex="-1"><a class="header-anchor" href="#variable-completions-andrasio" aria-hidden="true">#</a> Variable completions (andrasio)</h2><p>In addition to steadily improving the completion engine, we&#39;ve started adding support for completions for built-in variables.</p><p>You can now write <code>$nu.&lt;TAB&gt;</code> to complete into the built-in <code>$nu</code> variable, including completions for <code>$nu.env.S&lt;TAB&gt;</code> for completing into environment variables.</p><p>Other variables that are in scope can also have their names completed.</p><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2>`,16),v={href:"https://github.com/nushell/nushell/pull/3670",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"pathvar",-1),y={href:"https://github.com/nushell/nushell/pull/3694",target:"_blank",rel:"noopener noreferrer"},A=t("code",null,"paste",-1),N={href:"https://github.com/nushell/nushell/pull/3720",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"$nu.lang",-1),q=t("h2",{id:"additional-improvements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),e(" Additional improvements")],-1),T={href:"https://github.com/nushell/nushell/pull/3758",target:"_blank",rel:"noopener noreferrer"},D=t("code",null,"into binary",-1),I={href:"https://github.com/nushell/nushell/pull/3754",target:"_blank",rel:"noopener noreferrer"},R=t("code",null,"uniq",-1),W={href:"https://github.com/nushell/nushell/pull/3751",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/nushell/nushell/pull/3750",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"$nothing",-1),B={href:"https://github.com/nushell/nushell/pull/3749",target:"_blank",rel:"noopener noreferrer"},U=t("code",null,"version",-1),z={href:"https://github.com/nushell/nushell/pull/3745",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/nushell/nushell/pull/3740",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/nushell/nushell/pull/3732",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/nushell/nushell/pull/3723",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/nushell/nushell/pull/3724",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/nushell/nushell/pull/3739",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/nushell/nushell/pull/3741",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/nushell/nushell/pull/3757",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/nushell/nushell/pull/3722",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/nushell/nushell/pull/3717",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/nushell/nushell/pull/3713",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/nushell/nushell/pull/3712",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/nushell/nushell/pull/3709",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/nushell/nushell/pull/3716",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/nushell/nushell/pull/3702",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/nushell/nushell/pull/3697",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/nushell/nushell/pull/3696",target:"_blank",rel:"noopener noreferrer"},ee=t("code",null,"str trim",-1),te={href:"https://github.com/nushell/nushell/pull/3690",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://github.com/nushell/nushell/pull/3753",target:"_blank",rel:"noopener noreferrer"},re={href:"https://github.com/nushell/nushell/pull/3688",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/nushell/nushell/pull/3686",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/nushell/nushell/pull/3684",target:"_blank",rel:"noopener noreferrer"},le={href:"https://github.com/nushell/nushell/pull/3683",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/nushell/nushell/pull/3681",target:"_blank",rel:"noopener noreferrer"},ie=t("code",null,"def",-1),he={href:"https://github.com/nushell/nushell/pull/3680",target:"_blank",rel:"noopener noreferrer"},de={href:"https://github.com/nushell/nushell/pull/3678",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://github.com/nushell/nushell/pull/3675",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://github.com/nushell/nushell/pull/3673",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/nushell/nushell/pull/3669",target:"_blank",rel:"noopener noreferrer"},me=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),fe={href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"},_e=t("p",null,"Dataframe support continues to grow, and we're continuing to collaborate with projects that this builds on to ensure we are using the best techniques possible. There's a lot of potential here not only in terms of using dataframes, but where the Apache Arrow support might allow us to grow additional functionality in the future.",-1);function be(we,xe){const n=l("ExternalLinkIcon");return s(),i("div",null,[u,c,p,h(" more "),m,t("p",null,[e("Nu 0.34 is available as "),t("a",f,[e("pre-built binaries"),r(n)]),e(" or from "),t("a",g,[e("crates.io"),r(n)]),e(". If you have Rust installed you can install it using "),_,e(".")]),b,t("p",null,[e("You can learn more about dataframes, including many examples and a much more in-depth explanation, by reading the new "),t("a",w,[e("dataframes chapter of the Nushell book"),r(n)]),e(".")]),x,t("ul",null,[t("li",null,[e("Added the "),t("a",v,[k,e(" command for updating the PATH"),r(n)]),e(" (nathom)")]),t("li",null,[e("Added a "),t("a",y,[A,e(" command for pasting from clipboard"),r(n)]),e(" (1ntEgr8)")]),t("li",null,[e("Added "),t("a",N,[j,e(" to reflect on the current commands"),r(n)]),e(" (fdncred)")])]),q,t("ul",null,[t("li",null,[e("Updated "),t("a",T,[D,e(" to be more composable"),r(n)]),e(" (fdncred)")]),t("li",null,[e("Added "),t("a",I,[e("unique option to "),R,r(n)]),e(" (mcbattirola)")]),t("li",null,[e("Removed an "),t("a",W,[e("outdated README note"),r(n)]),e(" (yaymukund)")]),t("li",null,[e("Added more "),t("a",$,[e("comparison coercions with "),O,r(n)]),e(" (jt)")]),t("li",null,[e("Updated the "),t("a",B,[U,e(" command to output more info"),r(n)]),e(" (fdncred)")]),t("li",null,[e("Fixed a "),t("a",z,[e("broken unit test"),r(n)]),e(" (fdncred)")]),t("li",null,[e("Downgraded "),t("a",E,[e("crossterm to fix pager compilation"),r(n)]),e(" (kubouch)")]),t("li",null,[e("Removed "),t("a",F,[e("unused crate features"),r(n)]),e(" (waywardmonkeys)")]),t("li",null,[e("Updated a few "),t("a",S,[e("dependencies"),r(n)]),e(" and "),t("a",V,[e("here"),r(n)]),e(" and "),t("a",M,[e("here"),r(n)]),e(" and "),t("a",Y,[e("here"),r(n)]),e(" and "),t("a",C,[e("here"),r(n)]),e(" (therealprof, waywardmonkeys)")]),t("li",null,[e("Added "),t("a",L,[e("dataframe take command"),r(n)]),e(" (elferherrera)")]),t("li",null,[e("Added "),t("a",P,[e("script to submit winget package during release"),r(n)]),e(" (TechWatching)")]),t("li",null,[e("Aligned "),t("a",H,[e("dataframe params to match other Nushell commands"),r(n)]),e(" (elferherrera)")]),t("li",null,[e("Added the "),t("a",G,[e("ansi osc string terminator"),r(n)]),e(" (fdncred)")]),t("li",null,[e("Removed "),t("a",Q,[e("unused dependencies"),r(n)]),e(" and "),t("a",J,[e("also"),r(n)]),e(" (waywardmonkeys, andrasio)")]),t("li",null,[e("Added "),t("a",K,[e("casting operations for Series data"),r(n)]),e(" (elferherrera)")]),t("li",null,[e("Fixed a "),t("a",X,[e("dataframe series bug with f64"),r(n)]),e(" (elferherrera)")]),t("li",null,[e("Added "),t("a",Z,[e("all-trim option to "),ee,r(n)]),e(" (palashahuja)")]),t("li",null,[e("Ported more commands to engine-p "),t("a",te,[e("1"),r(n)]),e(" and "),t("a",ne,[e("2"),r(n)]),e(" (efx)")]),t("li",null,[e("Added support for "),t("a",re,[e("arbitrarily nested subcommands"),r(n)]),e(" (jt)")]),t("li",null,[e("Added support for "),t("a",ae,[e("string interpolation when calling externals"),r(n)]),e(" (voanhduy1512)")]),t("li",null,[e("Made "),t("a",oe,[e("URL docs more consistent"),r(n)]),e(" (efx)")]),t("li",null,[e("Speed up "),t("a",le,[e("dataframe loading"),r(n)]),e(" (elferherrera)")]),t("li",null,[e("Improved "),t("a",se,[e("parse errors for "),ie,r(n)]),e(" (jt)")]),t("li",null,[e("Updated textview to "),t("a",he,[e("always read its input from the stream"),r(n)]),e(" (jt)")]),t("li",null,[e("Dataframe aggregation uses "),t("a",de,[e("simpler column names"),r(n)]),e(" (elferherrera)")]),t("li",null,[e("Add support for more "),t("a",ue,[e("filesize to filesize math"),r(n)]),e(" (fdncred)")]),t("li",null,[e("Updated the Nu API surface to "),t("a",ce,[e("expose more useful functionality"),r(n)]),e(" (stormasm)")]),t("li",null,[e("Fixed a "),t("a",pe,[e("panic during math with large durations"),r(n)]),e(" (luccasmmg)")])]),me,t("p",null,[e("Work on "),t("a",fe,[e("reedline"),r(n)]),e(" has steadily grown in the background, and is now nearing the time where we will explore integrating it into Nushell as Nushell's line editor.")]),t("p",null,[e("We're also working on a number of "),t("a",ge,[e("parser and engine improvements"),r(n)]),e(" which we hope will make their way into future version of Nushell.")]),_e])}const ke=o(d,[["render",be],["__file","2021-07-13-nushell_0_34.html.vue"]]);export{ke as default};
