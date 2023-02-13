import{_ as n,p as o,q as r,Q as e,t,v as s,a1 as i}from"./framework-344bb0e4.js";const d={},c={id:"frontmatter-title-for-date",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date list-timezone </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show timezone(s) that contains &#39;Shanghai&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> list-timezone <span class="token operator">|</span> where timezone <span class="token operator">=~</span> Shanghai
</code></pre></div>`,5);function m(a,_){return o(),r("div",null,[e("h1",c,[l,t(),e("code",null,s(a.$frontmatter.title),1),t(" for date")]),e("div",h,s(a.$frontmatter.date),1),p])}const u=n(d,[["render",m],["__file","date_list-timezone.html.vue"]]);export{u as default};
