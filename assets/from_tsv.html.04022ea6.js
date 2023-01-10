import{_ as n,z as r,A as o,X as a,C as e,D as t,a6 as c}from"./framework.3d018c9f.js";const p={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from tsv --noheaders --no-infer --trim</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--no-infer</code>: no field type inferencing</li><li><code>--trim {string}</code>: drop leading and trailing whitespaces around headers names and/or field values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert tab-separated data to a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;ColA	ColB
1	2&quot;</span> <span class="token operator">|</span> from tsv
</code></pre></div><p>Create a tsv file with header columns and open it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;c1(char tab)c2(char tab)c3(char nl)1(char tab)2(char tab)3&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv
</code></pre></div><p>Create a tsv file without header columns and open it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">-n</span>
</code></pre></div><p>Create a tsv file without header columns and open it, removing all unnecessary whitespaces</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">--trim</span> all
</code></pre></div><p>Create a tsv file without header columns and open it, removing all unnecessary whitespaces in the header names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">--trim</span> headers
</code></pre></div><p>Create a tsv file without header columns and open it, removing all unnecessary whitespaces in the field values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">--trim</span> fields
</code></pre></div>`,17);function v(s,m){return r(),o("div",null,[a("h1",l,[i,e(),a("code",null,t(s.$frontmatter.title),1),e(" for formats")]),a("div",d,t(s.$frontmatter.formats),1),h])}const u=n(p,[["render",v],["__file","from_tsv.html.vue"]]);export{u as default};
