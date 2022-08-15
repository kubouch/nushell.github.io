import{_ as n,o,c as t,a,t as e,d as r,e as l}from"./app.a3b5f9cc.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; join (table) (on) --as --left --right --outer --cross</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>table</code>: table or derived table to join on</li><li><code>on</code>: expression to join tables</li><li><code>--as {string}</code>: Alias for the selected join</li><li><code>--left</code>: left outer join</li><li><code>--right</code>: right outer join</li><li><code>--outer</code>: full outer join</li><li><code>--cross</code>: cross join</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>joins two tables on col_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> into db
    <span class="token operator">|</span> <span class="token keyword">select</span> col_a
    <span class="token operator">|</span> from table_1 --as t1
    <span class="token operator">|</span> <span class="token function">join</span> table_2 col_b --as t2
    <span class="token operator">|</span> describe
</code></pre></div><p>joins a table with a derived table using aliases</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> into db
    <span class="token operator">|</span> <span class="token keyword">select</span> col_a
    <span class="token operator">|</span> from table_1 --as t1
    <span class="token operator">|</span> <span class="token function">join</span> <span class="token punctuation">(</span>
        <span class="token function">open</span> db.mysql
        <span class="token operator">|</span> into db
        <span class="token operator">|</span> <span class="token keyword">select</span> col_c
        <span class="token operator">|</span> from table_2
      <span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>field t1.col_a<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span>field t2.col_c<span class="token punctuation">))</span></span> --as t2 --right
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function k(s,b){return o(),t("div",null,[a("h1",p,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),u])}var f=n(c,[["render",k],["__file","join.html.vue"]]);export{f as default};
