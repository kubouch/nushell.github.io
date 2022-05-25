(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{491:function(e,t,r){e.exports=r.p+"assets/img/0_23_website.d435aecb.png"},559:function(e,t,r){"use strict";r.r(t);var a=r(35),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nushell-0-23"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-23"}},[e._v("#")]),e._v(" Nushell 0.23")]),e._v(" "),a("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),a("p",[e._v("Today, we're releasing 0.23 of Nu. In this version, we continue improving the commands, release a new website, and talk about some of the experiments that will be making their way into Nu in future versions.")]),e._v(" "),a("h1",{attrs:{id:"where-to-get-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),a("p",[e._v("Nu 0.23 is available as "),a("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.23.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),a("OutboundLink")],1),e._v(" or from "),a("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),a("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),a("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),a("p",[e._v("If you want all the goodies, you can install "),a("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),a("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),a("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),a("h1",{attrs:{id:"what-s-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),a("h2",{attrs:{id:"new-website-ibraheemdev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-website-ibraheemdev"}},[e._v("#")]),e._v(" New website (ibraheemdev)")]),e._v(" "),a("p",[a("img",{attrs:{src:r(491),alt:"picture of the new Nushell website"}})]),e._v(" "),a("p",[a("em",[e._v("The new website")])]),e._v(" "),a("p",[e._v("We've just put up the first version of a new website that combines the front site with the books and docs all in one place. We're still continuing to polish this, so if you'd like to help out, come by the "),a("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),a("OutboundLink")],1),e._v(" and say hello!")]),e._v(" "),a("h2",{attrs:{id:"breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("from json")]),e._v(" command used to preserve the order of fields. Unfortunately, unsafe behaviors in one of the dependencies we used for this were recently found and we've had to (perhaps temporarily) remove the order preservation. We'd happily accept PRs that re-enabled this functionality.")]),e._v(" "),a("h2",{attrs:{id:"improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),a("ul",[a("li",[e._v("Better table alignments (fdncred)")]),e._v(" "),a("li",[a("code",[e._v("seq")]),e._v(" now can do date ranges as well (fdncred)")]),e._v(" "),a("li",[e._v("More refactoring towards script support (jonathandturner)")]),e._v(" "),a("li",[e._v("Some doc naming has been cleaned up (LhKipp)")]),e._v(" "),a("li",[e._v("Lots of "),a("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2742",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("path")]),e._v(" fixes and improvements"),a("OutboundLink")],1),e._v(" have now landed (kubouch)")]),e._v(" "),a("li",[e._v("Build artifacts are "),a("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2747",target:"_blank",rel:"noopener noreferrer"}},[e._v("now smaller"),a("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),a("li",[e._v("Some broken docs links have been fixed (naufraghi)")]),e._v(" "),a("li",[e._v("A new "),a("code",[e._v("random decimal")]),e._v(" command (smaydew)")]),e._v(" "),a("li",[e._v("Some "),a("code",[e._v("str substring")]),e._v(" fixes (andrasio)")])]),e._v(" "),a("h1",{attrs:{id:"looking-forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),a("p",[e._v("We've been splitting our efforts between the website, Nushell, and two new side projects that will feed into Nushell in the future: "),a("a",{attrs:{href:"https://github.com/jonathandturner/nunu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nunu"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/jonathandturner/nunu2",target:"_blank",rel:"noopener noreferrer"}},[e._v("nunu2"),a("OutboundLink")],1),e._v(". The first is investigating some parser improvements we could do in Nushell to better support scripts and more in the future. The second experiments with variables, blocks, and evaluation. Combined, they should some signs of what we hope will be available in Nu in the weeks to come.")]),e._v(" "),a("p",[e._v("As always, if you see somewhere you'd like to help or just want to chat, come by the "),a("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),a("OutboundLink")],1),e._v(" and say hi!")])])}),[],!1,null,null,null);t.default=n.exports}}]);