(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{476:function(e,a,t){e.exports=t.p+"assets/img/0_14_0_help_examples.df4fadcd.png"},548:function(e,a,t){"use strict";t.r(a);var o=t(35),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"nushell-0-14-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-14-0"}},[e._v("#")]),e._v(" Nushell 0.14.0")]),e._v(" "),o("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),o("p",[e._v("We're excited to release version 0.14.0 of Nu!")]),e._v(" "),o("h1",{attrs:{id:"where-to-get-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),o("p",[e._v("Nu 0.14.0 is available as "),o("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.14.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),o("OutboundLink")],1),e._v(" or from "),o("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),o("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),o("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),o("p",[e._v("If you want more goodies, you can install "),o("code",[e._v("cargo install nu --features=stable")]),e._v(".")]),e._v(" "),o("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),o("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),o("h1",{attrs:{id:"what-s-new"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),o("h2",{attrs:{id:"temporary-environment-variables-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#temporary-environment-variables-jonathandturner"}},[e._v("#")]),e._v(" Temporary environment variables (jonathandturner)")]),e._v(" "),o("p",[e._v("A feature requested by many, many folks is finally here. Up until now, to change an environment variable, you had to update the "),o("code",[e._v("config")]),e._v(" settings, and then these changes would be permanent. This makes working with certain kinds of commands, which need some additional environment information, annoying to use.")]),e._v(" "),o("p",[e._v("With 0.14.0, you'll now be able to temporarily set an environment variable. To do so, you can use the new "),o("code",[e._v("with-env")]),e._v(" command. This command takes the variable/value pair and the block to run once the environment is set:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> with-env [DEBUG true] { command arg1 arg2 }\n")])])]),o("p",[e._v("Bash, as well as many other shells, use a handy shorthand form, which we also now support. You can write the above as:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> DEBUG=true command arg1 arg2\n")])])]),o("h2",{attrs:{id:"starting-things-off-right-1ntegr8"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-things-off-right-1ntegr8"}},[e._v("#")]),e._v(" Starting things off right (1ntEgr8)")]),e._v(" "),o("p",[e._v("Modern desktops have a way to associate file types with applications and often have a way to run that application automatically when you open a file of that type. In macOS, you can use the "),o("code",[e._v("open")]),e._v(" command, "),o("code",[e._v("start")]),e._v(" on Windows, and a variety of related "),o("code",[e._v("start")]),e._v(" command in Linux.")]),e._v(" "),o("p",[e._v("In 0.14.0, we've added a unified "),o("code",[e._v("start")]),e._v(" command that works across platforms that will run the associated application for a file type. For example, if you've associated your .py files with VSCode, you can edit them now using "),o("code",[e._v("start myfile.py")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"nu-gets-a-calendar-josephtlyons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nu-gets-a-calendar-josephtlyons"}},[e._v("#")]),e._v(" Nu gets a calendar (JosephTLyons)")]),e._v(" "),o("p",[e._v("A fun surprise for this release is the recently-added "),o("code",[e._v("cal")]),e._v(" command, which will give you a calendar in table form.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> cal\n───┬────────┬────────┬─────────┬───────────┬──────────┬────────┬──────────\n # │ sunday │ monday │ tuesday │ wednesday │ thursday │ friday │ saturday\n───┼────────┼────────┼─────────┼───────────┼──────────┼────────┼──────────\n 0 │        │        │         │           │          │      1 │        2\n 1 │      3 │      4 │       5 │         6 │        7 │      8 │        9\n 2 │     10 │     11 │      12 │        13 │       14 │     15 │       16\n 3 │     17 │     18 │      19 │        20 │       21 │     22 │       23\n 4 │     24 │     25 │      26 │        27 │       28 │     29 │       30\n 5 │     31 │        │         │           │          │        │\n───┴────────┴────────┴─────────┴───────────┴──────────┴────────┴──────────\n")])])]),o("p",[e._v("You can pass in flags to give you additional columns for the year, month, and even get calendars from the past or future.")]),e._v(" "),o("h2",{attrs:{id:"commands-get-some-helpful-examples-elichai"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commands-get-some-helpful-examples-elichai"}},[e._v("#")]),e._v(" Commands get some helpful examples (elichai)")]),e._v(" "),o("p",[e._v("A last minute update also gave us a big improvement in our built-in help. Starting with 0.14, we'll now have examples as part of the help commands can use:")]),e._v(" "),o("p",[o("img",{attrs:{src:t(476),alt:"image of new command help with colored example"}})]),e._v(" "),o("p",[e._v("We're working to add examples to all commands. If that's something you're interested in helping with, come join us on "),o("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"subcommands-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#subcommands-jonathandturner"}},[e._v("#")]),e._v(" Subcommands (jonathandturner)")]),e._v(" "),o("p",[e._v("As we fill out more forms of commands that Nu can represent, one type that we weren't able to do was subcommands. This meant all of our commands were at the top level, making it more difficult to find what you needed. Additionally, many external commands use subcommands, which meant we had no way to effectively wrap them in Nu.")]),e._v(" "),o("p",[e._v("With 0.14, you can now define subcommands. Subcommands each get a unique signature which has its own coloring, autocomplete, etc.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> open myfile.txt | from csv --headerless\n")])])]),o("h2",{attrs:{id:"breaking-changes-renaming-some-commands-jonathandturner-andrasio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes-renaming-some-commands-jonathandturner-andrasio"}},[e._v("#")]),e._v(" Breaking changes: renaming some commands (jonathandturner, andrasio)")]),e._v(" "),o("p",[e._v("You may have noticed above that the "),o("code",[e._v("from-csv")]),e._v(" is now "),o("code",[e._v("from csv")]),e._v(", that is, the "),o("code",[e._v("csv")]),e._v(" part is now a subcommand of the "),o("code",[e._v("from")]),e._v(" command. We've moved all "),o("code",[e._v("from-*")]),e._v(" and "),o("code",[e._v("to-*")]),e._v(" commands to be subcommands. This change was requested by users as part of an effort to streamline how conversion commands work.")]),e._v(" "),o("p",[e._v("Another set of changes requested by users was to update the names of some of the commands to the more common forms:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("pick")]),e._v(" is now "),o("code",[e._v("select")]),e._v(". This matches more closely with SQL, LINQ, and shells with similar functionality.")]),e._v(" "),o("li",[o("code",[e._v("edit")]),e._v(" is now "),o("code",[e._v("update")])])]),e._v(" "),o("p",[e._v("While we are cautious to take breaking changes, we're confident - judging from user feedback - that these changes make Nu more ergonomic and easier to learn.")]),e._v(" "),o("h2",{attrs:{id:"ls-learns-read-directory-sizes-josephtlyons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ls-learns-read-directory-sizes-josephtlyons"}},[e._v("#")]),e._v(" "),o("code",[e._v("ls")]),e._v(" learns read directory sizes (JosephTLyons)")]),e._v(" "),o("p",[e._v("A few users have wondered why Nu doesn't print the full directory size as part of "),o("code",[e._v("ls")]),e._v(". With 0.14, you'll now be able to get just that with the new "),o("code",[e._v("--du")]),e._v(" argument to "),o("code",[e._v("ls")]),e._v(". Note: this isn't enabled by default as calculating the directory size can take quite a lot of processing.")]),e._v(" "),o("h2",{attrs:{id:"startup-speedups-fdncred"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#startup-speedups-fdncred"}},[e._v("#")]),e._v(" Startup speedups (fdncred)")]),e._v(" "),o("p",[e._v("It's important to make a good first impression, and with this release Nu gets a speed boost for the initial startup. It will now load plugins in parallel rather than one after another. In some cases, this can lead to startups 3x-4x faster than previous versions.")]),e._v(" "),o("h2",{attrs:{id:"auto-cd-speedups-quebin31"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auto-cd-speedups-quebin31"}},[e._v("#")]),e._v(" Auto-cd speedups (quebin31)")]),e._v(" "),o("p",[e._v("We've also gotten a boost when using the automatic change directory. You'll notice that 0.14 is a lot snappier when you type a directory to automatically jump to.")]),e._v(" "),o("h2",{attrs:{id:"lots-of-new-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lots-of-new-commands"}},[e._v("#")]),e._v(" Lots of new commands")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("from eml")]),e._v(" (aeshirey) - have lots of saved emails lying around and want to process them? With 0.14, you can now easily load them into Nu")]),e._v(" "),o("li",[o("code",[e._v("empty?")]),e._v(" (andrasio) - you can now check multiple columns for emptiness, and if empty, give them a value")]),e._v(" "),o("li",[o("code",[e._v("skip-until")]),e._v(", "),o("code",[e._v("keep-while")]),e._v(", "),o("code",[e._v("keep-until")]),e._v(" (andrasio) - similar to "),o("code",[e._v("skip-while")]),e._v(", you can optionally "),o("code",[e._v("skip")]),e._v(" or "),o("code",[e._v("keep")]),e._v(" rows if they meet a condition or until they meet a condition")]),e._v(" "),o("li",[o("code",[e._v("merge")]),e._v(" (andrasio) - ever have two related tables and wish you could merge them into one? The new "),o("code",[e._v("merge")]),e._v(" command can help you do that")]),e._v(" "),o("li",[o("code",[e._v("not-in:")]),e._v(" operator (jonathandturner) - going along with the "),o("code",[e._v("in:")]),e._v(" operator is the new "),o("code",[e._v("not-in:")]),e._v(", which checks that a value isn't in the given list")])]),e._v(" "),o("h2",{attrs:{id:"it-expansion-jonathandturner-thegedge"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-expansion-jonathandturner-thegedge"}},[e._v("#")]),e._v(" It-expansion (jonathandturner, thegedge)")]),e._v(" "),o("p",[e._v("We've streamlined how "),o("code",[e._v("$it")]),e._v(" is handled. The "),o("code",[e._v("$it")]),e._v(" variable has always implied iteration ("),o("code",[e._v("$it")]),e._v(' gets the name from iteration, item, and being "it"). In 0.14, we\'ve made this more explicit with an expansion that happens inside of Nu.')]),e._v(" "),o("p",[e._v("Now, with Nu sees an "),o("code",[e._v("$it")]),e._v(", it expands it to a full "),o("code",[e._v("each")]),e._v(" call.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ls | echo $it.name\n")])])]),o("p",[e._v("Internally, now expands to:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ls | each { echo $it.name }\n")])])]),o("p",[e._v("This helps us be more uniform about when iteration will happen. We've also updated how externals are handled so they can take advantage of this, making them work a lot more closely with how internals work.")]),e._v(" "),o("h2",{attrs:{id:"doc-and-book-updates-nespera-jonathandturner-fdncred-jzaefferer-siedentop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#doc-and-book-updates-nespera-jonathandturner-fdncred-jzaefferer-siedentop"}},[e._v("#")]),e._v(" Doc and book updates (nespera, jonathandturner, fdncred, jzaefferer, siedentop)")]),e._v(" "),o("p",[e._v("We're continuing to fill out help information on each of the commands. This release adds a few more to the list of documented commands.")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("book"),o("OutboundLink")],1),e._v(" has also gone through a big revision to bring it up-to-date with the 0.14 release. We've also added tables to help you transition from Bash, PowerShell, SQL, and LINQ. A big thanks to our contributors to help find and fix issues. There's more work to do here. If you're writing-inclined, come join us!")]),e._v(" "),o("h2",{attrs:{id:"bugfixes-and-polish-quebin31-burniintree-avandesa-pka-homburg-rimathia-thegedge-jonathandturner-mhmdanas-jesterornot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bugfixes-and-polish-quebin31-burniintree-avandesa-pka-homburg-rimathia-thegedge-jonathandturner-mhmdanas-jesterornot"}},[e._v("#")]),e._v(" Bugfixes and polish (quebin31, BurNiinTree, avandesa, pka, homburg, rimathia, thegedge, jonathandturner, mhmdanas, JesterOrNot)")]),e._v(" "),o("p",[e._v('Lots of bugfixes and polish for this release. A big "thanks!" to everyone that joined in and filed bugs, fixed bugs, and gave feedback on discord, github, and twitter.')]),e._v(" "),o("h1",{attrs:{id:"looking-forward"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),o("p",[e._v("We've got lots of fun things planned for upcoming releases: more intelligent autocomplete, autocomplete for popular external commands, and more streamlining of the engine itself.")]),e._v(" "),o("p",[e._v("If you'd like to help out by writing code, writing docs, helping with the website, or just have an idea, come join us on "),o("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),o("OutboundLink")],1),e._v(". We'd love to hear from you!")])])}),[],!1,null,null,null);a.default=n.exports}}]);