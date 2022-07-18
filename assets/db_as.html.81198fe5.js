import{_ as s,o as r,c as n,a as e,t,d as o,e as d}from"./app.a5cac4f6.js";const i={},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),p={style:{"white-space":"pre-wrap"}},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db as (alias)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>alias</code>: alias name</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates an alias for a column selection</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db col name_a <span class="token operator">|</span> db as new_a
</code></pre></div>`,7);function m(a,u){return r(),n("div",null,[e("h1",c,[l,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),_])}var b=s(i,[["render",m],["__file","db_as.html.vue"]]);export{b as default};
