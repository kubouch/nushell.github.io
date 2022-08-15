import{_ as s,o as n,c as o,a as e,t,d as r,e as i}from"./app.a3b5f9cc.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),h={style:{"white-space":"pre-wrap"}},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; format filesize (field) (format value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update</li><li><code>format value</code>: the format into which convert the filesizes</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the size row to KB</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">format</span> filesize size KB
</code></pre></div><p>Convert the apparent row to B</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">du</span> <span class="token operator">|</span> <span class="token function">format</span> filesize apparent B
</code></pre></div>`,9);function u(a,m){return n(),o("div",null,[e("h1",l,[d,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),f])}var g=s(c,[["render",u],["__file","format_filesize.html.vue"]]);export{g as default};
