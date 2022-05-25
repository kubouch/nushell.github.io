(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{472:function(t,e,a){t.exports=a.p+"assets/img/0_6_0_starship_prompt.e741bdbd.png"},540:function(t,e,a){"use strict";a.r(e);var s=a(35),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nushell-0-6-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-6-0"}},[t._v("#")]),t._v(" Nushell 0.6.0")]),t._v(" "),s("p",[t._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),t._v(" "),s("p",[t._v("We're happy to announce the 0.6.0 release of Nu. This release has a bunch of new features, bugfixes, and general improvements.")]),t._v(" "),s("h1",{attrs:{id:"where-to-get-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[t._v("#")]),t._v(" Where to get it")]),t._v(" "),s("p",[t._v("Nu 0.6.0 is available as "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.6.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-built binaries"),s("OutboundLink")],1),t._v(" or from "),s("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[t._v("crates.io"),s("OutboundLink")],1),t._v(". If you have Rust installed you can install it using "),s("code",[t._v("cargo install nu")]),t._v(" (or if you want all the features "),s("code",[t._v("cargo install nu --all-features")]),t._v(").")]),t._v(" "),s("h1",{attrs:{id:"starship-support-southclaws-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starship-support-southclaws-jonathandturner"}},[t._v("#")]),t._v(" Starship support (Southclaws, jonathandturner)")]),t._v(" "),s("p",[s("img",{attrs:{src:a(472),alt:"Example of starship prompt"}}),t._v(" "),s("em",[t._v("Welcome to the starship!")])]),t._v(" "),s("p",[t._v("Having a configurable prompt has been a regularly requested feature, dating back to our first release of Nu. With 0.6.0, we're excited to show off the ability to integrate with "),s("a",{attrs:{href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("starship"),s("OutboundLink")],1),t._v(". Starship is a powerful prompt being built in Rust, and it includes tons of fun features.")]),t._v(" "),s("p",[t._v("To use the Starship support, enable the starship feature (the binary releases will have this on by default). After this, you'll want to "),s("a",{attrs:{href:"https://starship.rs/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("configure starship"),s("OutboundLink")],1),t._v(" to meet your needs.")]),t._v(" "),s("p",[t._v("Here's the config I use in the screenshot above:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('❯ cat ~/.config/starship.toml\nadd_newline = false\n\n[git_branch]\nsymbol = "📙 "\n\n[git_status]\ndisabled = true\n')])])]),s("p",[t._v("To enable Starship support, make sure to enable the "),s("code",[t._v("starship")]),t._v(" feature, or to use the all-features build:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> cargo install nu --features starship-prompt\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> cargo install nu --all-features\n")])])]),s("h1",{attrs:{id:"stable-rust-est31"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stable-rust-est31"}},[t._v("#")]),t._v(" Stable Rust (est31)")]),t._v(" "),s("p",[t._v("Nu now works on stable Rust!")]),t._v(" "),s("p",[t._v("Contributor est31 did a ton of work soon after our first Nu release, but it wasn't until just recently that it fully paid off. With the Rust 1.39 release, Nu now fully works on stable Rust! We're excited for what this means for package authors, as they will now have a stable dependency they can use to build Nu from, rather than tracking nightly.")]),t._v(" "),s("h1",{attrs:{id:"new-website-new-blog-sebastian-xyz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-website-new-blog-sebastian-xyz"}},[t._v("#")]),t._v(" New website! New blog! (sebastian-xyz)")]),t._v(" "),s("p",[t._v("We're starting to work on an actual website, complete with a blog. In fact, where you're seeing this now is on our new site. We're excited to finally have something more official, and looking forward to growing the website in the weeks to come.")]),t._v(" "),s("p",[t._v("If you're a web developer or designer and you want to help out, please join us! You can find us on the "),s("a",{attrs:{href:"https://github.com/nushell/nushell.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("website repo"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/nushell/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog repo"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h1",{attrs:{id:"new-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[t._v("#")]),t._v(" New features")]),t._v(" "),s("h2",{attrs:{id:"histogram-andrasio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#histogram-andrasio"}},[t._v("#")]),t._v(" histogram (andrasio)")]),t._v(" "),s("p",[t._v("As we extend Nu's ability to function as a shell, we also wanted to include some features that help with doing some data analysis on structured data you're working with. In this release is a new "),s("code",[t._v("histogram")]),t._v(" feature which gives a quick histogram of the data you're looking at:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" tests/fixtures/formats/caco3_plastics.csv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" histogram origin\n━━━┯━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ origin   │ frequency")]),t._v("\n───┼──────────┼─────────────────────────────────────────────────────────────────────────────────────────────────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ COLOMBIA │ ***********************************************************************************************\n   │          │ *****\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ SPAIN    │ ************************************************************\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ TURKEY   │ ********************\n━━━┷━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),s("h2",{attrs:{id:"split-by-andrasio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-andrasio"}},[t._v("#")]),t._v(" split-by (andrasio)")]),t._v(" "),s("p",[t._v("When working with tables inside of tables, it's sometimes helpful to be able to group and regroup data so that the end result can be easily processed or charted. With this release, we've add a new command: "),s("code",[t._v("split-by")]),t._v(". Split-by is similar to "),s("code",[t._v("group-by")]),t._v(", in a way you can think of it as a re-group as it will create new groups to wrap your existing groups.")]),t._v(" "),s("p",[t._v("To see how this works, let's say we have some shipping data, and we want to group these by the region:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" tests/fixtures/formats/caco3_plastics.csv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" group-by origin\n\n━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━\n SPAIN          │ COLOMBIA       │ TURKEY\n────────────────┼────────────────┼────────────────\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━\n")])])]),s("p",[t._v("Next, let's say we know that inside of these new columns is a table that has a column called "),s("code",[t._v("shipped_at")]),t._v(". What we want to do is to "),s("code",[t._v("group-by")]),t._v(" again, but this time use that new column to create new groups:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/home/jonathan/Source/nushell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("better_duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" tests/fixtures/formats/caco3_plastics.csv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" group-by origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" split-by shipped_at\n━━━━━━━━━━━━━┯━━━━━━━━━━━━━┯━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("/03/2016  │ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("/07/2016  │ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("/06/2016  │ 07/07/2016     │ 01/01/1900     │ 01/11/2016     │ 04/10/2016\n─────────────┼─────────────┼─────────────┼────────────────┼────────────────┼────────────────┼──────────────\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row SPAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row SPAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row SPAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row COLOMBIA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row COLOMBIA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row COLOMBIA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row TURKEY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n━━━━━━━━━━━━━┷━━━━━━━━━━━━━┷━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━\n")])])]),s("p",[t._v("What we have as a result is a kind of (row, column) grouping of the table data, which would allow you to graph for each date on one axis, and for each origin on the other.")]),t._v(" "),s("h2",{attrs:{id:"default-and-compact-andrasio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-and-compact-andrasio"}},[t._v("#")]),t._v(" default and compact (andrasio)")]),t._v(" "),s("p",[t._v("One of the sticky issues working with tables is that sometimes you'll have gaps in the data. Perhaps there just isn't a value for that row.")]),t._v(" "),s("p",[t._v("To help with that, we've added two new commands: "),s("code",[t._v("default")]),t._v(" and "),s("code",[t._v("compact")]),t._v(".")]),t._v(" "),s("p",[t._v("Default, as the name implies, will allow you to give blank spots a default value. Compact instead will allow you to remove a row if there's a blank in that position.")]),t._v(" "),s("p",[t._v("Here's an example of default:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" amigos.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get amigos\n━━━┯━━━━━━━━━━━┯━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ name      │ rusty_luck")]),t._v("\n───┼───────────┼────────────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Yehuda    │          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ Jonathan  │          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ Andres    │          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ GorbyPuff │\n━━━┷━━━━━━━━━━━┷━━━━━━━━━━━━\n")])])]),s("p",[t._v("We can default the missing column from the table like this:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" amigos.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get amigos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" default rusty_luck "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" giving:\n\n━━━┯━━━━━━━━━━┯━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ name     │ rusty_luck")]),t._v("\n───┼──────────┼────────────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Yehuda   │          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ Jonathan │          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ Andres   │          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ GorbyPuff│          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n━━━┷━━━━━━━━━━┷━━━━━━━━━━━━\n")])])]),s("h2",{attrs:{id:"format-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-jonathandturner"}},[t._v("#")]),t._v(" format (jonathandturner)")]),t._v(" "),s("p",[t._v("To add to the abilities of outputting tables of various into readable strings, we've recently added the "),s("code",[t._v("format")]),t._v(" command. This allows you to convert table data into a string by following a formatting pattern:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name is {name}"')]),t._v("\n━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │ <value>")]),t._v("\n────┼────────────────────────────\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ name is .azure\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ name is features.toml\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ name is Cargo.toml\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ name is LICENSE\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" │ name is target\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" │ name is images\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" │ name is tests\n")])])]),s("h2",{attrs:{id:"from-xlsx-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-xlsx-jonathandturner"}},[t._v("#")]),t._v(" from-xlsx (jonathandturner)")]),t._v(" "),s("p",[t._v("We now have an early start at Excel support. With it, you can now import Excel files as tables.")]),t._v(" "),s("h1",{attrs:{id:"on-going-improvements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-going-improvements"}},[t._v("#")]),t._v(" On-going improvements")]),t._v(" "),s("p",[t._v("Lots of improvements to existing commands this time around.")]),t._v(" "),s("h2",{attrs:{id:"simple-and-full-ls-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-and-full-ls-jonathandturner"}},[t._v("#")]),t._v(" Simple and full "),s("code",[t._v("ls")]),t._v(" (jonathandturner)")]),t._v(" "),s("p",[t._v("To make "),s("code",[t._v("ls")]),t._v(" work better on smaller terminals (including the bog standard 80x24 login size), we've shrunk "),s("code",[t._v("ls")]),t._v(" a tiny bit by default. Have no worry, though, the original columns and more are available in the new "),s("code",[t._v("ls --full")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"fuzzy-matching-bndbsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-matching-bndbsh"}},[t._v("#")]),t._v(" Fuzzy matching (bndbsh)")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("❯ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yml"')]),t._v("\n━━━━━━━━━━━━━┯━━━━━━┯━━━━━━━┯━━━━━━━━━━━━┯━━━━━━━━━━━━\n name        │ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" │ size  │ accessed   │ modified\n─────────────┼──────┼───────┼────────────┼────────────\n .gitpod.yml │ File │ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("780")]),t._v(" B │ a week ago │ a week ago\n━━━━━━━━━━━━━┷━━━━━━┷━━━━━━━┷━━━━━━━━━━━━┷━━━━━━━━━━━━\n")])])]),s("p",[t._v("A long-requested feature is the ability to match strings a bit more fuzzily. With 0.6.0, you'll be able to do just that with the new "),s("code",[t._v("=~")]),t._v(" (fuzzy match to include) and "),s("code",[t._v("!~")]),t._v(" (fuzzy match to exclude) commands.")]),t._v(" "),s("h2",{attrs:{id:"from-csv-now-with-separator-drmason13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-csv-now-with-separator-drmason13"}},[t._v("#")]),t._v(" "),s("code",[t._v("from-csv")]),t._v(", now with separator (drmason13)")]),t._v(" "),s("p",[t._v("Sometimes you might find a .csv file in the wild that uses a different separator than comma. You can now configure "),s("code",[t._v("from-csv")]),t._v(" to use a different character as the separator using, for example, "),s("code",[t._v('from-csv --separator ";"')]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"nth-can-take-multiple-row-numbers-andrasio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nth-can-take-multiple-row-numbers-andrasio"}},[t._v("#")]),t._v(" nth can take multiple row numbers (andrasio)")]),t._v(" "),s("p",[t._v("You can now pass multiple row numbers to "),s("code",[t._v("nth")]),t._v(". For example "),s("code",[t._v("nth 1 3 5")]),t._v(" will return those three separate rows as a new table.")]),t._v(" "),s("h2",{attrs:{id:"column-paths-can-now-include-row-numbers-wycats-andrasio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column-paths-can-now-include-row-numbers-wycats-andrasio"}},[t._v("#")]),t._v(" Column paths can now include row numbers (wycats, andrasio)")]),t._v(" "),s("p",[t._v("Sometimes when you're trying to get to data inside an inner table, you want to describe travelling through a particular row to get there. With recent improvements, you can now include the row number in the column path (assuming it is not the first part of the path).")]),t._v(" "),s("h2",{attrs:{id:"duration-support-jonathandturner-aloso"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duration-support-jonathandturner-aloso"}},[t._v("#")]),t._v(" Duration support (jonathandturner, Aloso)")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("❯ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where accessed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" 1w\n━━━┯━━━━━━━━━━━━━━━┯━━━━━━━━━━━┯━━━━━━━━━━┯━━━━━━━━━━━━━┯━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ name          │ type      │ size     │ accessed    │ modified")]),t._v("\n───┼───────────────┼───────────┼──────────┼─────────────┼─────────────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Cargo.toml    │ File      │   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),t._v(" KB │ an hour ago │ an hour ago\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ Makefile.toml │ File      │    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("449")]),t._v(" B │ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" days ago  │ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" days ago\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ README.md     │ File      │  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19.5")]),t._v(" KB │ an hour ago │ an hour ago\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ Cargo.lock    │ File      │ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("170.7")]),t._v(" KB │ an hour ago │ an hour ago\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" │ crates        │ Directory │   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.1")]),t._v(" KB │ an hour ago │ an hour ago\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" │ TODO.md       │ File      │   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(" KB │ an hour ago │ an hour ago\n━━━┷━━━━━━━━━━━━━━━┷━━━━━━━━━━━┷━━━━━━━━━━┷━━━━━━━━━━━━━┷━━━━━━━━━━━━━\n")])])]),s("p",[t._v("It's now possible to use duration values in Nu. This allows us to check for files accessed less than a week ago, as you see in the example above.")]),t._v(" "),s("h2",{attrs:{id:"renamed-read-to-parse-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renamed-read-to-parse-jonathandturner"}},[t._v("#")]),t._v(" Renamed "),s("code",[t._v("read")]),t._v(" to "),s("code",[t._v("parse")]),t._v(" (jonathandturner)")]),t._v(" "),s("p",[t._v("To help with at-a-glance readability, we've renamed "),s("code",[t._v("read")]),t._v(" to "),s("code",[t._v("parse")]),t._v(". While "),s("code",[t._v("read")]),t._v(" felt more friendly, it could easily be confused for reading input, reading a file, etc.")]),t._v(" "),s("h1",{attrs:{id:"general-improvements-wycats-thegedge-drmason13-jonathandturner-uma1317-jesterornot-andrasio-burniintree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-improvements-wycats-thegedge-drmason13-jonathandturner-uma1317-jesterornot-andrasio-burniintree"}},[t._v("#")]),t._v(" General improvements (wycats, thegedge, drmason13, jonathandturner, uma1317, JesterOrNot, andrasio, BurNiinTRee)")]),t._v(" "),s("p",[t._v("There has been a ton of work behind the scenes on Nu itself. We now have a much-improved internal debugging system and better module separation courtesy of wycats. There are also a number of general cleanups and bugfixes that have gone into the release.")]),t._v(" "),s("h1",{attrs:{id:"survey-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#survey-results"}},[t._v("#")]),t._v(" Survey results")]),t._v(" "),s("p",[t._v("We recently ran a survey to ask Nu users/non-users what they thought of Nu. If you're interested, definitely check out the "),s("a",{attrs:{href:"https://www.nushell.sh/blog/2019-11-23-nushell-survey-results.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("results of the survey"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"looking-ahead"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[t._v("#")]),t._v(" Looking ahead")]),t._v(" "),s("p",[t._v("We're still hard at work on \"MVP #2\". It will be the next milestone on our way to the eventual 1.0. If you'd like to help with code, docs, translation, testing, or just want to come chat and throw ideas around, we'd love to have you! You can find us on "),s("a",{attrs:{href:""}},[t._v("discord")]),t._v(", "),s("a",{attrs:{href:"https://twitter.com/nu_shell",target:"_blank",rel:"noopener noreferrer"}},[t._v("twitter"),s("OutboundLink")],1),t._v(", and "),s("a",{attrs:{href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);