import{_ as i,o as l,c as r,a as e,b as t,w as a,e as o,d as n,r as c}from"./app.a5cac4f6.js";const d={},p=o(`<h1 id="mit-text-arbeiten" tabindex="-1"><a class="header-anchor" href="#mit-text-arbeiten" aria-hidden="true">#</a> Mit Text arbeiten</h1><p>Texte k\xF6nnen ganz verschiedene Formen von Daten annehmen. Es k\xF6nnen Dateinamen, Verzeichniss-Pfade, Spaltennamen und vieles mehr sein. Texte kommen so oft vor, dass Nushell diverse Wege bereitstellt um mit ihnen zu arbeiten. Der Anwendungsfall entscheidet, welches am besten passt.</p><h2 id="texte-in-einfachen-anfuhrungszeichen" tabindex="-1"><a class="header-anchor" href="#texte-in-einfachen-anfuhrungszeichen" aria-hidden="true">#</a> Texte in einfachen Anf\xFChrungszeichen</h2><p>Der einfachste Text in Nushell ist der in einfachen Anf\xFChrungszeichen. Er wird mit dem <code>&#39;</code> Zeichen umgeben. Hier der Text als Hallo Welt.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Hallo Welt&#39;</span>
Hallo Welt
</code></pre></div><p>Text in einfachen Anf\xFChrungszeichen belassen den Text wie er ist, womit sie ideal sind, um diverse Formen von Text zu enthalten.</p><h2 id="texte-in-doppelten-anfuhrungszeichen" tabindex="-1"><a class="header-anchor" href="#texte-in-doppelten-anfuhrungszeichen" aria-hidden="true">#</a> Texte in doppelten Anf\xFChrungszeichen</h2><p>F\xFCr komplexere Formen, werden in Nushell Texte in doppelte Anf\xFChrungszeichen gesetzt. Diese werden mit dem <code>&#39;</code> Zeichen umgeben. Sie unterst\xFCtzen die Verwendung von Escape-Zeichen mit der Verwendung eines <code>\\</code>.</p><p>Zum Beispiel kann das Hallo Welt von vorhin geschrieben werden als, Hallo gefolgt von einen <code>\\n</code> um eine neue Linie zu erzeugen, dann Welt. Das ganze in doppelten Anf\xFChrungszeichen.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;Hallo<span class="token entity" title="\\n">\\n</span>Welt&quot;</span>
Hallo
Welt
</code></pre></div><p>Escape Zeichen werden verwendet um Zeichen einzugeben, die ansonsten schwer zu tippen w\xE4ren.</p><p>Nushell unterst\xFCtzt aktuell folgende Escape Zeichen:</p><ul><li><code>\\&quot;</code> - Doppeltes Anf\xFChrungszeichen</li><li><code>\\&#39;</code> - Einfaches Anf\xFChrungszeichen</li><li><code>\\\\</code> - Gegenstrich</li><li><code>\\/</code> - Vorw\xE4rtsstrich</li><li><code>\\b</code> - R\xFCcktaste</li><li><code>\\f</code> - Vorschub</li><li><code>\\r</code> - Zeilenumschalt</li><li><code>\\n</code> - Neue Zeile (line feed)</li><li><code>\\t</code> - Tabulator</li><li><code>\\uXXXX</code> - Ein Unicode Zeichen (Tausche XXXX mit der Nummer des Unicode Zeichens)</li></ul><h2 id="text-interpolation" tabindex="-1"><a class="header-anchor" href="#text-interpolation" aria-hidden="true">#</a> Text Interpolation</h2><p>Anwendungsf\xE4lle von komplexeren Text-Operationen ben\xF6tigen eine neue Form von Text: Text Interpolation. Ein Weg um Texte zusammenzustellen, die sowohl aus rohem Text, als auch aus dem Ergebnis von laufenden Ausdr\xFCcken bestehen. Text Interpolation kombiniert diese Texte zusammen zu einem neuen Text-Ergebnis.</p><p>Die Text Interpolation wird mit <code>$&quot; &quot;</code> und <code>$&quot; &quot;</code> gebildet.</p><p>Soll zum Beispiel eine Person per Namen gegr\xFCsst werden, deren Namen in einer Variablen steht, dann sieht das so aus:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span>
<span class="token operator">&gt;</span> $<span class="token string">&quot;greetings, (<span class="token variable">$name</span>)&quot;</span>
greetings, Alice
</code></pre></div><p>Ein Ausdruck in <code>()</code> wird zuerst fertig ausgef\xFChrt. Das Ergebnis wird zur Bildung des finalen Textes verwendet.</p><p>Text Interpolationen funktionieren mit einfachen Anf\xFChrungszeichen, <code>$&#39; &#39;</code>, sowie mit doppelten Anf\xFChrungszeichen <code>$&quot; &quot;</code>. Analog unterst\xFCtzen doppelte Anf\xFChrungszeichen auch bei der Text Interpolation Escape Zeichen, was einfache Anf\xFChrungszeichen nicht tun.</p><p>Seit Version 0.61 unterst\xFCtzt Nushell Escape Zeichen f\xFCr Klammern. So k\xF6nnen die Zeichen <code>(</code> und <code>)</code> in einem Text verwendet werden, ohne dass Nushell auswerten will, was sich dazwischen befindet.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;2 + 2 is (2 + 2) \\(you guessed it!)&quot;</span>
<span class="token number">2</span> + <span class="token number">2</span> is <span class="token number">4</span> <span class="token punctuation">(</span>you guessed it<span class="token operator">!</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="texte-aufsplitten" tabindex="-1"><a class="header-anchor" href="#texte-aufsplitten" aria-hidden="true">#</a> Texte aufsplitten</h2>`,23),h=n("Der "),u=e("code",null,"split row",-1),g=n(" Befehl erstellt eine Liste aus einem Text, getrennt durch das angegebene Trennzeichen. Zum Beispiel "),m=e("code",null,'let colors = ("red,green,blue" | split row ",")',-1),_=n(" erstellt die Liste "),k=e("code",null,"[red green blue]",-1),b=n("."),x=n("Der "),f=e("code",null,"split column",-1),v=n(" Befehl erstellt eine Tabelle aus einem Text, getrennt durch ein angegebenes Trennzeichen. Zum Beispiel "),T=e("code",null,'let colors = ("red,green,blue" | split column ",")',-1),w=n(" erstellt eine Tabelle mit den Elementen als Spalte."),z=n("Schliesslich trennt der "),B=e("code",null,"split chars",-1),Z=n(" Befehl einen Text in seine Zeichen auf."),N=o(`<h2 id="der-str-befehl" tabindex="-1"><a class="header-anchor" href="#der-str-befehl" aria-hidden="true">#</a> Der <code>str</code> Befehl</h2><p>Viele Text Befehle sind Sub-Befehle des <code>str</code> Befehls. Mit <code>help str</code> wirden alle Sub-Befehle ausgegeben.</p><p>Zum Beispiel kann gepr\xFCft werden, ob sich ein Zeichen in einem Text befindet mit <code>str contains</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;Hallo Welt&quot;</span> <span class="token operator">|</span> str contains <span class="token string">&quot;W&quot;</span>
<span class="token boolean">true</span>
</code></pre></div><h3 id="texte-schneiden" tabindex="-1"><a class="header-anchor" href="#texte-schneiden" aria-hidden="true">#</a> Texte schneiden</h3>`,5),S=n("Die Seiten eines Textes werden mit dem "),A=e("code",null,"str trim",-1),q=n(" Befehl geschnitten. Standardm\xE4ssig schneidet der "),E=e("code",null,"str trim",-1),W=n(" Befehl Leerraum von beiden Seiten des Textes. Zum Beispiel:"),D=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;       My   string   &#39;</span> <span class="token operator">|</span> str trim
My   string
</code></pre></div><p>Mit den Optionen <code>--right</code> und <code>--left</code> kann die Seite angegeben werden, auf der geschnitten werden soll.</p><p>Um ein spezifisches Zeichen weg zu schneiden, wird <code>--char &lt;Character&gt;</code> verwendet. Hier ein Beispiel mit dieser Option:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim -r -c <span class="token string">&#39;=&#39;</span>
<span class="token operator">==</span><span class="token operator">=</span> Nu shell
</code></pre></div><h3 id="subtexte" tabindex="-1"><a class="header-anchor" href="#subtexte" aria-hidden="true">#</a> Subtexte</h3><p>Subtexte sind St\xFCcke von Texten. Sie haben einen Start- und einen Endpunkt. Hier ein Beispiel eines Substrings:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Hallo Welt!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;o&#39;</span>
<span class="token number">4</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hallo Welt!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;l&#39;</span>
<span class="token number">8</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hallo Welt!&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;4,8&#39;</span>
o We
</code></pre></div><h3 id="texte-ausrichten-padding" tabindex="-1"><a class="header-anchor" href="#texte-ausrichten-padding" aria-hidden="true">#</a> Texte ausrichten (padding)</h3>`,8),H=n("Mit den Befehlen "),V=e("code",null,"[str lpad",-1),y=n("](/book/commands/str_lpad.md) und "),M=e("code",null,"str rpad",-1),$=n(" k\xF6nnen Texte der angegeben Ausrichtung nach erweitert werden. Dieses Padding erweitert den Text bis zur angegebenen L\xE4nge, zum Beispiel:"),F=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span>
0000001234
<span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span> <span class="token operator">|</span> str length
<span class="token number">10</span>
</code></pre></div><h3 id="texte-umkehren" tabindex="-1"><a class="header-anchor" href="#texte-umkehren" aria-hidden="true">#</a> Texte umkehren</h3>`,2),I=n("Dies kann mit dem "),X=e("code",null,"str reverse",-1),L=n(" Befehl ganz einfach erreicht werden."),P=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
llehsuN
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 llehsuN \u2502
\u2502 <span class="token number">1</span> \u2502 si      \u2502
\u2502 <span class="token number">2</span> \u2502 looc    \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="texte-parsen" tabindex="-1"><a class="header-anchor" href="#texte-parsen" aria-hidden="true">#</a> Texte parsen</h2>`,2),C=n("Mit dem "),O=e("code",null,"parse",-1),R=n(" Befehl k\xF6nnen Texte in Spalten geparst werden. Zum Beispiel:"),U=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell is the best&#39;</span> <span class="token operator">|</span> parse <span class="token string">&#39;{shell} is {type}&#39;</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502  shell  \u2502   type   \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Nushell \u2502 the best \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
<span class="token operator">&gt;</span> <span class="token string">&#39;Bash is kinda cringe&#39;</span> <span class="token operator">|</span> parse --regex <span class="token string">&#39;(?P&lt;shell&gt;\\w+) is (?P&lt;type&gt;[\\w\\s]+)&#39;</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 shell \u2502     type     \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Bash  \u2502 kinda cringe \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="texte-konvertieren" tabindex="-1"><a class="header-anchor" href="#texte-konvertieren" aria-hidden="true">#</a> Texte konvertieren</h2><p>Es gibt verschiedenste Wege Texte in und von anderen Typen zu konvertieren.</p><h3 id="in-einen-text" tabindex="-1"><a class="header-anchor" href="#in-einen-text" aria-hidden="true">#</a> In einen Text</h3>`,4),j=n("Mit "),G=e("code",null,"into string",-1),K=n(". e.g. "),J=e("code",null,"123 | into string",-1),Q=e("li",null,[n("Mit Text Interpolation. e.g. "),e("code",null,"$'(123)'")],-1),Y=n("Mit "),ee=e("code",null,"build-string",-1),ne=n(". e.g. "),se=e("code",null,"build-string (123)",-1),te=e("h3",{id:"von-einem-text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#von-einem-text","aria-hidden":"true"},"#"),n(" Von einem Text")],-1),ae=n("Mit "),oe=e("code",null,"into <type>",-1),ie=n(". e.g. "),le=e("code",null,"'123' | into int",-1),re=e("h2",{id:"texte-einfarben",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#texte-einfarben","aria-hidden":"true"},"#"),n(" Texte einf\xE4rben")],-1),ce=n("Texte k\xF6nnen eingef\xE4rbt werden mit dem "),de=e("code",null,"ansi",-1),pe=n(" Befehl Zum Beispiel:"),he=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),n(),e("span",{class:"token string"},"$'(ansi purple_bold)This text is a bold purple!(ansi reset)'"),n(`
`)])])],-1),ue=e("p",null,[e("code",null,"ansi purple_bold"),n(" f\xE4rbt den Text purpur. "),e("code",null,"ansi reset"),n(" stellt die Farbe wieder auf stadard. (Tipp: Ein Zur\xFCckstellen der Farben mit "),e("code",null,"ansi reset"),n(" sollte nach jeder Farb\xE4nderung stehen)")],-1);function ge(me,_e){const s=c("RouterLink");return l(),r("div",null,[p,e("p",null,[h,t(s,{to:"/book/commands/split_row.html"},{default:a(()=>[u]),_:1}),g,m,_,k,b]),e("p",null,[x,t(s,{to:"/book/commands/split_column.html"},{default:a(()=>[f]),_:1}),v,T,w]),e("p",null,[z,t(s,{to:"/book/commands/split_chars.html"},{default:a(()=>[B]),_:1}),Z]),N,e("p",null,[S,t(s,{to:"/book/commands/str_trim.html"},{default:a(()=>[A]),_:1}),q,t(s,{to:"/book/commands/str_trim.html"},{default:a(()=>[E]),_:1}),W]),D,e("p",null,[H,V,y,t(s,{to:"/book/commands/str_rpad.html"},{default:a(()=>[M]),_:1}),$]),F,e("p",null,[I,t(s,{to:"/book/commands/str_reverse.html"},{default:a(()=>[X]),_:1}),L]),P,e("p",null,[C,t(s,{to:"/book/commands/parse.html"},{default:a(()=>[O]),_:1}),R]),U,e("ol",null,[e("li",null,[j,t(s,{to:"/book/commands/into_string.html"},{default:a(()=>[G]),_:1}),K,J]),Q,e("li",null,[Y,t(s,{to:"/book/commands/build-string.html"},{default:a(()=>[ee]),_:1}),ne,se])]),te,e("ol",null,[e("li",null,[ae,t(s,{to:"/book/commands/into.html"},{default:a(()=>[oe]),_:1}),ie,le])]),re,e("p",null,[ce,t(s,{to:"/book/commands/ansi.html"},{default:a(()=>[de]),_:1}),pe]),he,ue])}var be=i(d,[["render",ge],["__file","working_with_strings.html.vue"]]);export{be as default};
