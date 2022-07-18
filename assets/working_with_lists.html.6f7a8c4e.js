import{_ as p,o as c,c as l,a as s,b as e,w as o,e as t,d as n,r}from"./app.a5cac4f6.js";const i={},u=t(`<h1 id="\u5904\u7406\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5217\u8868" aria-hidden="true">#</a> \u5904\u7406\u5217\u8868</h1><h2 id="\u521B\u5EFA\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5217\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u5217\u8868</h2><p>\u5217\u8868(<code>List</code>)\u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u503C\u7684\u96C6\u5408\u3002 \u4F60\u53EF\u4EE5\u7528\u65B9\u62EC\u53F7\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\uFF0C\u5468\u56F4\u7684\u503C\u7528\u7A7A\u683C\u548C/\u6216\u9017\u53F7\u9694\u5F00 (\u4EE5\u65B9\u4FBF\u9605\u8BFB)\u3002 \u4F8B\u5982\uFF0C<code>[foo bar baz]</code> \u6216 <code>[foo, bar, baz]</code>\u3002</p><h2 id="\u66F4\u65B0\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u5217\u8868" aria-hidden="true">#</a> \u66F4\u65B0\u5217\u8868</h2><p>\u5F53\u5217\u8868\u6570\u636E\u4ECE\u7BA1\u9053\u6D41\u5165\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5411\u5217\u8868\u4E2D\u66F4\u65B0(<code>update</code>)\u548C\u63D2\u5165(<code>insert</code>)\u503C\uFF0C\u4F8B\u5982\uFF0C\u8BA9\u6211\u4EEC\u5728\u5217\u8868\u7684\u4E2D\u95F4\u63D2\u5165\u503C<code>10</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> insert <span class="token number">2</span> <span class="token number">10</span>
<span class="token comment"># [1, 2, 10, 3, 4]</span>
</code></pre></div><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>update</code>\u5C06\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u503C\u66FF\u6362\u4E3A<code>10</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> update <span class="token number">1</span> <span class="token number">10</span>
<span class="token comment"># [1, 10, 3, 4]</span>
</code></pre></div><p>\u9664\u4E86 <code>update</code> \u548C <code>insert</code> \u4E4B\u5916\uFF0C\u8FD8\u6709 <code>prepend</code> \u548C <code>append</code>\uFF0C\u5B83\u4EEC\u5206\u522B\u8BA9\u4F60\u63D2\u5165\u5230\u5217\u8868\u7684\u5F00\u5934\u6216\u5217\u8868\u7684\u7ED3\u5C3E\u3002\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>yellow green<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token operator">|</span> prepend red<span class="token punctuation">)</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token operator">|</span> append purple<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token comment"># [red yellow green purple]</span>
</code></pre></div><h2 id="\u8FED\u4EE3\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5217\u8868" aria-hidden="true">#</a> \u8FED\u4EE3\u5217\u8868</h2>`,11),k=n("\u8981\u904D\u5386\u4E00\u4E2A\u5217\u8868\u4E2D\u7684\u5143\u7D20\uFF0C\u53EF\u4EE5\u4F7F\u7528"),d=s("code",null,"each",-1),m=n("\u547D\u4EE4\u548C "),h=n("Nu \u4EE3\u7801\u5757"),b=n(" \u6307\u5B9A\u5BF9\u6BCF\u4E00\u4E2A\u5143\u7D20\u505A\u4EC0\u4E48\u64CD\u4F5C\u3002\u5757\u53C2\u6570\uFF08\u4F8B\u5982"),_=s("code",null,"{ |it| echo $it }",-1),g=n("\u4E2D\u7684"),v=s("code",null,"|it|",-1),$=n("\uFF09\u901A\u5E38\u662F\u5F53\u524D\u7684\u5217\u8868\u5143\u7D20\uFF0C\u4F46\u5982\u679C\u9700\u8981\uFF0C\u901A\u8FC7 "),f=s("code",null,"--numbered",-1),x=n("("),w=s("code",null,"-n",-1),q=n(") \u6807\u5FD7\u53EF\u4EE5\u5C06\u5176\u6539\u4E3A\u5305\u542B"),y=s("code",null,"index",-1),T=n("\u548C"),A=s("code",null,"item",-1),z=n("\u503C\u7684\u5143\u7D20\u3002\u6BD4\u5982\uFF1A"),M=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token variable">$names</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;Hello, (<span class="token variable">$it</span>)!&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;Hello, Mark!&quot; and three more similar lines.</span>

<span class="token variable">$names</span> <span class="token operator">|</span> each -n <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;(<span class="token variable">$it</span>.index + 1) - (<span class="token variable">$it</span>.item)&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;1 - Mark&quot;, &quot;2 - Tami&quot;, etc.</span>
</code></pre></div>`,1),N=s("code",null,"where",-1),C=n("\u547D\u4EE4\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u7684\u5B50\u96C6\uFF0C\u9AD8\u6548\u5730\u6839\u636E\u4E00\u4E2A\u6761\u4EF6\u8FC7\u6EE4\u5217\u8868\u3002"),E=t(`<p>\u4E0B\u9762\u7684\u4F8B\u5B50\u5F97\u5230\u6240\u6709\u540D\u79F0\u4EE5 &quot;e&quot; \u7ED3\u5C3E\u7684\u989C\u8272\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red orange yellow green blue purple<span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EA\u4FDD\u7559\u5927\u4E8E<code>7</code>\u7684\u6570\u5B57\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># The block passed to where must evaluate to a boolean.</span>
<span class="token comment"># This outputs the list [orange blue purple].</span>

<span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">10</span> <span class="token number">8</span> <span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> where <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># [10 8]</span>
</code></pre></div>`,4),V=s("code",null,"reduce",-1),B=t("\u547D\u4EE4\u4ECE\u4E00\u4E2A\u5217\u8868\u8BA1\u7B97\u4E00\u4E2A\u5355\u4E00\u7684\u503C\u3002 \u5B83\u4F7F\u7528\u4E86\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u8BE5\u5757\u6709\u4E24\u4E2A\u53C2\u6570\uFF1A\u5F53\u524D\u5143\u7D20\uFF08\u5373 <code>it</code>\uFF09\u548C\u4E00\u4E2A\u7D2F\u52A0\u5668 (\u5373 <code>acc</code>)\u3002\u5982\u679C\u60F3\u8981\u7ED9\u7D2F\u52A0\u5668\u6307\u5B9A\u4E00\u4E2A\u521D\u59CB\u503C\uFF0C\u8BF7\u4F7F\u7528 <code>--fold</code> (<code>-f</code>) \u6807\u5FD7\u3002 \u82E5\u8981\u6539\u53D8<code>it</code>\u4F7F\u5176\u5177\u6709<code>index</code>\u548C<code>item</code>\u4E24\u4E2A\u503C\uFF0C\u8BF7\u6DFB\u52A0<code>--numbered</code>\uFF08<code>-n</code>\uFF09\u6807\u5FD7\u3002 \u4F8B\u5982\uFF1A",19),D=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;total =&quot;</span> <span class="token punctuation">(</span><span class="token variable">$scores</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 15</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;total =&quot;</span> <span class="token punctuation">(</span><span class="token variable">$scores</span> <span class="token operator">|</span> math <span class="token function">sum</span><span class="token punctuation">)</span> <span class="token comment"># easier approach, same result</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;product =&quot;</span> <span class="token punctuation">(</span><span class="token variable">$scores</span> <span class="token operator">|</span> reduce --fold <span class="token number">1</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 96</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> reduce -n <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span>.item + <span class="token variable">$it</span>.index * <span class="token variable">$it</span>.item <span class="token punctuation">}</span> <span class="token comment"># 3 + 1*8 + 2*4 = 19</span>
</code></pre></div><h2 id="\u8BBF\u95EE\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5217\u8868" aria-hidden="true">#</a> \u8BBF\u95EE\u5217\u8868</h2><p>\u8981\u8BBF\u95EE\u4E00\u4E2A\u7ED9\u5B9A\u7D22\u5F15\u7684\u5217\u8868\u5143\u7D20, \u53EF\u4EE5\u4F7F\u7528<code>$name.index</code>\u5F62\u5F0F, \u5176\u4E2D<code>$name</code>\u662F\u6301\u6709\u5217\u8868\u7684\u53D8\u91CF\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u5217\u8868\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u53EF\u4EE5\u7528<code>$names.1</code>\u6765\u8BBF\u95EE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token variable">$names</span>.1 <span class="token comment"># gives Tami</span>
</code></pre></div><p>\u5982\u679C\u7D22\u5F15\u5728\u67D0\u4E2A\u53D8\u91CF<code>$index</code>\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>get</code>\u547D\u4EE4\u4ECE\u5217\u8868\u4E2D\u63D0\u53D6\u8BE5\u5143\u7D20\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> index <span class="token operator">=</span> <span class="token number">1</span>
<span class="token variable">$names</span> <span class="token operator">|</span> get <span class="token variable">$index</span> <span class="token comment"># gives Tami</span>
</code></pre></div>`,7),H=s("code",null,"length",-1),J=n("\u547D\u4EE4\u8FD4\u56DE\u5217\u8868\u4E2D\u7684\u5143\u7D20\u4E2A\u6570\u3002\u4F8B\u5982\uFF0C"),L=s("code",null,"[red green blue] | length",-1),I=n("\u8F93\u51FA"),O=s("code",null,"3",-1),R=n("\u3002"),S=s("code",null,"empty?",-1),Y=n(" \u547D\u4EE4\u786E\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u5217\u8868\u6216\u8868\u683C\u662F\u5426\u4E3A\u7A7A\u3002\u5B83\u53EF\u4EE5\u4E0E\u5217\u8868\u4E00\u8D77\u4F7F\u7528\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"),Z=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> empty? <span class="token comment"># false</span>

<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> empty? <span class="token comment"># true</span>
</code></pre></div><p><code>in</code> \u548C <code>not-in</code> \u8FD0\u7B97\u7B26\u7528\u4E8E\u6D4B\u8BD5\u4E00\u4E2A\u503C\u662F\u5426\u5728\u4E00\u4E2A\u5217\u8868\u4E2D\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token string">&#39;blue&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># true</span>
<span class="token string">&#39;yellow&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># false</span>
<span class="token string">&#39;gold&#39;</span> not-in <span class="token variable">$colors</span> <span class="token comment"># true</span>
</code></pre></div>`,3),U=s("code",null,"any?",-1),j=n("\u547D\u4EE4\u7528\u4E8E\u786E\u5B9A\u4E00\u4E2A\u5217\u8868\u4E2D\u662F\u5426\u6709\u4EFB\u610F\u4E00\u4E2A\u5143\u7D20\u5339\u914D\u7ED9\u5B9A\u7684\u6761\u4EF6\uFF0C\u4F8B\u5982\uFF1A"),F=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do any color names end with &quot;e&quot;?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> any? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># true</span>

<span class="token comment"># Is the length of any color name less than 3?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> any? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token comment"># false</span>

<span class="token comment"># Are any scores greater than 7?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> any? <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># true</span>

<span class="token comment"># Are any scores odd?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> any? <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment"># true</span>
</code></pre></div>`,1),G=s("code",null,"all?",-1),K=n("\u547D\u4EE4\u786E\u5B9A\u4E00\u4E2A\u5217\u8868\u4E2D\u662F\u5426\u6240\u6709\u5143\u7D20\u90FD\u5339\u914D\u7ED9\u5B9A\u7684\u6761\u4EF6\u3002\u4F8B\u5982\uFF1A"),P=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do all color names end with &quot;e&quot;?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># false</span>

<span class="token comment"># Is the length of all color names greater than or equal to 3?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token comment"># true</span>

<span class="token comment"># Are all scores greater than 7?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> all? <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># false</span>

<span class="token comment"># Are all scores even?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> all? <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment"># false</span>
</code></pre></div><h2 id="\u8F6C\u6362\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u5217\u8868" aria-hidden="true">#</a> \u8F6C\u6362\u5217\u8868</h2>`,2),Q=s("code",null,"flatten",-1),W=n("\u547D\u4EE4\u901A\u8FC7\u5C06\u5D4C\u5957\u5217\u8868\u4E2D\u7684\u5143\u7D20\u6DFB\u52A0\u5230\u9876\u5C42\u5217\u8868\u4E2D\u6765\u4ECE\u73B0\u6709\u7684\u5217\u8868\u521B\u5EFA\u4E00\u4E2A\u65B0\u5217\u8868\u3002\u8FD9\u6761\u547D\u4EE4\u53EF\u4EE5\u88AB\u591A\u6B21\u8C03\u7528\uFF0C\u4EE5\u4F7F\u4EFB\u610F\u5D4C\u5957\u6DF1\u5EA6\u7684\u5217\u8868\u53D8\u5E73\u3002\u4F8B\u5982\uFF1A"),X=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">4</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6]</span>

<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6 7 8]</span>
</code></pre></div>`,1),ss=s("code",null,"wrap",-1),ns=n("\u547D\u4EE4\u5C06\u4E00\u4E2A\u5217\u8868\u8F6C\u6362\u4E3A\u4E00\u4E2A\u8868\u683C\u3002\u6BCF\u4E2A\u5217\u8868\u7684\u503C\u5C06\u90FD\u4F1A\u88AB\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684\u884C\u548C\u5217\uFF1A"),as=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> zones <span class="token operator">=</span> <span class="token punctuation">[</span>UTC CET Europe/Moscow Asia/Yekaterinburg<span class="token punctuation">]</span>

<span class="token comment"># Show world clock for selected time zones</span>
<span class="token variable">$zones</span> <span class="token operator">|</span> wrap <span class="token string">&#39;Zone&#39;</span> <span class="token operator">|</span> upsert Time <span class="token punctuation">{</span><span class="token operator">|</span>it<span class="token operator">|</span>
    <span class="token punctuation">(</span>
        <span class="token function">date</span> now
            <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token variable">$it</span>.Zone
            <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y.%m.%d %H:%M&#39;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function es(os,ts){const a=r("RouterLink");return c(),l("div",null,[u,s("p",null,[k,e(a,{to:"/book/commands/each.html"},{default:o(()=>[d]),_:1}),m,e(a,{to:"/zh-CN/book/types_of_data.html#%E5%9D%97"},{default:o(()=>[h]),_:1}),b,_,g,v,$,f,x,w,q,y,T,A,z]),M,s("p",null,[e(a,{to:"/book/commands/where.html"},{default:o(()=>[N]),_:1}),C]),E,s("p",null,[e(a,{to:"/book/commands/reduce.html"},{default:o(()=>[V]),_:1}),B]),D,s("p",null,[e(a,{to:"/book/commands/length.html"},{default:o(()=>[H]),_:1}),J,L,I,O,R]),s("p",null,[e(a,{to:"/book/commands/empty.html"},{default:o(()=>[S]),_:1}),Y]),Z,s("p",null,[e(a,{to:"/book/commands/any.html"},{default:o(()=>[U]),_:1}),j]),F,s("p",null,[e(a,{to:"/book/commands/all.html"},{default:o(()=>[G]),_:1}),K]),P,s("p",null,[e(a,{to:"/book/commands/flatten.html"},{default:o(()=>[Q]),_:1}),W]),X,s("p",null,[e(a,{to:"/book/commands/wrap.html"},{default:o(()=>[ss]),_:1}),ns]),as])}var cs=p(i,[["render",es],["__file","working_with_lists.html.vue"]]);export{cs as default};
