import{_ as t,z as o,A as c,X as a,C as e,D as n,a6 as p}from"./framework.3d018c9f.js";const l={},i={id:"frontmatter-title-for-core",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; view-source (item)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>item</code>: name or block to view</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>View the source of a code block</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> abc <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source <span class="token variable">$abc</span>
</code></pre></div><p>View the source of a custom command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source hi
</code></pre></div><p>View the source of a custom command, which participates in the caller environment</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env BAR <span class="token operator">=</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source foo
</code></pre></div><p>View the source of a module</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module mod-foo <span class="token punctuation">{</span> export-env <span class="token punctuation">{</span> let-env FOO_ENV <span class="token operator">=</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source mod-foo
</code></pre></div><p>View the source of an alias</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> hello <span class="token operator">=</span> <span class="token builtin class-name">echo</span> hi<span class="token punctuation">;</span> view-source hello
</code></pre></div>`,15);function h(s,k){return o(),c("div",null,[a("h1",i,[r,e(),a("code",null,n(s.$frontmatter.title),1),e(" for core")]),a("div",u,n(s.$frontmatter.core),1),d])}const g=t(l,[["render",h],["__file","view-source.html.vue"]]);export{g as default};
