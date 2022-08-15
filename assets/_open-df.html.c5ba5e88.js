import{_ as r,o as i,c as s,a as e,t,d as o,e as d}from"./app.a3b5f9cc.js";const l={},n={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),f={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; open-df (file) --delimiter --no-header --infer-schema --skip-rows --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>file</code>: file path to load values from</li><li><code>--delimiter {string}</code>: file delimiter character. CSV file</li><li><code>--no-header</code>: Indicates if file doesn&#39;t have header. CSV file</li><li><code>--infer-schema {number}</code>: Number of rows to infer the schema of the file. CSV file</li><li><code>--skip-rows {number}</code>: Number of rows to skip from file. CSV file</li><li><code>--columns {list&lt;string&gt;}</code>: Columns to be selected from csv file. CSV and Parquet file</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Takes a file name and creates a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> test.csv
</code></pre></div>`,7);function p(a,u){return i(),s("div",null,[e("h1",n,[c,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",f,t(a.$frontmatter.usage),1),m])}var g=r(l,[["render",p],["__file","_open-df.html.vue"]]);export{g as default};
