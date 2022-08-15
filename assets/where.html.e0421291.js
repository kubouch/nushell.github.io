import{_ as n,o as t,c as o,a,t as e,d as p,e as r}from"./app.a3b5f9cc.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; where (cond) --block</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cond</code>: condition</li><li><code>--block {block}</code>: use where with a block or variable instead</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List all files in the current directory with sizes greater than 2kb</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 2kb
</code></pre></div><p>List only the files in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">file</span>
</code></pre></div><p>List all files with names that contain &quot;Car&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&quot;Car&quot;</span>
</code></pre></div><p>List all files that were modified in the last two weeks</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where modified <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - 2wk
</code></pre></div><p>Get all numbers above 3 with an existing block condition</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token variable">$in</span> <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">5</span>, <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> where -b <span class="token variable">$a</span>
</code></pre></div>`,15);function k(s,g){return t(),o("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),u])}var m=n(c,[["render",k],["__file","where.html.vue"]]);export{m as default};
