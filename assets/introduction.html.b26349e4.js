import{_ as e,z as n,A as t,a6 as a}from"./framework.3d018c9f.js";const o={},s=a(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>大家好，欢迎来到 Nushell 项目。这个项目的目标是彰显 Shell 的 Unix 哲学，就是用管道将简单的命令连接在一起，并且带来现代的开发风格。</p><p>Nu 从许多熟悉的领域中汲取了线索：bash 等传统 shell，PowerShell 等高级 shell，函数式编程，系统编程等。但是 Nu 并没有试图成为所有行业的杰作，而是将精力集中在做好一些事情上：</p><ul><li>创建具有现代感的灵活的跨平台 Shell</li><li>允许你将命令行应用程序与可理解数据结构的 Shell 进行混合和匹配</li><li>具有现代命令行应用程序提供的用户体验优化</li></ul><p>了解 Nu 可以做什么的最简单方式就是通过一些例子，所以让我们沉浸进去吧。</p><p>当你运行一个类似 <code>ls</code> 的命令时，第一个注意到的是所得到的不是一个文本块，而是一个结构化的表。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls
────┬────────────────────┬──────┬────────┬────────────
 #  │ name               │ type │ size   │ modified
────┼────────────────────┼──────┼────────┼────────────
  0 │ 404.html           │ File │  429 B │ 3 days ago
  1 │ CONTRIBUTING.md    │ File │  955 B │ 8 mins ago
  2 │ Gemfile            │ File │ 1.1 KB │ 3 days ago
  3 │ Gemfile.lock       │ File │ 6.9 KB │ 3 days ago
  4 │ LICENSE            │ File │ 1.1 KB │ 3 days ago
  5 │ README.md          │ File │  213 B │ 3 days ago
...
</code></pre></div><p>这个表不仅仅是用另一种方式显示了当前目录。就像电子表格中的表一样，我们可以更加交互性地处理数据。</p><p>我们做的第一件事是将表格通过尺寸来排序。为了做到这点，我们将会把 <code>ls</code> 的输出喂给一个可以根据列的内容来排序表格的命令。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | reverse
────┬────────────────────┬──────┬────────┬────────────
 #  │ name               │ type │ size   │ modified
────┼────────────────────┼──────┼────────┼────────────
  0 │ Gemfile.lock       │ File │ 6.9 KB │ 3 days ago
  1 │ SUMMARY.md         │ File │ 3.7 KB │ 3 days ago
  2 │ Gemfile            │ File │ 1.1 KB │ 3 days ago
  3 │ LICENSE            │ File │ 1.1 KB │ 3 days ago
  4 │ CONTRIBUTING.md    │ File │  955 B │ 9 mins ago
  5 │ books.md           │ File │  687 B │ 3 days ago
...
</code></pre></div><p>你可以看到我们没有给 <code>ls</code> 传递命令行参数。作为代替，我们使用了 Nu 提供的 <code>sort-by</code> 命令来排序 <code>ls</code> 的输出。为了让最大的文件位于顶部，我们还使用了 <code>reverse</code>。</p><p>Nu 提供了许多可在表格上工作的命令。例如，我们可以过滤 <code>ls</code> 表格，只显示大于 1 KB 的文件：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | where size &gt; 1kb
───┬──────────────┬──────┬────────┬────────────
 # │ name         │ type │ size   │ modified
───┼──────────────┼──────┼────────┼────────────
 0 │ Gemfile      │ File │ 1.1 KB │ 3 days ago
 1 │ Gemfile.lock │ File │ 6.9 KB │ 3 days ago
 2 │ LICENSE      │ File │ 1.1 KB │ 3 days ago
 3 │ SUMMARY.md   │ File │ 3.7 KB │ 3 days ago
───┴──────────────┴──────┴────────┴────────────
</code></pre></div><p>就像 Unix 哲学所体现的那样，作为可以相互交流的命令，为我们提供了许多种不同的配对。让我们看一个不同的命令：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ps
─────┬───────┬──────────────────┬─────────┬─────────┬──────────┬─────────
 #   │ pid   │ name             │ status  │ cpu     │ mem      │ virtual
─────┼───────┼──────────────────┼─────────┼─────────┼──────────┼─────────
   0 │ 33155 │ nu_plugin_core_p │ Running │  3.8496 │   1.8 MB │  4.4 GB
   1 │ 32841 │ mdworker_shared  │ Running │  0.0000 │  19.3 MB │  4.4 GB
   2 │ 32829 │ CoreServicesUIAg │ Running │  0.0000 │  16.1 MB │  4.5 GB
   3 │ 32828 │ mdworker_shared  │ Running │  0.0000 │  23.0 MB │  4.4 GB
</code></pre></div><p>如果你使用过 Linux，可能会对 <code>ps</code> 命令相当熟悉。这个命令为我们展示了系统所有正在运行的进程和它们的状态与名称。我们同样可以查看到它们的 CPU 占用。</p><p>如果我们想显示正在使用 CPU 的进程怎么办？ 就像我们之前使用 <code>ls</code> 命令一样，我们也可以使用 <code>ps</code> 命令返回的表：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ps | where cpu &gt; 10
───┬──────┬──────────────────┬─────────┬────────┬──────────┬─────────
 # │ pid  │ name             │ status  │ cpu    │ mem      │ virtual
───┼──────┼──────────────────┼─────────┼────────┼──────────┼─────────
 0 │ 3971 │ Google Chrome He │ Running │ 5.1263 │  99.4 MB │  5.5 GB
 1 │  360 │ iTerm2           │ Running │ 6.6635 │ 218.6 MB │  6.0 GB
───┴──────┴──────────────────┴─────────┴────────┴──────────┴─────────
</code></pre></div><p>到目前为止，我们已经看到使用 <code>ls</code> 和 <code>ps</code> 列出文件和进程。 Nu 还提供了其他可以创建有用信息表的命令。 接下来，让我们探索<code>date</code> 和 <code>sys</code>。</p><p>运行 <code>date</code> 将给出当前日期与时间的信息：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; date
──────────┬────────
 year     │ 2020
 month    │ 5
 day      │ 5
 hour     │ 21
 minute   │ 13
 second   │ 17
 timezone │ +02:00
──────────┴────────
</code></pre></div><p>运行 <code>sys</code> 将给出 Nu 所运行的系统的信息：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; sys
─────────┬─────────────────────────────────────────
 host    │ [row 7 columns]
 cpu     │ [row cores current ghz max ghz min ghz]
 disks   │ [table 2 rows]
 mem     │ [row free swap free swap total total]
 net     │ [table 11 rows]
 battery │ [table 1 rows]
─────────┴─────────────────────────────────────────
</code></pre></div><p>和之前的表有些不一样， <code>sys</code> 命令给出的表在单元格内包含了另一些结构化的表格，而非简单的数值。为了查看到这些数据，我们需要选择要看的列：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; sys | get host
──────────┬─────────────────────────────────────────────
 name     │ Linux
 release  │ 5.3.0-1019-azure
 version  │ #20-Ubuntu SMP Fri Mar 27 23:54:23 UTC 2020
 hostname │ lifeless
 arch     │ x86_64
 uptime   │ 8:03:47:32
 sessions │ [table 2 rows]
──────────┴─────────────────────────────────────────────
</code></pre></div><p><code>get</code> 命令让我们跳入表格中一列的内容。这样，我们正在观看 &quot;host&quot; 列，它包含了关于 Nu 所运行的主机的信息。操作系统的名字、主机名、CPU 架构等等。让我们看看系统上的用户名：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; sys | get host.sessions
───┬─────────
 # │ &lt;value&gt;
───┼─────────
 0 │ jonathan
───┴─────────
</code></pre></div><p>目前，系统上只有一个用户，名为 <code>jonathan</code>。 你会注意到，我们可以传递路径（ <code>host.sessions</code> 部分），而不仅仅是传递列名。 Nu 将采用该路径并转到表中的相应数据位置。</p><p>您可能已经注意到其他的不同之处。 我们没有一个数据表，而是只有一个元素：字符串 &quot;jonathan&quot;。 Nu 使用数据表和字符串。 字符串是在 Nu 之外使用命令的重要组成部分。</p><p>让我们看看字符串如何在 Nu 之外起作用。 我们将从前面的示例开始，并运行外部的 <code>echo</code> 命令（ <code>^</code> 告诉 nu 不要使用内置的 <code>echo</code> 命令）：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; sys | get host.sessions | ^echo $it
jonathan
</code></pre></div><p>如果这看起来与我们以前的传统 Shell 非常相似，那么就说明你拥有敏锐的眼睛！ 相似，但是有一个重要的区别：我们对前面看到的值调用了 <code>^echo</code> 。 这允许我们将数据从 Nu 传递到 <code>echo</code>（或 Nu 外部的任何命令，例如 <code>git</code>）。</p><p><em>注意：Nu 的内建命令的帮助文本可以用 <code>help</code> 来浏览</em>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; help config
Configuration management.

Usage:
  &gt; config &lt;subcommand&gt; {flags}

Subcommands:
  config get - Gets a value from the config
  config set - Sets a value in the config
  config set_into - Sets a value in the config
  config clear - clear the config
  config load - Loads the config from the path given
  config remove - Removes a value from the config
  config path - return the path to the config file

Flags:
  -h, --help: Display this help message
</code></pre></div>`,34),d=[s];function c(l,i){return n(),t("div",null,d)}const p=e(o,[["render",c],["__file","introduction.html.vue"]]);export{p as default};
