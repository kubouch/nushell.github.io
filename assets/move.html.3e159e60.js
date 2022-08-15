import{_ as s,o as t,c as o,a,t as e,d as p,e as c}from"./app.a3b5f9cc.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; move ...columns --after --before</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...columns</code>: the columns to move</li><li><code>--after {string}</code>: the column that will precede the columns moved</li><li><code>--before {string}</code>: the column that will be the next after the columns moved</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Move a column before the first column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move index --before name
</code></pre></div><p>Move multiple columns after the last column and reorder them</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move value name --after index
</code></pre></div><p>Move columns of a record</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> name: foo, value: a, index: <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token operator">|</span> move name --before index
</code></pre></div>`,11);function m(n,k){return t(),o("div",null,[a("h1",r,[u,i,a("code",null,e(n.$frontmatter.title),1)]),a("div",d,e(n.$frontmatter.usage),1),h])}var b=s(l,[["render",m],["__file","move.html.vue"]]);export{b as default};
