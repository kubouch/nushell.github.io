import{_ as s,o as r,c as n,a as e,t,d as c,e as o}from"./app.a3b5f9cc.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; replace-all --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abac abac abac<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> replace-all -p a -r A
</code></pre></div>`,7);function _(a,f){return r(),n("div",null,[e("h1",i,[p,d,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var m=s(l,[["render",_],["__file","_replace-all.html.vue"]]);export{m as default};
