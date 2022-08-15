import{_ as l,o as r,c as h,a as t,b as n,d as e,e as s,r as i}from"./app.a3b5f9cc.js";const a={},_=t("h1",{id:"nushell-0-66",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-66","aria-hidden":"true"},"#"),e(" Nushell 0.66")],-1),d=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=t("p",null,"Today, we're releasing version 0.66 of Nu. This is release includes a new table output, better exit code support, and more.",-1),u=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),p=e("Nu 0.66 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.66.0",target:"_blank",rel:"noopener noreferrer"},f=e("pre-built binaries"),b=e(" or from "),m={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=e("crates.io"),w=e(". If you have Rust installed you can install it using "),v=t("code",null,"cargo install nu",-1),x=e("."),y=s('<p>If you want all the built-in goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="new-table-output-zhiburt" tabindex="-1"><a class="header-anchor" href="#new-table-output-zhiburt" aria-hidden="true">#</a> New table output (zhiburt)</h2><p>When you pull up 0.66 and print out a table you might notice something - that it looks surprisingly similar to previous releases of Nushell. But, under the hood, something has changed. In 0.66, we&#39;ve moved to a new table renderer: <code>tabled</code>.</p>',5),z=e("We're looking forward to really "),N={href:"https://github.com/zhiburt/tabled/issues/198",target:"_blank",rel:"noopener noreferrer"},A=e("getting creative"),F=e(" with future releases and what tabled allows us to do."),S=s('<h2 id="exit-codes-windsoilder-jt" tabindex="-1"><a class="header-anchor" href="#exit-codes-windsoilder-jt" aria-hidden="true">#</a> Exit codes (WindSoilder, jt)</h2><p>We&#39;ve done work in this release that will cause pipelines and commands to stop a script from continuing if they hit a non-zero exit case, much in the same way as <code>a &amp;&amp; b</code> in bash does not run <code>b</code> if <code>a</code> returns with a non-zero exit code.</p><p>This has been extended to also work when running the full script, so that <code>nu</code> itself will return an non-zero exit code matching the error the script saw when it stopped.</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>We&#39;re deep in preparations for the work that will get us to 0.80, including a lot of syntax improvements, pipeline improvements, and more. We&#39;ll be talking about these more as the design and implementation develops.</p><p>From there, we&#39;re on our path to 1.0.</p><h1 id="full-changelog" tabindex="-1"><a class="header-anchor" href="#full-changelog" aria-hidden="true">#</a> Full changelog</h1><h2 id="nushell" tabindex="-1"><a class="header-anchor" href="#nushell" aria-hidden="true">#</a> Nushell</h2>',8),W=e("jt created "),R={href:"https://github.com/nushell/nushell/pull/6138",target:"_blank",rel:"noopener noreferrer"},C=e("fix 0.66 nu-command crate"),I=e(", and "),D={href:"https://github.com/nushell/nushell/pull/6137",target:"_blank",rel:"noopener noreferrer"},U=e("bump to 0.66"),j=e(", and "),B={href:"https://github.com/nushell/nushell/pull/6136",target:"_blank",rel:"noopener noreferrer"},T=e("move to latest stable reedline"),E=e(", and "),L={href:"https://github.com/nushell/nushell/pull/6116",target:"_blank",rel:"noopener noreferrer"},P=e('Revert "'),M=t("code",null,"extern",-1),V=e(' command should be treated as external"'),H=e(", and "),O={href:"https://github.com/nushell/nushell/pull/6115",target:"_blank",rel:"noopener noreferrer"},q=e("exit with non-zero exit code when script ends with non-zero exit"),J=e(", and "),K={href:"https://github.com/nushell/nushell/pull/6016",target:"_blank",rel:"noopener noreferrer"},$=e("Use simpler reedline"),G=e("merelymyself created "),Q={href:"https://github.com/nushell/nushell/pull/6135",target:"_blank",rel:"noopener noreferrer"},X=e("allow view-source to view aliases"),Y=e(", and "),Z={href:"https://github.com/nushell/nushell/pull/6118",target:"_blank",rel:"noopener noreferrer"},ee=e("remove misleading example from "),te=t("code",null,"source",-1),oe=e(", and "),ne={href:"https://github.com/nushell/nushell/pull/6110",target:"_blank",rel:"noopener noreferrer"},se=e("throw error if any? or all? expression invokes invalid command"),le=e(", and "),re={href:"https://github.com/nushell/nushell/pull/6096",target:"_blank",rel:"noopener noreferrer"},he=e("Prevents panic when parsing JSON containing large number"),ie=e(", and "),ae={href:"https://github.com/nushell/nushell/pull/6090",target:"_blank",rel:"noopener noreferrer"},_e=e("add a fair amount of search terms"),de=e(", and "),ce={href:"https://github.com/nushell/nushell/pull/6084",target:"_blank",rel:"noopener noreferrer"},ue=e("make "),pe=t("code",null,"into string --decimals",-1),ge=e(" add decimals to integer numbers"),fe=e(", and "),be={href:"https://github.com/nushell/nushell/pull/6076",target:"_blank",rel:"noopener noreferrer"},me=e("add config option to limit external command completions"),ke=e(", and "),we={href:"https://github.com/nushell/nushell/pull/6062",target:"_blank",rel:"noopener noreferrer"},ve=e("add "),xe=t("code",null,"split list",-1),ye=e(" subcommand to split up lists"),ze=e(", and "),Ne={href:"https://github.com/nushell/nushell/pull/6056",target:"_blank",rel:"noopener noreferrer"},Ae=e("add "),Fe=t("code",null,"wc",-1),Se=e(" search term for "),We=t("code",null,"size",-1),Re=e(" and "),Ce=t("code",null,"length",-1),Ie=e(", and "),De={href:"https://github.com/nushell/nushell/pull/6041",target:"_blank",rel:"noopener noreferrer"},Ue=e("allow for easy reset of config files with a single command"),je=e(", and "),Be={href:"https://github.com/nushell/nushell/pull/6019",target:"_blank",rel:"noopener noreferrer"},Te=e("make auto-cd change "),Ee=t("code",null,"$env.OLDPWD",-1),Le=e(", and "),Pe={href:"https://github.com/nushell/nushell/pull/6017",target:"_blank",rel:"noopener noreferrer"},Me=e("add "),Ve=t("code",null,"unspanned",-1),He=e(" flag to error make, add tests"),Oe=e(", and "),qe={href:"https://github.com/nushell/nushell/pull/6000",target:"_blank",rel:"noopener noreferrer"},Je=e("throw parser error when multiple short flags are defined without whitespace"),Ke=e(", and "),$e={href:"https://github.com/nushell/nushell/pull/5977",target:"_blank",rel:"noopener noreferrer"},Ge=e("adds better error for failed string-to-duration conversions"),Qe=e("nibon7 created "),Xe={href:"https://github.com/nushell/nushell/pull/6134",target:"_blank",rel:"noopener noreferrer"},Ye=e("Make login.nu work when using nu as a login shell "),Ze=e(", and "),et={href:"https://github.com/nushell/nushell/pull/6132",target:"_blank",rel:"noopener noreferrer"},tt=e("Use local time for logger"),ot=e(", and "),nt={href:"https://github.com/nushell/nushell/pull/6130",target:"_blank",rel:"noopener noreferrer"},st=e("Fix print_table_or_error when "),lt=t("code",null,"table",-1),rt=e(" is overridden"),ht=e(", and "),it={href:"https://github.com/nushell/nushell/pull/6129",target:"_blank",rel:"noopener noreferrer"},at=e("Fix PipelineData::print when "),_t=t("code",null,"table",-1),dt=e(" is overridden"),ct=e(", and "),ut={href:"https://github.com/nushell/nushell/pull/6122",target:"_blank",rel:"noopener noreferrer"},pt=e("Simplify print_table_or_error"),gt=e(", and "),ft={href:"https://github.com/nushell/nushell/pull/6121",target:"_blank",rel:"noopener noreferrer"},bt=e("Simplify eval_block"),mt=e(", and "),kt={href:"https://github.com/nushell/nushell/pull/6119",target:"_blank",rel:"noopener noreferrer"},wt=e("Simplify PipelineData::print"),vt=e(", and "),xt={href:"https://github.com/nushell/nushell/pull/6106",target:"_blank",rel:"noopener noreferrer"},yt=e("Log warning message if nu failed to sync history"),zt=e(", and "),Nt={href:"https://github.com/nushell/nushell/pull/6104",target:"_blank",rel:"noopener noreferrer"},At=e("Don't panic if nu failed to create config files "),Ft=e(", and "),St={href:"https://github.com/nushell/nushell/pull/6047",target:"_blank",rel:"noopener noreferrer"},Wt=e("Fix ps command on linux"),Rt=e(", and "),Ct={href:"https://github.com/nushell/nushell/pull/6034",target:"_blank",rel:"noopener noreferrer"},It=e("Fix panic when opening symlink which points to an inaccessible directory"),Dt=e("fdncred created "),Ut={href:"https://github.com/nushell/nushell/pull/6131",target:"_blank",rel:"noopener noreferrer"},jt=e("update some dependencies"),Bt=e(", and "),Tt={href:"https://github.com/nushell/nushell/pull/6123",target:"_blank",rel:"noopener noreferrer"},Et=e("expand durations to include month, year, decade"),Lt=e(", and "),Pt={href:"https://github.com/nushell/nushell/pull/6112",target:"_blank",rel:"noopener noreferrer"},Mt=e("move the shell integration title setting to the right place"),Vt=e(", and "),Ht={href:"https://github.com/nushell/nushell/pull/6105",target:"_blank",rel:"noopener noreferrer"},Ot=e("trim spaces when converting strings to ints"),qt=e(", and "),Jt={href:"https://github.com/nushell/nushell/pull/6094",target:"_blank",rel:"noopener noreferrer"},Kt=e("enable find to work on some external streams"),$t=e(", and "),Gt={href:"https://github.com/nushell/nushell/pull/6087",target:"_blank",rel:"noopener noreferrer"},Qt=e("add more shell integration ansi escapes in support of vscode"),Xt=e(", and "),Yt={href:"https://github.com/nushell/nushell/pull/6086",target:"_blank",rel:"noopener noreferrer"},Zt=e("enable find to be able to highlight some hits"),eo=e(", and "),to={href:"https://github.com/nushell/nushell/pull/6054",target:"_blank",rel:"noopener noreferrer"},oo=e("Ensure users colors are maintained when highlighting find matches"),no=e(", and "),so={href:"https://github.com/nushell/nushell/pull/6053",target:"_blank",rel:"noopener noreferrer"},lo=e("allow "),ro=t("code",null,"into int",-1),ho=e(" to convert octal numbers and 0 padded strings"),io=e(", and "),ao={href:"https://github.com/nushell/nushell/pull/6033",target:"_blank",rel:"noopener noreferrer"},_o=e("add ability to do into int on floats using a radix"),co=e(", and "),uo={href:"https://github.com/nushell/nushell/pull/6031",target:"_blank",rel:"noopener noreferrer"},po=e("fix small bug converting string to int"),go=e(", and "),fo={href:"https://github.com/nushell/nushell/pull/6012",target:"_blank",rel:"noopener noreferrer"},bo=e("fixes ansi escape leakage from ill-behaved externals, again!"),mo=e(", and "),ko={href:"https://github.com/nushell/nushell/pull/6009",target:"_blank",rel:"noopener noreferrer"},wo=e("update some dependencies"),vo=e(", and "),xo={href:"https://github.com/nushell/nushell/pull/5992",target:"_blank",rel:"noopener noreferrer"},yo=e("add the ability to highlight with regular expressiosn"),zo=e(", and "),No={href:"https://github.com/nushell/nushell/pull/5981",target:"_blank",rel:"noopener noreferrer"},Ao=e("tweak the find hit highlighting"),Fo=e(", and "),So={href:"https://github.com/nushell/nushell/pull/5980",target:"_blank",rel:"noopener noreferrer"},Wo=e("make history.txt and history.sqlite3 tables have same command column"),Ro=e(", and "),Co={href:"https://github.com/nushell/nushell/pull/5979",target:"_blank",rel:"noopener noreferrer"},Io=e("add the ability to highlight searched for terms"),Do=e("kubouch created "),Uo={href:"https://github.com/nushell/nushell/pull/6127",target:"_blank",rel:"noopener noreferrer"},jo=e("Use official virtualenv repo for the CI tests"),Bo=e(", and "),To={href:"https://github.com/nushell/nushell/pull/6007",target:"_blank",rel:"noopener noreferrer"},Eo=e("Allow keeping selected environment variables from removed overlay"),Lo=e(", and "),Po={href:"https://github.com/nushell/nushell/pull/6006",target:"_blank",rel:"noopener noreferrer"},Mo=e("Fix load order of config files"),Vo=e(", and "),Ho={href:"https://github.com/nushell/nushell/pull/6005",target:"_blank",rel:"noopener noreferrer"},Oo=e("Split merging of parser delta and stack environment"),qo=e(", and "),Jo={href:"https://github.com/nushell/nushell/pull/6002",target:"_blank",rel:"noopener noreferrer"},Ko=e('Revert "make module imports in scripts used for relative path."'),$o=e(", and "),Go={href:"https://github.com/nushell/nushell/pull/5982",target:"_blank",rel:"noopener noreferrer"},Qo=e("Expand Hooks Functionality"),Xo=e("elferherrera created "),Yo={href:"https://github.com/nushell/nushell/pull/6126",target:"_blank",rel:"noopener noreferrer"},Zo=e("plugin show signature"),en=e(", and "),tn={href:"https://github.com/nushell/nushell/pull/6093",target:"_blank",rel:"noopener noreferrer"},on=e("concat string with lazy expressions"),nn=e(", and "),sn={href:"https://github.com/nushell/nushell/pull/6089",target:"_blank",rel:"noopener noreferrer"},ln=e("append string to series"),rn=e(", and "),hn={href:"https://github.com/nushell/nushell/pull/6058",target:"_blank",rel:"noopener noreferrer"},an=e("check column type during aggregation"),_n=e("hustcer created "),dn={href:"https://github.com/nushell/nushell/pull/6120",target:"_blank",rel:"noopener noreferrer"},cn=e("fix typo of "),un=t("code",null,"port",-1),pn=e(" command"),gn=e("WindSoilder created "),fn={href:"https://github.com/nushell/nushell/pull/6117",target:"_blank",rel:"noopener noreferrer"},bn=e("try make port test more reliable"),mn=e(", and "),kn={href:"https://github.com/nushell/nushell/pull/6079",target:"_blank",rel:"noopener noreferrer"},wn=e("Make Semicolon stop on error"),vn=e(", and "),xn={href:"https://github.com/nushell/nushell/pull/6040",target:"_blank",rel:"noopener noreferrer"},yn=e("load default env when user don't specified env path"),zn=e(", and "),Nn={href:"https://github.com/nushell/nushell/pull/6008",target:"_blank",rel:"noopener noreferrer"},An=e("Add bytes collect, bytes remove, bytes build cmd"),Fn=e(", and "),Sn={href:"https://github.com/nushell/nushell/pull/5989",target:"_blank",rel:"noopener noreferrer"},Wn=e("add more bytes cmd"),Rn=e("PlasmaIntec created "),Cn={href:"https://github.com/nushell/nushell/pull/6114",target:"_blank",rel:"noopener noreferrer"},In=e("Allow cp multiple files at once"),Dn=e(", and "),Un={href:"https://github.com/nushell/nushell/pull/6103",target:"_blank",rel:"noopener noreferrer"},jn=e("Allow mv multiple files at once"),Bn=e(", and "),Tn={href:"https://github.com/nushell/nushell/pull/6098",target:"_blank",rel:"noopener noreferrer"},En=e("Allow multiple patterns in ls command"),Ln=e("micouy created "),Pn={href:"https://github.com/nushell/nushell/pull/6099",target:"_blank",rel:"noopener noreferrer"},Mn=e("Bump "),Vn=t("code",null,"powierza-coefficient",-1),Hn=e(" to "),On=t("code",null,"1.0.1",-1),qn=e("zhiburt created "),Jn={href:"https://github.com/nushell/nushell/pull/6097",target:"_blank",rel:"noopener noreferrer"},Kn=e("nu-table/ Bump tabled version"),$n=e(", and "),Gn={href:"https://github.com/nushell/nushell/pull/6082",target:"_blank",rel:"noopener noreferrer"},Qn=e("nu-table: Update tests after #6080"),Xn=e(", and "),Yn={href:"https://github.com/nushell/nushell/pull/6080",target:"_blank",rel:"noopener noreferrer"},Zn=e("Consider space for single "),es=t("code",null,"...",-1),ts=e(" column not enough space"),os=e(", and "),ns={href:"https://github.com/nushell/nushell/pull/6074",target:"_blank",rel:"noopener noreferrer"},ss=e("nu-table: Add a few tests"),ls=e(", and "),rs={href:"https://github.com/nushell/nushell/pull/6073",target:"_blank",rel:"noopener noreferrer"},hs=e("nu-table: Fix header style (again 2x)"),is=e(", and "),as={href:"https://github.com/nushell/nushell/pull/6071",target:"_blank",rel:"noopener noreferrer"},_s=e("nu-table: Add suffix coloring"),ds=e(", and "),cs={href:"https://github.com/nushell/nushell/pull/6049",target:"_blank",rel:"noopener noreferrer"},us=e("Refactoring nu_table"),ps=e(", and "),gs={href:"https://github.com/nushell/nushell/pull/6038",target:"_blank",rel:"noopener noreferrer"},fs=e("nu-table: Bump tabled to master"),bs=e(", and "),ms={href:"https://github.com/nushell/nushell/pull/6037",target:"_blank",rel:"noopener noreferrer"},ks=e("nu-table: Use all available termwidth"),ws=e(", and "),vs={href:"https://github.com/nushell/nushell/pull/6036",target:"_blank",rel:"noopener noreferrer"},xs=e("nu-table: Restore atty check"),ys=e(", and "),zs={href:"https://github.com/nushell/nushell/pull/6035",target:"_blank",rel:"noopener noreferrer"},Ns=e("nu-table: Don't show empty header"),As=e(", and "),Fs={href:"https://github.com/nushell/nushell/pull/6028",target:"_blank",rel:"noopener noreferrer"},Ss=e("nu_table: Fix truncating logic"),Ws=e(", and "),Rs={href:"https://github.com/nushell/nushell/pull/6025",target:"_blank",rel:"noopener noreferrer"},Cs=e("nu_table: Fix style of tables with no header"),Is=e(", and "),Ds={href:"https://github.com/nushell/nushell/pull/5999",target:"_blank",rel:"noopener noreferrer"},Us=e("Move wrap responsibility on tabled"),js=e(", and "),Bs={href:"https://github.com/nushell/nushell/pull/5998",target:"_blank",rel:"noopener noreferrer"},Ts=e("nu-table: Fix wrap logic"),Es=e(", and "),Ls={href:"https://github.com/nushell/nushell/pull/5997",target:"_blank",rel:"noopener noreferrer"},Ps=e("nu-table: Fix a term_width value"),Ms=e(", and "),Vs={href:"https://github.com/nushell/nushell/pull/5993",target:"_blank",rel:"noopener noreferrer"},Hs=e("nu-table: Remove a error prone assertion"),Os=e("Kangaxx-0 created "),qs={href:"https://github.com/nushell/nushell/pull/6083",target:"_blank",rel:"noopener noreferrer"},Js=t("code",null,"extern",-1),Ks=e(" command should be treated as external"),$s=e(", and "),Gs={href:"https://github.com/nushell/nushell/pull/6044",target:"_blank",rel:"noopener noreferrer"},Qs=e("Downgrade typetag to 0.1.8"),Xs=e(", and "),Ys={href:"https://github.com/nushell/nushell/pull/6014",target:"_blank",rel:"noopener noreferrer"},Zs=e("Conditionally disable expansion for external command"),el=e("Mathspy created "),tl={href:"https://github.com/nushell/nushell/pull/6070",target:"_blank",rel:"noopener noreferrer"},ol=e("Add CustomValue support to plugins"),nl=e(", and "),sl={href:"https://github.com/nushell/nushell/pull/6065",target:"_blank",rel:"noopener noreferrer"},ll=e("Restore "),rl=t("code",null,"nu_with_plugins",-1),hl=e(" test macro"),il=e(", and "),al={href:"https://github.com/nushell/nushell/pull/6064",target:"_blank",rel:"noopener noreferrer"},_l=e("Add plugin CLI argument"),dl=e("jackos created "),cl={href:"https://github.com/nushell/nushell/pull/6067",target:"_blank",rel:"noopener noreferrer"},ul=e("Fix short-flag completion"),pl=e("Benjamin-L created "),gl={href:"https://github.com/nushell/nushell/pull/6052",target:"_blank",rel:"noopener noreferrer"},fl=e("fix documentation of plugin encodings"),bl=e("rgwood created "),ml={href:"https://github.com/nushell/nushell/pull/6051",target:"_blank",rel:"noopener noreferrer"},kl=e("Handle Windows drive paths in auto-cd"),wl=e(", and "),vl={href:"https://github.com/nushell/nushell/pull/5987",target:"_blank",rel:"noopener noreferrer"},xl=e('Revert "Return error when external command core dumped (#5908)"'),yl=e("stormasm created "),zl={href:"https://github.com/nushell/nushell/pull/6050",target:"_blank",rel:"noopener noreferrer"},Nl=e("Cargo.lock was not checked in on typetag revert"),Al=e("valdaarhun created "),Fl={href:"https://github.com/nushell/nushell/pull/5990",target:"_blank",rel:"noopener noreferrer"},Sl=e("Add search terms to 'math' commands"),Wl=e("moxuze created "),Rl={href:"https://github.com/nushell/nushell/pull/5970",target:"_blank",rel:"noopener noreferrer"},Cl=e("Add --directory (-D) flag to ls, list the directory itself instead of its contents"),Il=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Dl=e("kubouch created "),Ul={href:"https://github.com/nushell/nushell.github.io/pull/542",target:"_blank",rel:"noopener noreferrer"},jl=e("Add overviews of chapters; Move Introduction to top level"),Bl=e(", and "),Tl={href:"https://github.com/nushell/nushell.github.io/pull/537",target:"_blank",rel:"noopener noreferrer"},El=e("Add hooks documentation"),Ll=e("hustcer created "),Pl={href:"https://github.com/nushell/nushell.github.io/pull/541",target:"_blank",rel:"noopener noreferrer"},Ml=e("Translate hooks.md to Chinese"),Vl=e(", and "),Hl={href:"https://github.com/nushell/nushell.github.io/pull/539",target:"_blank",rel:"noopener noreferrer"},Ol=e("Update zh-CN translation for moving_around and theming"),ql=e(", and "),Jl={href:"https://github.com/nushell/nushell.github.io/pull/538",target:"_blank",rel:"noopener noreferrer"},Kl=e("Update some zh-CN translations"),$l=e(", and "),Gl={href:"https://github.com/nushell/nushell.github.io/pull/535",target:"_blank",rel:"noopener noreferrer"},Ql=e("update vuepress and related plugins"),Xl=e("morzel85 created "),Yl={href:"https://github.com/nushell/nushell.github.io/pull/540",target:"_blank",rel:"noopener noreferrer"},Zl=e("Update working_with_lists.md (removing unnecessary use of echo)"),er=e("merelymyself created "),tr={href:"https://github.com/nushell/nushell.github.io/pull/533",target:"_blank",rel:"noopener noreferrer"},or=e("Remove entry for "),nr=t("code",null,"count",-1),sr=e(", and "),lr={href:"https://github.com/nushell/nushell.github.io/pull/531",target:"_blank",rel:"noopener noreferrer"},rr=e("Add helpful links"),hr=e("WindSoilder created "),ir={href:"https://github.com/nushell/nushell.github.io/pull/532",target:"_blank",rel:"noopener noreferrer"},ar=e("add light theme relative doc"),_r=e("fdncred created "),dr={href:"https://github.com/nushell/nushell.github.io/pull/530",target:"_blank",rel:"noopener noreferrer"},cr=e("add some new operators"),ur=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),pr=e("Eun created "),gr={href:"https://github.com/nushell/nu_scripts/pull/265",target:"_blank",rel:"noopener noreferrer"},fr=e("Use autojump with nushell"),br=e(", and "),mr={href:"https://github.com/nushell/nu_scripts/pull/262",target:"_blank",rel:"noopener noreferrer"},kr=t("code",null,"select-aws-profile.nu",-1),wr=e(" an alias to select an aws profile with ease"),vr=e("WindSoilder created "),xr={href:"https://github.com/nushell/nu_scripts/pull/264",target:"_blank",rel:"noopener noreferrer"},yr=e("fix env.PATH after conda activate"),zr=e("fdncred created "),Nr={href:"https://github.com/nushell/nu_scripts/pull/263",target:"_blank",rel:"noopener noreferrer"},Ar=e("add nana to twin script"),Fr=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),Sr=e("jt created "),Wr={href:"https://github.com/nushell/reedline/pull/454",target:"_blank",rel:"noopener noreferrer"},Rr=e("bump to 0.9"),Cr=e(", and "),Ir={href:"https://github.com/nushell/reedline/pull/451",target:"_blank",rel:"noopener noreferrer"},Dr=e("Remove animations and resize repaint"),Ur=e("fdncred created "),jr={href:"https://github.com/nushell/reedline/pull/453",target:"_blank",rel:"noopener noreferrer"},Br=e("update some deps"),Tr=e("drbrain created "),Er={href:"https://github.com/nushell/reedline/pull/452",target:"_blank",rel:"noopener noreferrer"},Lr=e("Support swtiching the case of a char with ~ in vi"),Pr=e(", and "),Mr={href:"https://github.com/nushell/reedline/pull/450",target:"_blank",rel:"noopener noreferrer"},Vr=e("Support vi mode ; and , motions");function Hr(Or,qr){const o=i("ExternalLinkIcon");return r(),h("div",null,[_,d,c,u,t("p",null,[p,t("a",g,[f,n(o)]),b,t("a",m,[k,n(o)]),w,v,x]),y,t("p",null,[z,t("a",N,[A,n(o)]),F]),S,t("ul",null,[t("li",null,[W,t("a",R,[C,n(o)]),I,t("a",D,[U,n(o)]),j,t("a",B,[T,n(o)]),E,t("a",L,[P,M,V,n(o)]),H,t("a",O,[q,n(o)]),J,t("a",K,[$,n(o)])]),t("li",null,[G,t("a",Q,[X,n(o)]),Y,t("a",Z,[ee,te,n(o)]),oe,t("a",ne,[se,n(o)]),le,t("a",re,[he,n(o)]),ie,t("a",ae,[_e,n(o)]),de,t("a",ce,[ue,pe,ge,n(o)]),fe,t("a",be,[me,n(o)]),ke,t("a",we,[ve,xe,ye,n(o)]),ze,t("a",Ne,[Ae,Fe,Se,We,Re,Ce,n(o)]),Ie,t("a",De,[Ue,n(o)]),je,t("a",Be,[Te,Ee,n(o)]),Le,t("a",Pe,[Me,Ve,He,n(o)]),Oe,t("a",qe,[Je,n(o)]),Ke,t("a",$e,[Ge,n(o)])]),t("li",null,[Qe,t("a",Xe,[Ye,n(o)]),Ze,t("a",et,[tt,n(o)]),ot,t("a",nt,[st,lt,rt,n(o)]),ht,t("a",it,[at,_t,dt,n(o)]),ct,t("a",ut,[pt,n(o)]),gt,t("a",ft,[bt,n(o)]),mt,t("a",kt,[wt,n(o)]),vt,t("a",xt,[yt,n(o)]),zt,t("a",Nt,[At,n(o)]),Ft,t("a",St,[Wt,n(o)]),Rt,t("a",Ct,[It,n(o)])]),t("li",null,[Dt,t("a",Ut,[jt,n(o)]),Bt,t("a",Tt,[Et,n(o)]),Lt,t("a",Pt,[Mt,n(o)]),Vt,t("a",Ht,[Ot,n(o)]),qt,t("a",Jt,[Kt,n(o)]),$t,t("a",Gt,[Qt,n(o)]),Xt,t("a",Yt,[Zt,n(o)]),eo,t("a",to,[oo,n(o)]),no,t("a",so,[lo,ro,ho,n(o)]),io,t("a",ao,[_o,n(o)]),co,t("a",uo,[po,n(o)]),go,t("a",fo,[bo,n(o)]),mo,t("a",ko,[wo,n(o)]),vo,t("a",xo,[yo,n(o)]),zo,t("a",No,[Ao,n(o)]),Fo,t("a",So,[Wo,n(o)]),Ro,t("a",Co,[Io,n(o)])]),t("li",null,[Do,t("a",Uo,[jo,n(o)]),Bo,t("a",To,[Eo,n(o)]),Lo,t("a",Po,[Mo,n(o)]),Vo,t("a",Ho,[Oo,n(o)]),qo,t("a",Jo,[Ko,n(o)]),$o,t("a",Go,[Qo,n(o)])]),t("li",null,[Xo,t("a",Yo,[Zo,n(o)]),en,t("a",tn,[on,n(o)]),nn,t("a",sn,[ln,n(o)]),rn,t("a",hn,[an,n(o)])]),t("li",null,[_n,t("a",dn,[cn,un,pn,n(o)])]),t("li",null,[gn,t("a",fn,[bn,n(o)]),mn,t("a",kn,[wn,n(o)]),vn,t("a",xn,[yn,n(o)]),zn,t("a",Nn,[An,n(o)]),Fn,t("a",Sn,[Wn,n(o)])]),t("li",null,[Rn,t("a",Cn,[In,n(o)]),Dn,t("a",Un,[jn,n(o)]),Bn,t("a",Tn,[En,n(o)])]),t("li",null,[Ln,t("a",Pn,[Mn,Vn,Hn,On,n(o)])]),t("li",null,[qn,t("a",Jn,[Kn,n(o)]),$n,t("a",Gn,[Qn,n(o)]),Xn,t("a",Yn,[Zn,es,ts,n(o)]),os,t("a",ns,[ss,n(o)]),ls,t("a",rs,[hs,n(o)]),is,t("a",as,[_s,n(o)]),ds,t("a",cs,[us,n(o)]),ps,t("a",gs,[fs,n(o)]),bs,t("a",ms,[ks,n(o)]),ws,t("a",vs,[xs,n(o)]),ys,t("a",zs,[Ns,n(o)]),As,t("a",Fs,[Ss,n(o)]),Ws,t("a",Rs,[Cs,n(o)]),Is,t("a",Ds,[Us,n(o)]),js,t("a",Bs,[Ts,n(o)]),Es,t("a",Ls,[Ps,n(o)]),Ms,t("a",Vs,[Hs,n(o)])]),t("li",null,[Os,t("a",qs,[Js,Ks,n(o)]),$s,t("a",Gs,[Qs,n(o)]),Xs,t("a",Ys,[Zs,n(o)])]),t("li",null,[el,t("a",tl,[ol,n(o)]),nl,t("a",sl,[ll,rl,hl,n(o)]),il,t("a",al,[_l,n(o)])]),t("li",null,[dl,t("a",cl,[ul,n(o)])]),t("li",null,[pl,t("a",gl,[fl,n(o)])]),t("li",null,[bl,t("a",ml,[kl,n(o)]),wl,t("a",vl,[xl,n(o)])]),t("li",null,[yl,t("a",zl,[Nl,n(o)])]),t("li",null,[Al,t("a",Fl,[Sl,n(o)])]),t("li",null,[Wl,t("a",Rl,[Cl,n(o)])])]),Il,t("ul",null,[t("li",null,[Dl,t("a",Ul,[jl,n(o)]),Bl,t("a",Tl,[El,n(o)])]),t("li",null,[Ll,t("a",Pl,[Ml,n(o)]),Vl,t("a",Hl,[Ol,n(o)]),ql,t("a",Jl,[Kl,n(o)]),$l,t("a",Gl,[Ql,n(o)])]),t("li",null,[Xl,t("a",Yl,[Zl,n(o)])]),t("li",null,[er,t("a",tr,[or,nr,n(o)]),sr,t("a",lr,[rr,n(o)])]),t("li",null,[hr,t("a",ir,[ar,n(o)])]),t("li",null,[_r,t("a",dr,[cr,n(o)])])]),ur,t("ul",null,[t("li",null,[pr,t("a",gr,[fr,n(o)]),br,t("a",mr,[kr,wr,n(o)])]),t("li",null,[vr,t("a",xr,[yr,n(o)])]),t("li",null,[zr,t("a",Nr,[Ar,n(o)])])]),Fr,t("ul",null,[t("li",null,[Sr,t("a",Wr,[Rr,n(o)]),Cr,t("a",Ir,[Dr,n(o)])]),t("li",null,[Ur,t("a",jr,[Br,n(o)])]),t("li",null,[Tr,t("a",Er,[Lr,n(o)]),Pr,t("a",Mr,[Vr,n(o)])])])])}var Kr=l(a,[["render",Hr],["__file","2022-07-26-nushell-0_66.html.vue"]]);export{Kr as default};
