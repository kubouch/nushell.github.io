import{_ as o,o as l,c as i,a as e,b as t,d as s,e as a,r}from"./app.a5cac4f6.js";const c={},u=e("h1",{id:"installing-nu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-nu","aria-hidden":"true"},"#"),s(" Installing Nu")],-1),d=s("There are lots of ways to get Nu up and running. You can download pre-built binaries from our "),h={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},p=s("release page"),_=s(", "),g={href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"},b=s("use your favourite package manager"),f=s(", or build from source."),m=e("h2",{id:"pre-built-binaries",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-built-binaries","aria-hidden":"true"},"#"),s(" Pre-built binaries")],-1),k=s("Nu binaries are published for Linux, macOS, and Windows "),w={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},v=s("with each GitHub release"),x=s(". Just download, extract the binaries, then copy them to a location on your PATH."),y=e("h2",{id:"package-managers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#package-managers","aria-hidden":"true"},"#"),s(" Package managers")],-1),q=e("p",null,"Nu is available via several package managers:",-1),N={href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"},T=e("img",{src:"https://repology.org/badge/vertical-allrepos/nushell.svg",alt:"Packaging status"},null,-1),S=s("For macOS and Linux, "),R={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},C=s("Homebrew"),H=s(" is a popular choice ("),I=e("code",null,"brew install nushell",-1),L=s(")."),P=e("p",null,"For Windows:",-1),W={href:"https://docs.microsoft.com/en-us/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},O=s("Winget"),V=s(" ("),B=e("code",null,"winget install nushell",-1),Y=s(")"),F={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},E=s("Chocolatey"),G=s(" ("),j=e("code",null,"choco install nushell",-1),A=s(")"),D={href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"},J=s("Scoop"),M=s(" ("),X=e("code",null,"scoop install nu",-1),U=s(")"),$=e("h2",{id:"build-from-source",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#build-from-source","aria-hidden":"true"},"#"),s(" Build from source")],-1),z=e("p",null,"You can also build Nu from source. First, you will need to set up the Rust toolchain and its dependencies.",-1),K=e("h3",{id:"installing-a-compiler-suite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-a-compiler-suite","aria-hidden":"true"},"#"),s(" Installing a compiler suite")],-1),Q=e("p",null,"For Rust to work properly, you'll need to have a compatible compiler suite installed on your system. These are the recommended compiler suites:",-1),Z=e("li",null,"Linux: GCC or Clang",-1),ee=e("li",null,"macOS: Clang (install Xcode)",-1),se=s("Windows: MSVC (install "),ne={href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"},te=s("Visual Studio"),ae=s(" or the "),oe={href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",target:"_blank",rel:"noopener noreferrer"},le=s("Visual Studio Build Tools"),ie=s(") "),re=e("ul",null,[e("li",null,'Make sure to install the "Desktop development with C++" workload'),e("li",null,"Any Visual Studio edition will work (Community is free)")],-1),ce=e("h3",{id:"installing-rust",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-rust","aria-hidden":"true"},"#"),s(" Installing Rust")],-1),ue=s("If we don't already have Rust on our system, the best way to install it is via "),de={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},he=s("rustup"),pe=s(". Rustup is a way of managing Rust installations, including managing using different Rust versions."),_e=a(`<p>Nu currently requires the <strong>latest stable (1.60 or later)</strong> version of Rust. The best way is to let <code>rustup</code> find the correct version for you. When you first open <code>rustup</code> it will ask what version of Rust you wish to install:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Current installation options:

default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
default toolchain: stable
profile: default
modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>Once we are ready, we press 1 and then enter.</p><p>If you&#39;d rather not install Rust via <code>rustup</code>, you can also install it via other methods (e.g. from a package in a Linux distro). Just be sure to install a version of Rust that is 1.60 or later.</p><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h3><h4 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h4><p>You will need to install the &quot;pkg-config&quot; and &quot;libssl-dev&quot; package:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> pkg-config libssl-dev
</code></pre></div><p>Linux users who wish to use the <code>rawkey</code> or <code>clipboard</code> optional features will need to install the &quot;libx11-dev&quot; and &quot;libxcb-composite0-dev&quot; packages:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libxcb-composite0-dev libx11-dev
</code></pre></div><h4 id="rhel-based-distros" tabindex="-1"><a class="header-anchor" href="#rhel-based-distros" aria-hidden="true">#</a> RHEL based distros</h4><p>You will need to install &quot;libxcb&quot;, &quot;openssl-devel&quot; and &quot;libX11-devel&quot;:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> libxcb openssl-devel libX11-devel
</code></pre></div><h4 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h4>`,14),ge=s("Using "),be={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},fe=s("Homebrew"),me=s(', you will need to install "openssl" and "cmake" using:'),ke=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("brew "),e("span",{class:"token function"},"install"),s(` openssl cmake
`)])])],-1),we={id:"build-using-crates-io",tabindex:"-1"},ve=e("a",{class:"header-anchor",href:"#build-using-crates-io","aria-hidden":"true"},"#",-1),xe=s(" Build using "),ye={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},qe=s("crates.io"),Ne=s("Nu releases are published as source to the popular Rust package registry "),Te={href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"},Se=s("crates.io"),Re=s(". This makes it easy to build+install the latest Nu release with "),Ce=e("code",null,"cargo",-1),He=s(":"),Ie=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> cargo <span class="token function">install</span> nu
</code></pre></div><p>That&#39;s it! The <code>cargo</code> tool will do the work of downloading Nu and its source dependencies, building it, and installing it into the cargo bin path so we can run it.</p><p>If you want to install with more features, you can use:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> cargo <span class="token function">install</span> nu --features<span class="token operator">=</span>extra
</code></pre></div><p>Once installed, we can run Nu using the <code>nu</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ nu
/home/jt/Source<span class="token operator">&gt;</span>
</code></pre></div><h3 id="building-from-the-github-repository" tabindex="-1"><a class="header-anchor" href="#building-from-the-github-repository" aria-hidden="true">#</a> Building from the GitHub repository</h3><p>We can also build our own Nu from the latest source on GitHub. This gives us immediate access to the latest features and bug fixes. First, clone the repo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
</code></pre></div><p>From there, we can build and run Nu with:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> cargo build --workspace --features<span class="token operator">=</span>extra <span class="token operator">&amp;&amp;</span> cargo run --features<span class="token operator">=</span>extra
</code></pre></div><p>You can also build and run Nu in release mode:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nushell<span class="token operator">&gt;</span> cargo build --release --workspace --features<span class="token operator">=</span>extra <span class="token operator">&amp;&amp;</span> cargo run --release --features<span class="token operator">=</span>extra
</code></pre></div><p>People familiar with Rust may wonder why we do both a &quot;build&quot; and a &quot;run&quot; step if &quot;run&quot; does a build by default. This is to get around a shortcoming of the new <code>default-run</code> option in Cargo, and ensure that all plugins are built, though this may not be required in the future.</p><h2 id="setting-the-login-shell-nix" tabindex="-1"><a class="header-anchor" href="#setting-the-login-shell-nix" aria-hidden="true">#</a> Setting the login shell (*nix)</h2><p><strong>!!! Nu is still in development, and may not be stable for everyday use. !!!</strong></p>`,16),Le=s("To set the login shell you can use the "),Pe={href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"},We=e("code",null,"chsh",-1),Oe=s(" command. Some Linux distributions have a list of valid shells located in "),Ve=e("code",null,"/etc/shells",-1),Be=s(" and will disallow changing the shell until Nu is in the whitelist. You may see an error similar to the one below if you haven't updated the "),Ye=e("code",null,"shells",-1),Fe=s(" file:"),Ee=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`chsh: /home/username/.cargo/bin/nu is an invalid shell
`)])],-1),Ge=e("p",null,[s("You can add Nu to the list of allowed shells by appending your Nu binary to the "),e("code",null,"shells"),s(" file. The path to add can be found with the command "),e("code",null,"which nu"),s(", usually it is "),e("code",null,"$HOME/.cargo/bin/nu"),s(".")],-1),je=e("h2",{id:"setting-the-default-shell-windows-terminal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-the-default-shell-windows-terminal","aria-hidden":"true"},"#"),s(" Setting the default shell (Windows Terminal)")],-1),Ae=s("If you are using "),De={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},Je=s("Windows Terminal"),Me=s(" you can set "),Xe=e("code",null,"nu",-1),Ue=s(" as your default shell by adding:"),$e=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;guid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
  <span class="token string">&quot;hidden&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.nushell.sh/icon.png&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nu Shell&quot;</span>,
  <span class="token string">&quot;commandline&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nu.exe&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>to <code>&quot;profiles&quot;</code> in your Terminal Settings (JSON-file). The last thing to do is to change the <code>&quot;defaultProfile&quot;</code> to:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;defaultProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
</code></pre></div><p>Now, <code>nu</code> should load on startup of the Windows Terminal.</p>`,4);function ze(Ke,Qe){const n=r("ExternalLinkIcon");return l(),i("div",null,[u,e("p",null,[d,e("a",h,[p,t(n)]),_,e("a",g,[b,t(n)]),f]),m,e("p",null,[k,e("a",w,[v,t(n)]),x]),y,q,e("p",null,[e("a",N,[T,t(n)])]),e("p",null,[S,e("a",R,[C,t(n)]),H,I,L]),P,e("ul",null,[e("li",null,[e("a",W,[O,t(n)]),V,B,Y]),e("li",null,[e("a",F,[E,t(n)]),G,j,A]),e("li",null,[e("a",D,[J,t(n)]),M,X,U])]),$,z,K,Q,e("ul",null,[Z,ee,e("li",null,[se,e("a",ne,[te,t(n)]),ae,e("a",oe,[le,t(n)]),ie,re])]),ce,e("p",null,[ue,e("a",de,[he,t(n)]),pe]),_e,e("p",null,[ge,e("a",be,[fe,t(n)]),me]),ke,e("h3",we,[ve,xe,e("a",ye,[qe,t(n)])]),e("p",null,[Ne,e("a",Te,[Se,t(n)]),Re,Ce,He]),Ie,e("p",null,[Le,e("a",Pe,[We,t(n)]),Oe,Ve,Be,Ye,Fe]),Ee,Ge,je,e("p",null,[Ae,e("a",De,[Je,t(n)]),Me,Xe,Ue]),$e])}var es=o(c,[["render",ze],["__file","installation.html.vue"]]);export{es as default};
