import{_ as n,z as o,A as r,X as a,C as t,D as s,a6 as c}from"./framework.3d018c9f.js";const i={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; try (try_block) (catch_block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>try_block</code>: block to run</li><li><code>catch_block</code>: block to run if try block fails</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Try to run a missing command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> try <span class="token punctuation">{</span> asdfasdf <span class="token punctuation">}</span>
</code></pre></div><p>Try to run a missing command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> try <span class="token punctuation">{</span> asdfasdf <span class="token punctuation">}</span> catch <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;missing&#39;</span> <span class="token punctuation">}</span>
</code></pre></div>`,11);function u(e,m){return o(),r("div",null,[a("h1",d,[l,t(),a("code",null,s(e.$frontmatter.title),1),t(" for core")]),a("div",h,s(e.$frontmatter.core),1),p])}const g=n(i,[["render",u],["__file","try.html.vue"]]);export{g as default};
