import{_ as t,o as n,c as o,a,t as s,d as r,e as c}from"./app.a3b5f9cc.js";const i={},p={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi strip ...column path</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...column path</code>: optionally, remove ANSI sequences by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Strip ANSI escape sequences from a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span> <span class="token punctuation">(</span>ansi green<span class="token punctuation">)</span> <span class="token punctuation">(</span>ansi cursor_on<span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">]</span> <span class="token operator">|</span> str collect <span class="token operator">|</span> ansi strip
</code></pre></div>`,7);function _(e,m){return n(),o("div",null,[a("h1",p,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var g=t(i,[["render",_],["__file","ansi_strip.html.vue"]]);export{g as default};
