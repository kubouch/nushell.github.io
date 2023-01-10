import{_ as t,z as o,A as p,X as a,C as n,D as e,a6 as c}from"./framework.3d018c9f.js";const r={},l={id:"frontmatter-title-for-math",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),d={class:"command-title"},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math mode </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Compute the mode(s) of a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span> <span class="token number">9</span> <span class="token number">12</span> <span class="token number">12</span> <span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">|</span> math mode
</code></pre></div><p>Compute the mode(s) of the columns of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span> b: -1<span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> math mode
</code></pre></div>`,7);function m(s,h){return o(),p("div",null,[a("h1",l,[u,n(),a("code",null,e(s.$frontmatter.title),1),n(" for math")]),a("div",d,e(s.$frontmatter.math),1),i])}const b=t(r,[["render",m],["__file","math_mode.html.vue"]]);export{b as default};
