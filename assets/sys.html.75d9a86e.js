import{_ as n,z as o,A as r,X as a,C as e,D as t,a6 as c}from"./framework.3d018c9f.js";const d={},p={id:"frontmatter-title-for-system",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sys </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show info about the system</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
</code></pre></div><p>Show the os system name with get</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host <span class="token operator">|</span> get name
</code></pre></div><p>Show the os system name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host.name
</code></pre></div>`,9);function u(s,m){return o(),r("div",null,[a("h1",p,[i,e(),a("code",null,t(s.$frontmatter.title),1),e(" for system")]),a("div",l,t(s.$frontmatter.system),1),h])}const f=n(d,[["render",u],["__file","sys.html.vue"]]);export{f as default};
