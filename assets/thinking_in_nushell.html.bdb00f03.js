import{_ as l,o as p,c,a as s,b as e,w as o,e as t,d as a,r as u}from"./app.a3b5f9cc.js";const h={},r=t(`<h1 id="\u4EE5-nushell-\u7684\u65B9\u5F0F\u601D\u8003" tabindex="-1"><a class="header-anchor" href="#\u4EE5-nushell-\u7684\u65B9\u5F0F\u601D\u8003" aria-hidden="true">#</a> \u4EE5 Nushell \u7684\u65B9\u5F0F\u601D\u8003</h1><p>\u4E3A\u4E86\u5E2E\u52A9\u4F60\u7406\u89E3\u5E76\u5145\u5206\u5229\u7528 Nushell\uFF0C\u6211\u4EEC\u628A\u8FD9\u90E8\u5206\u5185\u5BB9\u4E00\u8D77\u653E\u5165&quot;\u4EE5 Nushell \u7684\u65B9\u5F0F\u601D\u8003&quot;\u8FD9\u4E00\u8282\u3002\u901A\u8FC7\u5B66\u4E60 Nushell \u7684\u601D\u8003\u65B9\u5F0F\uFF0C\u5E76\u4F7F\u7528\u5B83\u63D0\u4F9B\u7684\u6A21\u5F0F\uFF0C\u4F60\u4F1A\u5728\u5F00\u59CB\u65F6\u9047\u5230\u66F4\u5C11\u7684\u95EE\u9898\uFF0C\u5E76\u4E3A\u63A5\u4E0B\u6765\u7684\u6210\u529F\u505A\u597D\u51C6\u5907\u3002</p><p>\u90A3\u4E48\uFF0C\u7528 Nushell \u7684\u65B9\u5F0F\u601D\u8003\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u4E0B\u9762\u662F\u4E00\u4E9B Nushell \u65B0\u7528\u6237\u5E38\u89C1\u7684\u95EE\u9898\u3002</p><h2 id="nushell-\u4E0D\u662F-bash" tabindex="-1"><a class="header-anchor" href="#nushell-\u4E0D\u662F-bash" aria-hidden="true">#</a> Nushell \u4E0D\u662F Bash</h2><p>Nushell \u65E2\u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4E5F\u662F\u4E00\u79CD Shell\uFF0C\u6B63\u56E0\u4E3A\u5982\u6B64\uFF0C\u5B83\u6709\u81EA\u5DF1\u7684\u65B9\u5F0F\u6765\u5904\u7406\u6587\u4EF6\u3001\u76EE\u5F55\u3001\u7F51\u7AD9\u7B49\u7B49\u3002\u6211\u4EEC\u5BF9\u5176\u8FDB\u884C\u4E86\u5EFA\u6A21\uFF0C\u4EE5\u4F7F\u5176\u4E0E\u4F60\u53EF\u80FD\u719F\u6089\u7684\u5176\u4ED6 Shell \u7684\u5DE5\u4F5C\u65B9\u5F0F\u63A5\u8FD1\u3002\u5176\u4E2D\u7BA1\u9053\u7528\u4E8E\u5C06\u4E24\u4E2A\u547D\u4EE4\u8FDE\u63A5\u5728\u4E00\u8D77\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> length
</code></pre></div><p>Nushell \u4E5F\u652F\u6301\u5176\u4ED6\u5E38\u89C1\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u4ECE\u4E4B\u524D\u8FD0\u884C\u7684\u547D\u4EE4\u4E2D\u83B7\u53D6\u9000\u51FA\u4EE3\u7801(Exit Code)\u3002</p><p>\u867D\u7136\u5B83\u786E\u5B9E\u6709\u8FD9\u4E9B\u529F\u80FD\uFF0C\u4F46 Nushell \u5E76\u4E0D\u662F Bash\u3002Bash \u7684\u5DE5\u4F5C\u65B9\u5F0F\u4EE5\u53CA\u4E00\u822C\u7684 POSIX \u98CE\u683C\uFF0C\u5E76\u4E0D\u662F Nushell \u6240\u652F\u6301\u7684\u3002\u4F8B\u5982\uFF0C\u5728 Bash \u4E2D\u4F60\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&gt;</span> output.txt
</code></pre></div><p>\u5728 Nushell \u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528<code>&gt;</code>\u4F5C\u4E3A\u5927\u4E8E\u8FD0\u7B97\u7B26\uFF0C\u8FD9\u4E0E Nushell \u7684\u8BED\u8A00\u7279\u8D28\u6BD4\u8F83\u543B\u5408\u3002\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\uFF0C\u4F60\u9700\u8981\u7528\u7BA1\u9053\u5C06\u5176\u8FDE\u63A5\u5230\u4E00\u4E2A\u53EF\u4EE5\u4FDD\u5B58\u5185\u5BB9\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">|</span> save output.txt
</code></pre></div><p><strong>\u4EE5 Nushell \u7684\u65B9\u5F0F\u601D\u8003\uFF1A</strong> Nushell \u770B\u5F85\u6570\u636E\u7684\u65B9\u5F0F\u662F\uFF0C\u6570\u636E\u5728\u7BA1\u9053\u4E2D\u6D41\u52A8\uFF0C\u76F4\u5230\u5B83\u5230\u8FBE\u7528\u6237\u6216\u7531\u6700\u540E\u7684\u547D\u4EE4\u5904\u7406\u3002Nushell \u4F7F\u7528\u547D\u4EE4\u6765\u5B8C\u6210\u5DE5\u4F5C\uFF0C\u5B66\u4E60\u8FD9\u4E9B\u547D\u4EE4\u4EE5\u53CA\u4F55\u65F6\u4F7F\u7528\u5B83\u4EEC\u6709\u52A9\u4E8E\u4F60\u7EC4\u5408\u4F7F\u7528\u591A\u79CD\u7BA1\u9053\u3002</p><h2 id="\u628A-nushell-\u60F3\u8C61\u6210\u4E00\u79CD\u7F16\u8BD1\u578B\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u628A-nushell-\u60F3\u8C61\u6210\u4E00\u79CD\u7F16\u8BD1\u578B\u8BED\u8A00" aria-hidden="true">#</a> \u628A Nushell \u60F3\u8C61\u6210\u4E00\u79CD\u7F16\u8BD1\u578B\u8BED\u8A00</h2><p>Nushell \u8BBE\u8BA1\u7684\u4E00\u4E2A\u91CD\u8981\u90E8\u5206\uFF0C\u7279\u522B\u662F\u5B83\u4E0E\u8BB8\u591A\u52A8\u6001\u8BED\u8A00\u4E0D\u540C\u7684\u5730\u65B9\u662F\uFF0CNushell \u5C06\u4F60\u63D0\u4F9B\u7ED9\u5B83\u7684\u6E90\u4EE3\u7801\u8F6C\u6362\u6210\u67D0\u79CD\u53EF\u6267\u884C\u4EA7\u7269\uFF0C\u7136\u540E\u518D\u53BB\u8FD0\u884C\u5B83\u3002Nushell \u6CA1\u6709 <code>eval</code> \u529F\u80FD\uFF0C\u56E0\u6B64\u4E5F\u4E0D\u5141\u8BB8\u4F60\u5728\u8FD0\u884C\u65F6\u7EE7\u7EED\u62C9\u5165\u65B0\u7684\u6E90\u4EE3\u7801\u3002\u8FD9\u610F\u5473\u7740\u5BF9\u4E8E\u8BF8\u5982\u5F15\u5165\u6587\u4EF6\u4F7F\u5176\u6210\u4E3A\u4F60\u9879\u76EE\u7684\u4E00\u90E8\u5206\u8FD9\u6837\u7684\u4EFB\u52A1\uFF0C\u9700\u8981\u77E5\u9053\u6587\u4EF6\u7684\u5177\u4F53\u8DEF\u5F84\uFF0C\u5C31\u5982\u540C C++\u6216 Rust \u7B49\u7F16\u8BD1\u8BED\u8A00\u4E2D\u7684\u6587\u4EF6\u5F15\u5165\u4E00\u6837\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5728 Nushell \u4E2D\u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u5982\u679C\u4F5C\u4E3A\u811A\u672C\u5C06\u65E0\u6CD5\u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;def abc [] { 1 + 2 }&quot;</span> <span class="token operator">|</span> save output.nu
<span class="token builtin class-name">source</span> <span class="token string">&quot;output.nu&quot;</span>
abc
</code></pre></div><p><code>source</code> \u547D\u4EE4\u5C06\u5F15\u5165\u88AB\u7F16\u8BD1\u7684\u6E90\u7801\uFF0C\u4F46\u524D\u9762\u90A3\u884C <code>save</code> \u547D\u4EE4\u8FD8\u6CA1\u6709\u673A\u4F1A\u8FD0\u884C\u3002Nushell \u8FD0\u884C\u6574\u4E2A\u7A0B\u5E8F\u5757\u5C31\u50CF\u8FD0\u884C\u4E00\u4E2A\u6587\u4EF6\u4E00\u6837\uFF0C\u800C\u4E0D\u662F\u4E00\u6B21\u8FD0\u884C\u4E00\u884C\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E<code>output.nu</code>\u6587\u4EF6\u662F\u5728 &quot;\u7F16\u8BD1&quot; \u6B65\u9AA4\u4E4B\u540E\u624D\u521B\u5EFA\u7684\uFF0C\u56E0\u6B64 <code>source</code> \u547D\u4EE4\u5728\u89E3\u6790\u65F6\u65E0\u6CD5\u4ECE\u5176\u4E2D\u8BFB\u53D6\u5B9A\u4E49\u3002</p><p>\u53E6\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u662F\u8BD5\u56FE\u52A8\u6001\u5730\u521B\u5EFA\u6587\u4EF6\u540D\u5E76<code>source</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> $<span class="token string">&quot;(<span class="token variable">$my</span>-path)/common.nu&quot;</span>
</code></pre></div><p>\u8FD9\u5C31\u9700\u8981\u6C42\u503C\u5668(Evaluator)\u8FD0\u884C\u5E76\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u6C42\u503C(Evaluate)\uFF0C\u4F46\u4E0D\u5E78\u7684\u662F\uFF0CNushell \u5728\u7F16\u8BD1\u65F6\u5C31\u9700\u8981\u8FD9\u4E9B\u4FE1\u606F\u3002</p><p><strong>\u4EE5 Nushell \u7684\u65B9\u5F0F\u601D\u8003\uFF1A</strong> Nushell \u88AB\u8BBE\u8BA1\u4E3A\u5BF9\u4F60\u8F93\u5165\u7684\u6240\u6709\u6E90\u4EE3\u7801\u4F7F\u7528\u4E00\u4E2A\u5355\u4E00\u7684\u201C\u7F16\u8BD1\u201D\u6B65\u9AA4\uFF0C\u8FD9\u4E0E\u6C42\u503C\u662F\u5206\u5F00\u7684\u3002\u8FD9\u5C06\u5141\u8BB8\u5F3A\u5927\u7684 IDE \u652F\u6301\uFF0C\u51C6\u786E\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5E76\u6210\u4E3A\u7B2C\u4E09\u65B9\u5DE5\u5177\u66F4\u5BB9\u6613\u4F7F\u7528\u7684\u8BED\u8A00\uFF0C\u4EE5\u53CA\u5728\u672A\u6765\u751A\u81F3\u53EF\u4EE5\u6709\u66F4\u9AD8\u7EA7\u7684\u8F93\u51FA\uFF0C\u6BD4\u5982\u80FD\u591F\u76F4\u63A5\u5C06 Nushell \u7F16\u8BD1\u4E3A\u4E8C\u8FDB\u5236\u6587\u4EF6\u7B49\u3002</p><h2 id="\u53D8\u91CF\u662F\u4E0D\u53EF\u53D8\u7684" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u662F\u4E0D\u53EF\u53D8\u7684" aria-hidden="true">#</a> \u53D8\u91CF\u662F\u4E0D\u53EF\u53D8\u7684</h2><p>\u5BF9\u4E8E\u6765\u81EA\u5176\u4ED6\u8BED\u8A00\u7684\u4EBA\u6765\u8BF4\uFF0C\u53E6\u4E00\u4E2A\u5E38\u89C1\u7684\u4EE4\u4EBA\u60CA\u6115\u4E4B\u5904\u662F Nushell \u7684\u53D8\u91CF\u662F\u4E0D\u53EF\u53D8\u7684\uFF08\u4E8B\u5B9E\u4E0A\uFF0C\u6709\u4E9B\u4EBA\u5DF2\u7ECF\u5F00\u59CB\u79F0\u5B83\u4EEC\u4E3A &quot;<strong>\u5E38\u91CF</strong>&quot; \u6765\u53CD\u6620\u8FD9\u4E00\u70B9\uFF09\u3002\u63A5\u89E6 Nushell\uFF0C\u4F60\u9700\u8981\u82B1\u4E00\u4E9B\u65F6\u95F4\u6765\u719F\u6089\u66F4\u591A\u7684\u51FD\u6570\u5F0F\u98CE\u683C\uFF0C\u56E0\u4E3A\u8FD9\u5F80\u5F80\u6709\u52A9\u4E8E\u5199\u51FA\u4E0E<strong>\u4E0D\u53EF\u53D8\u7684\u53D8\u91CF</strong>\u6700\u76F8\u5BB9\u7684\u4EE3\u7801\u3002</p>`,23),d=a("\u4F60\u53EF\u80FD\u60F3\u77E5\u9053\u4E3A\u4EC0\u4E48 Nushell \u4F7F\u7528\u4E0D\u53EF\u53D8\u7684\u53D8\u91CF\uFF0C\u5728 Nushell \u5F00\u53D1\u7684\u65E9\u671F\uFF0C\u6211\u4EEC\u51B3\u5B9A\u770B\u770B\u6211\u4EEC\u80FD\u5728\u8BED\u8A00\u4E2D\u4F7F\u7528\u591A\u957F\u65F6\u95F4\u7684\u4EE5\u6570\u636E\u4E3A\u4E2D\u5FC3\u7684\u51FD\u6570\u5F0F\u98CE\u683C\u3002\u6700\u8FD1\uFF0C\u6211\u4EEC\u5728 Nushell \u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u5173\u952E\u7684\u529F\u80FD\uFF0C\u4F7F\u8FD9\u4E9B\u65E9\u671F\u7684\u5B9E\u9A8C\u663E\u793A\u51FA\u5176\u4EF7\u503C\uFF1A\u5E76\u884C\u6027\u3002\u901A\u8FC7\u5728\u4EFB\u4F55 Nushell \u811A\u672C\u4E2D\u5C06"),i=s("code",null,"each",-1),k=a("\u5207\u6362\u5230"),_=s("code",null,"par-each",-1),g=a("\uFF0C\u4F60\u5C31\u80FD\u591F\u5728 \u201C\u8F93\u5165\u201D \u4E0A\u5E76\u884C\u5730\u8FD0\u884C\u76F8\u5E94\u7684\u4EE3\u7801\u5757\u3002\u8FD9\u662F\u53EF\u80FD\u7684\uFF0C\u56E0\u4E3A Nushell \u7684\u8BBE\u8BA1\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u4F9D\u8D56\u4E8E\u4E0D\u53EF\u53D8\u6027\u3001\u7EC4\u5408\u548C\u6D41\u6C34\u7EBF\u3002"),b=t(`<p>Nushell \u7684\u53D8\u91CF\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u65E0\u6CD5\u8868\u8FBE\u53D8\u5316\u3002Nushell \u5927\u91CF\u4F7F\u7528\u4E86 &quot;Shadowing&quot; \u6280\u672F\uFF08\u53D8\u91CF\u9690\u85CF\uFF09\u3002\u53D8\u91CF\u9690\u85CF\u662F\u6307\u521B\u5EFA\u4E00\u4E2A\u4E0E\u4E4B\u524D\u58F0\u660E\u7684\u53D8\u91CF\u540C\u540D\u7684\u65B0\u53D8\u91CF\uFF0C\u4F8B\u5982\uFF0C\u5047\u8BBE\u4F60\u6709\u4E00\u4E2A<code>$x</code>\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u5185\uFF0C\u800C\u4F60\u60F3\u8981\u4E00\u4E2A\u65B0\u7684<code>$x</code>\u5E76\u5C06\u5176\u52A0 1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token variable">$x</span> + <span class="token number">1</span>
</code></pre></div><p>\u8FD9\u4E2A\u65B0\u7684<code>x</code>\u5BF9\u4EFB\u4F55\u8DDF\u5728\u8FD9\u4E00\u884C\u540E\u9762\u7684\u4EE3\u7801\u90FD\u662F\u53EF\u89C1\u7684\u3002\u8C28\u614E\u5730\u4F7F\u7528\u53D8\u91CF\u9690\u85CF\u53EF\u4EE5\u4F7F\u53D8\u91CF\u7684\u4F7F\u7528\u53D8\u5F97\u66F4\u5BB9\u6613\uFF0C\u5C3D\u7BA1\u8FD9\u4E0D\u662F\u5FC5\u987B\u7684\u3002</p>`,3),N=a("\u5FAA\u73AF\u8BA1\u6570\u5668\u662F\u53EF\u53D8\u53D8\u91CF\u7684\u53E6\u4E00\u79CD\u5E38\u89C1\u6A21\u5F0F\uFF0C\u5B83\u88AB\u5185\u7F6E\u4E8E\u5927\u591A\u6570\u8FED\u4EE3\u547D\u4EE4\u4E2D\uFF0C\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528"),m=s("code",null,"each",-1),v=a("\u4E0A\u7684"),x=s("code",null,"-n",-1),f=a("\u6807\u5FD7\u540C\u65F6\u83B7\u5F97\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u548C\u7D22\u5F15\uFF1A"),q=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> each -n <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;Number (<span class="token variable">$it</span>.index) is size (<span class="token variable">$it</span>.item.size)&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,1),$=a("\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528"),B=s("code",null,"reduce",-1),w=a("\u547D\u4EE4\u6765\u8FBE\u5230\u4E0A\u8FF0\u76EE\u7684\uFF0C\u5176\u65B9\u5F0F\u4E0E\u4F60\u5728\u5FAA\u73AF\u4E2D\u4FEE\u6539\u4E00\u4E2A\u53D8\u91CF\u76F8\u540C\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u4E00\u4E2A\u5B57\u7B26\u4E32\u5217\u8868\u4E2D\u627E\u5230\u6700\u957F\u7684\u5B57\u7B26\u4E32\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A"),S=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one, two, three, four, five, six<span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span><span class="token operator">|</span>curr, max<span class="token operator">|</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$curr</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token variable">$max</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$curr</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token variable">$max</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u4EE5 Nushell \u7684\u65B9\u5F0F\u601D\u8003\uFF1A</strong> \u5982\u679C\u4F60\u4E60\u60EF\u4E8E\u4F7F\u7528\u53EF\u53D8\u7684\u53D8\u91CF\u6765\u5B8C\u6210\u4E0D\u540C\u7684\u4EFB\u52A1\uFF0C\u90A3\u4E48\u4F60\u5C06\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\u6765\u5B66\u4E60\u5982\u4F55\u4EE5\u66F4\u52A0\u51FD\u6570\u5F0F\u7684\u65B9\u5F0F\u6765\u5B8C\u6210\u6BCF\u4E2A\u4EFB\u52A1\u3002Nushell \u6709\u4E00\u5957\u5185\u7F6E\u7684\u80FD\u529B\u6765\u5E2E\u52A9\u5904\u7406\u8FD9\u6837\u7684\u6A21\u5F0F\uFF0C\u5B66\u4E60\u5B83\u4EEC\u5C06\u5E2E\u52A9\u4F60\u4EE5\u66F4\u52A0 Nushell \u7684\u98CE\u683C\u6765\u5199\u4EE3\u7801\u3002\u7531\u6B64\u5E26\u6765\u7684\u989D\u5916\u7684\u597D\u5904\u662F\u4F60\u53EF\u4EE5\u901A\u8FC7\u5E76\u884C\u8FD0\u884C\u4F60\u7684\u90E8\u5206\u4EE3\u7801\u6765\u52A0\u901F\u811A\u672C\u6267\u884C\u3002</p><h2 id="nushell-\u7684\u73AF\u5883\u662F\u6709\u4F5C\u7528\u57DF\u7684" tabindex="-1"><a class="header-anchor" href="#nushell-\u7684\u73AF\u5883\u662F\u6709\u4F5C\u7528\u57DF\u7684" aria-hidden="true">#</a> Nushell \u7684\u73AF\u5883\u662F\u6709\u4F5C\u7528\u57DF\u7684</h2><p>Nushell \u4ECE\u7F16\u8BD1\u578B\u8BED\u8A00\u4E2D\u83B7\u5F97\u4E86\u5F88\u591A\u8BBE\u8BA1\u7075\u611F\uFF0C\u5176\u4E2D\u4E00\u4E2A\u662F\u8BED\u8A00\u5E94\u8BE5\u907F\u514D\u5168\u5C40\u53EF\u53D8\u72B6\u6001\u3002Shell \u7ECF\u5E38\u901A\u8FC7\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\u6765\u66F4\u65B0\u73AF\u5883\uFF0C\u4F46 Nushell \u907F\u5F00\u4E86\u8FD9\u79CD\u65B9\u6CD5\u3002</p><p>\u5728 Nushell \u4E2D\uFF0C\u4EE3\u7801\u5757\u53EF\u4EE5\u63A7\u5236\u81EA\u5DF1\u7684\u73AF\u5883\uFF0C\u56E0\u6B64\u5BF9\u73AF\u5883\u7684\u6539\u53D8\u662F\u53D1\u751F\u5728\u4EE3\u7801\u5757\u8303\u56F4\u5185\u7684\u3002</p><p>\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u8FD9\u53EF\u4EE5\u8BA9\u4F60\u7528\u66F4\u7B80\u6D01\u7684\u4EE3\u7801\u6765\u5904\u7406\u5B50\u76EE\u5F55\uFF0C\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u6784\u5EFA\u6BCF\u4E2A\u5B50\u9879\u76EE\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$it</span>.name
    <span class="token function">make</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>cd</code>\u547D\u4EE4\u6539\u53D8\u4E86<code>PWD</code>\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u7684\u6539\u53D8\u53EA\u5728\u5F53\u524D\u4EE3\u7801\u5757\u6709\u6548\uFF0C\u5982\u6B64\u5373\u53EF\u5141\u8BB8\u6BCF\u6B21\u8FED\u4EE3\u90FD\u4ECE\u5F53\u524D\u76EE\u5F55\u5F00\u59CB\uFF0C\u8FDB\u5165\u4E0B\u4E00\u4E2A\u5B50\u76EE\u5F55\u3002</p>`,8),E=a("\u73AF\u5883\u53D8\u91CF\u5177\u6709\u4F5C\u7528\u57DF\u4F7F\u547D\u4EE4\u66F4\u53EF\u9884\u6D4B\uFF0C\u66F4\u5BB9\u6613\u9605\u8BFB\uFF0C\u5FC5\u8981\u65F6\u4E5F\u66F4\u5BB9\u6613\u8C03\u8BD5\u3002Nushell \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u8F85\u52A9\u547D\u4EE4\uFF0C\u5982"),C=s("code",null,"def-env",-1),V=a("\u3001"),y=s("code",null,"load-env",-1),R=a("\uFF0C\u4F5C\u4E3A\u5BF9\u73AF\u5883\u53D8\u91CF\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684\u8F85\u52A9\u65B9\u6CD5\u3002"),z=s("code",null,"*",-1),D=a(" - \u8FD9\u91CC\u6709\u4E00\u4E2A\u4F8B\u5916\uFF0C"),I=s("code",null,"def-env",-1),L=a("\u5141\u8BB8\u4F60\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u4FEE\u6539\u5E76\u4FDD\u7559\u8C03\u7528\u8005\u73AF\u5883\u7684\u547D\u4EE4"),P=s("p",null,[s("strong",null,"\u4EE5 Nushell \u7684\u65B9\u5F0F\u601D\u8003\uFF1A"),a(" \u5728 Nushell \u4E2D\uFF0C\u6CA1\u6709\u5168\u5C40\u53EF\u4FEE\u6539\u53D8\u91CF\u7684\u7F16\u7801\u6700\u4F73\u5B9E\u8DF5\u5EF6\u4F38\u5230\u4E86\u73AF\u5883\u53D8\u91CF\u3002\u4F7F\u7528\u5185\u7F6E\u7684\u8F85\u52A9\u547D\u4EE4\u53EF\u4EE5\u8BA9\u4F60\u66F4\u5BB9\u6613\u5730\u5904\u7406 Nushell \u4E2D\u7684\u73AF\u5883\u53D8\u91CF\u95EE\u9898\u3002\u5229\u7528\u73AF\u5883\u53D8\u91CF\u5BF9\u4EE3\u7801\u5757\u5177\u6709\u4F5C\u7528\u8303\u56F4\u8FD9\u4E00\u4E8B\u5B9E\uFF0C\u4E5F\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5199\u51FA\u66F4\u7B80\u6D01\u7684\u811A\u672C\uFF0C\u5E76\u4E0E\u5916\u90E8\u547D\u4EE4\u4E92\u52A8\uFF0C\u800C\u4E0D\u9700\u8981\u5728\u5168\u5C40\u73AF\u5883\u4E2D\u6DFB\u52A0\u4F60\u4E0D\u9700\u8981\u7684\u4E1C\u897F\u3002")],-1);function O(T,W){const n=u("RouterLink");return p(),c("div",null,[r,s("p",null,[d,e(n,{to:"/book/commands/each.html"},{default:o(()=>[i]),_:1}),k,e(n,{to:"/book/commands/par-each.html"},{default:o(()=>[_]),_:1}),g]),b,s("p",null,[N,e(n,{to:"/book/commands/each.html"},{default:o(()=>[m]),_:1}),v,x,f]),q,s("p",null,[$,e(n,{to:"/book/commands/reduce.html"},{default:o(()=>[B]),_:1}),w]),S,s("p",null,[E,e(n,{to:"/book/commands/def-env.html"},{default:o(()=>[C]),_:1}),V,e(n,{to:"/book/commands/load-env.html"},{default:o(()=>[y]),_:1}),R]),s("p",null,[z,D,e(n,{to:"/book/commands/def-env.html"},{default:o(()=>[I]),_:1}),L]),P])}var j=l(h,[["render",O],["__file","thinking_in_nushell.html.vue"]]);export{j as default};
