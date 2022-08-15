import{_ as s,o as n,c as o,a as e,t,d as i,e as r}from"./app.a3b5f9cc.js";const p={},l={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),h={style:{"white-space":"pre-wrap"}},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into datetime ...rest --timezone --offset --format --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text into datetime by column paths</li><li><code>--timezone {string}</code>: Specify timezone if the input is a Unix timestamp. Valid options: &#39;UTC&#39; (&#39;u&#39;) or &#39;LOCAL&#39; (&#39;l&#39;)</li><li><code>--offset {int}</code>: Specify timezone by offset from UTC if the input is a Unix timestamp, like &#39;+8&#39;, &#39;-4&#39;</li><li><code>--format {string}</code>: Specify an expected format for parsing strings to datetimes. Use --list to see all possible options</li><li><code>--list</code>: Show all possible variables for use with the --format flag</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert to datetime</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;27.02.2021 1:55 pm +0000&#39;</span> <span class="token operator">|</span> into datetime
</code></pre></div><p>Convert to datetime</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2021-02-27T13:55:40+00:00&#39;</span> <span class="token operator">|</span> into datetime
</code></pre></div><p>Convert to datetime using a custom format</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;20210227_135540+0000&#39;</span> <span class="token operator">|</span> into datetime -f <span class="token string">&#39;%Y%m%d_%H%M%S%z&#39;</span>
</code></pre></div><p>Convert timestamp (no larger than 8e+12) to a UTC datetime</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1614434140</span> <span class="token operator">|</span> into datetime
</code></pre></div><p>Convert timestamp (no larger than 8e+12) to datetime using a specified timezone offset (between -12 and 12)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1614434140</span> <span class="token operator">|</span> into datetime -o +9
</code></pre></div><p>Convert timestamps like the sqlite history t</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1656165681720</span> <span class="token operator">|</span> into datetime
</code></pre></div>`,17);function g(a,f){return n(),o("div",null,[e("h1",l,[c,d,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),m])}var b=s(p,[["render",g],["__file","into_datetime.html.vue"]]);export{b as default};
