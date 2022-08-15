import{_ as s,o as n,c as i,a as e,b as a,d as o,e as r,r as d}from"./app.a3b5f9cc.js";const l={},h=e("h1",{id:"nushell-0-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-24","aria-hidden":"true"},"#"),o(" Nushell 0.24")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.24 of Nu. We've added a few new utilities, improved the existing date functionality, and more.",-1),_=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),o(" Where to get it")],-1),m=o("Nu 0.24 is available as "),p={href:"https://github.com/nushell/nushell/releases/tag/0.24.1",target:"_blank",rel:"noopener noreferrer"},f=o("pre-built binaries"),w=o(" or from "),g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},b=o("crates.io"),y=o(". If you have Rust installed you can install it using "),k=e("code",null,"cargo install nu",-1),v=o("."),x=r('<p><strong>Note:</strong> There was a build issue discovered immediately after release, so we&#39;ve also released a hotfix (0.24.1) to address this issue.</p><p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h2><ul><li>added a <code>hash</code> command for creating hashes (notryanb, andrasio)</li><li>impoved the public API by making <code>run_block</code> public (max-sixty)</li><li><code>version</code> now shows more information about the build (fdncred)</li><li><code>from csv</code> will show where errors happened if they occur (Dietr1ch)</li><li><code>date</code> now has some new-and-improved subcommands (jz448)</li><li>added a new <code>random chars</code> subcommand (gillespiecd)</li><li>gitpod setup got fixed (jankeronmes)</li><li>a new <code>math abs</code> command (xolve)</li></ul><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1><p>Our work on the big update has continued, and we&#39;re looking forward to making it available soon. We&#39;re now down to the last three known outstanding issues that need to be resolved before the work can be merged into the main Nushell source code.</p><p>As it lands, we&#39;ll need your help to try it out and give us feedback to help us continue to improve it.</p>',9),N=o("As always, if you see somewhere you'd like to help or just want to chat, come by the "),I={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},A=o("discord"),T=o(" and say hi!");function V(W,j){const t=d("ExternalLinkIcon");return n(),i("div",null,[h,c,u,_,e("p",null,[m,e("a",p,[f,a(t)]),w,e("a",g,[b,a(t)]),y,k,v]),x,e("p",null,[N,e("a",I,[A,a(t)]),T])])}var E=s(l,[["render",V],["__file","2020-12-15-nushell_0_24.html.vue"]]);export{E as default};
