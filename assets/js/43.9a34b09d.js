(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{543:function(e,a,t){"use strict";t.r(a);var n=t(35),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nushell-0-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-8-0"}},[e._v("#")]),e._v(" Nushell 0.8.0")]),e._v(" "),t("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),t("p",[e._v("We're happy to announce the 0.8.0 release of Nu. This continues a series of internal improvements, with better stability and correctness, and, of course, new features.")]),e._v(" "),t("h1",{attrs:{id:"where-to-get-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),t("p",[e._v("Nu 0.8.0 is available as "),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.8.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),t("OutboundLink")],1),e._v(" or from "),t("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),t("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),t("p",[e._v("If you want more goodies, you can install "),t("code",[e._v("cargo install nu --features=stable")]),e._v(".")]),e._v(" "),t("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),t("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("❯ ls nu_plugin_* | sort-by name | get name\n────┬──────────────────────\n #  │ <value>\n────┼──────────────────────\n  0 │ nu_plugin_average\n  1 │ nu_plugin_binaryview\n  2 │ nu_plugin_fetch\n  3 │ nu_plugin_inc\n  4 │ nu_plugin_match\n  5 │ nu_plugin_post\n  6 │ nu_plugin_ps\n  7 │ nu_plugin_str\n  8 │ nu_plugin_sum\n  9 │ nu_plugin_sys\n 10 │ nu_plugin_textview\n 11 │ nu_plugin_tree\n────┴──────────────────────\n")])])]),t("h1",{attrs:{id:"unwrapping-your-presents-jonathandturner-andrasio-with-help-from-ubsan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unwrapping-your-presents-jonathandturner-andrasio-with-help-from-ubsan"}},[e._v("#")]),e._v(" Unwrapping your presents (jonathandturner, andrasio, with help from ubsan)")]),e._v(" "),t("p",[e._v("A classic trick when writing Rust is to use the "),t("code",[e._v(".unwrap()")]),e._v(' method. This method gives you a quick way to say "panic if you see this happen". When prototyping, it\'s easy to use this as a way to develop code more quickly, but as a codebase matures you move away from it.')]),e._v(" "),t("p",[e._v("It was time for Nu to move away from using this shortcut. Fixing the unwraps is a lot of work, but the end result is a codebase that reports errors more reliably and doesn't panic as often if something unexpected happens -- which just is what you want when you're making a shell!")]),e._v(" "),t("p",[e._v("We're happy to say there are now no more unwraps in the Nu codebase. We have more improvements in mind, but this already is a big upgrade from where we were a few weeks ago.")]),e._v(" "),t("h1",{attrs:{id:"clippy-cleanliness-thibran-vorot93-jonathandturner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clippy-cleanliness-thibran-vorot93-jonathandturner"}},[e._v("#")]),e._v(" Clippy cleanliness (thibran, vorot93, jonathandturner)")]),e._v(" "),t("p",[e._v("Along the same theme of making code as clean as we can, we recently adopted using the "),t("code",[e._v("clippy")]),e._v(" tool. Clippy is a tool to help point out common mistakes or inefficiencies in your Rust code. The end result of working through its warnings is often a cleaner looking codebase that's also a bit more efficient as a result.")]),e._v(" "),t("p",[e._v("The Nu codebase is now clippy-clean, and we're enforcing this on every new checkin to the codebase.")]),e._v(" "),t("h1",{attrs:{id:"improved"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improved"}},[e._v("#")]),e._v(" Improved")]),e._v(" "),t("h2",{attrs:{id:"which-gets-better-avandesa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#which-gets-better-avandesa"}},[e._v("#")]),e._v(" "),t("code",[e._v("which")]),e._v(" gets better (avandesa)")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v("\n───────┬──────────────────────────┬─────────\n arg   │ path                     │ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("builtin")]),e._v("\n───────┼──────────────────────────┼─────────\n "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" │ nushell built-in "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" │ Yes\n───────┴──────────────────────────┴─────────\n")])])]),t("p",[e._v("We're in the process of improving some of our existing built-in commands to make them more Nu-like. In this release, the "),t("code",[e._v("which")]),e._v(" command has a bit more of a Nu-feel. It will tell you the path and if the command is an internal builtin command or an external command.")]),e._v(" "),t("h2",{attrs:{id:"ps-gets-better-jonathandturner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps-gets-better-jonathandturner"}},[e._v("#")]),e._v(" "),t("code",[e._v("ps")]),e._v(" gets better (jonathandturner)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("─────┬───────┬──────────────────────────────────────┬──────────┬─────────┬──────────┬──────────\n #   │ pid   │ name                                 │ status   │ cpu     │ mem      │ virtual\n─────┼───────┼──────────────────────────────────────┼──────────┼─────────┼──────────┼──────────\n 250 │  4729 │ ibus-engine-simple                   │ Sleeping │  0.0000 │   3.3 MB │ 176.7 MB\n 251 │  5964 │ gedit                                │ Sleeping │  0.0000 │  29.2 MB │ 496.5 MB\n 252 │  5860 │ seahorse                             │ Sleeping │  0.0000 │  24.0 MB │ 488.7 MB\n 253 │  6594 │ gnome-terminal-server                │ Sleeping │  0.0000 │  47.8 MB │ 675.0 MB\n")])])]),t("p",[e._v("The "),t("code",[e._v("ps")]),e._v(' command has gained a few new columns: "mem" and "virtual" for helping you track memory usage.')]),e._v(" "),t("h2",{attrs:{id:"openoffice-ods-support-coolshaurya"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openoffice-ods-support-coolshaurya"}},[e._v("#")]),e._v(" OpenOffice .ods support (coolshaurya)")]),e._v(" "),t("p",[e._v("Fresh off the presses is initial support for opening .ods files. Similarly to our xlsx support, this will allow you to open .ods files and read in their data, separated by the sheets.")]),e._v(" "),t("h2",{attrs:{id:"improved-keyboard-navigation-aloso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improved-keyboard-navigation-aloso"}},[e._v("#")]),e._v(" Improved keyboard navigation (Aloso)")]),e._v(" "),t("p",[e._v("We now support moving left by-word using the ctrl+left and ctrl+right keyboard shortcuts.")]),e._v(" "),t("h1",{attrs:{id:"new-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-commands"}},[e._v("#")]),e._v(" New commands")]),e._v(" "),t("h2",{attrs:{id:"uniq-notryanb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uniq-notryanb"}},[e._v("#")]),e._v(" uniq (notryanb)")]),e._v(" "),t("p",[e._v("With 0.8.0, you'll also be able to remove duplicate rows from your tables with the "),t("code",[e._v("uniq")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open test.csv\n───┬────────────┬───────────┬────────────┬──────\n # │ first_name │ last_name │ rusty_at   │ type\n───┼────────────┼───────────┼────────────┼──────\n 0 │ Andrés     │ Robalino  │ 10/11/2013 │ A\n 1 │ Andrés     │ Robalino  │ 10/11/2013 │ A\n 2 │ Jonathan   │ Turner    │ 10/12/2013 │ B\n 3 │ Yehuda     │ Katz      │ 10/11/2013 │ A\n───┴────────────┴───────────┴────────────┴──────\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open test.csv | uniq\n───┬────────────┬───────────┬────────────┬──────\n # │ first_name │ last_name │ rusty_at   │ type\n───┼────────────┼───────────┼────────────┼──────\n 0 │ Andrés     │ Robalino  │ 10/11/2013 │ A\n 1 │ Jonathan   │ Turner    │ 10/12/2013 │ B\n 2 │ Yehuda     │ Katz      │ 10/11/2013 │ A\n───┴────────────┴───────────┴────────────┴──────\n")])])]),t("h1",{attrs:{id:"new-built-in-variable-jonathandturner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-built-in-variable-jonathandturner"}},[e._v("#")]),e._v(" New built-in variable (jonathandturner)")]),e._v(" "),t("p",[e._v("With 0.8.0, we've moved away from the "),t("code",[e._v("$nu:path")]),e._v(" built-ins. Now, there's just one built-in for internal values: "),t("code",[e._v("$nu")]),e._v(". Using "),t("code",[e._v("echo $nu")]),e._v(" will show you the table of current values.")]),e._v(" "),t("h1",{attrs:{id:"fixing-bugs-jonathandturner-sandorex-miller-time-quebin31-thegedge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-bugs-jonathandturner-sandorex-miller-time-quebin31-thegedge"}},[e._v("#")]),e._v(" Fixing bugs (jonathandturner, sandorex, miller-time, quebin31, thegedge)")]),e._v(" "),t("p",[e._v("As always, we also fixed bugs. In 0.8.0, you'll see improvements with UTF-8, the "),t("code",[e._v("pick")]),e._v(" command, correctly handling required positional arguments, CTRL+L clear screen, and faster response times for external commands.")]),e._v(" "),t("h1",{attrs:{id:"what-s-coming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-coming"}},[e._v("#")]),e._v(" What's coming")]),e._v(" "),t("p",[e._v("We're well on our way to 0.10.0. That's right, we're not close to our 1.0 release just yet. After 0.9, we'll continue with a release every three weeks. Expect to see Nu continue to mature and stabilize.")])])}),[],!1,null,null,null);a.default=s.exports}}]);