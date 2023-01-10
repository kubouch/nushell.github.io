import{_ as n,z as r,A as o,X as a,C as e,D as t,a6 as p}from"./framework.3d018c9f.js";const l={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split words --min-word-length</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--min-word-length {int}</code>: The minimum word length</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split the string&#39;s words into separate rows</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello world&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> words
</code></pre></div><p>Split the string&#39;s words, of at least 3 characters, into separate rows</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello to the world&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> words <span class="token parameter variable">-l</span> <span class="token number">3</span>
</code></pre></div><p>A real-world example of splitting words</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://www.gutenberg.org/files/11/11-0.txt <span class="token operator">|</span> str downcase <span class="token operator">|</span> <span class="token function">split</span> words <span class="token parameter variable">-l</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> sort-by count <span class="token parameter variable">--reverse</span> <span class="token operator">|</span> first <span class="token number">10</span>
</code></pre></div>`,11);function g(s,u){return r(),o("div",null,[a("h1",i,[c,e(),a("code",null,t(s.$frontmatter.title),1),e(" for strings")]),a("div",d,t(s.$frontmatter.strings),1),h])}const f=n(l,[["render",g],["__file","split_words.html.vue"]]);export{f as default};
