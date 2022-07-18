import{_ as s,o as n,c as o,a,t,d as r,e as p}from"./app.a5cac4f6.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),d={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to parquet (file)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>file</code>: file path to save dataframe</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Saves dataframe to parquet file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> to parquet test.parquet
</code></pre></div>`,7);function _(e,f){return n(),o("div",null,[a("h1",i,[l,u,a("code",null,t(e.$frontmatter.title),1)]),a("div",d,t(e.$frontmatter.usage),1),h])}var k=s(c,[["render",_],["__file","_to_parquet.html.vue"]]);export{k as default};
