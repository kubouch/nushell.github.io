import{_ as p,o as i,c as d,a as n,b as e,w as o,e as a,d as s,r as c}from"./app.a3b5f9cc.js";const r={},u=a(`<h1 id="\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C" aria-hidden="true">#</a> \u811A\u672C</h1><p>\u5728 Nushell \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u7528 Nushell \u8BED\u8A00\u7F16\u5199\u548C\u8FD0\u884C\u811A\u672C\u3002\u8981\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9<code>nu</code>\u547D\u4EE4\u884C\u7A0B\u5E8F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu myscript.nu
</code></pre></div>`,3),h=s("\u8FD9\u5C06\u5728\u4E00\u4E2A\u65B0\u7684 Nu \u5B9E\u4F8B\u4E2D\u8FD0\u884C\u811A\u672C\u76F4\u81F3\u5B8C\u6210\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528"),_=n("code",null,"source",-1),g=s("\u5728 Nu \u7684 "),k=n("strong",null,"\u5F53\u524D",-1),b=s(" \u5B9E\u4F8B\u4E2D\u8FD0\u884C\u811A\u672C\uFF1A"),m=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> myscript.nu
</code></pre></div><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\u7684\u4F8B\u5B50\u5427\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>
def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span>
<span class="token punctuation">}</span>

greet <span class="token string">&quot;world&quot;</span>
</code></pre></div><p>\u811A\u672C\u6587\u4EF6\u5305\u542B\u4E86\u81EA\u5B9A\u4E49\u547D\u4EE4\u7684\u5B9A\u4E49\u4EE5\u53CA\u4E3B\u811A\u672C\u672C\u8EAB\uFF0C\u5B83\u5C06\u5728\u81EA\u5B9A\u4E49\u547D\u4EE4\u5B9A\u4E49\u540E\u8FD0\u884C\u3002</p><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u9996\u5148<code>greet</code>\u662F\u7531 Nushell \u89E3\u91CA\u5668\u5B9A\u4E49\u7684\uFF0C\u8FD9\u4F7F\u5F97\u6211\u4EEC\u4E4B\u540E\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u5B9A\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u4E0A\u9762\u7684\u5185\u5BB9\u5199\u6210\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>greet <span class="token string">&quot;world&quot;</span>

def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Nushell \u5E76\u4E0D\u8981\u6C42\u5B9A\u4E49\u5FC5\u987B\u653E\u5728\u811A\u672C\u4E2D\u8C03\u7528\u8BE5\u5B9A\u4E49\u4E4B\u524D\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B9A\u4E49\u653E\u5728\u4F60\u89C9\u5F97\u8212\u670D\u7684\u5730\u65B9\u3002</p><h2 id="\u811A\u672C\u662F\u5982\u4F55\u88AB\u5904\u7406\u7684" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u662F\u5982\u4F55\u88AB\u5904\u7406\u7684" aria-hidden="true">#</a> \u811A\u672C\u662F\u5982\u4F55\u88AB\u5904\u7406\u7684</h2><p>\u5728\u4E00\u4E2A\u811A\u672C\u4E2D\u5B9A\u4E49\u603B\u662F\u5148\u8FD0\u884C\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u8C03\u7528\u5B9A\u4E49\u3002</p><p>\u5728\u5B9A\u4E49\u8FD0\u884C\u4E4B\u540E, \u6211\u4EEC\u4ECE\u811A\u672C\u6587\u4EF6\u7684\u9876\u90E8\u5F00\u59CB, \u4E00\u4E2A\u63A5\u4E00\u4E2A\u5730\u8FD0\u884C\u6BCF\u4E00\u7EC4\u547D\u4EE4\u3002</p><h2 id="\u811A\u672C\u884C" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u884C" aria-hidden="true">#</a> \u811A\u672C\u884C</h2><p>\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3 Nushell \u662F\u5982\u4F55\u770B\u5F85\u4EE3\u7801\u884C\u7684, \u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u811A\u672C\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>a
b<span class="token punctuation">;</span> c <span class="token operator">|</span> d
</code></pre></div>`,13),x=s("\u5F53\u8FD9\u4E2A\u811A\u672C\u8FD0\u884C\u65F6\uFF0CNushell \u5C06\u9996\u5148\u8FD0\u884C"),v=n("code",null,"a",-1),f=s("\u547D\u4EE4\u81F3\u5B8C\u6210\u5E76\u67E5\u770B\u5176\u7ED3\u679C\u3002\u63A5\u4E0B\u6765\uFF0CNushell \u5C06\u6309\u7167"),N=s('"\u7EC4"\u90E8\u5206'),q=s("\u4E2D\u7684\u89C4\u5219\u8FD0\u884C"),y=n("code",null,"b; c | d",-1),w=s("\u3002"),B=a(`<h2 id="\u53C2\u6570\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5316\u811A\u672C" aria-hidden="true">#</a> \u53C2\u6570\u5316\u811A\u672C</h2><p>\u811A\u672C\u6587\u4EF6\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u5305\u542B\u4E00\u4E2A\u7279\u6B8A\u7684 &quot;main&quot; \u547D\u4EE4\u3002<code>main</code>\u5C06\u5728\u4EFB\u4F55\u5176\u4ED6 Nu \u4EE3\u7801\u4E4B\u540E\u8FD0\u884C\uFF0C\u4E3B\u8981\u7528\u4E8E\u5411\u811A\u672C\u6DFB\u52A0\u53C2\u6570\u3002\u4F60\u53EF\u4EE5\u5728\u811A\u672C\u540D\u79F0\u540E\u9762\u4F20\u9012\u53C2\u6570\uFF08<code>nu &lt;script name&gt; &lt;script args&gt;</code>\uFF09\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>

def main <span class="token punctuation">[</span>x: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token variable">$x</span> + <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; nu myscript.nu 100
110
</code></pre></div><h2 id="shebangs" tabindex="-1"><a class="header-anchor" href="#shebangs" aria-hidden="true">#</a> Shebangs (<code>#!</code>)</h2>`,5),L=s("\u5728 Linux \u548C macOS \u4E0A\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 "),S={href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"},E=s("Shebang"),V=s("\u6765\u544A\u8BC9\u64CD\u4F5C\u7CFB\u7EDF\u4E00\u4E2A\u6587\u4EF6\u5E94\u8BE5\u88AB "),C=n("code",null,"Nu",-1),$=s(" \u89E3\u91CA\u3002\u4F8B\u5982\uFF0C\u5728\u4E00\u4E2A\u540D\u4E3A "),H=n("code",null,"myscript",-1),I=s(" \u7684\u6587\u4EF6\u4E2D\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A"),R=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env nu</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre></div><p>\u6B64\u65F6\u4F60\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u8BE5\u811A\u672C(\u6CE8\u610F\uFF1A\u524D\u9762\u5E76\u6CA1\u6709\u52A0<code>nu</code>)\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ./myscript
Hello World<span class="token operator">!</span>
</code></pre></div>`,3);function W(z,O){const t=c("RouterLink"),l=c("ExternalLinkIcon");return i(),d("div",null,[u,n("p",null,[h,e(t,{to:"/book/commands/source.html"},{default:o(()=>[_]),_:1}),g,k,b]),m,n("p",null,[x,v,f,e(t,{to:"/zh-CN/book/types_of_data.html#%E7%BB%84"},{default:o(()=>[N]),_:1}),q,y,w]),B,n("p",null,[L,n("a",S,[E,e(l)]),V,C,$,H,I]),R])}var U=p(r,[["render",W],["__file","scripts.html.vue"]]);export{U as default};
