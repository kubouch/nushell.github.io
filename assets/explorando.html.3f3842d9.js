import{_ as a,o as s,c as e,e as n}from"./app.a5cac4f6.js";const o={},c=n(`<h1 id="explorando-en-el-sistema" tabindex="-1"><a class="header-anchor" href="#explorando-en-el-sistema" aria-hidden="true">#</a> Explorando en el sistema</h1><p>Shells de antes permiten explorar el sistema de archivos y ejecutar comandos. Shells modernas como Nu permiten hacer lo mismo. Miremos algunos comandos comunes que puedas usar cuando interactues con el sistema.</p><h2 id="ver-contenido-de-un-directorio" tabindex="-1"><a class="header-anchor" href="#ver-contenido-de-un-directorio" aria-hidden="true">#</a> Ver contenido de un directorio</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div><p>C\xF3mo hemos visto en otros cap\xEDtulos, <code>ls</code> es un comando para mirar el contenido de una ruta. Nu devolver\xE1 el contenido en una tabla que podemos usar.</p><p>El comando <code>ls</code> tambi\xE9n recibe un argumento opcional para cambiar qu\xE9 te gustar\xEDa ver. Por ejemplo, podemos enumerar los archivos que terminan en &quot;.md&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.md
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name               \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">1</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
 <span class="token number">2</span> \u2502 README.md          \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">3</span> \u2502 TODO.md            \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>El asterisco (*) en el argumento que pasamos &quot;*.md&quot; a veces se llama comod\xEDn o glob. Nos permite complementar cualquier cosa. Puedes leer el glob &quot;*.md&quot; como &quot;complementa cualquier archivo siempre y cuando termine en &#39;.md&#39;&quot;</p><p>Nu tambi\xE9n usa globs modernos permitiendo acceder directorios m\xE1s profundos.</p><div class="language-bash ext-sh"><pre class="language-bash"><code> <span class="token function">ls</span> **/*.md
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name                                      \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 .github/ISSUE_TEMPLATE/bug_report.md      \u2502 File \u2502   <span class="token number">592</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">1</span> \u2502 .github/ISSUE_TEMPLATE/feature_request.md \u2502 File \u2502   <span class="token number">595</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">2</span> \u2502 CODE_OF_CONDUCT.md                        \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">3</span> \u2502 CONTRIBUTING.md                           \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">4</span> \u2502 README.md                                 \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">5</span> \u2502 TODO.md                                   \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">6</span> \u2502 crates/nu-source/README.md                \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">7</span> \u2502 docker/packaging/README.md                \u2502 File \u2502  <span class="token number">1.5</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">8</span> \u2502 docs/commands/README.md                   \u2502 File \u2502   <span class="token number">929</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">9</span> \u2502 docs/commands/alias.md                    \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">10</span> \u2502 docs/commands/append.md                   \u2502 File \u2502  <span class="token number">1.4</span> KB \u2502 <span class="token number">5</span> days ago
</code></pre></div><p>Aqu\xED, buscamos cualquier archivo que termine con &quot;.md&quot;, y los dos asteriscos dicen adem\xE1s &quot;en cualquier directorio que comience desde aqu\xED&quot;.</p><h2 id="cambiar-el-directorio-actual" tabindex="-1"><a class="header-anchor" href="#cambiar-el-directorio-actual" aria-hidden="true">#</a> Cambiar el directorio actual</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> new_directory
</code></pre></div><p>Para cambiar del directorio actual a uno nuevo usamos el comando <code>cd</code>. Al igual que en otras shells, podemos usar tanto el nombre del directorio o si deseamos subir a un directorio podemos usar el acceso directo <code>..</code>.</p><p>Tambi\xE9n se puede cambiar el directorio si se omite <code>cd</code> y se proporciona una ruta por si sola:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ./new_directory
</code></pre></div><h2 id="comandos-del-sistema-de-archivos" tabindex="-1"><a class="header-anchor" href="#comandos-del-sistema-de-archivos" aria-hidden="true">#</a> Comandos del sistema de archivos</h2><p>Nu tambi\xE9n proporciona algunos comandos b\xE1sicos del sistema de archivos que funcionan multiplataforma.</p><p>Podemos mover un item de un lugar a otro usando el comando <code>mv</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> item location
</code></pre></div><p>Podemos copiar un item de un lugar a otro:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> item location
</code></pre></div><p>Podemos eliminar un item.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> item
</code></pre></div><p>Los tres comandos tambi\xE9n pueden usar las capacidades de glob que vimos previamente con <code>ls</code>.</p><p>Finalmente, podemos crear un directorio usando el comando <code>mkdir</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> new_directory
</code></pre></div>`,27),r=[c];function p(t,d){return s(),e("div",null,r)}var i=a(o,[["render",p],["__file","explorando.html.vue"]]);export{i as default};
