(window.webpackJsonp=window.webpackJsonp||[]).push([[849],{1366:function(e,a,t){"use strict";t.r(a);var s=t(35),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"custom-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-commands"}},[e._v("#")]),e._v(" Custom commands")]),e._v(" "),t("p",[e._v("Nu's ability to compose long pipelines allow you a lot of control over your data and system, but it comes at the price of a lot of typing. Ideally, you'd be able to save your well-crafted pipelines to use again and again.")]),e._v(" "),t("p",[e._v("This is where custom commands come in.")]),e._v(" "),t("p",[e._v("An example definition of a custom command:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def greet [name] {\n  echo "hello" $name\n}\n')])])]),t("p",[e._v("In this definition, we define the "),t("code",[e._v("greet")]),e._v(" command, which takes a single parameter "),t("code",[e._v("name")]),e._v(". Following this parameter is the block that represents what will happen with the custom command runs. When called, the custom command will set the value passed for "),t("code",[e._v("name")]),e._v(" as the "),t("code",[e._v("$name")]),e._v(" variable, which will be available to the block.")]),e._v(" "),t("p",[e._v("To run the above, we can call it like we would call built-in commands:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> greet "world"\n')])])]),t("p",[e._v("As we do, we also get output just as we would with built-in commands:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("───┬───────\n 0 │ hello\n 1 │ world\n───┴───────\n")])])]),t("h2",{attrs:{id:"command-names"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-names"}},[e._v("#")]),e._v(" Command names")]),e._v(" "),t("p",[e._v("In Nushell, a command name a string of characters or a quoted string. Here are some examples of valid command names: "),t("code",[e._v("greet")]),e._v(", "),t("code",[e._v("get-size")]),e._v(", "),t("code",[e._v("mycommand123")]),e._v(", "),t("code",[e._v('"mycommand"')]),e._v(", "),t("code",[e._v("😊")]),e._v(", and "),t("code",[e._v("123")]),e._v(".")]),e._v(" "),t("p",[t("em",[e._v("Note: It's common practice in Nushell to separate the words of the command with "),t("code",[e._v("-")]),e._v(" for better readability.")]),e._v(" For example "),t("code",[e._v("get-size")]),e._v(" instead of "),t("code",[e._v("getsize")]),e._v(" or "),t("code",[e._v("get_size")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"sub-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sub-commands"}},[e._v("#")]),e._v(" Sub-commands")]),e._v(" "),t("p",[e._v("You can also define subcommands to commands using a space. For example, if we wanted to add a new subcommand to "),t("code",[e._v("str")]),e._v(', we can create it by naming our subcommand to start with "str ". For example:')]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def "str mycommand" [] {\n  echo hello\n}\n')])])]),t("p",[e._v("Now we can call our custom command as if it were a built-in subcommand of "),t("code",[e._v("str")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> str mycommand\n")])])]),t("h2",{attrs:{id:"parameter-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-types"}},[e._v("#")]),e._v(" Parameter types")]),e._v(" "),t("p",[e._v("When defining custom commands, you can name and optionally set the type for each parameter. For example, you can write the above as:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def greet [name: string] {\n  echo "hello" $name\n}\n')])])]),t("p",[e._v("The types of parameters are optional. Nushell supports leaving them off, and treating the parameter as "),t("code",[e._v("any")]),e._v(" if so. If you annotated a type on a parameter, Nushell will check this type when you call the function.")]),e._v(" "),t("p",[e._v("For example, let's say you wanted to take in an "),t("code",[e._v("int")]),e._v(" instead:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def greet [name: int] {\n  echo "hello" $name\n}\n\ngreet world\n')])])]),t("p",[e._v("If we try to run the above, Nushell will tell us that the types don't match:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("error: Type Error\n  ┌─ shell:6:7\n  │\n5 │ greet world\n  │       ^^^^^ Expected int, found world\n")])])]),t("p",[e._v("This can help you guide users of your definitions to call them with only the supported types.")]),e._v(" "),t("p",[e._v("The currently accepted types are (as of version 0.28.0):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int, string, path, table, unit, number, pattern, range, block, any\n")])])]),t("h2",{attrs:{id:"flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),t("p",[e._v("In addition to passing positional parameters, you can also pass named parameters by defining flags for your custom commands.")]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("def greet [\n  name: string\n  --age: int\n] {\n  echo $name $age\n}\n")])])]),t("p",[e._v("In the "),t("code",[e._v("greet")]),e._v(" definition above, we define the "),t("code",[e._v("name")]),e._v(" positional parameter as well as an "),t("code",[e._v("age")]),e._v(" flag. This allows the caller of "),t("code",[e._v("greet")]),e._v(" to optionally pass the "),t("code",[e._v("age")]),e._v(" parameter as well.")]),e._v(" "),t("p",[e._v("You can call the above using:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> greet world --age 10\n")])])]),t("p",[e._v("Or:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> greet --age 10 world\n")])])]),t("p",[e._v("Or even leave the flag off altogether:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> greet world\n")])])]),t("p",[e._v("Flags can also be defined to have a shorthand version. This allows you to pass a simpler flag as well as a longhand, easier-to-read flag.")]),e._v(" "),t("p",[e._v("Let's extend the previous example to use a shorthand flag for the "),t("code",[e._v("age")]),e._v(" value:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("def greet [\n  name: string\n  --age (-a): int\n] {\n  echo $name $age\n}\n")])])]),t("p",[t("em",[e._v("Note:")]),e._v(" Flags are named by their longhand name, so the above example would need to use "),t("code",[e._v("$age")]),e._v(" and not "),t("code",[e._v("$a")]),e._v(".")]),e._v(" "),t("p",[e._v("Now, we can call this updated definition using the shorthand flag:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> greet -a 10 hello\n")])])]),t("h2",{attrs:{id:"documenting-your-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documenting-your-command"}},[e._v("#")]),e._v(" Documenting your command")]),e._v(" "),t("p",[e._v("In order to best help users of your custom commands, you can also document them with additional descriptions for the commands and the parameters.")]),e._v(" "),t("p",[e._v("Taking our previous example:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("def greet [\n  name: string\n  --age (-a): int\n] {\n  echo $name $age\n}\n")])])]),t("p",[e._v("Once defined, we can run "),t("code",[e._v("help greet")]),e._v(" to get the help information for the command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Usage:\n  > greet <name> {flags}\n\nParameters:\n  <name>\n\nFlags:\n  -h, --help: Display this help message\n  -a, --age <integer>\n")])])]),t("p",[e._v("You can see the parameter and flag that we defined, as well as the "),t("code",[e._v("-h")]),e._v(" help flag that all commands get.")]),e._v(" "),t("p",[e._v("To improve this help, we can add descriptions to our definition that will show up in the help:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# A greeting command that can greet the caller\ndef greet [\n  name: string      # The name of the person to greet\n  --age (-a): int   # The age of the person\n] {\n  echo $name $age\n}\n")])])]),t("p",[e._v("The comments that we put on the definition and its parameters then appear as descriptions inside the "),t("code",[e._v("help")]),e._v(" of the command.")]),e._v(" "),t("p",[e._v("Now, if we run "),t("code",[e._v("help greet")]),e._v(", we're given a more helpful help text:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("A greeting command that can greet the caller\n\nUsage:\n  > greet <name> {flags}\n\nParameters:\n  <name> The name of the person to greet\n\nFlags:\n  -h, --help: Display this help message\n  -a, --age <integer>: The age of the person\n")])])]),t("h2",{attrs:{id:"output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),t("p",[e._v("Custom commands stream their output just like built-in commands. For example, let's say we wanted to refactor this pipeline:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> ls | get name\n")])])]),t("p",[e._v("Let's move "),t("code",[e._v("ls")]),e._v(" into a command that we've written:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("def my-ls [] { ls }\n")])])]),t("p",[e._v("We can use the output from this command just as we would "),t("code",[e._v("ls")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> my-ls | get name\n───┬───────────────────────\n 0 │ myscript.nu\n 1 │ myscript2.nu\n 2 │ welcome_to_nushell.md\n───┴───────────────────────\n")])])]),t("p",[e._v("This lets us easily build custom commands and process their output. Note, we don't use return statements like other languages. Instead, we build pipelines that output streams of data that can be connected to other pipelines.")]),e._v(" "),t("h2",{attrs:{id:"input"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" Input")]),e._v(" "),t("p",[e._v("Custom commands can also take input, just like other commands. This input is passed from the pipeline to the block that the custom command uses.")]),e._v(" "),t("p",[e._v("Let's make our own echo command that also outputs a line after each value that it gets from the input:")]),e._v(" "),t("div",{staticClass:"language-nushell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('def my-echo [] {\n  each {\n    echo $it "--"\n  }\n}\n')])])]),t("p",[e._v("Now, if we call the above command later in a pipeline, we can see what it does with the input:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> echo foo bar | my-echo\n───┬─────\n 0 │ foo\n 1 │ --\n 2 │ bar\n 3 │ --\n───┴─────\n")])])]),t("h2",{attrs:{id:"persisting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#persisting"}},[e._v("#")]),e._v(" Persisting")]),e._v(" "),t("p",[e._v("For information about how to persist custom commands so that they're visible when you start up Nushell, see the "),t("RouterLink",{attrs:{to:"/old_book/configuration.html#startup-commands"}},[e._v("configuration chapter")]),e._v(" and add your custom commands to the "),t("code",[e._v("startup")]),e._v(" section.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);