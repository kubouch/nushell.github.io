(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{567:function(e,t,r){"use strict";r.r(t);var n=r(35),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-31"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-31"}},[e._v("#")]),e._v(" Nushell 0.31")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.31 of Nu. This release includes continued polish of the engine and commands.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.31 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.31.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("If you'd like to try the experimental paging feature in this release, you can install with "),r("code",[e._v("cargo install nu --features=table-pager")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("p",[e._v("This release is largely around polish. We've continued to improve Nushell's engine to work in the more streamlined style, improved the performance of commands like "),r("code",[e._v("ps")]),e._v(" and the appearance of commands like "),r("code",[e._v("binaryview")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"new-commands-fdncred"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-commands-fdncred"}},[e._v("#")]),e._v(" New commands (fdncred)")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3403",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("into string")]),r("OutboundLink")],1),e._v(" to convert values to strings")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3370",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("into binary")]),r("OutboundLink")],1),e._v(" to convert values to binary")])]),e._v(" "),r("h2",{attrs:{id:"improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),r("h3",{attrs:{id:"nushell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell"}},[e._v("#")]),e._v(" Nushell")]),e._v(" "),r("ul",[r("li",[e._v("natemara fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3407",target:"_blank",rel:"noopener noreferrer"}},[e._v("a slowness in the "),r("code",[e._v("ps")]),e._v(" command"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("elferherrera, kubouch, stormasm, LhKipp ported commands to the new engine-p style")]),e._v(" "),r("li",[e._v("fdncred improved "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3370",target:"_blank",rel:"noopener noreferrer"}},[e._v("binaryview"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3375",target:"_blank",rel:"noopener noreferrer"}},[e._v("added check for endian-ness, added a bytes and skip"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3374",target:"_blank",rel:"noopener noreferrer"}},[e._v('added ability to change "#" color using header_color'),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3367",target:"_blank",rel:"noopener noreferrer"}},[e._v("tweaked the error handling to show specific errors"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3366",target:"_blank",rel:"noopener noreferrer"}},[e._v("updated to a quicker Levenshtein implementation"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3351",target:"_blank",rel:"noopener noreferrer"}},[e._v("allowed start to handle urls"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("kubouch "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3359",target:"_blank",rel:"noopener noreferrer"}},[e._v("fixed table-pager feature compilation"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Azgrom created a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3388",target:"_blank",rel:"noopener noreferrer"}},[e._v("features cargo installer wrapper"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("jgoday added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3387",target:"_blank",rel:"noopener noreferrer"}},[e._v("ignore-case and duplicated options to "),r("code",[e._v("uniq")]),e._v(" command "),r("OutboundLink")],1),e._v(", and fixed a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3354",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce --numbered bug"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ammkrn fixed a panic in the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3382",target:"_blank",rel:"noopener noreferrer"}},[e._v("rustyline helper"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Sciencentistguy fixed an "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3358",target:"_blank",rel:"noopener noreferrer"}},[e._v("array index out of bounds error in nu_protocol::value::levenshtein_distance()"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ccde177b5fb9b8c55078417b4c9fee removed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3349",target:"_blank",rel:"noopener noreferrer"}},[e._v("ichwh"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("LhKipp fixed an issue "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3344",target:"_blank",rel:"noopener noreferrer"}},[e._v("in nu-env if "),r("code",[e._v("cd")]),e._v(" with shortcuts"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"extension"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extension"}},[e._v("#")]),e._v(" Extension")]),e._v(" "),r("ul",[r("li",[e._v("fdncred fixed "),r("a",{attrs:{href:"https://github.com/nushell/vscode-nushell-lang/issues/32",target:"_blank",rel:"noopener noreferrer"}},[e._v("a bug in the syntax highlighting"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"documentation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),r("ul",[r("li",[e._v("nalpine fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell.github.io/issues/126",target:"_blank",rel:"noopener noreferrer"}},[e._v("dead links"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ChristopherBiscardi updated "),r("a",{attrs:{href:"https://github.com/nushell/nushell.github.io/issues/125",target:"_blank",rel:"noopener noreferrer"}},[e._v("starship prompt integration"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ammkrn updated "),r("a",{attrs:{href:"https://github.com/nushell/nushell.github.io/issues/123",target:"_blank",rel:"noopener noreferrer"}},[e._v("ls -f -> ls -la"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"nu-scripts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nu-scripts"}},[e._v("#")]),e._v(" Nu Scripts")]),e._v(" "),r("ul",[r("li",[e._v("fdncred created "),r("a",{attrs:{href:"https://github.com/nushell/nu_scripts/issues/48",target:"_blank",rel:"noopener noreferrer"}},[e._v("table grouping experiment, update twin to support single user per row"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/nushell/nu_scripts/issues/46",target:"_blank",rel:"noopener noreferrer"}},[e._v("twin weeknum guess"),r("OutboundLink")],1),e._v(", and a "),r("a",{attrs:{href:"https://github.com/nushell/nu_scripts/issues/44",target:"_blank",rel:"noopener noreferrer"}},[e._v("prototype of TWiN automation script"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("efx added "),r("a",{attrs:{href:"https://github.com/nushell/nu_scripts/issues/47",target:"_blank",rel:"noopener noreferrer"}},[e._v("a one liner to parse aws s3 ls output"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("jonathandturner fixed "),r("a",{attrs:{href:"https://github.com/nushell/nu_scripts/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("TWiN range"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"looking-ahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),r("p",[e._v("Coming soon after the 0.31 release, we'll be landing "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3389",target:"_blank",rel:"noopener noreferrer"}},[e._v("some improvements"),r("OutboundLink")],1),e._v(" to Nushell's syntax. These fixes will be breaking changes, but they're for a good reason. The simplification of the syntax will make Nushell both more consistent and more approachable for new users and experienced users alike.")]),e._v(" "),r("p",[e._v("We're also continuing to improve the command implementations. If you'd like to help, you can join in by "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/3390",target:"_blank",rel:"noopener noreferrer"}},[e._v("signing up here"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);