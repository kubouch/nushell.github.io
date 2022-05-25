(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1257:function(a,s,t){"use strict";t.r(s);var e=t(35),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Convert a path into structured data.")]),a._v(" "),t("p",[a._v("Each path is split into a table with 'parent', 'stem' and 'extension' fields.\nOn Windows, an extra 'prefix' column is added.")]),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" path parse "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".args "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[a._v("...args: Optionally operate by column path")])]),a._v(" "),t("h2",{attrs:{id:"flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[a._v("#")]),a._v(" Flags")]),a._v(" "),t("ul",[t("li",[a._v("-h, --help: Display this help message")]),a._v(" "),t("li",[a._v("-e, --extension "),t("string",[a._v(": Manually supply the extension (without the dot)")])],1)]),a._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Parse a path")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/home/viking/spam.txt'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" path parse\n")])])]),t("p",[a._v("Replace a complex extension")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/home/viking/spam.tar.gz'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" path parse -e tar.gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" update extension "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'txt'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Ignore the extension")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/etc/conf.d'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" path parse -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v("\n")])])]),t("p",[a._v("Parse all paths under the 'name' column")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" path parse name\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);