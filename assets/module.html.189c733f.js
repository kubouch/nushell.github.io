import{_ as e,o as t,c as o,a,t as s,d as p,e as c}from"./app.a3b5f9cc.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; module (module_name) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>module_name</code>: module name</li><li><code>block</code>: body of the module</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a custom command in a module and call it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use spam foo<span class="token punctuation">;</span> foo
</code></pre></div><p>Define an environment variable in a module and evaluate it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> FOO_ENV <span class="token punctuation">{</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use foo FOO_ENV<span class="token punctuation">;</span> <span class="token variable">$env</span>.FOO_ENV
</code></pre></div><p>Define a custom command that participates in the environment in a module and call it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def-env bar <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env FOO_BAR <span class="token operator">=</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use foo bar<span class="token punctuation">;</span> bar<span class="token punctuation">;</span> <span class="token variable">$env</span>.FOO_BAR
</code></pre></div>`,13);function m(n,k){return t(),o("div",null,[a("h1",i,[u,r,a("code",null,s(n.$frontmatter.title),1)]),a("div",d,s(n.$frontmatter.usage),1),h])}var g=e(l,[["render",m],["__file","module.html.vue"]]);export{g as default};
