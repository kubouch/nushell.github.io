import{_ as t,o as e,c as p,a as s,t as a,d as o,e as c}from"./app.a5cac4f6.js";const l={},u={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),k={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; update cells (block) --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run an update for each cell</li><li><code>--columns {table}</code>: list of columns to update</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update the zero value cells to empty strings.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;2021-04-16&quot;</span>, <span class="token string">&quot;2021-06-10&quot;</span>, <span class="token string">&quot;2021-09-18&quot;</span>, <span class="token string">&quot;2021-10-15&quot;</span>, <span class="token string">&quot;2021-11-16&quot;</span>, <span class="token string">&quot;2021-11-17&quot;</span>, <span class="token string">&quot;2021-11-18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>          <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,           <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span> <span class="token operator">|</span> update cells <span class="token punctuation">{</span> <span class="token operator">|</span>value<span class="token operator">|</span>
      <span class="token keyword">if</span> <span class="token variable">$value</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token variable">$value</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Update the zero value cells to empty strings in 2 last columns.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;2021-04-16&quot;</span>, <span class="token string">&quot;2021-06-10&quot;</span>, <span class="token string">&quot;2021-09-18&quot;</span>, <span class="token string">&quot;2021-10-15&quot;</span>, <span class="token string">&quot;2021-11-16&quot;</span>, <span class="token string">&quot;2021-11-17&quot;</span>, <span class="token string">&quot;2021-11-18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>          <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,           <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span> <span class="token operator">|</span> update cells -c <span class="token punctuation">[</span><span class="token string">&quot;2021-11-18&quot;</span>, <span class="token string">&quot;2021-11-17&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token operator">|</span>value<span class="token operator">|</span>
        <span class="token keyword">if</span> <span class="token variable">$value</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token variable">$value</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9);function h(n,m){return e(),p("div",null,[s("h1",u,[r,i,s("code",null,a(n.$frontmatter.title),1)]),s("div",k,a(n.$frontmatter.usage),1),d])}var q=t(l,[["render",h],["__file","update_cells.html.vue"]]);export{q as default};
