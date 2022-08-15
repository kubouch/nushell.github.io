import{_ as s,o as n,c as o,a,t,d as r,e as c}from"./app.a3b5f9cc.js";const d={},l={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-table </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert the date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert a given date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;2020-04-12 22:10:57 +0200&#39;</span> <span class="token operator">|</span> <span class="token function">date</span> to-table
</code></pre></div>`,9);function g(e,_){return n(),o("div",null,[a("h1",l,[p,i,a("code",null,t(e.$frontmatter.title),1)]),a("div",h,t(e.$frontmatter.usage),1),u])}var f=s(d,[["render",g],["__file","date_to-table.html.vue"]]);export{f as default};
