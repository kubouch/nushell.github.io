import{_ as s,o as l,c as o,a as n,b as i,w as c,e as t,d as e,r as a}from"./app.a3b5f9cc.js";const h={},u=t(`<h1 id="datentypen" tabindex="-1"><a class="header-anchor" href="#datentypen" aria-hidden="true">#</a> Datentypen</h1><p>Traditionellerweise haben Unix Shell Befehle immer \xFCber Text Zeichenketten kommuniziert. Eine Befehlsausgabe erfolgte als Text an den Standard Output (oft als <code>stout</code> bezeichnet), der n\xE4chste Befehl hat wiederum von Standard Input gelesen (oder <code>stdin</code>), was den beiden Befehlen die Kommunikation erm\xF6glicht hat.</p><p>Es wurde also Text basiert kommuniziert.</p><p>In Nu wird dies ebenfalls zelebriert sowie um weitere Arten von Daten erweitert. Momentan sind die zwei Arten von Datentypen: einfache und strukturierte.</p><p>Wie viele Programmiersprachen, verwendet Nu verschiedene einfache und strukturierte Datentypen. Einfache Datentypen beinhalten Ganzzahlen (integers), Fliesskommanzahlen (floats), Texte (strings), Wahrheitswerte (booleans), den Datumstyp (dates) und Pfade (paths). Sowie einen speziellen Datentypen f\xFCr Dateigr\xF6ssen.</p><h2 id="ganzzahlen-integers" tabindex="-1"><a class="header-anchor" href="#ganzzahlen-integers" aria-hidden="true">#</a> Ganzzahlen (integers)</h2><p>Ganzzahlen ohne Bruchwert, z.B. 1, 5 oder 100. Integers (or round) numbers. Examples include 1, 5, and 100.</p><h2 id="dezimalzahlen-decimals-or-floats" tabindex="-1"><a class="header-anchor" href="#dezimalzahlen-decimals-or-floats" aria-hidden="true">#</a> Dezimalzahlen (decimals or floats)</h2><p>Dezimalzahlen sind Zahlen mit einem Bruchanteil. Beispiele sind 1.5, 2.0 und 15.333.</p><h2 id="text-strings" tabindex="-1"><a class="header-anchor" href="#text-strings" aria-hidden="true">#</a> Text (strings)</h2><p>Eine Zeichenfolge die einen Text repr\xE4sentiert. Es gibt mehrere M\xF6glichkeiten einen Text in Nushell dar zu stellen:</p><p><strong>Doppelte Anf\xFChrungszeichen</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&quot;Mein Text&quot;
</code></pre></div><p>Doppelte Anf\xFChrungszeichen werden am h\xE4ufigsten verwendet und finden sich \xFCberall.</p><p><strong>Einfache Anf\xFChrungszeichen</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&#39;Mein Text&#39;
</code></pre></div><p>Einfache Anf\xFChrungszeichen ergeben ebenfalls einen Text zur\xFCck. Der Unterschied ist, dass sie es erlauben, doppelte Anf\xFChrungszeichen innerhalb des Textes zu verwenden: <code>&#39;Er sagte &quot;lasst uns anstossen?&quot;&#39;</code></p><p><strong>Text Erweiterung</strong> (interpolation) Nushell unterst\xFCtzt Text Erweiterung, was es erlaubt, Unterausdr\xFCcke innerhalb eines Textes zu verwenden. Diese werden mit <code>$</code> ausgedr\xFCckt:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $&quot;6 x 7 = (6 * 7)&quot;
6 x 7 = 42
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | each { |it| echo $&quot;($it.name) is ($it.size)&quot; }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 genawait is 4.1 KB
 1 \u2502 learncpp is 4.1 KB
 2 \u2502 nuscripts is 4.1 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><strong>blosse Texte</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo hello
</code></pre></div><p>Eine spezielle Eigenschaft von Nushell ist, dass ein Text mit nur einem Wort auch ganz ohne Anf\xFChrungszeichen erstellt werden kann.</p><p>Der Text oben ist das selbe als w\xE4re geschrieben:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;hello&quot;
</code></pre></div>`,25),p=e("Siehe auch "),g={href:"https://www.nushell.sh/book/loading_data.html#handling-strings",target:"_blank",rel:"noopener noreferrer"},b=e("Handling Strings"),m=e("."),f=t(`<h2 id="zeilen" tabindex="-1"><a class="header-anchor" href="#zeilen" aria-hidden="true">#</a> Zeilen</h2><p>Zeilen sind Texte inklusive Betriebsystem abgh\xE4ngigen Zeilenenden. Das Zeilenende wird entsprechend dem OS angeh\xE4ngt.</p><h2 id="spalten-pfade" tabindex="-1"><a class="header-anchor" href="#spalten-pfade" aria-hidden="true">#</a> Spalten Pfade</h2><p>Spalten Pfade sind Pfade in einer Tabelle, die zu einer spezifischen Untertabelle, einer Spalte, Zeile oder Zelle f\xFChren.</p><p>Zumb Beispiel: <code>foo.0.bar</code> in <code>open data.toml | get foo.0.bar</code></p><h2 id="glob-muster-wildcards" tabindex="-1"><a class="header-anchor" href="#glob-muster-wildcards" aria-hidden="true">#</a> Glob Muster (wildcards)</h2><p>In Nushell k\xF6nnen bei Dateioperationen glob Muster oder Wildcards verwendet werden. Dies erlaubt es einen Befehl ein zu geben, der auf mehrere Dateipfade passt.</p><p>Das \xFCblichste Musterzeichen ist der <code>*</code>, welches auf alle Pfade passt. Meisten wird es kombiniert zum Bespiel <code>*.bak</code> oder <code>temp*</code>.</p><p>Nushell unterst\xFCtzt auch doppelte <code>*</code> um tiefer geschachtelte Pfade zu durchlaufen. Zum Beispiel <code>ls **/*</code> wird alle nicht versteckten Pfade des aktuellen sowie darunterliegende Verzeichnisse auflisten.</p><p>Zus\xE4tzlich zum <code>*</code> gibt es das <code>?</code> Muster, als Platzhalter f\xFCr genau ein Zeichen. Zum Beispiel wird das Wort &quot;port&quot; gefunden mit <code>p???</code>.</p><h2 id="wahrheitswert-booleans" tabindex="-1"><a class="header-anchor" href="#wahrheitswert-booleans" aria-hidden="true">#</a> Wahrheitswert (Booleans)</h2><p>Booleans kennen nur den Zustand Wahr oder Falsch. Meistens werden diese nicht direkt geschrieben, sondern sind das resultat eines Vergleichs.</p><p>Die zwei m\xF6glichen Werte sind <code>true</code> und <code>false</code></p><h2 id="datumswerte-dates" tabindex="-1"><a class="header-anchor" href="#datumswerte-dates" aria-hidden="true">#</a> Datumswerte (dates)</h2><p>Datums- und Zeitwert geh\xF6ren beide als date-Typ zusammen. Datumswerte die das System kennt, sind Zeitzonen abh\xE4ngig und standardm\xE4ssig in der UTC Zeitzone.</p><p>Basierend auf RFC 3339 gibt es drei Datumsformate:</p><ul><li>A date: <ul><li><code>2022-02-02</code></li></ul></li><li>A date and time (in GMT): <ul><li><code>2022-02-02T14:30:00</code></li></ul></li><li>A date and time with timezone: <ul><li><code>2022-02-02T14:30:00+05:00</code></li></ul></li></ul><h2 id="zeitdauer-duration" tabindex="-1"><a class="header-anchor" href="#zeitdauer-duration" aria-hidden="true">#</a> Zeitdauer (Duration)</h2><p>Zeitdauern repr\xE4sentieren einen gewissen Zeitabschnitt. Eine Sekunde, 5 Wochen oder ein Jahr sind alles Zeitdauern.</p><p>Z.B.) <code>1wk</code> ist eine Zeitdauer von einer Woche.</p><p>Dieser Tabelle zeigt alle momentan unterst\xFCzten Zeitdauern:</p><table><thead><tr><th>Duration</th><th>Length</th></tr></thead><tbody><tr><td><code>1ns</code></td><td>one nanosecond</td></tr><tr><td><code>1us</code></td><td>one microsecond</td></tr><tr><td><code>1ms</code></td><td>one millisecond</td></tr><tr><td><code>1sec</code></td><td>one second</td></tr><tr><td><code>1min</code></td><td>one minute</td></tr><tr><td><code>1hr</code></td><td>one hour</td></tr><tr><td><code>1day</code></td><td>one day</td></tr><tr><td><code>1wk</code></td><td>one week</td></tr></tbody></table><h2 id="bereiche-ranges" tabindex="-1"><a class="header-anchor" href="#bereiche-ranges" aria-hidden="true">#</a> Bereiche (ranges)</h2><p>Ein Bereich ist ein Weg eine Sequenz von Werten von Start bis Ende darzustellen. Bereiche haben die Form &#39;start&#39; + &#39;..&#39; + &#39;end&#39; Zum Beispiel bedeutet <code>1..3</code> die Zahlen 1, 2 und 3.</p><h2 id="inklusive-und-nicht-inklusive-bereiche" tabindex="-1"><a class="header-anchor" href="#inklusive-und-nicht-inklusive-bereiche" aria-hidden="true">#</a> Inklusive und nicht inklusive Bereiche</h2><p>Bereiche sind standardm\xE4ssig inklusive, was bedeutet, dass der Endwert mit im Bereich inbegriffen ist. Der Bereich <code>1..3</code> beinhaltet die Zahl 3 ebenso als letzten Wert des Bereichs.</p><p>Manchmal ist vielleicht ein nicht inklusiver Bereich gew\xFCnscht, der den letzten Wert nicht im Output enth\xE4lt. Daf\xFCr kann die Form <code>..&lt;</code> anstatt <code>..</code> verwendet werden. Zum Beispiel <code>1..&lt;5</code> beinhaltet die Zahlen 1, 2, 3 und 4.</p><h2 id="bereiche-mit-offenem-ende" tabindex="-1"><a class="header-anchor" href="#bereiche-mit-offenem-ende" aria-hidden="true">#</a> Bereiche mit offenem Ende</h2><p>Bereiche k\xF6nnen auch offene Enden ausweisen. Dazu wird einfach der Start oder das Ende weggelassen.</p><p>Soll von der Zahl 3 an gez\xE4hlt werden, ohne aber ein specifisches Ende erreichen zu wollen, so kann der Bereich <code>3..</code> angegeben werden. Es ist zu beachten, dass wenn auf der rechten Seite ein offener Bereich verwendet wird, dann wird Nushell so lange z\xE4hlen wie m\xF6glich, was eine sehr lange Zeit sein kann. Oftmals macht ein solcher Bereich deshalb Sinn bei Befehlen wir <code>first</code>, um die Anzahl Elemente die angezeigt werden sollen konkret anzugeben.</p><p>Es ist umgekehrt auch m\xF6glich, den Start eines Bereiches offen zu lassen. In dem Falle z\xE4hlt Nushell von <code>0</code> an bis zum Ende Wert. Der Bereich <code>..2</code> entspricht also den Zahlen 0, 1 und 2.</p><h2 id="dateipfade" tabindex="-1"><a class="header-anchor" href="#dateipfade" aria-hidden="true">#</a> Dateipfade</h2><p>Dateipfade sind ein Plattform unabh\xE4ngiger Weg einen Pfad anzugeben im entsprechenden OS. Beispiele sind /usr/bin und C:\\Users\\file.txt.</p><h2 id="dateigrossen" tabindex="-1"><a class="header-anchor" href="#dateigrossen" aria-hidden="true">#</a> Dateigr\xF6ssen</h2><p>Dateigr\xF6ssen werden in einem speziellen integer Ganzzahltyp gespeichert, bytes genannt. Beispiele sind <code>100b</code>, <code>15kb</code> und <code>100mb</code>.</p><p>Die vollst\xE4ndige Liste von Dateigr\xF6ssen Einheiten sind:</p><ul><li><code>b</code>: bytes</li><li><code>kb</code>: kilobytes (aka 1000 bytes)</li><li><code>mb</code>: megabytes</li><li><code>gb</code>: gigabytes</li><li><code>tb</code>: terabytes</li><li><code>pb</code>: petabytes</li><li><code>kib</code>: kibibytes (aka 1024 bytes)</li><li><code>mib</code>: mebibytes</li><li><code>gib</code>: gibibytes</li><li><code>tib</code>: tebibytes</li><li><code>pib</code>: pebibytes</li></ul><h2 id="binardaten" tabindex="-1"><a class="header-anchor" href="#binardaten" aria-hidden="true">#</a> Bin\xE4rdaten</h2><p>Bin\xE4rdaten wie der Inhalt einer Bilddatei entspricht einer Gruppe von rohen (raw) bytes.</p><p>Bin\xE4r kann explizit w\xF6rtlich geschrieben werden in einer der Formen <code>0x[...]</code>, <code>0b[...]</code>, or <code>0o[...]</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; 0x[1F FF]  # Hexadecimal
&gt; 0b[1 1010] # Binary
&gt; 0o[777]    # Octal
</code></pre></div><p>Nicht vollst\xE4ndige bytes werden links mit Nullen aufgef\xFCllt (left-padded)</p><h2 id="strukturierte-daten" tabindex="-1"><a class="header-anchor" href="#strukturierte-daten" aria-hidden="true">#</a> Strukturierte Daten</h2><p>Strukturierte Daten werden aus einfachen Daten gebildet. Zum Beispiel kann anstatt einer Ganzzahl, mehrere Ganzzahlen in einem Wert als strukturierter Datentyp repr\xE4sentiert werden. Hier ist eine Liste aller bisher unterst\xFCtzen dtrukturierten Datentypen: records, lists und tables.</p><h2 id="wertepaare-records" tabindex="-1"><a class="header-anchor" href="#wertepaare-records" aria-hidden="true">#</a> Wertepaare (records)</h2><p>Wertepaare werden auch als key-value pairs bezeichnet, \xE4hnlich wie sie von JSON Objekten bekannt sind. Da diese manchmal viele Felder haben k\xF6nnen, werden Wertepaar von oben unten anstatt links-rechts dargestellt:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo {name: sam, rank: 10}
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name \u2502 sam \u2502
\u2502 rank \u2502 10  \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>\xDCber Wertepaare kann iteriert werden wenn sie zuerst in eine Tabelle transponiert werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo {name: sam, rank: 10} | transpose key value
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 # \u2502 key  \u2502 value \u2502
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0 \u2502 name \u2502  sam  \u2502
\u2502 1 \u2502 rank \u2502   10  \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="listen-lists" tabindex="-1"><a class="header-anchor" href="#listen-lists" aria-hidden="true">#</a> Listen (lists)</h2><p>Listen k\xF6nnen mehr als einen Wert beinhalten. Dies k\xF6nnen einfache Werte sein. Sie k\xF6nnen auch Zeilen beinhalten und bilden zusammen mit Wertepaaren, was man eine Tabelle (table) nennt.</p><p>Beispiel: Eine Liste von Texten</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [sam fred george]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 sam
 1 \u2502 fred
 2 \u2502 george
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="tabellen-tables" tabindex="-1"><a class="header-anchor" href="#tabellen-tables" aria-hidden="true">#</a> Tabellen (tables)</h2><p>Die Tabelle ist eine zentrale Datenstruktur in Nushell. Viele der eingebauten Befehle geben als Resultat eine Tabelle aus. Eine Tabelle besteht immer aus Zeilen und Spalten.</p><p>Eine Tabelle wird \xE4hnlich erstellt wie eine Liste. Weil diese auch Spalten und nicht nur Werte enth\xE4lt, geben wir die Spalten zuerst an:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[column1, column2]; [Value1, Value2]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Value1  \u2502 Value2
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Eine Tabelle mit mehreren Zeilen sieht dann so aus:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[column1, column2]; [Value1, Value2] [Value3, Value4]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Value1  \u2502 Value2
 1 \u2502 Value3  \u2502 Value4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Oder aus einer Liste von Wertepaaren:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [{name: sam, rank: 10}, {name: bob, rank: 7}]
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 # \u2502 name \u2502 rank \u2502
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0 \u2502 sam  \u2502   10 \u2502
\u2502 1 \u2502 bob  \u2502    7 \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="blocke-blocks" tabindex="-1"><a class="header-anchor" href="#blocke-blocks" aria-hidden="true">#</a> Bl\xF6cke (blocks)</h2><p>Unter einem Block versteht man einen Block aus Code. Wie im Befehl <code>each { |it| echo $it }</code> ist der Block der Teil in den geschweiften Klammern, also { |it| echo $it }<code>. Block Parameter werden zwischen zwei Pipe-Symbolen eingegeben (z.B. </code> |it| \`)</p>`,63),x=e("Bl\xF6cke sind ein praktischer Weg Code einzugeben, der auf jeder Zeile der Daten ausgef\xFChrt wird. Es ist \xFCblich "),w=n("code",null,"$it",-1),z=e(" als Parameter in "),k=n("code",null,"each",-1),v=e(" zu benutzen, aber nicht zwingend. "),B=n("code",null,"each { |x| echo $x }",-1),_=e("funktioniert gleich wie "),D=n("code",null,"each { |it| echo $it }",-1),y=e("."),Z=t(`<h2 id="gruppen-groups" tabindex="-1"><a class="header-anchor" href="#gruppen-groups" aria-hidden="true">#</a> Gruppen (groups)</h2><p>In diesem Beispiel:</p><div class="language-text ext-text"><pre class="language-text"><code>foo {
  line1
  line2; line3 | line4
}
</code></pre></div><p>gibt es zwei Gruppen, die ausgef\xFChrt werden. Eine Gruppe ist eine durch Strichpunkt getrennte Liste von Pipelines, wovon die letzte ausgegeben wird.</p><ul><li><code>line1</code> ist eine Gruppe f\xFCr sich, und wird deshalb ausgef\xFChrt und auf den Bildschirm ausgegeben.</li><li><code>line2</code> ist eine Pipeline innerhalb der zweiten Gruppe. Sie wird ausgef\xFChrt, das Ergebnis aber nicht ausgegeben.</li><li><code>line3</code> | <code>line4</code> ist die zweite Pipeline in der zweiten Gruppe. Sie wird ausgef\xFChrt und ausgegeben.</li></ul>`,5);function T(E,S){const d=a("ExternalLinkIcon"),r=a("RouterLink");return l(),o("div",null,[u,n("p",null,[p,n("a",g,[b,i(d)]),m]),f,n("p",null,[x,w,z,i(r,{to:"/book/commands/each.html"},{default:c(()=>[k]),_:1}),v,B,_,D,y]),Z])}var V=s(h,[["render",T],["__file","types_of_data.html.vue"]]);export{V as default};
