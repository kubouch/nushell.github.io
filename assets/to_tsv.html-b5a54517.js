import{_ as n,p as o,q as r,Q as a,t,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to tsv --noheaders</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code>: do not output the column names as the first row</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an TSV string representing the contents of this table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to tsv
</code></pre></div><p>Outputs an TSV string representing the contents of this record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> to tsv
</code></pre></div>`,9);function h(s,m){return o(),r("div",null,[a("h1",i,[l,t(),a("code",null,e(s.$frontmatter.title),1),t(" for formats")]),a("div",d,e(s.$frontmatter.formats),1),u])}const _=n(c,[["render",h],["__file","to_tsv.html.vue"]]);export{_ as default};
