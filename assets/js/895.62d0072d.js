(window.webpackJsonp=window.webpackJsonp||[]).push([[895],{1412:function(a,s,t){"use strict";t.r(s);var e=t(35),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[a._v("#")]),a._v(" Streams")]),a._v(" "),t("p",[a._v("Streams assíncronas formam a base de como a informação trafega de um lado do pipeline para o outro. Isso permite que o Nu trabalhe com comandos internos, comandos externos e plugins de uma forma relativamente contínua.")]),a._v(" "),t("p",[a._v("Existem dois tipos fundamentais de streams no Nu: InputStream e OutputStream")]),a._v(" "),t("h2",{attrs:{id:"inputstream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inputstream"}},[a._v("#")]),a._v(" InputStream")]),a._v(" "),t("p",[a._v("Vamos ver o tipo InputStream mais próximo:")]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BoxStream")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[a._v("'static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tagged")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("\n")])])]),t("p",[a._v("É uma stream assíncrona que vai enviar um "),t("code",[a._v("Tagged<Value>")]),a._v(" no comando. Para mais informações sobre tagging, veja no capítulo de "),t("RouterLink",{attrs:{to:"/pt-BR/contributor-book/metadados.html"}},[a._v("metadados")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"outputstream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outputstream"}},[a._v("#")]),a._v(" OutputStream")]),a._v(" "),t("p",[a._v("Similar ao InputStream a cima, um OutputStream vai retornar valores de um comando:")]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BoxStream")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[a._v("'static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReturnValue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("Onde um ReturnValue é:")]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("pub")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("type")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[a._v("ReturnValue")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Result")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReturnSuccess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ShellError")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("E um ReturnSuccess é:")]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("pub")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[a._v("ReturnSuccess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tagged")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Action")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CommandAction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Por que o OutputStream é diferente do InputStream? Isso ocorre devido as diferentes necessidades de cada ponta (entrada e saída) da stream. No momento em que os dados estiverem disponíveis no comando, já foi realizada a verificação de possíveis erros, então é esperado que seja uma stream pura de dados.")]),a._v(" "),t("p",[a._v("Por outro lado, OutputStreams devem ser capazes de retornar dois outros tipos de dado além dos valores: erros e ações.")]),a._v(" "),t("h3",{attrs:{id:"errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[a._v("#")]),a._v(" Errors")]),a._v(" "),t("p",[a._v("Erros que forem passados para a stream vão ser detectados como valores que são copiados de uma stream para a outra. Assim que o erro for detectado, a stream vai ser parada e o erro informado.")]),a._v(" "),t("h3",{attrs:{id:"actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[a._v("#")]),a._v(" Actions")]),a._v(" "),t("p",[a._v("Uma ação se difere de um valor, pois enquanto um valor é um pedaço de dado que será visto pelo próximo comando no pipeline, uma ação é algo destinado apenas para o ambiente de execução interno do Nu. Ações mudam o estado do shell, por exemplo, ao mudar o diretório corrente, mudando o shell atual, atualizando tabelas, e assim por diante.")])])}),[],!1,null,null,null);s.default=r.exports}}]);