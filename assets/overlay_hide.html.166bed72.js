import{_ as t,z as o,A as p,X as a,C as s,D as n,a6 as r}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; overlay hide (name) --keep-custom --keep-env</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: Overlay to hide</li><li><code>--keep-custom</code>: Keep all newly added commands and aliases in the next activated overlay</li><li><code>--keep-env {list&lt;string&gt;}</code>: List of environment variables to keep in the next activated overlay</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Keep a custom command after hiding the overlay</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam
    def bar <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">}</span>
    overlay hide spam --keep-custom
    bar

</code></pre></div><p>Hide an overlay created from a file</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;export alias f = &quot;foo&quot;&#39;</span> <span class="token operator">|</span> save spam.nu
    overlay use spam.nu
    overlay hide spam
</code></pre></div><p>Hide the last activated overlay</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> export-env <span class="token punctuation">{</span> let-env FOO <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam
    overlay hide
</code></pre></div><p>Keep the current working directory when removing an overlay</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> overlay new spam
    <span class="token builtin class-name">cd</span> some-dir
    overlay hide --keep-env <span class="token punctuation">[</span> <span class="token environment constant">PWD</span> <span class="token punctuation">]</span> spam
</code></pre></div>`,15);function h(e,m){return o(),p("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for core")]),a("div",d,n(e.$frontmatter.core),1),u])}const k=t(c,[["render",h],["__file","overlay_hide.html.vue"]]);export{k as default};
