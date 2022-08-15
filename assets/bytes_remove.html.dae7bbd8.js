import{_ as e,o as t,c as o,a,t as s,d as p,e as c}from"./app.a3b5f9cc.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(),d={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes remove (pattern) ...rest --end --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to find</li><li><code>...rest</code>: optionally remove bytes by column paths</li><li><code>--end</code>: remove from end of binary</li><li><code>--all</code>: remove occurrences of finding binary</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span><span class="token number">10</span> AA FF AA FF<span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove 0x<span class="token punctuation">[</span><span class="token number">10</span> AA<span class="token punctuation">]</span>
</code></pre></div><p>Remove all occurrences of find binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span><span class="token number">10</span> AA <span class="token number">10</span> BB <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove -a 0x<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
</code></pre></div><p>Remove occurrences of find binary from end</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span><span class="token number">10</span> AA <span class="token number">10</span> BB CC AA <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove -e 0x<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
</code></pre></div><p>Remove all occurrences of find binary in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB ColC<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> ColA ColC
</code></pre></div>`,13);function m(n,b){return t(),o("div",null,[a("h1",l,[u,i,a("code",null,s(n.$frontmatter.title),1)]),a("div",d,s(n.$frontmatter.usage),1),k])}var f=e(r,[["render",m],["__file","bytes_remove.html.vue"]]);export{f as default};
