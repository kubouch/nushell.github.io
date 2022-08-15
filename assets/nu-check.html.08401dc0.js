import{_ as n,o as t,c as r,a as e,t as s,d as o,e as c}from"./app.a3b5f9cc.js";const p={},l={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; nu-check (path) --as-module --debug --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: File path to parse</li><li><code>--as-module</code>: Parse content as module</li><li><code>--debug</code>: Show error messages</li><li><code>--all</code>: Parse content as script first, returns result if success, otherwise, try with module</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a input file as script(Default)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check script.nu
</code></pre></div><p>Parse a input file as module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check --as-module module.nu
</code></pre></div><p>Parse a input file by showing error message</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check -d script.nu
</code></pre></div><p>Parse an external stream as script by showing error message</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.nu <span class="token operator">|</span> nu-check -d script.nu
</code></pre></div><p>Parse an internal stream as module by showing error message</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> module.nu <span class="token operator">|</span> lines <span class="token operator">|</span> nu-check -d --as-module module.nu
</code></pre></div><p>Parse a string as script</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;two(char nl)lines&#39;</span> <span class="token operator">|</span> nu-check
</code></pre></div><p>Heuristically parse which begins with script first, if it sees a failure, try module afterwards</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check -a script.nu
</code></pre></div><p>Heuristically parse by showing error message</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.nu <span class="token operator">|</span> lines <span class="token operator">|</span> nu-check -ad
</code></pre></div>`,21);function g(a,m){return t(),r("div",null,[e("h1",l,[i,d,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var f=n(p,[["render",g],["__file","nu-check.html.vue"]]);export{f as default};
