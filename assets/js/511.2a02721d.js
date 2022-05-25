(window.webpackJsonp=window.webpackJsonp||[]).push([[511],{1027:function(e,t,a){"use strict";a.r(t);var s=a(35),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"thinking-in-nu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thinking-in-nu"}},[e._v("#")]),e._v(" Thinking in Nu")]),e._v(" "),a("p",[e._v("To help you understand - and get the most out of - Nushell, we've put together this section on \"thinking in Nushell\". By learning to think in Nushell and use the patterns it provides, you'll hit fewer issues getting started and be better setup for success.")]),e._v(" "),a("p",[e._v("So what does it mean to think in Nushell? Here are some common topics that come up with new users of Nushell.")]),e._v(" "),a("h2",{attrs:{id:"nushell-isn-t-bash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nushell-isn-t-bash"}},[e._v("#")]),e._v(" Nushell isn't bash")]),e._v(" "),a("p",[e._v("Nushell is both a programming language and a shell and because of this has its own way of working with files, directories, websites, and more. We've modeled this to work closely with what you may be familiar with other shells. Pipelines work by attaching two commands together:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | length\n")])])]),a("p",[e._v("Nushell, for example, also has support for other common capabilities like getting the exit code from previously run commands.")]),e._v(" "),a("p",[e._v("While it does have these amenities, Nushell isn't bash. The bash way of working, and the POSIX style in general, is not one that Nushell supports. For example, in bash, you might use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> echo "hello" > output.txt\n')])])]),a("p",[e._v("In Nushell, we use the "),a("code",[e._v(">")]),e._v(" as the greater-than operator. This fits better with the language aspect of Nushell. Instead, you pipe to a command that has the job of saving content:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> echo "hello" | save output.txt\n')])])]),a("p",[a("strong",[e._v("Thinking in Nushell:")]),e._v(" The way Nushell views data is that data flows through the pipeline until it reaches the user or is handled by a final command. Nushell uses commands to do work. Learning these commands and when to use them helps you compose many kinds of pipelines.")]),e._v(" "),a("h2",{attrs:{id:"think-of-nushell-as-a-compiled-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#think-of-nushell-as-a-compiled-language"}},[e._v("#")]),e._v(" Think of Nushell as a compiled language")]),e._v(" "),a("p",[e._v("An important part of Nushell's design and specifically where it differs from many dynamic languages is that Nushell converts the source you give it to something to run, and then runs the result. It doesn't have an "),a("code",[e._v("eval")]),e._v(" features which allows you to continue pulling in new source during runtime. This means that tasks like including files to be part of your project need to be known paths, much like includes in compiled languages like C++ or Rust.")]),e._v(" "),a("p",[e._v("For example, the following doesn't make sense in Nushell, and will fail to execute if run as a script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('echo "def abc [] { 1 + 2 }" | save output.nu\nsource "output.nu"\nabc\n')])])]),a("p",[e._v("The "),a("code",[e._v("source")]),e._v(" command will grow the source that is compiled, but the "),a("code",[e._v("save")]),e._v(" from the earlier line won't have had a chance to run. Nushell runs the whole block as if it were a single file, rather than running one line at a time. In the example, since the output.nu file is not created until after the 'compilation' step, the "),a("code",[e._v("source")]),e._v(" command is unable to read definitions from it during parse time.")]),e._v(" "),a("p",[e._v("Another common issue is trying to dynamically create the filename to source from:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> source $"($my-path)/common.nu"\n')])])]),a("p",[e._v("This would require the evaluator to run and evaluate the string, but unfortunately Nushell needs this information at compile-time.")]),e._v(" "),a("p",[a("strong",[e._v("Thinking in Nushell:")]),e._v(" Nushell is designed to use a single compile step for all the source you send it, and this is separate from evaluation. This will allow for strong IDE support, accurate error messages, an easier language for third-party tools to work with, and in the future even fancier output like being able to compile Nushell directly to a binary file.")]),e._v(" "),a("h2",{attrs:{id:"variables-are-immutable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-are-immutable"}},[e._v("#")]),e._v(" Variables are immutable")]),e._v(" "),a("p",[e._v('Another common surprise for folks coming from other languages is that Nushell variables are immutable (and indeed some people have started to call them "constants" to reflect this). Coming to Nushell you\'ll want to spend some time becoming familiar with working in a more functional style, as this tends to help write code that works best with immutable variables.')]),e._v(" "),a("p",[e._v("You might wonder why Nushell uses immutable variables. Early on in Nushell's development we decided to see how long we could go using a more data-focused, functional style in the language. More recently, we added a key bit of functionality into Nushell that made these early experiments show their value: parallelism. By switching from "),a("RouterLink",{attrs:{to:"/book/commands/each.html"}},[a("code",[e._v("each")])]),e._v(" to "),a("RouterLink",{attrs:{to:"/book/commands/par-each.html"}},[a("code",[e._v("par-each")])]),e._v(" in any Nushell script, you're able to run the corresponding block of code in parallel over the input. This is possible because Nushell's design leans heavily on immutability, composition, and pipelining.")],1),e._v(" "),a("p",[e._v("Just because Nushell variables are immutable doesn't mean things don't change. Nushell makes heavy use of the technique of \"shadowing\". Shadowing means creating a new variable with the same name as a previously declared variable. For example, say you had an "),a("code",[e._v("$x")]),e._v(" in scope, and you wanted a new "),a("code",[e._v("$x")]),e._v(" that was one greater:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let x = $x + 1\n")])])]),a("p",[e._v("This new "),a("code",[e._v("x")]),e._v(" is visible to any code that follows this line. Careful use of shadowing can make for an easier time working with variables, though it's not required.")]),e._v(" "),a("p",[e._v("Loop counters are another common pattern for mutable variables and are built into most iterating commands, for example you can get both each item and an index of each item using the "),a("code",[e._v("-n")]),e._v(" flag on "),a("RouterLink",{attrs:{to:"/book/commands/each.html"}},[a("code",[e._v("each")])]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> ls | each -n { |it| $"Number ($it.index) is size ($it.item.size)" }\n')])])]),a("p",[e._v("You can also use the "),a("RouterLink",{attrs:{to:"/book/commands/reduce.html"}},[a("code",[e._v("reduce")])]),e._v(" command to work in the same way you might mutate a variable in a loop. For example, if you wanted to find the largest string in a list of strings, you might do:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> [one, two, three, four, five, six] | reduce {|curr, max|\n    if ($curr | str length) > ($max | str length) {\n        $curr\n    } else {\n        $max\n    }\n}\n")])])]),a("p",[a("strong",[e._v("Thinking in Nushell:")]),e._v(" If you're used to using mutable variables for different tasks, it will take some time to learn how to do each task in a more functional style. Nushell has a set of built-in capabilities to help with many of these patterns, and learning them will help you write code in a more Nushell-style. The added benefit of speeding up your scripts by running parts of your code in parallel is a nice bonus.")]),e._v(" "),a("h2",{attrs:{id:"nushell-s-environment-is-scoped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nushell-s-environment-is-scoped"}},[e._v("#")]),e._v(" Nushell's environment is scoped")]),e._v(" "),a("p",[e._v("Nushell takes multiple design cues from compiled languages. One such cue is that languages should avoid global mutable state. Shells have commonly used global mutation to update the environment, but Nushell steers clear of this approach.")]),e._v(" "),a("p",[e._v("In Nushell, blocks control their own environment. Changes to the environment are scoped to the block where they happen.")]),e._v(" "),a("p",[e._v("In practice, this lets you write some concise code for working with subdirectories, for example, if you wanted to build each sub-project in the current directory, you could run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | each { |it|\n    cd $it.name\n    make\n}\n")])])]),a("p",[e._v("The "),a("code",[e._v("cd")]),e._v(" command changes the "),a("code",[e._v("PWD")]),e._v(" environment variables, and this variable change does not escape the block, allowing each iteration to start from the current directory and enter the next subdirectory.")]),e._v(" "),a("p",[e._v("Having the environment scoped like this makes commands more predictable, easier to read, and when the time comes, easier to debug. Nushell also provides helper commands like "),a("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[a("code",[e._v("def-env")])]),e._v(", "),a("RouterLink",{attrs:{to:"/book/commands/load-env.html"}},[a("code",[e._v("load-env")])]),e._v(", as convenient ways of doing batches of updates to the environment.")],1),e._v(" "),a("p",[a("code",[e._v("*")]),e._v(" - there is one exception here, where "),a("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[a("code",[e._v("def-env")])]),e._v(" allows you to create a command that participates in the caller's environment")],1),e._v(" "),a("p",[a("strong",[e._v("Thinking in Nushell:")]),e._v(" - The coding best practice of no global mutable variables extends to the environment in Nushell. Using the built-in helper commands will let you more easily work with the environment in Nushell. Taking advantage of the fact that environments are scoped to blocks can also help you write more concise scripts and interact with external commands without adding things into a global environment you don't need.")])])}),[],!1,null,null,null);t.default=n.exports}}]);