import{_ as s,o as r,c as o,a as e,t,d as n,e as l}from"./app.a3b5f9cc.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),p={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url host ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get host of a url</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com/foo/bar&#39;</span> <span class="token operator">|</span> url <span class="token function">host</span>
</code></pre></div>`,7);function _(a,m){return r(),o("div",null,[e("h1",i,[d,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}var g=s(c,[["render",_],["__file","url_host.html.vue"]]);export{g as default};
