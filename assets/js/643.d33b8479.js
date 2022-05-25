(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1159:function(a,s,t){"use strict";t.r(s);var e=t(35),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("This command sets a default row's column if missing. Other commands are capable of feeding "),t("code",[a._v("default")]),a._v(" with their output through pipelines.")]),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("input-command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" default "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("column-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("column-value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Let's say we have a table like this:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" contacts.json\n━━━┯━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# │ name     │ email")]),a._v("\n───┼──────────┼──────────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ paul     │ paul@example.com\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │ andres   │\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" │ jonathan │\n━━━┷━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━\n")])])]),t("p",[t("code",[a._v("default")]),a._v(" allows us to fill "),t("code",[a._v("email")]),a._v(" column with a default value:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" contacts.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" default email "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"no-reply@example.com"')]),a._v("\n━━━┯━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# │ name     │ email")]),a._v("\n───┼──────────┼──────────────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ paul     │ paul@example.com\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │ andres   │ no-reply@example.com\n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" │ jonathan │ no-reply@example.com\n━━━┷━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);