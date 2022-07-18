import{_ as r,o as a,c as l,a as t,b as n,d as e,e as s,r as i}from"./app.a5cac4f6.js";const h={},d=t("h1",{id:"nushell-0-34",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-34","aria-hidden":"true"},"#"),e(" Nushell 0.34")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing 0.34 of Nu. This release is the first to support dataframes and also includes a set of usability improvements.",-1),_=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),p=e("Nu 0.34 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0.34.0",target:"_blank",rel:"noopener noreferrer"},f=e("pre-built binaries"),g=e(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("crates.io"),v=e(". If you have Rust installed you can install it using "),x=t("code",null,"cargo install nu",-1),k=e("."),y=s(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="dataframes-elferherrera" tabindex="-1"><a class="header-anchor" href="#dataframes-elferherrera" aria-hidden="true">#</a> Dataframes (elferherrera)</h2><p>With 0.34, we&#39;ve introduced a new family of commands to work with dataframes. Dataframes are an efficient way of working with large datasets by storing data as columns and offering a set of operations over them.</p><p>To create a dataframe, you can use the <code>dataframe open</code> command and pass it a source file to load. This command currently supports CSV and parquet files.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let df = (dataframe open .\\Data7602DescendingYearOrder.csv)
</code></pre></div><p>Once loaded, there are a variety of commands you can use to interact with the dataframe (you can get the full list with <code>dataframe --help</code>). For example, to see the first few rows of the dataframe we just loaded, we can use <code>dataframe first</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $df | dataframe first

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 anzsic06 \u2502  Area   \u2502 year \u2502 geo_count \u2502 ec_count
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 A        \u2502 A100100 \u2502 2000 \u2502        96 \u2502      130
 1 \u2502 A        \u2502 A100200 \u2502 2000 \u2502       198 \u2502      110
 2 \u2502 A        \u2502 A100300 \u2502 2000 \u2502        42 \u2502       25
 3 \u2502 A        \u2502 A100400 \u2502 2000 \u2502        66 \u2502       40
 4 \u2502 A        \u2502 A100500 \u2502 2000 \u2502        63 \u2502       40
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Where dataframes really shine is their performance.</p><p>For example, the above dataset is 5 columns and ~5.5 million rows of data. We&#39;re able to process group it by the year column, sum the results, and display it to the user in 557ms:</p><div class="language-text ext-text"><pre class="language-text"><code># process.nu
let df = (dataframe open Data7602DescendingYearOrder.csv)
let res = ($df | dataframe group-by year | dataframe aggregate sum | dataframe select geo_count)
$res
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; benchmark {source process.nu}

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502     real time
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 557ms 658us 500ns
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>By comparison, here&#39;s the same example in pandas:</p><div class="language-text ext-text"><pre class="language-text"><code>import pandas as pd

df = pd.read_csv(&quot;Data7602DescendingYearOrder.csv&quot;)
res = df.groupby(&quot;year&quot;)[&quot;geo_count&quot;].sum()
print(res)
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; benchmark {python .\\load.py}

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502       real time
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 1sec 966ms 954us 800ns
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><blockquote><p>System Details: The benchmarks presented in this section were run using a machine with a processor Intel(R) Core(TM) i7-10710U (CPU @1.10GHz 1.61 GHz) and 16 gb of RAM.</p></blockquote><p>While these results are still early, we&#39;re excited to see what can be possible using Nushell for processing large datasets.</p>`,19),A=e("You can learn more about dataframes, including many examples and a much more in-depth explanation, by reading the new "),N={href:"https://www.nushell.sh/book/dataframes.html",target:"_blank",rel:"noopener noreferrer"},j=e("dataframes chapter of the Nushell book"),T=e("."),q=s(`<p>Note: while all the dataframe functionality is currently grouped behind the <code>dataframe</code> top-level command, we hope to extend support for dataframes to other common Nushell commands.</p><h2 id="improved-multiline-support-jt" tabindex="-1"><a class="header-anchor" href="#improved-multiline-support-jt" aria-hidden="true">#</a> Improved multiline support (jt)</h2><p>We&#39;ve extended multiline expression support to more areas. Now, you can span tables over multiple lines more naturally:</p><div class="language-text ext-text"><pre class="language-text"><code>[
  [name, value];
  [foo, 2]
  [bar, 7]
]
</code></pre></div><p>Subexpression now also span multiple lines. Everything inside of the parentheses are treated as if they were written together:</p><div class="language-text ext-text"><pre class="language-text"><code>(echo foo
| str length)
</code></pre></div><p>This also gives you a way to split up commands that have many arguments over multiple lines:</p><div class="language-text ext-text"><pre class="language-text"><code>(echo foo
bar)
</code></pre></div><h2 id="multiple-shorthand-environment-vars-jt" tabindex="-1"><a class="header-anchor" href="#multiple-shorthand-environment-vars-jt" aria-hidden="true">#</a> Multiple shorthand environment vars (jt)</h2><p>A long-time shortcoming is now fixed in 0.34. You can now pass multiple environment shorthands to the same command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; FOO=bar BAR=baz $nu.env.FOO + $nu.env.BAR
barbaz
</code></pre></div><h2 id="variable-completions-andrasio" tabindex="-1"><a class="header-anchor" href="#variable-completions-andrasio" aria-hidden="true">#</a> Variable completions (andrasio)</h2><p>In addition to steadily improving the completion engine, we&#39;ve started adding support for completions for built-in variables.</p><p>You can now write <code>$nu.&lt;TAB&gt;</code> to complete into the built-in <code>$nu</code> variable, including completions for <code>$nu.env.S&lt;TAB&gt;</code> for completing into environment variables.</p><p>Other variables that are in scope can also have their names completed.</p><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2>`,16),D=e("Added the "),I={href:"https://github.com/nushell/nushell/pull/3670",target:"_blank",rel:"noopener noreferrer"},R=t("code",null,"pathvar",-1),W=e(" command for updating the PATH"),$=e(" (nathom)"),O=e("Added a "),B={href:"https://github.com/nushell/nushell/pull/3694",target:"_blank",rel:"noopener noreferrer"},U=t("code",null,"paste",-1),z=e(" command for pasting from clipboard"),E=e(" (1ntEgr8)"),F=e("Added "),S={href:"https://github.com/nushell/nushell/pull/3720",target:"_blank",rel:"noopener noreferrer"},V=t("code",null,"$nu.lang",-1),Y=e(" to reflect on the current commands"),M=e(" (fdncred)"),C=t("h2",{id:"additional-improvements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),e(" Additional improvements")],-1),L=e("Updated "),P={href:"https://github.com/nushell/nushell/pull/3758",target:"_blank",rel:"noopener noreferrer"},H=t("code",null,"into binary",-1),G=e(" to be more composable"),J=e(" (fdncred)"),K=e("Added "),Q={href:"https://github.com/nushell/nushell/pull/3754",target:"_blank",rel:"noopener noreferrer"},X=e("unique option to "),Z=t("code",null,"uniq",-1),ee=e(" (mcbattirola)"),te=e("Removed an "),oe={href:"https://github.com/nushell/nushell/pull/3751",target:"_blank",rel:"noopener noreferrer"},ne=e("outdated README note"),se=e(" (yaymukund)"),re=e("Added more "),ae={href:"https://github.com/nushell/nushell/pull/3750",target:"_blank",rel:"noopener noreferrer"},le=e("comparsion coercions with "),ie=t("code",null,"$nothing",-1),he=e(" (jt)"),de=e("Updated the "),ce={href:"https://github.com/nushell/nushell/pull/3749",target:"_blank",rel:"noopener noreferrer"},ue=t("code",null,"version",-1),_e=e(" command to output more info"),pe=e(" (fdncred)"),me=e("Fixed a "),fe={href:"https://github.com/nushell/nushell/pull/3745",target:"_blank",rel:"noopener noreferrer"},ge=e("broken unit test"),be=e(" (fdncred)"),we=e("Downgraded "),ve={href:"https://github.com/nushell/nushell/pull/3740",target:"_blank",rel:"noopener noreferrer"},xe=e("crossterm to fix pager compilation"),ke=e(" (kubouch)"),ye=e("Removed "),Ae={href:"https://github.com/nushell/nushell/pull/3732",target:"_blank",rel:"noopener noreferrer"},Ne=e("unused crate features"),je=e(" (waywardmonkeys)"),Te=e("Updated a few "),qe={href:"https://github.com/nushell/nushell/pull/3723",target:"_blank",rel:"noopener noreferrer"},De=e("dependencies"),Ie=e(" and "),Re={href:"https://github.com/nushell/nushell/pull/3724",target:"_blank",rel:"noopener noreferrer"},We=e("here"),$e=e(" and "),Oe={href:"https://github.com/nushell/nushell/pull/3739",target:"_blank",rel:"noopener noreferrer"},Be=e("here"),Ue=e(" and "),ze={href:"https://github.com/nushell/nushell/pull/3741",target:"_blank",rel:"noopener noreferrer"},Ee=e("here"),Fe=e(" and "),Se={href:"https://github.com/nushell/nushell/pull/3757",target:"_blank",rel:"noopener noreferrer"},Ve=e("here"),Ye=e(" (therealprof, waywardmonkeys)"),Me=e("Added "),Ce={href:"https://github.com/nushell/nushell/pull/3722",target:"_blank",rel:"noopener noreferrer"},Le=e("dataframe take command"),Pe=e(" (elferherrera)"),He=e("Added "),Ge={href:"https://github.com/nushell/nushell/pull/3717",target:"_blank",rel:"noopener noreferrer"},Je=e("script to submit winget package during release"),Ke=e(" (TechWatching)"),Qe=e("Aligned "),Xe={href:"https://github.com/nushell/nushell/pull/3713",target:"_blank",rel:"noopener noreferrer"},Ze=e("dataframe params to match other Nushell commands"),et=e(" (elferherrera)"),tt=e("Added the "),ot={href:"https://github.com/nushell/nushell/pull/3712",target:"_blank",rel:"noopener noreferrer"},nt=e("ansi osc string terminator"),st=e(" (fdncred)"),rt=e("Removed "),at={href:"https://github.com/nushell/nushell/pull/3709",target:"_blank",rel:"noopener noreferrer"},lt=e("unused dependencies"),it=e(" and "),ht={href:"https://github.com/nushell/nushell/pull/3716",target:"_blank",rel:"noopener noreferrer"},dt=e("also"),ct=e(" (waywardmonkeys, andrasio)"),ut=e("Added "),_t={href:"https://github.com/nushell/nushell/pull/3702",target:"_blank",rel:"noopener noreferrer"},pt=e("casting operations for Series data"),mt=e(" (elferherrera)"),ft=e("Fixed a "),gt={href:"https://github.com/nushell/nushell/pull/3697",target:"_blank",rel:"noopener noreferrer"},bt=e("dataframe series bug with f64"),wt=e(" (elferherrera)"),vt=e("Added "),xt={href:"https://github.com/nushell/nushell/pull/3696",target:"_blank",rel:"noopener noreferrer"},kt=e("all-trim option to "),yt=t("code",null,"str trim",-1),At=e(" (palashahuja)"),Nt=e("Ported more commands to engine-p "),jt={href:"https://github.com/nushell/nushell/pull/3690",target:"_blank",rel:"noopener noreferrer"},Tt=e("1"),qt=e(" and "),Dt={href:"https://github.com/nushell/nushell/pull/3753",target:"_blank",rel:"noopener noreferrer"},It=e("2"),Rt=e(" (efx)"),Wt=e("Added support for "),$t={href:"https://github.com/nushell/nushell/pull/3688",target:"_blank",rel:"noopener noreferrer"},Ot=e("arbitrarily nested subcommands"),Bt=e(" (jt)"),Ut=e("Added support for "),zt={href:"https://github.com/nushell/nushell/pull/3686",target:"_blank",rel:"noopener noreferrer"},Et=e("string interpolation when calling externals"),Ft=e(" (voanhduy1512)"),St=e("Made "),Vt={href:"https://github.com/nushell/nushell/pull/3684",target:"_blank",rel:"noopener noreferrer"},Yt=e("URL docs more consistent"),Mt=e(" (efx)"),Ct=e("Speed up "),Lt={href:"https://github.com/nushell/nushell/pull/3683",target:"_blank",rel:"noopener noreferrer"},Pt=e("dataframe loading"),Ht=e(" (elferherrera)"),Gt=e("Improved "),Jt={href:"https://github.com/nushell/nushell/pull/3681",target:"_blank",rel:"noopener noreferrer"},Kt=e("parse errors for "),Qt=t("code",null,"def",-1),Xt=e(" (jt)"),Zt=e("Updated textview to "),eo={href:"https://github.com/nushell/nushell/pull/3680",target:"_blank",rel:"noopener noreferrer"},to=e("always read its input from the stream"),oo=e(" (jt)"),no=e("Dataframe aggregation uses "),so={href:"https://github.com/nushell/nushell/pull/3678",target:"_blank",rel:"noopener noreferrer"},ro=e("simpler column names"),ao=e(" (elferherrera)"),lo=e("Add support for more "),io={href:"https://github.com/nushell/nushell/pull/3675",target:"_blank",rel:"noopener noreferrer"},ho=e("filesize to filesize math"),co=e(" (fdncred)"),uo=e("Updated the Nu API surface to "),_o={href:"https://github.com/nushell/nushell/pull/3673",target:"_blank",rel:"noopener noreferrer"},po=e("expose more useful functionality"),mo=e(" (stormasm)"),fo=e("Fixed a "),go={href:"https://github.com/nushell/nushell/pull/3669",target:"_blank",rel:"noopener noreferrer"},bo=e("panic during math with large durations"),wo=e(" (luccasmmg)"),vo=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),xo=e("Work on "),ko={href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"},yo=e("reedline"),Ao=e(" has steadily grown in the background, and is now nearing the time where we will explore integrating it into Nushell as Nushell's line editor."),No=e("We're also working on a number of "),jo={href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"},To=e("parser and engine improvements"),qo=e(" which we hope will make their way into future version of Nushell."),Do=t("p",null,"Dataframe support continues to grow, and we're continuing to collaborate with projects that this builds on to ensure we are using the best techniques possible. There's a lot of potential here not only in terms of using dataframes, but where the Apache Arrow support might allow us to grow additional functionality in the future.",-1);function Io(Ro,Wo){const o=i("ExternalLinkIcon");return a(),l("div",null,[d,c,u,_,t("p",null,[p,t("a",m,[f,n(o)]),g,t("a",b,[w,n(o)]),v,x,k]),y,t("p",null,[A,t("a",N,[j,n(o)]),T]),q,t("ul",null,[t("li",null,[D,t("a",I,[R,W,n(o)]),$]),t("li",null,[O,t("a",B,[U,z,n(o)]),E]),t("li",null,[F,t("a",S,[V,Y,n(o)]),M])]),C,t("ul",null,[t("li",null,[L,t("a",P,[H,G,n(o)]),J]),t("li",null,[K,t("a",Q,[X,Z,n(o)]),ee]),t("li",null,[te,t("a",oe,[ne,n(o)]),se]),t("li",null,[re,t("a",ae,[le,ie,n(o)]),he]),t("li",null,[de,t("a",ce,[ue,_e,n(o)]),pe]),t("li",null,[me,t("a",fe,[ge,n(o)]),be]),t("li",null,[we,t("a",ve,[xe,n(o)]),ke]),t("li",null,[ye,t("a",Ae,[Ne,n(o)]),je]),t("li",null,[Te,t("a",qe,[De,n(o)]),Ie,t("a",Re,[We,n(o)]),$e,t("a",Oe,[Be,n(o)]),Ue,t("a",ze,[Ee,n(o)]),Fe,t("a",Se,[Ve,n(o)]),Ye]),t("li",null,[Me,t("a",Ce,[Le,n(o)]),Pe]),t("li",null,[He,t("a",Ge,[Je,n(o)]),Ke]),t("li",null,[Qe,t("a",Xe,[Ze,n(o)]),et]),t("li",null,[tt,t("a",ot,[nt,n(o)]),st]),t("li",null,[rt,t("a",at,[lt,n(o)]),it,t("a",ht,[dt,n(o)]),ct]),t("li",null,[ut,t("a",_t,[pt,n(o)]),mt]),t("li",null,[ft,t("a",gt,[bt,n(o)]),wt]),t("li",null,[vt,t("a",xt,[kt,yt,n(o)]),At]),t("li",null,[Nt,t("a",jt,[Tt,n(o)]),qt,t("a",Dt,[It,n(o)]),Rt]),t("li",null,[Wt,t("a",$t,[Ot,n(o)]),Bt]),t("li",null,[Ut,t("a",zt,[Et,n(o)]),Ft]),t("li",null,[St,t("a",Vt,[Yt,n(o)]),Mt]),t("li",null,[Ct,t("a",Lt,[Pt,n(o)]),Ht]),t("li",null,[Gt,t("a",Jt,[Kt,Qt,n(o)]),Xt]),t("li",null,[Zt,t("a",eo,[to,n(o)]),oo]),t("li",null,[no,t("a",so,[ro,n(o)]),ao]),t("li",null,[lo,t("a",io,[ho,n(o)]),co]),t("li",null,[uo,t("a",_o,[po,n(o)]),mo]),t("li",null,[fo,t("a",go,[bo,n(o)]),wo])]),vo,t("p",null,[xo,t("a",ko,[yo,n(o)]),Ao]),t("p",null,[No,t("a",jo,[To,n(o)]),qo]),Do])}var Oo=r(h,[["render",Io],["__file","2021-07-13-nushell_0_34.html.vue"]]);export{Oo as default};
