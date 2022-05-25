(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{571:function(e,t,r){"use strict";r.r(t);var n=r(35),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-35"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-35"}},[e._v("#")]),e._v(" Nushell 0.35")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.35 of Nu. This release shows off a lot of dataframe progress and lots of command polish.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.35 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.35.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("h2",{attrs:{id:"new-commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-commands"}},[e._v("#")]),e._v(" New commands")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3811",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("into path")]),r("OutboundLink")],1),e._v(" (realcundo)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3833",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("date humanize")]),r("OutboundLink")],1),e._v(" (zkat)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3836",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("hash sha256")]),r("OutboundLink")],1),e._v(" (with "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3841",target:"_blank",rel:"noopener noreferrer"}},[e._v("additional improvements"),r("OutboundLink")],1),e._v(") (realcundo)")])]),e._v(" "),r("h2",{attrs:{id:"dataframe-improvements-elferherrera"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dataframe-improvements-elferherrera"}},[e._v("#")]),e._v(" Dataframe improvements (elferherrera)")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3776",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improved join operation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3781",target:"_blank",rel:"noopener noreferrer"}},[e._v("Faster CSV reading and encoding"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3805",target:"_blank",rel:"noopener noreferrer"}},[e._v("New shape command"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3812",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remove Series and treat all dataframe structures the same"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3839",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support for appending dataframes"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3864",target:"_blank",rel:"noopener noreferrer"}},[e._v("Allow dataframes to hold more kinds of data"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3874",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simplified contains command"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3875",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pretty printing for nested dataframes"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"additional-improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-improvements"}},[e._v("#")]),e._v(" Additional improvements")]),e._v(" "),r("ul",[r("li",[e._v("Hinting is "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3780",target:"_blank",rel:"noopener noreferrer"}},[e._v("now configurable"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3767",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improvements to our winget releases"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3819",target:"_blank",rel:"noopener noreferrer"}},[e._v("publish workflows"),r("OutboundLink")],1),e._v(" (TechWatching)")]),e._v(" "),r("li",[e._v("More commands "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3794",target:"_blank",rel:"noopener noreferrer"}},[e._v("got some additional cleanup"),r("OutboundLink")],1),e._v(" (sambordo1)")]),e._v(" "),r("li",[e._v("Startup times "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3854",target:"_blank",rel:"noopener noreferrer"}},[e._v("now have a detailed breakdown"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("You can now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3845",target:"_blank",rel:"noopener noreferrer"}},[e._v("compare durations"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3804",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs for "),r("code",[e._v("completion_type")]),r("OutboundLink")],1),e._v(" (dirtybit)")]),e._v(" "),r("li",[e._v("Fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3807",target:"_blank",rel:"noopener noreferrer"}},[e._v("theme for text viewing"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3832",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("describe")]),e._v(" no longer outputs using colors"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("String intepolation "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3866",target:"_blank",rel:"noopener noreferrer"}},[e._v("now handles Unicode better"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("Fixed "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3829",target:"_blank",rel:"noopener noreferrer"}},[e._v("path separator in "),r("code",[e._v("pathvar")]),r("OutboundLink")],1),e._v(" (nathom)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3821",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power operations can now be negative"),r("OutboundLink")],1),e._v(" (jafriyie1)")]),e._v(" "),r("li",[e._v("Issues now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3818",target:"_blank",rel:"noopener noreferrer"}},[e._v("use GitHub forms"),r("OutboundLink")],1),e._v(" (zkat)")]),e._v(" "),r("li",[e._v("Fixed a typo "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3824",target:"_blank",rel:"noopener noreferrer"}},[e._v("in our github release configuration"),r("OutboundLink")],1),e._v(" (zkat)")]),e._v(" "),r("li",[e._v("Date formatting now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3834",target:"_blank",rel:"noopener noreferrer"}},[e._v("uses the chrono_humanize crate"),r("OutboundLink")],1),e._v(" (zkat)")]),e._v(" "),r("li",[e._v("Updated the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3848",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs on implementing a command"),r("OutboundLink")],1),e._v(" (margguo)")]),e._v(" "),r("li",[e._v("Cleaned up "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3853",target:"_blank",rel:"noopener noreferrer"}},[e._v("some stale dependencies"),r("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),r("li",[e._v("Improved "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3857",target:"_blank",rel:"noopener noreferrer"}},[e._v("how "),r("code",[e._v("select")]),e._v(" handles empty cells"),r("OutboundLink")],1),e._v(" (realcundo)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3863",target:"_blank",rel:"noopener noreferrer"}},[e._v("named block params to "),r("code",[e._v("all?")]),r("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3869",target:"_blank",rel:"noopener noreferrer"}},[e._v("Better handling of environement shorthands"),r("OutboundLink")],1),e._v(" (lily-mara)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3870",target:"_blank",rel:"noopener noreferrer"}},[e._v("support for multi-doc yaml files"),r("OutboundLink")],1),e._v(" (realcundo)")]),e._v(" "),r("li",[e._v("Added "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3878",target:"_blank",rel:"noopener noreferrer"}},[e._v("a new crate to support Nu serialization more directly with serde"),r("OutboundLink")],1),e._v(" (lily-mara)")])]),e._v(" "),r("h1",{attrs:{id:"looking-ahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),r("p",[e._v("We're hard at work at bringing more dataframe support into nushell itself, which will allow us to use it for more actions, and extend support to dataframes to existing commands.")]),e._v(" "),r("p",[e._v("We're also working on the new "),r("a",{attrs:{href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"}},[e._v("parsing/evaluation engine"),r("OutboundLink")],1),e._v(" which is proving to be both faster and more correct than the current nushell engine. We're excited to keep evolving it and then integrating it into Nushell. This engine will also be fast enough, and correct enough, to drive completions as Nu scripts. This will allow us to add intelligent completions that work with both internal and external commands.")]),e._v(" "),r("p",[e._v("Finally, we're nearing the goal for "),r("a",{attrs:{href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"}},[e._v("reedline"),r("OutboundLink")],1),e._v(", which is now solid enough, and complete enough, to use for daily work. We're hoping to polish it up and then experiment with moving Nushell to use it in the coming release (or two).")])])}),[],!1,null,null,null);t.default=l.exports}}]);