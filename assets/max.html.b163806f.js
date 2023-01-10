import{_ as o,z as p,A as c,X as a,C as s,D as t,a6 as e}from"./framework.3d018c9f.js";const r={},i={id:"frontmatter-title-for-expression",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=e(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; max </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Max aggregation for a group-by</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">(</span>col b <span class="token operator">|</span> max<span class="token punctuation">)</span>
</code></pre></div>`,5),h={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),k={class:"command-title"},f=e(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; max </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Max value from columns in a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> max
</code></pre></div>`,5);function g(n,x){return p(),c("div",null,[a("h1",i,[l,s(),a("code",null,t(n.$frontmatter.title),1),s(" for expression")]),a("div",u,t(n.$frontmatter.expression),1),d,a("h1",h,[m,s(),a("code",null,t(n.$frontmatter.title),1),s(" for lazyframe")]),a("div",k,t(n.$frontmatter.lazyframe),1),f])}const _=o(r,[["render",g],["__file","max.html.vue"]]);export{_ as default};
