import{_ as s,o,c as n,a as e,t,d as i,e as c}from"./app.a3b5f9cc.js";const r={},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=i(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; touch (filename) ...rest --timestamp --date --reference --modified --access --no-create</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><p><code>filename</code>: the path of the file you want to create</p></li><li><p><code>...rest</code>: additional files to create</p></li><li><p><code>--timestamp {string}</code>: change the file or directory time to a timestamp. Format: [[CC]YY]MMDDhhmm[.ss]</p><p>If neither YY or CC is given, the current year will be assumed. If YY is specified, but CC is not, CC will be derived as follows: If YY is between [69, 99], CC is 19 If YY is between [00, 68], CC is 20 Note: It is expected that in a future version of this standard the default century inferred from a 2-digit year will change</p></li><li><p><code>--date {string}</code>: change the file or directory time to a date</p></li><li><p><code>--reference {string}</code>: change the file or directory time to the time of the reference file/directory</p></li><li><p><code>--modified</code>: change the modification time of the file or directory. If no timestamp, date or reference file/directory is given, the current time is used</p></li><li><p><code>--access</code>: change the access time of the file or directory. If no timestamp, date or reference file/directory is given, the current time is used</p></li><li><p><code>--no-create</code>: do not create the file if it does not exist</p></li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates &quot;fixture.json&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> fixture.json
</code></pre></div><p>Creates files a, b and c</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> a b c
</code></pre></div><p>Changes the last modified time of &quot;fixture.json&quot; to today&#39;s date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> -m fixture.json
</code></pre></div><p>Creates files d and e and set its last modified time to a timestamp</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> -m -t <span class="token number">201908241230.30</span> d e
</code></pre></div><p>Changes the last modified time of files a, b and c to a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> -m -d <span class="token string">&quot;yesterday&quot;</span> a b c
</code></pre></div><p>Changes the last modified time of file d and e to &quot;fixture.json&quot;&#39;s last modified time</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> -m -r fixture.json d e
</code></pre></div><p>Changes the last accessed time of &quot;fixture.json&quot; to a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> -a -d <span class="token string">&quot;August 24, 2019; 12:30:30&quot;</span> fixture.json
</code></pre></div><p>Changes both last modified and accessed time of a, b and c to a timestamp only if they exist</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> -c -t <span class="token number">201908241230.30</span> a b c
</code></pre></div>`,21);function f(a,g){return o(),n("div",null,[e("h1",d,[l,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var b=s(r,[["render",f],["__file","touch.html.vue"]]);export{b as default};
