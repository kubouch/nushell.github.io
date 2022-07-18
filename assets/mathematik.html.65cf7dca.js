import{_ as e,o as n,c as i,e as d}from"./app.a5cac4f6.js";const t={},a=d(`<h1 id="mathematik" tabindex="-1"><a class="header-anchor" href="#mathematik" aria-hidden="true">#</a> Mathematik</h1><p>Manchmal m\xFCssen lediglich ein paar Zahlen addiert werden, um eine Aufgabe zu erledigen. Nushell bietet dazu einen Satz an grundlegenden mathematischen Funktionen an. Mathematische Ausdr\xFCcke sind \xFCberall dort verf\xFCgbar, wo ein Befehl aufgerufen werden kann.</p><h2 id="addieren-subtrahieren-multiplizieren-dividieren" tabindex="-1"><a class="header-anchor" href="#addieren-subtrahieren-multiplizieren-dividieren" aria-hidden="true">#</a> Addieren, Subtrahieren, Multiplizieren, Dividieren</h2><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 + 3
4
</code></pre></div><p>In Nushell, k\xF6nnen die Operationen Addition, Subtraktion, Multiplikation und Division mit den daf\xFCr \xFCblichen Symbolen <code>+</code>, <code>-</code>, <code>*</code> und <code>/</code> aufgerufen werden. Die Reihenfolge der Operatoren wird dabei ber\xFCcksichtigt. Ein Beispiel: <code>1 + 2 * 3</code> wird behandelt als <code>1 + (2 * 3)</code>. Was zum n\xE4chsten Konzept f\xFChrt: Klammern.</p><h2 id="klammern" tabindex="-1"><a class="header-anchor" href="#klammern" aria-hidden="true">#</a> Klammern</h2><p>Klammern k\xF6nnen verwendet werden, um mathematische Ausdr\xFCcke zu gruppieren. Das erlaubt es <code>(1 + 2) * 3</code> zu verwenden, um beispielsweise die Addition vor der Multiplikation auszuf\xFChren.</p><h2 id="in-und-not-in" tabindex="-1"><a class="header-anchor" href="#in-und-not-in" aria-hidden="true">#</a> <code>in</code> und <code>not-in</code></h2><p>Um herauszufinden, ob ein Wert in einem Datensatz ist oder nicht, k\xF6nnen die Operatoren <code>in</code> und <code>not-in</code> verwendet werden.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 in [1 2 3]
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 not-in [1 2 3]
false
</code></pre></div><h2 id="und" tabindex="-1"><a class="header-anchor" href="#und" aria-hidden="true">#</a> =~ und !~</h2><p>Um zu \xFCberpr\xFCfen, ob ein String innerhalb eines anderen Strings zu finden ist oder nicht, k\xF6nnen die Operatoren <code>=~</code> und <code>!~</code> verwendet werden.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;foobar&quot; =~ &quot;foo&quot;
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;foobar&quot; !~ &quot;baz&quot;
true
</code></pre></div><h2 id="vergleiche" tabindex="-1"><a class="header-anchor" href="#vergleiche" aria-hidden="true">#</a> Vergleiche</h2><p>Die folgenden Vergleichsoperatoren sind ebenfalls verf\xFCgbar:</p><ul><li><code>&lt;</code> - kleiner als</li><li><code>&lt;=</code> - kleiner gleich</li><li><code>&gt;</code> - gr\xF6\xDFer als</li><li><code>&gt;=</code> - gr\xF6\xDFer gleich</li><li><code>==</code> - gleich</li><li><code>!=</code> - ungleich</li></ul><h2 id="verknupfungsoperatoren" tabindex="-1"><a class="header-anchor" href="#verknupfungsoperatoren" aria-hidden="true">#</a> Verkn\xFCpfungsoperatoren</h2><p>Nushell unterst\xFCtzt auch die Operatoren <code>&amp;&amp;</code> (&quot;und&quot;) und <code>||</code> (&quot;oder&quot;) um zwei Operationen die Bool-Werte zur\xFCckgeben zu verbinden. Zum Beispiel: <code>ls | where name in [&quot;one&quot; &quot;two&quot; &quot;three&quot;] &amp;&amp; size &gt; 10kb</code></p><h2 id="reihenfolge-von-operationen" tabindex="-1"><a class="header-anchor" href="#reihenfolge-von-operationen" aria-hidden="true">#</a> Reihenfolge von Operationen</h2><p>Mathematische Operationen werden in der folgenden Reihenfolge ausgewertet (von der h\xF6chsten Priorit\xE4t zur niedrigsten Priorit\xE4t):</p><ul><li>Klammern (<code>()</code>)</li><li>Multiplikation (<code>*</code>), Division (<code>/</code>) und Potenz (<code>**</code>)</li><li>Addition (<code>+</code>) und Subtraktion (<code>-</code>)</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&gt; 3 * (1 + 2)
9
</code></pre></div>`,24),r=[a];function o(c,l){return n(),i("div",null,r)}var h=e(t,[["render",o],["__file","mathematik.html.vue"]]);export{h as default};
