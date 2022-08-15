import{_ as t,o as n,c as o,a,t as s,d as r,e as i}from"./app.a3b5f9cc.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),h={style:{"white-space":"pre-wrap"}},g=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date format (format string) --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format string</code>: the desired date format</li><li><code>--list</code>: lists strftime cheatsheet</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Format a given date using the default format (RFC 2822).</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y-%m-%d&#39;</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d&quot;</span>
</code></pre></div>`,13);function u(e,f){return n(),o("div",null,[a("h1",d,[p,l,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),g])}var _=t(c,[["render",u],["__file","date_format.html.vue"]]);export{_ as default};
