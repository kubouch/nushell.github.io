(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{1056:function(e,n,a){"use strict";a.r(n);var r=a(35),t=Object(r.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"eigene-befehle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eigene-befehle"}},[e._v("#")]),e._v(" Eigene Befehle")]),e._v(" "),a("p",[e._v("Die Fähigkeit von Nu, lange Pipelines zu verarbeiten, erlauben es große Kontrolle über Daten und das System zu haben. Das Ganze kommt allerdings zum Preis von viel Tipparbeit. Idealerweise sollte es eine Möglichkeit geben, mühsam gebaute Pipelines zu speichern und wieder und wieder auszuführen.")]),e._v(" "),a("p",[e._v("Hier kommen eigene Befehle ins Spiel.")]),e._v(" "),a("p",[e._v("Eine beispielhafte Definition eines eigenen Befehls sieht wie folgt aus:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def greet [name] {\n  echo "hello" $name\n}\n')])])]),a("p",[e._v("In dieser Definition, wird ein Befehl "),a("code",[e._v("greet")]),e._v(" beschrieben, der einen Parameter "),a("code",[e._v("name")]),e._v(" konsumiert. Nach diesem Parameter erfolgt die Beschreibung was passiert, wenn der Befehl ausgeführt wird. Wenn der Befehl aufgerufen wird, wird der Wert, der als Parameter "),a("code",[e._v("name")]),e._v(" übergeben wurde, in die Variable "),a("code",[e._v("$name")]),e._v(" geschrieben, die im Codeblock verfügbar ist.")]),e._v(" "),a("p",[e._v("Um den obigen Befehl auszuführen wird er wie ein eingebauter Befehl aufgerufen:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> greet "world"\n')])])]),a("p",[e._v("Wenn das getan wird, wird eine Ausgabe erzeugt, die wie die der eingebauten Befehle aussieht:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("───┬───────\n 0 │ hello\n 1 │ world\n───┴───────\n")])])]),a("h2",{attrs:{id:"namen-von-befehlen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namen-von-befehlen"}},[e._v("#")]),e._v(" Namen von Befehlen")]),e._v(" "),a("p",[e._v("In Nushell ist ein valider Name eines Befehls ein String aus Zeichen oder ein String in Anführungszeichen. Beispiele hierfür sind: "),a("code",[e._v("greet")]),e._v(", "),a("code",[e._v("get-size")]),e._v(", "),a("code",[e._v("mycommand123")]),e._v(", "),a("code",[e._v('"mycommand"')]),e._v(", "),a("code",[e._v("😊")]),e._v(" und "),a("code",[e._v("123")]),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("Hinweis: Es wird empfohlen Worte in Befehlen mit "),a("code",[e._v("-")]),e._v(" zur besseren Lesbarkeit zu trennen.")]),e._v(" Beispiele: "),a("code",[e._v("get-size")]),e._v(" anstatt "),a("code",[e._v("getsize")]),e._v(" oder "),a("code",[e._v("get_size")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"unterbefehle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unterbefehle"}},[e._v("#")]),e._v(" Unterbefehle")]),e._v(" "),a("p",[e._v("Es ist auch möglich Unterbefehle zu definieren. Dazu wird der Unterbefehl vom Superbefehl durch ein Leerzeichen getrennt. Wenn beispielsweise der Befehl "),a("code",[e._v("str")]),e._v(" durch einen Unterbefehl "),a("code",[e._v("mycommand")]),e._v(" erweitert werden soll, funktioniert das wie folgt:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def "str mycommand" [] {\n  echo hello\n}\n')])])]),a("p",[e._v("Jetzt kann der eigene Unterbefehl aufgerufen werden, als ob er ein eingebauter Befehl von "),a("code",[e._v("str")]),e._v(" wäre:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> str mycommand\n")])])]),a("h2",{attrs:{id:"typen-von-parametern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typen-von-parametern"}},[e._v("#")]),e._v(" Typen von Parametern")]),e._v(" "),a("p",[e._v("Wenn eigene Befehle definiert werden, kann optional auch der Typ jedes Parameters angegeben werden. Das obige Beispiel kann beispielsweise wie folgt abgeändert werden:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def greet [name: string] {\n  echo "hello" $name\n}\n')])])]),a("p",[e._v("Die Typen der Parameter anzugeben ist optional. Nushell erlaubt es diese wegzulassen und behandelt diese dann als Typ "),a("code",[e._v("any")]),e._v(". Es kann also jede Art von Typ verarbeitet werden. Wenn ein Typ angegeben wurde, überprüft Nushell den Typ, wenn die Funktion aufgerufen wird.")]),e._v(" "),a("p",[e._v("Beispielhaft soll nur noch ein "),a("code",[e._v("int")]),e._v(" als Typ erlaubt sein:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def greet [name: int] {\n  echo "hello" $name\n}\n\ngreet world\n')])])]),a("p",[e._v("Wenn versucht wird, den oberen Code auszuführen, wird Nu darauf aufmerksam machen, dass die Typen nicht passen und die Ausführung stoppen:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("error: Type Error\n  ┌─ shell:6:7\n  │\n5 │ greet world\n  │       ^^^^^ Expected int, found world\n")])])]),a("p",[e._v("Dies kann dabei helfen Nutzer darauf aufmerksam zu machen, welche Art von Typ erlaubt ist.")]),e._v(" "),a("p",[e._v("Die aktuell erlaubten Typen sind (mit Version 0.59.0 und neuer):")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("any")])]),e._v(" "),a("li",[a("code",[e._v("block")])]),e._v(" "),a("li",[a("code",[e._v("cell-path")])]),e._v(" "),a("li",[a("code",[e._v("duration")])]),e._v(" "),a("li",[a("code",[e._v("path")])]),e._v(" "),a("li",[a("code",[e._v("expr")])]),e._v(" "),a("li",[a("code",[e._v("filesize")])]),e._v(" "),a("li",[a("code",[e._v("glob")])]),e._v(" "),a("li",[a("code",[e._v("int")])]),e._v(" "),a("li",[a("code",[e._v("math")])]),e._v(" "),a("li",[a("code",[e._v("number")])]),e._v(" "),a("li",[a("code",[e._v("operator")])]),e._v(" "),a("li",[a("code",[e._v("range")])]),e._v(" "),a("li",[a("code",[e._v("cond")])]),e._v(" "),a("li",[a("code",[e._v("bool")])]),e._v(" "),a("li",[a("code",[e._v("signature")])]),e._v(" "),a("li",[a("code",[e._v("string")])]),e._v(" "),a("li",[a("code",[e._v("variable")])])]),e._v(" "),a("h2",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),a("p",[e._v("Zusätzlich zu den obigen Parametern, können auch namenabhängige Parameter verwendet werden, indem Flags für eigene Befehle definiert werden.")]),e._v(" "),a("p",[e._v("Zum Beispiel:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("def greet [\n  name: string\n  --age: int\n] {\n  echo $name $age\n}\n")])])]),a("p",[e._v("In der obigen Definition von "),a("code",[e._v("greet")]),e._v(", werden ein fester Parameter "),a("code",[e._v("name")]),e._v(" und eine Flag "),a("code",[e._v("age")]),e._v(" definiert. Damit ist es möglich, dem Befehl "),a("code",[e._v("greet")]),e._v(" optional den Parameter "),a("code",[e._v("age")]),e._v(" zu übergeben.")]),e._v(" "),a("p",[e._v("Das obige Beispiel kann wie folgt aufgerufen werden:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> greet world --age 10\n")])])]),a("p",[e._v("Oder:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> greet --age 10 world\n")])])]),a("p",[e._v("Oder gleich ganz ohne Flag:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> greet world\n")])])]),a("p",[e._v("Flags können auch so definiert werden, dass es eine Kurzform gibt. Das erlaubt es sowohl eine kurze als auch eine einfach lesbare lange Flag für die selbe Aufgabe zu haben.")]),e._v(" "),a("p",[e._v("Das Beispiel wird hier, um eine Kurzform für die Flag "),a("code",[e._v("age")]),e._v(" erweitert:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("def greet [\n  name: string\n  --age (-a): int\n] {\n  echo $name $age\n}\n")])])]),a("p",[a("em",[e._v("Hinweis:")]),e._v(" Flags sind benannt nach der langen Form des Namens. Im obigen Beispiel erfolgt der Zugriff immer über "),a("code",[e._v("$age")]),e._v(" und nicht über "),a("code",[e._v("$a")]),e._v(".")]),e._v(" "),a("p",[e._v("Nun kann diese neue Version von "),a("code",[e._v("greet")]),e._v(" wie folgt aufgerufen werden:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> greet -a 10 hello\n")])])]),a("h2",{attrs:{id:"dokumentation-fur-den-eigenen-befehl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dokumentation-fur-den-eigenen-befehl"}},[e._v("#")]),e._v(" Dokumentation für den eigenen Befehl")]),e._v(" "),a("p",[e._v("Um Nutzern eines eigenen Befehls zu helfen, können diese und ihre Parameter mit zusätzlichen Beschreibungen versehen werden.")]),e._v(" "),a("p",[e._v("Es wird weiterhin das obige Beispiel verwendet:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("def greet [\n  name: string\n  --age (-a): int\n] {\n  echo $name $age\n}\n")])])]),a("p",[e._v("Wenn der Befehl definiert ist kann "),a("code",[e._v("help greet")]),e._v(" aufgerufen werden, um Informationen zum Befehl zu erhalten:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage:\n  > greet <name> {flags}\n\nParameters:\n  <name>\n\nFlags:\n  -h, --help: Display this help message\n  -a, --age <integer>\n")])])]),a("p",[e._v("Wie zu sehen ist, werden der Parameter und die Flag, die definiert wurden, aufgelistet. Zusätzlich gibt es noch die Flag "),a("code",[e._v("-h")]),e._v(", die jeder Befehl hat.")]),e._v(" "),a("p",[e._v("Um diese Hilfe zu verbessern, können Beschreibungen zur Definition hinzugefügt werden:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# A greeting command that can greet the caller\ndef greet [\n  name: string      # The name of the person to greet\n  --age (-a): int   # The age of the person\n] {\n  echo $name $age\n}\n")])])]),a("p",[e._v("Diese Kommentare, die zur Definition und den Parametern hinzugefügt wurden, werden sichtbar, wenn die Hilfe zum Befehl aufgerufen wird.")]),e._v(" "),a("p",[e._v("Wenn jetzt "),a("code",[e._v("help greet")]),e._v(" ausgeführt wird, wird ein hilfreicherer Text angezeigt:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("A greeting command that can greet the caller\n\nUsage:\n  > greet <name> {flags}\n\nParameters:\n  <name> The name of the person to greet\n\nFlags:\n  -h, --help: Display this help message\n  -a, --age <integer>: The age of the person\n")])])]),a("h2",{attrs:{id:"ausgabe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ausgabe"}},[e._v("#")]),e._v(" Ausgabe")]),e._v(" "),a("p",[e._v("Eigene Befehle streamen ihre Ausgabe gleich wie eingebaute Befehle. Beispielsweise soll die folgende Pipeline umgebaut werden:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | get name\n")])])]),a("p",[a("code",[e._v("ls")]),e._v(" soll jetzt in einen neuen, eigenen Befehl verschoben werden:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("def my-ls [] { ls }\n")])])]),a("p",[e._v("Die Ausgabe dieses Befehls, kann identisch zur Ausgabe von "),a("code",[e._v("ls")]),e._v(" verwendet werden.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> my-ls | get name\n───┬───────────────────────\n 0 │ myscript.nu\n 1 │ myscript2.nu\n 2 │ welcome_to_nushell.md\n───┴───────────────────────\n")])])]),a("p",[e._v("Das erlaubt es sehr einfach eigene Befehle zu definieren und deren Ausgabe zu verwenden. Ein Hinweis: Es werden keine return Statements wie in anderen Sprachen verwendet. Stattdessen werden in Nushell Pipelines gebaut, die ihre Ausgabe zur verbundenen Pipeline streamen.")]),e._v(" "),a("h2",{attrs:{id:"eingabe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eingabe"}},[e._v("#")]),e._v(" Eingabe")]),e._v(" "),a("p",[e._v("Eigene Befehle können, wie andere Befehle, auch Eingaben verarbeiten. Diese Eingabe wird durch die Pipeline an den Codeblock des eigenen Befehls übergeben.")]),e._v(" "),a("p",[e._v("Hier soll nun beispielhaft ein eigener echo-Befehl definiert werden, der eine weitere Zeile nach jeder Zeile der Eingabe ausgibt:")]),e._v(" "),a("div",{staticClass:"language-nushell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def my-echo [] {\n  each {\n    echo $it "--"\n  }\n}\n')])])]),a("p",[e._v("Wenn dieser neue Befehl nun in einer Pipeline aufgerufen wird, sieht die Ausgabe wie folgt aus:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> echo foo bar | my-echo\n───┬─────\n 0 │ foo\n 1 │ --\n 2 │ bar\n 3 │ --\n───┴─────\n")])])]),a("h2",{attrs:{id:"persistenz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistenz"}},[e._v("#")]),e._v(" Persistenz")]),e._v(" "),a("p",[e._v("Um Informationen darüber zu erhalten, wie eigene Befehle bei jedem Start von Nushell verfügbar bleiben, sei auf das "),a("RouterLink",{attrs:{to:"/de/book/konfiguration.html"}},[e._v("Konfigurationskapitel")]),e._v(" verwiesen.")],1)])}),[],!1,null,null,null);n.default=t.exports}}]);