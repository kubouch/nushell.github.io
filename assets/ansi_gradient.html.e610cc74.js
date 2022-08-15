import{_ as n,o as t,c as r,a,t as s,d as o,e as i}from"./app.a3b5f9cc.js";const d={},c={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=o(),p={style:{"white-space":"pre-wrap"}},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi gradient ...column path --fgstart --fgend --bgstart --bgend</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...column path</code>: optionally, draw gradients using text from column paths</li><li><code>--fgstart {string}</code>: foreground gradient start color in hex (0x123456)</li><li><code>--fgend {string}</code>: foreground gradient end color in hex</li><li><code>--bgstart {string}</code>: background gradient start color in hex</li><li><code>--bgend {string}</code>: background gradient end color in hex</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>draw text in a gradient with foreground start and end colors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient --fgstart 0x40c9ff --fgend 0xe81cff
</code></pre></div><p>draw text in a gradient with foreground start and end colors and background start and end colors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient --fgstart 0x40c9ff --fgend 0xe81cff --bgstart 0xe81cff --bgend 0x40c9ff
</code></pre></div><p>draw text in a gradient by specifying foreground start color - end color is assumed to be black</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient --fgstart 0x40c9ff
</code></pre></div><p>draw text in a gradient by specifying foreground end color - start color is assumed to be black</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient --fgend 0xe81cff
</code></pre></div>`,13);function f(e,u){return t(),r("div",null,[a("h1",c,[l,g,a("code",null,s(e.$frontmatter.title),1)]),a("div",p,s(e.$frontmatter.usage),1),h])}var x=n(d,[["render",f],["__file","ansi_gradient.html.vue"]]);export{x as default};
