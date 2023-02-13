import{_ as t,p as o,q as r,Q as a,t as n,v as s,a1 as c}from"./framework-344bb0e4.js";const i={},p={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; continue </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Continue a loop from the next iteration</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token variable">$i</span> <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span> <span class="token builtin class-name">continue</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> print <span class="token variable">$i</span> <span class="token punctuation">}</span>
</code></pre></div>`,7);function u(e,k){return o(),r("div",null,[a("h1",p,[l,n(),a("code",null,s(e.$frontmatter.title),1),n(" for core")]),a("div",d,s(e.$frontmatter.core),1),h])}const f=t(i,[["render",u],["__file","continue.html.vue"]]);export{f as default};
