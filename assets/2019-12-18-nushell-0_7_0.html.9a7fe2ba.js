import{_ as i,z as l,A as u,X as e,C as t,T as a,$ as h,a6 as s,Q as o}from"./framework.3d018c9f.js";const d={},c=e("h1",{id:"nushell-0-7-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-7-0","aria-hidden":"true"},"#"),t(" Nushell 0.7.0")],-1),p=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),g=e("p",null,"We're happy to announce the 0.7.0 release of Nu. This release has a couple new features, bugfixes, and lots of internal improvements on the way to upcoming features.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f={href:"https://github.com/nushell/nushell/releases/tag/0.7.0",target:"_blank",rel:"noopener noreferrer"},b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"cargo install nu",-1),_=e("code",null,"cargo install nu --features=stable",-1),y=s(`<h1 id="ranges-wycats-sebastian-xyz" tabindex="-1"><a class="header-anchor" href="#ranges-wycats-sebastian-xyz" aria-hidden="true">#</a> Ranges (wycats, sebastian-xyz)</h1><p>We&#39;ve added ranges as new fundamental type in Nu. To use it, use <code>&lt;number&gt;..&lt;number&gt;</code>. Currently, you can use it with the new <code>range</code> command, which lets you do commands like:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>ls | range 3..5
</code></pre></div><p>And return rows 3 through 5 of the table that <code>ls</code> gives you.</p><h1 id="autocomplete-improvements-jonathandturner" tabindex="-1"><a class="header-anchor" href="#autocomplete-improvements-jonathandturner" aria-hidden="true">#</a> Autocomplete improvements (jonathandturner)</h1><p>As we improve the parser, we are getting more opportunities to do more with the results. One feature we added recently is the ability to autocomplete flags for internal commands.</p><p>For example, if you want to see what&#39;s available for the <code>config</code> command, you can now type <code>config --</code> and then immediately use the <code>&lt;tab&gt;</code> key to cycle through possible options.</p><h1 id="nu-becomes-multiple-crates-wycats-jonathandturner" tabindex="-1"><a class="header-anchor" href="#nu-becomes-multiple-crates-wycats-jonathandturner" aria-hidden="true">#</a> Nu becomes multiple crates (wycats, jonathandturner)</h1><p>Part of a big effort to get Nu ready for script support is to refactor the current codebase to make it cleaner and easier to work with.</p><p>For the last few weeks, a big part of this refactor involved splitting our growing monolith of a codebase into separate sub-crates that work together to give the same functionality. As we&#39;ve done so, we&#39;ve been able to clean up some of the interfaces between the code. The end result is something that already is easier to work with, and we&#39;re excited about what this means for future development.</p><p>One side effect of this work is that we&#39;ve now separated out the plugins from the main <code>nu</code> crate. This gives you more options to configure your Nu setup how you want, as each optional crate can be separately installed.</p><p>From cargo, you can install the main crate with:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cargo install nu
</code></pre></div><p>Then, you can install the plugins the same way. You can find them because they have a name starting with <code>nu_plugin_</code>. For example, to install the textview plugin:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cargo install nu_plugin_textview
</code></pre></div><p>The current set of plugins includes:</p><ul><li>nu_plugin_average</li><li>nu_plugin_binaryview</li><li>nu_plugin_fetch</li><li>nu_plugin_inc</li><li>nu_plugin_match</li><li>nu_plugin_post</li><li>nu_plugin_ps</li><li>nu_plugin_str</li><li>nu_plugin_sum</li><li>nu_plugin_sys</li><li>nu_plugin_textview</li><li>nu_plugin_tree</li></ul><p>By default, Nu will install a small set of these plugins (&quot;sys&quot;, &quot;ps&quot;, &quot;textview&quot;, &quot;inc&quot;, &quot;str&quot;). You can optionally turn this off using:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cargo install nu --no-default-features
</code></pre></div><h1 id="introducing-stable-and-unstable-features" tabindex="-1"><a class="header-anchor" href="#introducing-stable-and-unstable-features" aria-hidden="true">#</a> Introducing: stable and unstable features</h1><p>Another part of the current refactor work is that we&#39;re splitting the &quot;stable&quot; and &quot;unstable&quot; features up. This lets us experiment a bit easier before a command becomes a stable part of the releases.</p><p>Now, to install all the stable features, you can use:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cargo install nu --features=stable
</code></pre></div><p>If you want to get both stable <em>and</em> unstable features, use:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cargo install nu --all-features
</code></pre></div><p>Warning: unless you&#39;re working on Nu itself you may not want to install all features currently, as you&#39;ll see that we&#39;re working on an internal tracing tool.</p><h1 id="moving-the-book-s-sebastian-xyz" tabindex="-1"><a class="header-anchor" href="#moving-the-book-s-sebastian-xyz" aria-hidden="true">#</a> Moving the book(s) (sebastian-xyz)</h1><p>We&#39;ve been hard at working building up the websites. In the previous release, we talked about &quot;nushell.sh&quot; and the new website there. Since then, we&#39;ve consolidated the books into the new website. Please update your book links to point to the new site:</p>`,28),x={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.nushell.sh/contributor-book/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.nushell.sh/cookbook/",target:"_blank",rel:"noopener noreferrer"},N=s(`<h1 id="command-improvements" tabindex="-1"><a class="header-anchor" href="#command-improvements" aria-hidden="true">#</a> Command improvements</h1><h2 id="embed-wrap-jonathandturner-andrasio" tabindex="-1"><a class="header-anchor" href="#embed-wrap-jonathandturner-andrasio" aria-hidden="true">#</a> Embed -&gt; Wrap (jonathandturner, andrasio)</h2><p>For better readability, we&#39;ve renamed the <code>embed</code> command to <code>wrap</code>. As the name implies, you can now <code>wrap</code> one table with another. You can also use <code>wrap</code> to create a table from a stream of values.</p><p>For example, you may have a list of strings you want to turn into a table:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | get name
────┬────────────────────
 #  │ &lt;value&gt;
────┼────────────────────
  0 │ target
  1 │ CODE_OF_CONDUCT.md
  2 │ .cargo
  3 │ src
  4 │ features.toml
  5 │ TODO.md
</code></pre></div><p>We can now name this table using <code>wrap</code>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | get name | wrap filename
────┬────────────────────
 #  │ filename
────┼────────────────────
  0 │ target
  1 │ CODE_OF_CONDUCT.md
  2 │ .cargo
  3 │ src
  4 │ features.toml
  5 │ TODO.md
</code></pre></div><h1 id="internal-improvements-wycats-jonathandturner-thibran-thegedge" tabindex="-1"><a class="header-anchor" href="#internal-improvements-wycats-jonathandturner-thibran-thegedge" aria-hidden="true">#</a> Internal improvements (wycats, jonathandturner, thibran, thegedge)</h1><p>Though not visible as additional new features, a group of us has been at work refactoring and cleaning up Nu&#39;s internals. This should help us both fix some long-standing bugs as well as make way for new features in the future.</p><p>We&#39;ve also internally introduced a new &quot;line&quot; type, which represents strings that carry a line ending with them. This helps us more easily traffic string data through the system and know how best to output it at the end of the pipeline.</p><h1 id="bugfixes" tabindex="-1"><a class="header-anchor" href="#bugfixes" aria-hidden="true">#</a> Bugfixes</h1><p>Of course, with each release, there are the usual bugfixes. We&#39;ve improved tilde expansion (naufraghi), how internal pipelines are handled (thegedge), and more.</p><h1 id="improved-docs-tchak-coolshaurya-sebastian-xyz" tabindex="-1"><a class="header-anchor" href="#improved-docs-tchak-coolshaurya-sebastian-xyz" aria-hidden="true">#</a> Improved docs (tchak, coolshaurya, sebastian-xyz)</h1>`,13),q=e("h1",{id:"what-s-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-next","aria-hidden":"true"},"#"),t(" What's next?")],-1),T=e("p",null,"You might have noticed that with 0.7.0, we're seemingly getting close to 1.0. What happens after 0.9.0? Are we going to take the leap?",-1),O=e("p",null,"In short, not just yet. After 0.9.0, we'll release 0.10.0. Nu is maturing, but it isn't quite ready for the big One-Point-Oh. We'll continue maturing it until it's ready to make the move.",-1);function j(C,W){const n=o("ExternalLinkIcon"),r=o("RouterLink");return l(),u("div",null,[c,p,g,m,e("p",null,[t("Nu 0.7.0 is available as "),e("a",f,[t("pre-built binaries"),a(n)]),t(" or from "),e("a",b,[t("crates.io"),a(n)]),t(". If you have Rust installed you can install it using "),w,t(" (or if you want all stable features "),_,t(").")]),y,e("ul",null,[e("li",null,[t("Nu book - "),e("a",x,[t("nushell.sh/book"),a(n)])]),e("li",null,[t("Contributor book - "),e("a",v,[t("nushell.sh/contributor-book"),a(n)])]),e("li",null,[t("Cookbook (in-progress) - "),e("a",k,[t("nushell.sh/cookbook"),a(n)])])]),N,e("p",null,[t(`A big "thank you!" for folks continuing to work on the on-going command documentation efforts. Already, we're seeing people `),a(r,{to:"/book/command_reference.html"},{default:h(()=>[t("read about the commands")]),_:1}),t(" on the new website to help them learn Nu, which is great!")]),q,T,O])}const z=i(d,[["render",j],["__file","2019-12-18-nushell-0_7_0.html.vue"]]);export{z as default};
