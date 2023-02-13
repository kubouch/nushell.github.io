import{_ as r,p as n,q as o,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-math",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),l={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math arcsin --degrees</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--degrees</code>: Return degrees instead of radians</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the arcsine of 1</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> math arcsin
</code></pre></div><p>Get the arcsine of 1 in degrees</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> math arcsin <span class="token parameter variable">-d</span>
</code></pre></div>`,9);function m(e,u){return n(),o("div",null,[a("h1",i,[h,s(),a("code",null,t(e.$frontmatter.title),1),s(" for math")]),a("div",l,t(e.$frontmatter.math),1),p])}const _=r(d,[["render",m],["__file","math_arcsin.html.vue"]]);export{_ as default};
