(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{1054:function(e,s,n){"use strict";n.r(s);var t=n(35),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"einfuhrung"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#einfuhrung"}},[e._v("#")]),e._v(" Einführung")]),e._v(" "),n("p",[e._v("Hallo und herzlich Willkommen beim Nushell Projekt. Das Ziel diese Projekts ist es, die Philosophie von Unix Shells, wo Pipes einfache Befehle miteinander verbinden, mit modernen Ansätzen zu verbinden.")]),e._v(" "),n("p",[e._v("Nu ist von vielen Seiten beeinflusst: traditionelle Shells wie Bash, objektbasierte Shells wie PowerShell, funktionale Programmierung, Systems Programming und viele Weitere. Aber statt die eierlegende Wollmilchsau zu sein, liegt der Fokus von Nu darauf, die angebotenen Funktionen gut zu beherrschen:")]),e._v(" "),n("ul",[n("li",[e._v("Flexible cross-plattform Shell mit einem modernen Verhalten")]),e._v(" "),n("li",[e._v("Ausgaben von Kommandozeilenprogrammen mit einer Shell zu verarbeiten, die Struktur von Daten versteht")]),e._v(" "),n("li",[e._v("Ein Interface besitzen, das den modernen Bedürfnissen gerecht wird")])]),e._v(" "),n("p",[e._v("Der einfachste Weg zu verstehen, was Nu alles leisten kann, ist entlang von Beispielen. Los geht's!")]),e._v(" "),n("p",[e._v("Das Erste was auffällt, wenn ein Befehl wie "),n("code",[e._v("ls")]),e._v(" ausgeführt wird, ist, dass anstatt eines Blocks von Text eine strukturierte Tabelle als Ausgabe erscheint.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  │         name          │ type │   size    │  modified   │")]),e._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("404")]),e._v(".html              │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("429")]),e._v(" B │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ CONTRIBUTING.md       │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("955")]),e._v(" B │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" mins ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ Gemfile               │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ Gemfile.lock          │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.9")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ LICENSE               │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ README.md             │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("213")]),e._v(" B │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),n("p",[e._v("Diese Tabelle ist mehr als nur eine andere Darstellungsform. Wie Tabellen in Spreadsheets erlaubt es diese Tabelle mit den Daten interaktiver zu arbeiten.")]),e._v(" "),n("p",[e._v("Um das zu demonstrieren, wird der Inhalt der Tabelle zunächst nach der Größe sortiert. Um das zu realisieren, wird die Ausgabe von "),n("code",[e._v("ls")]),e._v(" genommen und in ein Befehl gegeben, der Tabellen auf Basis von Daten in einer Spalte neu anordnen kann.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" sort-by size "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" reverse\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  │         name          │ type │   size    │  modified   │")]),e._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ Gemfile.lock          │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.9")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ SUMMARY.md            │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.7")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ Gemfile               │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ LICENSE               │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ CONTRIBUTING.md       │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("955")]),e._v(" B │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(" mins ago  │\n│  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ books.md              │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("687")]),e._v(" B │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago  │\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),n("p",[e._v("Um das Ganze zu realisieren, mussten hierzu nicht Argumente an "),n("code",[e._v("ls")]),e._v(" übergeben werden. Stattdessen wird der "),n("code",[e._v("sort-by")]),e._v(" Befehl verwendet, den Nu bereitstellt, um Daten zu sortieren. Damit die größten Dateien oben erscheinen wurde zusätzlich die Option "),n("code",[e._v("reverse")]),e._v(" angegeben.")]),e._v(" "),n("p",[e._v("Nu stellt sehr viele Befehle bereit, die mit Tabellen arbeiten können. Beispielsweise kann die Ausgabe von "),n("code",[e._v("ls")]),e._v(" auch derart gefiltert werden, dass nur Datei mit einer Größe von mehr als einem Kilobyte angezeigt werden:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" where size "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" 1kb\n╭───┬───────────────────┬──────┬─────────┬────────────╮\n│ "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# │       name        │ type │  size   │  modified  │")]),e._v("\n├───┼───────────────────┼──────┼─────────┼────────────┤\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ Gemfile           │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago │\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ Gemfile.lock      │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.9")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago │\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ LICENSE           │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago │\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ SUMMARY.md        │ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.7")]),e._v(" KiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" days ago │\n╰───┴───────────────────┴──────┴─────────┴────────────╯\n")])])]),n("p",[e._v("Wie in der Unix-Philosophie, erlauben Befehle, die untereinander Daten austauschen können, viele verschiedene Kombinationen um Aufgaben zu lösen. Wie in folgendem Beispiel:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮\n│  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │")]),e._v("\n├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤\n│   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("7570")]),e._v(" │ nu                   │ Running │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.96")]),e._v(" │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("23.2")]),e._v(" MiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("32.8")]),e._v(" GiB │\n│   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3533")]),e._v(" │ remindd              │ Sleep   │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.00")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("103.6")]),e._v(" MiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("32.3")]),e._v(" GiB │\n│   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3495")]),e._v(" │ TVCacheExtension     │ Sleep   │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.00")]),e._v(" │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("11.9")]),e._v(" MiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("32.2")]),e._v(" GiB │\n│   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3490")]),e._v(" │ MusicCacheExtension  │ Sleep   │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.00")]),e._v(" │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("12.9")]),e._v(" MiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("32.2")]),e._v(" GiB │\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),n("p",[e._v("Der "),n("code",[e._v("ps")]),e._v(" Befehl erlaubt es auf Linux-Systemen alle laufenden Prozesse, deren Status und Name abzufragen. Des Weiteren gibt er Informationen zu CPU-Last der einzelnen Prozesse an.")]),e._v(" "),n("p",[e._v("Was macht man, wenn man nur Prozesse sehen möchte, die aktuelle aktiv die CPU nutzen? Wie zuvor beim "),n("code",[e._v("ls")]),e._v(" Befehl, kann mit der durch "),n("code",[e._v("ps")]),e._v(" zurückgegebenen Tabelle gearbeitet werden:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" where cpu "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮\n│ "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │")]),e._v("\n├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1583")]),e._v(" │ Terminal       │ Running │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("20.69")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.8")]),e._v(" MiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("33.0")]),e._v(" GiB │\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("579")]),e._v(" │ photoanalysisd │ Running │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("139.50")]),e._v(" │  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("99.9")]),e._v(" MiB │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("32.3")]),e._v(" GiB │\n╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯\n")])])]),n("p",[e._v("Bis jetzt wurden "),n("code",[e._v("ls")]),e._v(" und "),n("code",[e._v("ps")]),e._v(" genutzt, um Dateien und Prozesse aufzulisten. Nu besitzt aber noch viele weitere Befehle die nützliche Informationen in Tabellenform ausgeben. Dazu wird nun ein Block auf die Befehle "),n("code",[e._v("date")]),e._v(" und "),n("code",[e._v("sys")]),e._v(" geworfen.")]),e._v(" "),n("p",[e._v("Wenn "),n("code",[e._v("date now")]),e._v(" aufgerufen wird, werden Informationen zum aktuellen Datum und der aktuellen Uhrzeit ausgegeben.")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" now\n"),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v("-03-07 "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":14:51.684619600 -08:00\n")])])]),n("p",[e._v("Um das Datum in Tabellenform zu bekommen, kann es zusätzlich in "),n("code",[e._v("date to-table")]),e._v(" gegeben werden:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" now "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" to-table\n╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮\n│ "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# │ year │ month │ day │ hour │ minute │ second │ timezone │")]),e._v("\n├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" │   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(" │     "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("45")]),e._v(" │      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ -08:00   │\n╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯\n")])])]),n("p",[e._v("Der Aufruf von "),n("code",[e._v("sys")]),e._v(" gibt Informationen zum System aus, auf dem Nu läuft:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" sys\n╭───────┬───────────────────╮\n│ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("  │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("record "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" │\n│ cpu   │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("table "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("    │\n│ disks │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("table "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("    │\n│ mem   │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("record "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" │\n│ temp  │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("table "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("     │\n│ net   │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("table "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("    │\n╰───────┴───────────────────╯\n")])])]),n("p",[e._v("Diese Ausgabe unterscheidet sich nun von den vorherigen. Der "),n("code",[e._v("sys")]),e._v(" Befehl gibt eine Tabelle zurück, die selbst strukturierte Tabellen in den Zellen enthält anstatt nur einfache Werte. Um auf die Daten zuzugreifen, wird der "),n("em",[e._v("get")]),e._v(" Befehl verwendet:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" sys "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("\n╭────────────────┬────────────────────────╮\n│ name           │ Debian GNU/Linux       │\n│ os version     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v("                     │\n│ kernel version │ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.10")]),e._v(".92-v8+            │\n│ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("hostname")]),e._v("       │ lifeless               │\n│ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("uptime")]),e._v("         │ 19day 21hr 34min 45sec │\n│ sessions       │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("table "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("          │\n╰────────────────┴────────────────────────╯\n")])])]),n("p",[e._v("Der "),n("code",[e._v("get")]),e._v(' Befehl erlaubt es, in die Inhalte einer Tabellenzelle einzutauchen. Hier wird beispielsweise die Spalte "host" näher betrachtet, die Informationen über den Host, auf dem Nu läuft, enthält. Der Name des Betriebssystem (OS), die CPU und mehr. Nun sollen die Namen der Nutzer auf dem System ausgegeben werden:')]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" sys "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get host.sessions.name\n╭───┬────╮\n│ "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ jt │\n╰───┴────╯\n")])])]),n("p",[e._v('Aktuelle existiert nur ein Nutzer namens "jt". Wie zu sehen ist, kann ein ganzer Pfad für Spalten angegeben werden - nicht nur der Name der Spalte. Nu wird den Pfad nehmen und durch die entsprechenden Daten in der Tabelle gehen.')]),e._v(" "),n("p",[e._v('Und noch etwas anderes ist anders. Anstatt einer Tabelle mit Daten wurde nur ein einzelnes Element ausgegeben: der String "jt". Nu arbeitet sowohl mit Tabellen voller Daten als auch mit Strings. Strings sind ein wichtiger Bestandteil, um mit Befehlen außerhalb von Nu zu arbeiten.')]),e._v(" "),n("p",[e._v("Nun soll aufgezeigt werden, wie mit Strings außerhalb von Nu gearbeitet wird. Dazu wird das vorige Beispiel erweitert. Die Daten werden an den externen "),n("code",[e._v("echo")]),e._v(" Befehl weitergegeben (das "),n("code",[e._v("^")]),e._v(" teilt Nu mit, dass nicht der eingebaute "),n("code",[e._v("echo")]),e._v(" Befehl verwendet werden soll):")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" sys "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get host.sessions.name "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" each "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("it"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" ^echo "),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$it")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\njt\n")])])]),n("p",[e._v("Das sieht jetzt genau gleich aus wie die Ausgabe zuvor. Was soll das? Es ist ähnlich aber mit einem entscheidenden Unterschied: "),n("code",[e._v("^echo")]),e._v(" wurde aufgerufen. Das erlaubt es uns Daten aus Nu heraus an beliebige Befehle außerhalb von Nu zu geben wie "),n("code",[e._v("echo")]),e._v(" oder "),n("code",[e._v("git")]),e._v(".")]),e._v(" "),n("p",[n("em",[e._v("Hinweis: Hilfe zu allen in Nu eingebauten Befehlen kann mit dem Befehl "),n("code",[e._v("help")]),e._v(" angezeigt werden")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" path\nExplore and manipulate paths.\n\nThere are three ways to represent a path:\n\n* As a path literal, e.g., "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/home/viking/spam.txt'")]),e._v("\n* As a structured path: a table with "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'parent'")]),e._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'stem'")]),e._v(", and "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'extension'")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("and\n* "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'prefix'")]),e._v(" on Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" columns. This "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("format")]),e._v(" is produced by the "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'path parse'")]),e._v("\n  subcommand.\n* As an inner list of path parts, e.g., "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'[[ / home viking spam.txt ]]'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n  Splitting into parts is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v(" by the "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("path "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("split")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" command.\n\nAll subcommands accept all three variants as an input. Furthermore, the "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'path\njoin'")]),e._v(" subcommand can be used to "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("join")]),e._v(" the structured path or path parts back into\nthe path literal.\n\nUsage:\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" path\n\nSubcommands:\n  path "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("basename")]),e._v(" - Get the final component of a path\n  path "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("dirname")]),e._v(" - Get the parent directory of a path\n  path exists - Check whether a path exists\n  path "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("expand")]),e._v(" - Try to "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("expand")]),e._v(" a path to its absolute form\n  path "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("join")]),e._v(" - Join a structured path or a list of path parts.\n  path parse - Convert a path into structured data.\n  path relative-to - Get a path as relative to another path.\n  path "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("split")]),e._v(" - Split a path into parts by a separator.\n  path "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" - Get the "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" of the object a path refers to "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e.g., file, dir, symlink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nFlags:\n  -h, --help\n      Display this "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" message\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);