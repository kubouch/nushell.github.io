import{_ as p,o as c,c as l,a as s,b as a,w as t,e as o,d as n,r as i}from"./app.a3b5f9cc.js";const r={},u=o(`<h1 id="mit-listen-arbeiten" tabindex="-1"><a class="header-anchor" href="#mit-listen-arbeiten" aria-hidden="true">#</a> Mit Listen arbeiten</h1><h2 id="listen-erstellen" tabindex="-1"><a class="header-anchor" href="#listen-erstellen" aria-hidden="true">#</a> Listen erstellen</h2><p>Eine Liste ist eine geordnete Sammlung von Werten. Erstellt wird eine <code>list</code> mit eckigen Klammern, in denen die Werte durch Leerzeichen und/oder Kommas getrennt werden, zur besseren Lesbarkeit. Zum Beispiel, <code>[foo bar baz]</code> oder <code>[foo, bar, baz]</code>,</p><h2 id="listen-updaten" tabindex="-1"><a class="header-anchor" href="#listen-updaten" aria-hidden="true">#</a> Listen updaten</h2><p>Mit den zwei Befehlen <code>update</code> und <code>insert</code> k\xF6nnen Listen in einer Pipeline ver\xE4ndert werden, zum Beispiel f\xFCgt folgende Zeile den Wert <code>10</code> in der Mitte, also an Stelle 2 ein.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [1, 2, 3, 4] | insert 2 10
</code></pre></div><p>Mit dem Befehl <code>update</code> ersetzen wir hingegen das 2. Element mit dem Wert <code>10</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [1, 2, 3, 4] | update 1 10
</code></pre></div><p>Zus\xE4tzlich zu <code>insert</code> und <code>update</code> stehen die Befehle <code>prepend</code> und <code>append</code> zu Verf\xFCgung. Diese f\xFCgen Werte am Anfang einer Liste oder am Ende ein.</p><p>Zum Beispiel:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>yellow green<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token operator">|</span> prepend red<span class="token punctuation">)</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token operator">|</span> append purple<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token comment"># [red yellow green purple]</span>
</code></pre></div><h2 id="durch-listen-iterieren" tabindex="-1"><a class="header-anchor" href="#durch-listen-iterieren" aria-hidden="true">#</a> Durch Listen iterieren</h2>`,12),d=n("Um durch eine Liste zu iterieren, wird der "),k=s("code",null,"each",-1),m=n(" Befehl vewendet, dem ein "),h=n("block"),b=n(" mit Nu-Code folgt, der auf jedes Element der Liste angewendet wird. Der Block Parameter (z.B. "),g=s("code",null,"|it|",-1),_=n(" in "),v=s("code",null,"{ |it| echo $it }",-1),f=n(") entspricht normalerweise dem Element der Liste, was jedoch mit dem "),w=s("code",null,"--numbered",-1),$=n(" ("),x=s("code",null,"-n",-1),L=n(") Flag ge\xE4ndert werden kann in die zwei Parameter "),z=s("code",null,"index",-1),B=n(" und "),q=s("code",null,"item",-1),y=n(". zum Beispiel:"),D=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token variable">$names</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;Hello, (<span class="token variable">$it</span>)!&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;Hello, Mark!&quot; and three more similar lines.</span>

<span class="token variable">$names</span> <span class="token operator">|</span> each -n <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;(<span class="token variable">$it</span>.index + 1) - (<span class="token variable">$it</span>.item)&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;1 - Mark&quot;, &quot;2 - Tami&quot;, etc.</span>
</code></pre></div>`,1),E=n("Der "),T=s("code",null,"where",-1),Z=n(' Befehl kann verwendet werden um einen Filter auf eine Liste anzuwenden. Das folgende Beispiel gibt alle Farben zur\xFCck, deren Namen auf "e" enden.'),A=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red orange yellow green blue purple<span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>In diesem Beispiel werden nur Werte behalten, die h\xF6her als <code>7</code> sind.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># The block passed to where must evaluate to a boolean.</span>
<span class="token comment"># This outputs the list [orange blue purple].</span>

<span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">10</span> <span class="token number">8</span> <span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> where <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># [10 8]</span>
</code></pre></div>`,3),M=n("Der "),W=s("code",null,"reduce",-1),S=o(" Befehl berechnet einen einfachen Wert aus einer Liste. Der darauffolgende Block enth\xE4lt 2 Parameter: Das momentane Element (\xFCblicherweise <code>it</code> genannt) und einen Sammler (Akkumulator) (\xFCblicherweise <code>acc</code>). Um einen initialen Wert f\xFCr den Akkumulator zu setzen, wird das <code>--fold</code> (<code>-f</code>) Flag gesetzt. Um den Iterator <code>it</code> zu \xE4ndern nach <code>index</code> und <code>item</code>, wird wiederum das <code>--numbered</code> (<code>-n</code>) Flag verwendet. Zum Beispiel:",19),V=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;total =&quot;</span> <span class="token punctuation">(</span><span class="token variable">$scores</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 15</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;total =&quot;</span> <span class="token punctuation">(</span><span class="token variable">$scores</span> <span class="token operator">|</span> math <span class="token function">sum</span><span class="token punctuation">)</span> <span class="token comment"># easier approach, same result</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;product =&quot;</span> <span class="token punctuation">(</span><span class="token variable">$scores</span> <span class="token operator">|</span> reduce --fold <span class="token number">1</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 96</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> reduce -n <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span>.item + <span class="token variable">$it</span>.index * <span class="token variable">$it</span>.item <span class="token punctuation">}</span> <span class="token comment"># 3 + 1*8 + 2*4 = 19</span>
</code></pre></div><h2 id="auf-listen-zugreifen" tabindex="-1"><a class="header-anchor" href="#auf-listen-zugreifen" aria-hidden="true">#</a> Auf Listen zugreifen</h2><p>Um auf ein Element einer Liste zuzugreifen, wird <code>$name.index</code> verwendet, wobei in der <code>$name</code> Variablen eine Liste enthalten sein muss. Zum Beispiel kann in folgender Liste das 2. Element mit <code>$names.1</code> verwendet werden.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token variable">$names</span>.1 <span class="token comment"># gives Tami</span>
</code></pre></div><p>Wenn der Index in einer Variablen wie <code>$index</code> enthalten ist, kann dieser mit dem <code>get</code> Befehl extrahiert werden.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> index <span class="token operator">=</span> <span class="token number">1</span>
<span class="token variable">$names</span> <span class="token operator">|</span> get <span class="token variable">$index</span> <span class="token comment"># gives Tami</span>
</code></pre></div>`,6),N=n("Der "),C=s("code",null,"length",-1),F=n(" Befehl gibt die Anzahl Elemente in der Liste zur\xFCck. Zum Beispiel, "),I=s("code",null,"[red green blue] | length",-1),U=n(" ergibt "),j=s("code",null,"3",-1),J=n("."),P=n("Der "),H=s("code",null,"empty?",-1),O=n(" Befehl ermittelt, ob ein String, eine Liste oder eine Tabelle leer ist. Mit einer Liste wird er so verwendet:"),K=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> empty? <span class="token comment"># false</span>

<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> empty? <span class="token comment"># true</span>
</code></pre></div><p>Der <code>in</code> und <code>not-in</code> Operator wird verwendet, um zu testen, ob ein Wert in einer Liste vorhanden ist oder nicht. Zum Beispiel:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token string">&#39;blue&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># true</span>
<span class="token string">&#39;yellow&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># false</span>
<span class="token string">&#39;gold&#39;</span> not-in <span class="token variable">$colors</span> <span class="token comment"># true</span>
</code></pre></div>`,3),R=n("Der "),Y=s("code",null,"any?",-1),G=n(" Befehl ermittelt, ob irgend ein Element der Liste einer Bedingung entspricht. Zum Beispiel:"),Q=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do any color names end with &quot;e&quot;?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> any? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># true</span>

<span class="token comment"># Is the length of any color name less than 3?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> any? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token comment"># false</span>

<span class="token comment"># Are any scores greater than 7?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> any? <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># true</span>

<span class="token comment"># Are any scores odd?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> any? <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment"># true</span>
</code></pre></div>`,1),X=n("Der "),nn=s("code",null,"all?",-1),sn=n(" Befehl wiederum ermittelt, ob jedes Element der Liste einer Bedingung entspricht. Zum Beispiel:"),en=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do all color names end with &quot;e&quot;?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># false</span>

<span class="token comment"># Is the length of all color names greater than or equal to 3?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token comment"># true</span>

<span class="token comment"># Are all scores greater than 7?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> all? <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># false</span>

<span class="token comment"># Are all scores even?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> all? <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment"># false</span>
</code></pre></div><h2 id="eine-liste-konvertieren" tabindex="-1"><a class="header-anchor" href="#eine-liste-konvertieren" aria-hidden="true">#</a> Eine Liste konvertieren</h2>`,2),an=n("Der "),tn=s("code",null,"flatten",-1),on=n(" Befehl generiert aus einer bestehenden Liste eine neue Liste, indem eine verschachtelte Liste in die Top-Level Liste integriert werden. Dies kann mehrere Male aufgerufen werden, um verschachtelte Listen jeglicher Tiefe zu integrieren. Zum Beispiel:"),pn=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">4</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6]</span>

<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6 7 8]</span>
</code></pre></div>`,1),cn=n("Der "),ln=s("code",null,"wrap",-1),rn=n(" Befehl konvertiert eine Liste in eine Tabelle. Jedes Listen-Element wird in eine eigene Zeile mit einer einzigen Spalte \xFCberf\xFChrt."),un=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> zones <span class="token operator">=</span> <span class="token punctuation">[</span>UTC CET Europe/Moscow Asia/Yekaterinburg<span class="token punctuation">]</span>

<span class="token comment"># Show world clock for selected time zones</span>
<span class="token variable">$zones</span> <span class="token operator">|</span> wrap <span class="token string">&#39;Zone&#39;</span> <span class="token operator">|</span> upsert Time <span class="token punctuation">{</span><span class="token operator">|</span>it<span class="token operator">|</span> <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token variable">$it</span>.Zone <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y.%m.%d %H:%M&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div>`,1);function dn(kn,mn){const e=i("RouterLink");return c(),l("div",null,[u,s("p",null,[d,a(e,{to:"/book/commands/each.html"},{default:t(()=>[k]),_:1}),m,a(e,{to:"/de/book/types_of_data.html#blocks"},{default:t(()=>[h]),_:1}),b,g,_,v,f,w,$,x,L,z,B,q,y]),D,s("p",null,[E,a(e,{to:"/book/commands/where.html"},{default:t(()=>[T]),_:1}),Z]),A,s("p",null,[M,a(e,{to:"/book/commands/reduce.html"},{default:t(()=>[W]),_:1}),S]),V,s("p",null,[N,a(e,{to:"/book/commands/length.html"},{default:t(()=>[C]),_:1}),F,I,U,j,J]),s("p",null,[P,a(e,{to:"/book/commands/empty.html"},{default:t(()=>[H]),_:1}),O]),K,s("p",null,[R,a(e,{to:"/book/commands/any.html"},{default:t(()=>[Y]),_:1}),G]),Q,s("p",null,[X,a(e,{to:"/book/commands/all.html"},{default:t(()=>[nn]),_:1}),sn]),en,s("p",null,[an,a(e,{to:"/book/commands/flatten.html"},{default:t(()=>[tn]),_:1}),on]),pn,s("p",null,[cn,a(e,{to:"/book/commands/wrap.html"},{default:t(()=>[ln]),_:1}),rn]),un])}var bn=p(r,[["render",dn],["__file","working_with_lists.html.vue"]]);export{bn as default};
