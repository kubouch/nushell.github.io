(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{1431:function(e,s,a){"use strict";a.r(s);var n=a(35),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("大家好，欢迎来到 Nushell 项目。这个项目的目标是彰显 Shell 的 Unix 哲学，就是用管道将简单的命令连接在一起，并且带来现代的开发风格。")]),e._v(" "),a("p",[e._v("Nu 从许多熟悉的领域中汲取了线索：bash 等传统 shell，PowerShell 等高级 shell，函数式编程，系统编程等。但是 Nu 并没有试图成为所有行业的杰作，而是将精力集中在做好一些事情上：")]),e._v(" "),a("ul",[a("li",[e._v("创建具有现代感的灵活的跨平台 Shell")]),e._v(" "),a("li",[e._v("允许你将命令行应用程序与可理解数据结构的 Shell 进行混合和匹配")]),e._v(" "),a("li",[e._v("具有现代命令行应用程序提供的用户体验优化")])]),e._v(" "),a("p",[e._v("了解 Nu 可以做什么的最简单方式就是通过一些例子，所以让我们沉浸进去吧。")]),e._v(" "),a("p",[e._v("当你运行一个类似 "),a("code",[e._v("ls")]),e._v(" 的命令时，第一个注意到的是所得到的不是一个文本块，而是一个结构化的表。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls\n────┬────────────────────┬──────┬────────┬────────────\n #  │ name               │ type │ size   │ modified\n────┼────────────────────┼──────┼────────┼────────────\n  0 │ 404.html           │ File │  429 B │ 3 days ago\n  1 │ CONTRIBUTING.md    │ File │  955 B │ 8 mins ago\n  2 │ Gemfile            │ File │ 1.1 KB │ 3 days ago\n  3 │ Gemfile.lock       │ File │ 6.9 KB │ 3 days ago\n  4 │ LICENSE            │ File │ 1.1 KB │ 3 days ago\n  5 │ README.md          │ File │  213 B │ 3 days ago\n...\n")])])]),a("p",[e._v("这个表不仅仅是用另一种方式显示了当前目录。就像电子表格中的表一样，我们可以更加交互性地处理数据。")]),e._v(" "),a("p",[e._v("我们做的第一件事是将表格通过尺寸来排序。为了做到这点，我们将会把 "),a("code",[e._v("ls")]),e._v(" 的输出喂给一个可以根据列的内容来排序表格的命令。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | sort-by size | reverse\n────┬────────────────────┬──────┬────────┬────────────\n #  │ name               │ type │ size   │ modified\n────┼────────────────────┼──────┼────────┼────────────\n  0 │ Gemfile.lock       │ File │ 6.9 KB │ 3 days ago\n  1 │ SUMMARY.md         │ File │ 3.7 KB │ 3 days ago\n  2 │ Gemfile            │ File │ 1.1 KB │ 3 days ago\n  3 │ LICENSE            │ File │ 1.1 KB │ 3 days ago\n  4 │ CONTRIBUTING.md    │ File │  955 B │ 9 mins ago\n  5 │ books.md           │ File │  687 B │ 3 days ago\n...\n")])])]),a("p",[e._v("你可以看到我们没有给 "),a("code",[e._v("ls")]),e._v(" 传递命令行参数。作为代替，我们使用了 Nu 提供的 "),a("code",[e._v("sort-by")]),e._v(" 命令来排序 "),a("code",[e._v("ls")]),e._v(" 的输出。为了让最大的文件位于顶部，我们还使用了 "),a("code",[e._v("reverse")]),e._v("。")]),e._v(" "),a("p",[e._v("Nu 提供了许多可在表格上工作的命令。例如，我们可以过滤 "),a("code",[e._v("ls")]),e._v(" 表格，只显示大于 1 KB 的文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | where size > 1kb\n───┬──────────────┬──────┬────────┬────────────\n # │ name         │ type │ size   │ modified\n───┼──────────────┼──────┼────────┼────────────\n 0 │ Gemfile      │ File │ 1.1 KB │ 3 days ago\n 1 │ Gemfile.lock │ File │ 6.9 KB │ 3 days ago\n 2 │ LICENSE      │ File │ 1.1 KB │ 3 days ago\n 3 │ SUMMARY.md   │ File │ 3.7 KB │ 3 days ago\n───┴──────────────┴──────┴────────┴────────────\n")])])]),a("p",[e._v("就像 Unix 哲学所体现的那样，作为可以相互交流的命令，为我们提供了许多种不同的配对。让我们看一个不同的命令：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ps\n─────┬───────┬──────────────────┬─────────┬─────────┬──────────┬─────────\n #   │ pid   │ name             │ status  │ cpu     │ mem      │ virtual\n─────┼───────┼──────────────────┼─────────┼─────────┼──────────┼─────────\n   0 │ 33155 │ nu_plugin_core_p │ Running │  3.8496 │   1.8 MB │  4.4 GB\n   1 │ 32841 │ mdworker_shared  │ Running │  0.0000 │  19.3 MB │  4.4 GB\n   2 │ 32829 │ CoreServicesUIAg │ Running │  0.0000 │  16.1 MB │  4.5 GB\n   3 │ 32828 │ mdworker_shared  │ Running │  0.0000 │  23.0 MB │  4.4 GB\n")])])]),a("p",[e._v("如果你使用过 Linux，可能会对 "),a("code",[e._v("ps")]),e._v(" 命令相当熟悉。这个命令为我们展示了系统所有正在运行的进程和它们的状态与名称。我们同样可以查看到它们的 CPU 占用。")]),e._v(" "),a("p",[e._v("如果我们想显示正在使用 CPU 的进程怎么办？ 就像我们之前使用 "),a("code",[e._v("ls")]),e._v(" 命令一样，我们也可以使用 "),a("code",[e._v("ps")]),e._v(" 命令返回的表：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ps | where cpu > 10\n───┬──────┬──────────────────┬─────────┬────────┬──────────┬─────────\n # │ pid  │ name             │ status  │ cpu    │ mem      │ virtual\n───┼──────┼──────────────────┼─────────┼────────┼──────────┼─────────\n 0 │ 3971 │ Google Chrome He │ Running │ 5.1263 │  99.4 MB │  5.5 GB\n 1 │  360 │ iTerm2           │ Running │ 6.6635 │ 218.6 MB │  6.0 GB\n───┴──────┴──────────────────┴─────────┴────────┴──────────┴─────────\n")])])]),a("p",[e._v("到目前为止，我们已经看到使用 "),a("code",[e._v("ls")]),e._v(" 和 "),a("code",[e._v("ps")]),e._v(" 列出文件和进程。 Nu 还提供了其他可以创建有用信息表的命令。 接下来，让我们探索"),a("code",[e._v("date")]),e._v(" 和 "),a("code",[e._v("sys")]),e._v("。")]),e._v(" "),a("p",[e._v("运行 "),a("code",[e._v("date")]),e._v(" 将给出当前日期与时间的信息：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> date\n──────────┬────────\n year     │ 2020\n month    │ 5\n day      │ 5\n hour     │ 21\n minute   │ 13\n second   │ 17\n timezone │ +02:00\n──────────┴────────\n")])])]),a("p",[e._v("运行 "),a("code",[e._v("sys")]),e._v(" 将给出 Nu 所运行的系统的信息：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> sys\n─────────┬─────────────────────────────────────────\n host    │ [row 7 columns]\n cpu     │ [row cores current ghz max ghz min ghz]\n disks   │ [table 2 rows]\n mem     │ [row free swap free swap total total]\n net     │ [table 11 rows]\n battery │ [table 1 rows]\n─────────┴─────────────────────────────────────────\n")])])]),a("p",[e._v("和之前的表有些不一样， "),a("code",[e._v("sys")]),e._v(" 命令给出的表在单元格内包含了另一些结构化的表格，而非简单的数值。为了查看到这些数据，我们需要选择要看的列：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> sys | get host\n──────────┬─────────────────────────────────────────────\n name     │ Linux\n release  │ 5.3.0-1019-azure\n version  │ #20-Ubuntu SMP Fri Mar 27 23:54:23 UTC 2020\n hostname │ lifeless\n arch     │ x86_64\n uptime   │ 8:03:47:32\n sessions │ [table 2 rows]\n──────────┴─────────────────────────────────────────────\n")])])]),a("p",[a("code",[e._v("get")]),e._v(' 命令让我们跳入表格中一列的内容。这样，我们正在观看 "host" 列，它包含了关于 Nu 所运行的主机的信息。操作系统的名字、主机名、CPU 架构等等。让我们看看系统上的用户名：')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> sys | get host.sessions\n───┬─────────\n # │ <value>\n───┼─────────\n 0 │ jonathan\n───┴─────────\n")])])]),a("p",[e._v("目前，系统上只有一个用户，名为 "),a("code",[e._v("jonathan")]),e._v("。 你会注意到，我们可以传递路径（ "),a("code",[e._v("host.sessions")]),e._v(" 部分），而不仅仅是传递列名。 Nu 将采用该路径并转到表中的相应数据位置。")]),e._v(" "),a("p",[e._v('您可能已经注意到其他的不同之处。 我们没有一个数据表，而是只有一个元素：字符串 "jonathan"。 Nu 使用数据表和字符串。 字符串是在 Nu 之外使用命令的重要组成部分。')]),e._v(" "),a("p",[e._v("让我们看看字符串如何在 Nu 之外起作用。 我们将从前面的示例开始，并运行外部的 "),a("code",[e._v("echo")]),e._v(" 命令（ "),a("code",[e._v("^")]),e._v(" 告诉 nu 不要使用内置的 "),a("code",[e._v("echo")]),e._v(" 命令）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> sys | get host.sessions | ^echo $it\njonathan\n")])])]),a("p",[e._v("如果这看起来与我们以前的传统 Shell 非常相似，那么就说明你拥有敏锐的眼睛！ 相似，但是有一个重要的区别：我们对前面看到的值调用了 "),a("code",[e._v("^echo")]),e._v(" 。 这允许我们将数据从 Nu 传递到 "),a("code",[e._v("echo")]),e._v("（或 Nu 外部的任何命令，例如 "),a("code",[e._v("git")]),e._v("）。")]),e._v(" "),a("p",[a("em",[e._v("注意：Nu 的内建命令的帮助文本可以用 "),a("code",[e._v("help")]),e._v(" 来浏览")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> help config\nConfiguration management.\n\nUsage:\n  > config <subcommand> {flags}\n\nSubcommands:\n  config get - Gets a value from the config\n  config set - Sets a value in the config\n  config set_into - Sets a value in the config\n  config clear - clear the config\n  config load - Loads the config from the path given\n  config remove - Removes a value from the config\n  config path - return the path to the config file\n\nFlags:\n  -h, --help: Display this help message\n")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);