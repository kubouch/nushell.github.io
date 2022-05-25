(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1385:function(e,t,s){"use strict";s.r(t);var a=s(35),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),s("p",[e._v("In Nushell, you can write and run scripts in the Nushell language. To run a script, you pass it as an argument to the "),s("code",[e._v("nu")]),e._v(" commandline application.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> nu myscript.nu\n")])])]),s("p",[e._v("This will run the script to completion.")]),e._v(" "),s("p",[e._v("Let's look at an example script file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# myscript.nu\ndef greet [name] {\n  echo "hello" $name\n}\n\ngreet "world"\n')])])]),s("p",[e._v("A script file defines the definitions for custom commands as well as the main script itself, which will run after the custom commands are defined.")]),e._v(" "),s("p",[e._v("In the above, first "),s("code",[e._v("greet")]),e._v(" is defined by the Nushell interpreter. This allows us to later call this definition. We could have written the above as:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('greet "world"\n\ndef greet [name] {\n  echo "hello" $name\n}\n')])])]),s("p",[e._v("There is no requirement that definitions have to come before the parts of the script that call the definitions, allowing you to put them where you feel comfortable.")]),e._v(" "),s("h2",{attrs:{id:"how-scripts-are-processed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-scripts-are-processed"}},[e._v("#")]),e._v(" How scripts are processed")]),e._v(" "),s("p",[e._v("In a script, definitions run first. This allows us to call the definitions using the calls in the script.")]),e._v(" "),s("p",[e._v("After the definitions run, we start at the top of the script file and run each group of commands one after another.")]),e._v(" "),s("h2",{attrs:{id:"script-lines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-lines"}},[e._v("#")]),e._v(" Script lines")]),e._v(" "),s("p",[e._v("To better understand how Nushell sees lines of code, let's take a look at an example script:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("a\nb; c | d\n")])])]),s("p",[e._v("When this script is run, Nushell will first run the "),s("code",[e._v("a")]),e._v(" command to completion and view its results. Next, Nushell will run "),s("code",[e._v("b; c | d")]),e._v(' following the rules in the "Command groups" section.')]),e._v(" "),s("h2",{attrs:{id:"parameterizing-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameterizing-scripts"}},[e._v("#")]),e._v(" Parameterizing Scripts")]),e._v(" "),s("p",[e._v("Passing arguments to a script is not currently possible, but you can use environmental variables to parameterize a script")]),e._v(" "),s("p",[e._v("For example, suppose "),s("code",[e._v("myscript.nu")]),e._v(" contains the following line:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("echo $nu.env.FOO\n")])])]),s("p",[e._v("You can execute "),s("code",[e._v("myscript.nu")]),e._v(" from "),s("code",[e._v("bash")]),e._v(" or within "),s("code",[e._v("nushell")]),e._v(" itself by passing "),s("code",[e._v("FOO")]),e._v(" as an environmental variable:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> FOO=bar nu ./myscript.nu\nbar\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);