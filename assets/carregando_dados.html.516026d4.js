import{_ as a,z as s,A as n,a6 as o}from"./framework.3d018c9f.js";const e={},p=o(`<h1 id="carregando-dados" tabindex="-1"><a class="header-anchor" href="#carregando-dados" aria-hidden="true">#</a> Carregando dados</h1><p>Anteriormente vimos como você pode usar comandos como <code>ls</code>, <code>ps</code>, <code>date</code> e <code>sys</code> para carregar informações sobre seus arquivos, processos, data e hora e sobre o sistema em si. Cada comando retorna uma tabela de informações que podemos explorar. Há outras maneiras de se carregar uma tabela de dados com a qual trabalhar.</p><h2 id="abrindo-arquivos" tabindex="-1"><a class="header-anchor" href="#abrindo-arquivos" aria-hidden="true">#</a> Abrindo arquivos</h2><p>Uma das funcionalidades mais poderosas do Nu para lidar com dados é o comando <code>open</code>. Ele é uma ferramenta múltipla, capaz de trabalhar com diversos formatos de dados. Para vermos o que isso significa, vamos tentar abrir um arquivo json:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> editors/vscode/package.json
------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------
 name <span class="token operator">|</span> descript <span class="token operator">|</span> author   <span class="token operator">|</span> license <span class="token operator">|</span> version <span class="token operator">|</span> reposito <span class="token operator">|</span> publishe <span class="token operator">|</span> categori <span class="token operator">|</span> keywords <span class="token operator">|</span> engines  <span class="token operator">|</span> activati <span class="token operator">|</span> main     <span class="token operator">|</span> contribu <span class="token operator">|</span> scripts  <span class="token operator">|</span> devDepen
      <span class="token operator">|</span> ion      <span class="token operator">|</span>          <span class="token operator">|</span>         <span class="token operator">|</span>         <span class="token operator">|</span> ry       <span class="token operator">|</span> r        <span class="token operator">|</span> es       <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span> onEvents <span class="token operator">|</span>          <span class="token operator">|</span> tes      <span class="token operator">|</span>          <span class="token operator">|</span> dencies
------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------
 lark <span class="token operator">|</span> Lark     <span class="token operator">|</span> Lark     <span class="token operator">|</span> MIT     <span class="token operator">|</span> <span class="token number">1.0</span>.0   <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> vscode   <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">0</span>       <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">1</span> item<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">1</span> item<span class="token punctuation">]</span> <span class="token operator">|</span> ./out/ex <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>
      <span class="token operator">|</span> support  <span class="token operator">|</span> develope <span class="token operator">|</span>         <span class="token operator">|</span>         <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span> items<span class="token punctuation">]</span>   <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span> tension  <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token keyword">for</span> VS   <span class="token operator">|</span> rs       <span class="token operator">|</span>         <span class="token operator">|</span>         <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>
      <span class="token operator">|</span> Code     <span class="token operator">|</span>          <span class="token operator">|</span>         <span class="token operator">|</span>         <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>
------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------
</code></pre></div><p>De um jeito similar ao comando <code>ls</code>, abrir um tipo de arquivo que o Nu entende vai nos retornar algo que é mais do que apenas texto (ou um fluxo de bytes). Aqui nós abrimos um arquivo &quot;package.json&quot; de um projeto JavaScript. O Nu abre e reconhece o texto JSON e retorna uma tabela de dados.</p><p>Se quisermos checar a versão do projeto que estamos olhando, podemos usar o comando <code>get</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> editors/vscode/package.json <span class="token operator">|</span> get version
<span class="token number">1.0</span>.0
</code></pre></div><p>O Nu atualmente suporta carregar dados diretamente para tabelas a partir dos seguintes formatos:</p><ul><li>json</li><li>yaml</li><li>toml</li><li>xml</li><li>csv</li><li>ini</li></ul><p>Mas o que acontece se você carregar um arquivo texto cujo formato não é um desses? Vamos tentar:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> README.md
</code></pre></div><p>O conteúdo do arquivo é mostrado. Se o arquivo for muito grande, obteremos uma visão rolável para examinar o arquivo e depois voltar para o terminal. Para ajudar na legibilidade, Nu faz realce de sintaxe para formatos comuns como arquivos de código fonte, markdown e outros.</p><p>Por baixo dos panos, o que o Nu enxerga nesses arquivos texto é uma grande string. A seguir, vamos falar sobre como trabalhar com essas strings para obter os dados que precisamos delas.</p><h2 id="trabalhando-com-strings" tabindex="-1"><a class="header-anchor" href="#trabalhando-com-strings" aria-hidden="true">#</a> Trabalhando com strings</h2><p>Uma parte importante de se trabalhar com dados vindos de fora do Nu é que eles nem sempre vêm num formato que o Nu entende. Com frequência, esses dados são passados como uma string.</p><p>Vamos imaginar que obtivemos esse arquivo de dados:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt
Octavia <span class="token operator">|</span> Butler <span class="token operator">|</span> Writer
Bob <span class="token operator">|</span> Ross <span class="token operator">|</span> Painter
Antonio <span class="token operator">|</span> Vivaldi <span class="token operator">|</span> Composer
</code></pre></div><p>Cada pedacinho de dado que queremos está separado pelo símbolo de pipe (&#39;|&#39;) e cada pessoa está numa linha em separado. Nu não possui por padrão um formato de arquivos delimitados por pipe, então teremos que interpretá-lo nós mesmos.</p><p>A primeira coisa que queremos fazer ao carregar o arquivo é trabalhar com ele linha a linha:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt <span class="token operator">|</span> lines
---+------------------------------
 <span class="token comment"># | value</span>
---+------------------------------
 <span class="token number">0</span> <span class="token operator">|</span> Octavia <span class="token operator">|</span> Butler <span class="token operator">|</span> Writer
 <span class="token number">1</span> <span class="token operator">|</span> Bob <span class="token operator">|</span> Ross <span class="token operator">|</span> Painter
 <span class="token number">2</span> <span class="token operator">|</span> Antonio <span class="token operator">|</span> Vivaldi <span class="token operator">|</span> Composer
---+------------------------------
</code></pre></div><p>Podemos notar que estamos lidando com linhas porque voltamos a ver uma tabela. Nosso próximo passo é tentar dividir as linhas em algo um pouco mais útil. Para isso, vamos usar o comando <code>split column</code>. Como o nome implica, esse comando nos dá uma forma de dividir em colunas uma string delimitada. Informamos qual é o delimitador e o comando faz o resto:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;|&quot;</span>
---+----------+-----------+-----------
 <span class="token comment"># | Column1  | Column2   | Column3</span>
---+----------+-----------+-----------
 <span class="token number">0</span> <span class="token operator">|</span> Octavia  <span class="token operator">|</span>  Butler   <span class="token operator">|</span>  Writer
 <span class="token number">1</span> <span class="token operator">|</span> Bob      <span class="token operator">|</span>  Ross     <span class="token operator">|</span>  Painter
 <span class="token number">2</span> <span class="token operator">|</span> Antonio  <span class="token operator">|</span>  Vivaldi  <span class="token operator">|</span>  Composer
---+----------+-----------+-----------
</code></pre></div><p>Está quase certo. Parece que tem um espaço extra ali. Vamos mudar nosso delimitador:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; | &quot;</span>
---+---------+---------+----------
 <span class="token comment"># | Column1 | Column2 | Column3</span>
---+---------+---------+----------
 <span class="token number">0</span> <span class="token operator">|</span> Octavia <span class="token operator">|</span> Butler  <span class="token operator">|</span> Writer
 <span class="token number">1</span> <span class="token operator">|</span> Bob     <span class="token operator">|</span> Ross    <span class="token operator">|</span> Painter
 <span class="token number">2</span> <span class="token operator">|</span> Antonio <span class="token operator">|</span> Vivaldi <span class="token operator">|</span> Composer
---+---------+---------+----------
</code></pre></div><p>Nada mal. O comando <code>split column</code> retorna dados que podemos usar. Ele também vai além e nos dá nomes de coluna padrão:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; | &quot;</span> <span class="token operator">|</span> get Column1
---+---------
 <span class="token comment"># | value</span>
---+---------
 <span class="token number">0</span> <span class="token operator">|</span> Octavia
 <span class="token number">1</span> <span class="token operator">|</span> Bob
 <span class="token number">2</span> <span class="token operator">|</span> Antonio
---+---------
</code></pre></div><p>Podemos também nomear nossas colunas ao invés de usar os nomes padrão:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; | &quot;</span> first_name last_name job
---+------------+-----------+----------
 <span class="token comment"># | first_name | last_name | job</span>
---+------------+-----------+----------
 <span class="token number">0</span> <span class="token operator">|</span> Octavia    <span class="token operator">|</span> Butler    <span class="token operator">|</span> Writer
 <span class="token number">1</span> <span class="token operator">|</span> Bob        <span class="token operator">|</span> Ross      <span class="token operator">|</span> Painter
 <span class="token number">2</span> <span class="token operator">|</span> Antonio    <span class="token operator">|</span> Vivaldi   <span class="token operator">|</span> Composer
---+------------+-----------+----------
</code></pre></div><p>Agora que nossos dados estão em uma tabela, podemos usar todos os comandos que já usávamos antes em tabelas:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> people.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; | &quot;</span> first_name last_name job <span class="token operator">|</span> sort-by first_name
---+------------+-----------+----------
 <span class="token comment"># | first_name | last_name | job</span>
---+------------+-----------+----------
 <span class="token number">0</span> <span class="token operator">|</span> Antonio    <span class="token operator">|</span> Vivaldi   <span class="token operator">|</span> Composer
 <span class="token number">1</span> <span class="token operator">|</span> Bob        <span class="token operator">|</span> Ross      <span class="token operator">|</span> Painter
 <span class="token number">2</span> <span class="token operator">|</span> Octavia    <span class="token operator">|</span> Butler    <span class="token operator">|</span> Writer
---+------------+-----------+----------
</code></pre></div><p>Há outros comandos que você pode usar para trabalhar com strings:</p><ul><li>str</li><li>lines</li><li>size</li></ul><p>Há também um conjunto de comandos auxiliares que podemos chamar se soubermos que os dados têm uma estrutura que o Nu deve ser capaz de entender. Por exemplo, vamos abrir um arquivo de lock do Rust:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.lock
<span class="token comment"># This file is automatically @generated by Cargo.</span>
<span class="token comment"># It is not intended for manual editing.</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span>package<span class="token punctuation">]</span><span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;adhoc_derive&quot;</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.1.2&quot;</span>
</code></pre></div><p>O arquivo &quot;Cargo.lock&quot; é na verdade um arquivo .toml, mas a extensão do arquivo não é .toml. Tudo bem, podemos usar o comando <code>from toml</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.lock <span class="token operator">|</span> from toml
----------+-------------
 metadata <span class="token operator">|</span> package
----------+-------------
 <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">405</span> items<span class="token punctuation">]</span>
----------+-------------
</code></pre></div><p>Há um comando <code>from</code> para cada formato de dados estruturados em texto que o Nu entende e pode abrir.</p><h2 id="abrindo-no-modo-bruto" tabindex="-1"><a class="header-anchor" href="#abrindo-no-modo-bruto" aria-hidden="true">#</a> Abrindo no modo bruto</h2><p>Embora seja útil poder abrir um arquivo e trabalhar imediatamente com uma tabela dos seus dados, nem sempre é isso o que queremos fazer. Para ter acesso ao texto subjacente, o comando <code>open</code> pode receber um modificador opcional <code>--raw</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token parameter variable">--raw</span>
<span class="token punctuation">[</span>package<span class="token punctuation">]</span>                                                                                        name <span class="token operator">=</span> <span class="token string">&quot;nu&quot;</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.1.3&quot;</span>
authors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Yehuda Katz &lt;wycats@gmail.com&gt;&quot;</span>, <span class="token string">&quot;Jonathan Turner &lt;jonathan.d.turner@gmail.com&gt;&quot;</span><span class="token punctuation">]</span>
description <span class="token operator">=</span> <span class="token string">&quot;A shell for the GitHub era&quot;</span>
license <span class="token operator">=</span> <span class="token string">&quot;MIT&quot;</span>
</code></pre></div><h2 id="abrindo-urls" tabindex="-1"><a class="header-anchor" href="#abrindo-urls" aria-hidden="true">#</a> Abrindo URLs</h2><p>Além de carregar dados a partir do sistema de arquivos, você também pode passar uma URL para o comando <code>open</code>. Ele trará da internet o conteúdo dessa URL e o retornará para você:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> https://www.jonathanturner.org/feed.xml
----------
 rss
----------
 <span class="token punctuation">[</span><span class="token number">1</span> item<span class="token punctuation">]</span>
----------
</code></pre></div>`,44),t=[p];function r(c,l){return s(),n("div",null,t)}const u=a(e,[["render",r],["__file","carregando_dados.html.vue"]]);export{u as default};
