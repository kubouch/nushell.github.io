import{_ as n,z as t,A as o,X as s,C as a,T as l,$ as c,a6 as p,Q as r}from"./framework.3d018c9f.js";const d={},i=p(`<h1 id="别名" tabindex="-1"><a class="header-anchor" href="#别名" aria-hidden="true">#</a> 别名</h1><p>Nushell 中的别名提供了一种简单的文本替换方式，这允许你为一个较长的命令创建一个简写名称，包括其默认参数。</p><p>例如，让我们创建一个名为 <code>ll</code> 的别名，它将展开为 <code>ls -l</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> ll <span class="token operator">=</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre></div><p>我们可以通过别名来调用它：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ll
</code></pre></div><p>一旦我们这样做了，就如同我们输入了 <code>ls -l</code> 一样。这也允许我们传入标志或位置参数。例如，我们现在也可以这样写：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ll -a
</code></pre></div><p>可得到与输入了<code>ls -l -a</code>一样的结果。</p><h2 id="编写带有管道的别名" tabindex="-1"><a class="header-anchor" href="#编写带有管道的别名" aria-hidden="true">#</a> 编写带有管道的别名</h2><p>如果你想在别名中添加管道，你必须用小括号把它括起来，小括号是一对圆括号<code>()</code>，用来标记你的一组带有管道命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> lsname <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> get name<span class="token punctuation">)</span>
</code></pre></div><p>下面是一个带有多个管道的别名：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> lt <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> sort-by modified <span class="token parameter variable">-r</span> <span class="token operator">|</span> sort-by <span class="token builtin class-name">type</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2>`,15),h=s("em",null,"config.nu",-1);function u(g,k){const e=r("RouterLink");return t(),o("div",null,[i,s("p",null,[a("为了使你的别名持久化，它必须被添加到你的 "),h,a(" 文件中。 关于如何持久化别名，以便在你启动 Nushell 时它们是可用的，请参考 "),l(e,{to:"/zh-CN/book/configuration.html"},{default:c(()=>[a("配置")]),_:1}),a(" 部分。")])])}const m=n(d,[["render",u],["__file","aliases.html.vue"]]);export{m as default};
