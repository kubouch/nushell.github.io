import{_ as s,o as t,c as o,a,t as n,d as r,e as c}from"./app.a3b5f9cc.js";const p={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop column (columns)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>columns</code>: starting from the end, the number of columns to remove</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove the last column of a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lib, extension<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu-lib, rs<span class="token punctuation">]</span> <span class="token punctuation">[</span>nu-core, rb<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token function">column</span>
</code></pre></div>`,7);function m(e,_){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,n(e.$frontmatter.title),1)]),a("div",d,n(e.$frontmatter.usage),1),h])}var k=s(p,[["render",m],["__file","drop_column.html.vue"]]);export{k as default};
