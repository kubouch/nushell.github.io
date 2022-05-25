(window.webpackJsonp=window.webpackJsonp||[]).push([[689],{1205:function(s,a,t){"use strict";t.r(a);var n=t(35),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Use "),t("code",[s._v("help")]),s._v(" for more information on a command.\nUse "),t("code",[s._v("help commands")]),s._v(" to list all available commands.\nUse "),t("code",[s._v("help <command name>")]),s._v(" to display help about a particular command.")]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nWelcome to Nushell.\n\nHere are some tips to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" you get started.\n  * "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" commands - list all available commands\n  * "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" - display "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" about a particular "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nNushell works on the idea of a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pipeline"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" Pipelines are commands connected with the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'|'")]),s._v(" character.\nEach stage "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the pipeline works together to load, parse, and display information to you.\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Examples"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nList the files "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the current directory, sorted by size:\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort-by size\n\nGet information about the current system:\n    sys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n\nGet the processes on your system actively using CPU:\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where cpu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nYou can also learn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" at https://www.nushell.sh/book/\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" commands\n────┬──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name         │ description")]),s._v("\n────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  │ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v("        │ Define a shortcut "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" another command.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  │ append       │ Append the given row to the table\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  │ autoview     │ View the contents of the pipeline as a table or list.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  │ build-string │ Builds a string from the arguments\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  │ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cal")]),s._v("          │ Display a calendar.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  │ calc         │ Parse a math expression into a number\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v(" │ where        │ Filter table to match the condition.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v("        │ Finds a program file.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("85")]),s._v(" │ with-env     │ Runs a block with an environment set. Eg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" with-env "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NAME "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nu")]),s._v(".env.NAME "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86")]),s._v(" │ wrap         │ Wraps the given data "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a table.\n────┴──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\nChange to a new path.\n\nUsage:\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nParameters:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" the directory to change to\n\nFlags:\n  -h, --help: Display this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n\nExamples:\n  Change to a new directory called "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dirname'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v("\n\n  Change to your home directory\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\n\n  Change to your home directory "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("alternate version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n\n  Change to the previous directory\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);