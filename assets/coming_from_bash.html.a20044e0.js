import{_ as e,o as d,c as o,a as l,b as u,e as s,d as t,r as c}from"./app.a3b5f9cc.js";const a={},r=s(`<h1 id="coming-from-bash" tabindex="-1"><a class="header-anchor" href="#coming-from-bash" aria-hidden="true">#</a> Coming from Bash</h1><p>If you&#39;re coming from <code>Git Bash</code> on Windows, then the external commands you&#39;re used to (bash, grep, etc) will not be available in <code>nu</code> by default (unless you had explicitly made them available in the Windows Path environment variable). To make these commands available in <code>nu</code> as well, add the following line to your <code>config.nu</code> with either <code>append</code> or <code>prepend</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>let-env Path = ($env.Path | prepend &#39;C:\\Program Files\\Git\\usr\\bin&#39;)
</code></pre></div><p>Note: this table assumes Nu 0.60.0 or later.</p>`,4),i=l("thead",null,[l("tr",null,[l("th",null,"Bash"),l("th",null,"Nu"),l("th",null,"Task")])],-1),h=l("tr",null,[l("td",null,[l("code",null,"ls")]),l("td",null,[l("code",null,"ls")]),l("td",null,"Lists the files in the current directory")],-1),_=l("tr",null,[l("td",null,[l("code",null,"ls <dir>")]),l("td",null,[l("code",null,"ls <dir>")]),l("td",null,"Lists the files in the given directory")],-1),m=l("tr",null,[l("td",null,[l("code",null,"ls pattern*")]),l("td",null,[l("code",null,"ls pattern*")]),l("td",null,"Lists files that match a given pattern")],-1),p=l("tr",null,[l("td",null,[l("code",null,"ls -la")]),l("td",null,[l("code",null,"ls --long --all"),t(" or "),l("code",null,"ls -la")]),l("td",null,"List files with all available information, including hidden files")],-1),f=l("tr",null,[l("td",null,[l("code",null,"ls -d */")]),l("td",null,[l("code",null,"ls | where type == dir")]),l("td",null,"List directories")],-1),v=l("tr",null,[l("td",null,[l("code",null,"find . -name *.rs")]),l("td",null,[l("code",null,"ls **/*.rs")]),l("td",null,"Find recursively all files that match a given pattern")],-1),g=l("tr",null,[l("td",null,[l("code",null,"find . -name Makefile | xargs vim")]),l("td",null,[l("code",null,"ls \\*\\*/Makefile | get name | vim $in")]),l("td",null,"Pass values as command parameters")],-1),b=l("tr",null,[l("td",null,[l("code",null,"cd <directory>")]),l("td",null,[l("code",null,"cd <directory>")]),l("td",null,"Change to the given directory")],-1),y=l("tr",null,[l("td",null,[l("code",null,"cd")]),l("td",null,[l("code",null,"cd")]),l("td",null,"Change to the home directory")],-1),w=l("tr",null,[l("td",null,[l("code",null,"cd -")]),l("td",null,[l("code",null,"cd -")]),l("td",null,"Change to the previous directory")],-1),x=l("tr",null,[l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"Creates the given path")],-1),O=l("tr",null,[l("td",null,[l("code",null,"mkdir -p <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"Creates the given path, creating parents as necessary")],-1),A=l("tr",null,[l("td",null,[l("code",null,"touch test.txt")]),l("td",null,[l("code",null,"touch test.txt")]),l("td",null,"Create a file")],-1),P=l("tr",null,[l("td",null,[l("code",null,"> <path>")]),l("td",null,[l("code",null,"| save --raw <path>")]),l("td",null,"Save string into a file")],-1),$=l("tr",null,[l("td",null,[l("code",null,">> <path>")]),l("td",null,[l("code",null,"| save --raw --append <path>")]),l("td",null,"Append string to a file")],-1),F=l("tr",null,[l("td",null,[l("code",null,"cat <path>")]),l("td",null,[l("code",null,"open --raw <path>")]),l("td",null,"Display the contents of the given file")],-1),k=l("tr",null,[l("td"),l("td",null,[l("code",null,"open <path>")]),l("td",null,"Read a file as structured data")],-1),C=l("tr",null,[l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,"Move file to new location")],-1),T=l("tr",null,[l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,"Copy file to new location")],-1),B=l("tr",null,[l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,"Copy directory to a new location, recursively")],-1),R=l("tr",null,[l("td",null,[l("code",null,"rm <path>")]),l("td",null,[l("code",null,"rm <path>")]),l("td",null,"Remove the given file")],-1),L=l("tr",null,[l("td"),l("td",null,[l("code",null,"rm -t <path>")]),l("td",null,"Move the given file to the system trash")],-1),H=l("tr",null,[l("td",null,[l("code",null,"rm -rf <path>")]),l("td",null,[l("code",null,"rm -r <path>")]),l("td",null,"Recursively removes the given path")],-1),N=l("td",null,[l("code",null,"date -d <date>")],-1),U=l("td",null,[l("code",null,'"<date>" | into datetime -f <format>')],-1),D=t("Parse a date ("),S={href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"},M=t("format documentation"),V=t(")"),E=l("tr",null,[l("td",null,[l("code",null,"sed")]),l("td",null,[l("code",null,"str replace")]),l("td",null,"Find and replace a pattern in a string")],-1),G=l("tr",null,[l("td",null,[l("code",null,"grep <pattern>")]),l("td",null,[l("code",null,"where $it =~ <substring>"),t(" or "),l("code",null,"find <substring>")]),l("td",null,"Filter strings that contain the substring")],-1),I=l("tr",null,[l("td",null,[l("code",null,"man <command>")]),l("td",null,[l("code",null,"help <command>")]),l("td",null,"Get the help for a given command")],-1),W=l("tr",null,[l("td"),l("td",null,[l("code",null,"help commands")]),l("td",null,"List all available commands")],-1),q=l("tr",null,[l("td"),l("td",null,[l("code",null,"help --find <string>")]),l("td",null,"Search for match in all available commands")],-1),j=l("tr",null,[l("td",null,[l("code",null,"command1 && command2")]),l("td",null,[l("code",null,"command1; command2")]),l("td",null,"Run a command, and if it's successful run a second")],-1),z=l("tr",null,[l("td",null,[l("code",null,"stat $(which git)")]),l("td",null,[l("code",null,"stat (which git).path")]),l("td",null,"Use command output as argument for other command")],-1),J=l("tr",null,[l("td",null,[l("code",null,"echo $PATH")]),l("td",null,[l("code",null,"echo $env.PATH")]),l("td",null,"See the current path")],-1),K=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"Update PATH permanently")],-1),Q=l("tr",null,[l("td",null,[l("code",null,"export PATH = $PATH:/usr/other/bin")]),l("td",null,[l("code",null,"let-env PATH = ($env.PATH | append /usr/other/bin)")]),l("td",null,"Update PATH temporarily")],-1),X=l("tr",null,[l("td",null,[l("code",null,"export")]),l("td",null,[l("code",null,"echo $env")]),l("td",null,"List the current environment variables")],-1),Y=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"Update environment variables permanently")],-1),Z=l("tr",null,[l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,"Update environment temporarily")],-1),ll=l("tr",null,[l("td",null,[l("code",null,"export FOO=BAR")]),l("td",null,[l("code",null,"let-env FOO = BAR")]),l("td",null,"Set environment variable for current session")],-1),tl=l("tr",null,[l("td",null,[l("code",null,"echo $FOO")]),l("td",null,[l("code",null,"echo $env.FOO")]),l("td",null,"Use environment variables")],-1),nl=l("tr",null,[l("td",null,[l("code",null,"unset FOO")]),l("td",null,[l("code",null,"hide FOO")]),l("td",null,"Unset environment variable for current session")],-1),el=l("tr",null,[l("td",null,[l("code",null,'alias s="git status -sb"')]),l("td",null,[l("code",null,"alias s = git status -sb")]),l("td",null,"Define an alias temporarily")],-1),dl=l("tr",null,[l("td",null,[l("code",null,"type FOO")]),l("td",null,[l("code",null,"which FOO")]),l("td",null,"Display information about a command (built-in, alias, or executable)")],-1),ol=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"Add and edit alias permanently (for new shells)")],-1),ul=l("tr",null,[l("td",null,[l("code",null,"bash -c <commands>")]),l("td",null,[l("code",null,"nu -c <commands>")]),l("td",null,"Run a pipeline of commands (requires 0.9.1 or later)")],-1),sl=l("tr",null,[l("td",null,[l("code",null,"bash <script file>")]),l("td",null,[l("code",null,"nu <script file>")]),l("td",null,"Run a script file (requires 0.9.1 or later)")],-1),cl=l("tr",null,[l("td",null,[l("code",null,"\\")]),l("td",null,[l("code",null,"( <command> )")]),l("td",null,[t("A command can span multiple lines when wrapped with "),l("code",null,"("),t(" and "),l("code",null,")")])],-1),al=l("tr",null,[l("td",null,[l("code",null,"pwd")]),l("td",null,[l("code",null,"$env.PWD")]),l("td",null,"Display the current directory")],-1);function rl(il,hl){const n=c("ExternalLinkIcon");return d(),o("div",null,[r,l("table",null,[i,l("tbody",null,[h,_,m,p,f,v,g,b,y,w,x,O,A,P,$,F,k,C,T,B,R,L,H,l("tr",null,[N,U,l("td",null,[D,l("a",S,[M,u(n)]),V])]),E,G,I,W,q,j,z,J,K,Q,X,Y,Z,ll,tl,nl,el,dl,ol,ul,sl,cl,al])])])}var ml=e(a,[["render",rl],["__file","coming_from_bash.html.vue"]]);export{ml as default};
