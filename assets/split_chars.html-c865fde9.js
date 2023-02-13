import{_ as r,p as n,q as o,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split chars --grapheme-clusters --code-points</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--grapheme-clusters</code>: split on grapheme clusters</li><li><code>--code-points</code>: split on code points (default; splits combined characters)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split the string into a list of characters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> chars
</code></pre></div><p>Split on grapheme clusters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;🇯🇵ほげ&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> chars <span class="token parameter variable">-g</span>
</code></pre></div>`,9);function g(e,u){return n(),o("div",null,[a("h1",l,[p,s(),a("code",null,t(e.$frontmatter.title),1),s(" for strings")]),a("div",d,t(e.$frontmatter.strings),1),h])}const f=r(i,[["render",g],["__file","split_chars.html.vue"]]);export{f as default};
