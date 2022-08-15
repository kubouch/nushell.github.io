import{_ as s,o,c as n,a as e,t,d as r,e as c}from"./app.a3b5f9cc.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; post (path) (body) --user --password --content-type --content-length --headers --raw --insecure</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: the URL to post to</li><li><code>body</code>: the contents of the post body</li><li><code>--user {any}</code>: the username when authenticating</li><li><code>--password {any}</code>: the password when authenticating</li><li><code>--content-type {any}</code>: the MIME type of content to post</li><li><code>--content-length {any}</code>: the length of the content being posted</li><li><code>--headers {any}</code>: custom headers you want to add</li><li><code>--raw</code>: return values as a string instead of a table</li><li><code>--insecure</code>: allow insecure server connections when using SSL</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Performs HTTP POST operation.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Post content to url.com</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post url.com <span class="token string">&#39;body&#39;</span>
</code></pre></div><p>Post content to url.com, with username and password</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post -u myuser -p mypass url.com <span class="token string">&#39;body&#39;</span>
</code></pre></div><p>Post content to url.com, with custom header</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post -H <span class="token punctuation">[</span>my-header-key my-header-value<span class="token punctuation">]</span> url.com
</code></pre></div><p>Post content to url.com with a json body</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> post -t application/json url.com <span class="token punctuation">{</span> field: value <span class="token punctuation">}</span>
</code></pre></div>`,15);function g(a,m){return o(),n("div",null,[e("h1",i,[l,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var y=s(d,[["render",g],["__file","post.html.vue"]]);export{y as default};
