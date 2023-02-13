import{_ as e,p as a,q as o,a1 as n}from"./framework-344bb0e4.js";const s={},r=n('<h1 id="comandos" tabindex="-1"><a class="header-anchor" href="#comandos" aria-hidden="true">#</a> Comandos</h1><p>Los comandos son los bloques de construcción para las tuberías (pipeline) en Nu. Realizan la acción de la tubería, ya sea creando datos, cambiando datos mientras fluye desde entradas y salidas, o viendo los datos una vez que salen de la tubería. Hay dos tipos de comandos: comandos internos, son aquellos contruídos para ejecución interna de Nu, y comandos externos, comandos que se encuentra fuera de Nu y se comunican con <code>stdin</code> / <code>stdout</code> de estilo Unix estándar.</p><h2 id="comandos-internos" tabindex="-1"><a class="header-anchor" href="#comandos-internos" aria-hidden="true">#</a> Comandos internos</h2><p>Todos los comandos dentro de Nu, incluyendo complementos (plugins), son comandos internos. Comandos internos se comunican entre ellos usando streams de <code>Tagged&lt;Value&gt;</code> y ShellError (TODO: Enlace a tipos de datos)</p><h3 id="firma" tabindex="-1"><a class="header-anchor" href="#firma" aria-hidden="true">#</a> Firma</h3><p>Los comandos utilizan verificación de tipado ligero para garantizar que los argumentos pasados puedan ser manejados correctamente. Para habilitar esto, cada comando proporciona una firma que le dice a Nu:</p><ul><li>El nombre del comando</li><li>Los argumentos posicionales (ej, en <code>start x y</code> la <code>x</code> y la <code>y</code> son argumentos posicionales)</li><li>Si el comando</li><li>Si el comando toma un número adicional ilimitado de argumentos posicionales (ej, <code>start a1 a2 a3 ... a99 a100</code>)</li><li>Los argumentos nombrados (ej, <code>start --now</code>)</li><li>Si el comando es un filtro o sink</li></ul><p>Con esta información, se puede verificar problemas potenciales antes de la ejecución de la tubería.</p><h2 id="comandos-externos" tabindex="-1"><a class="header-anchor" href="#comandos-externos" aria-hidden="true">#</a> Comandos externos</h2><p>Un comando externo es cualquier comando que no forma parte de los comandos o complementos (plugins) integrados de Nu. Si se llama un comando que Nu desconoce, llamará al entorno subyacente con los argumentos suministrados para intentar el comando como un programa externo.</p><h2 id="comunicacion-entre-comandos-internos-y-externos" tabindex="-1"><a class="header-anchor" href="#comunicacion-entre-comandos-internos-y-externos" aria-hidden="true">#</a> Comunicación entre comandos internos y externos</h2><h3 id="interno-a-interno" tabindex="-1"><a class="header-anchor" href="#interno-a-interno" aria-hidden="true">#</a> Interno a interno</h3><p>Los comandos internos se comunican entre ellos usando el stream completo que proporciona Nu, que incluye todos los tipos de archivos integrados. Esto incluye la comunicación entre comandos internos y complementos (en ambas direcciones).</p><h3 id="intero-a-externo" tabindex="-1"><a class="header-anchor" href="#intero-a-externo" aria-hidden="true">#</a> Intero a externo</h3><p>Los comandos internos que envían texto a comandos externos necesitan tener cadenas de texto preparadas con anticipación. Si un objeto es enviado directamente a un comando externo, se considerará como un error ya que no hay forma de inferir cómo los datos estructurados serán representados para el programa externo. Se espera que el usuario se limite a una simple celda de datos o usar uno de los convertidores (como <code>to-json</code>) para convertir la tabla en una representación de cadena.</p><p>El comando externo se abre para que si entrada estándar <code>stdin</code> sea redireccionada, de modo que los datos se puedan enviar a él.</p><h3 id="externo-a-interno" tabindex="-1"><a class="header-anchor" href="#externo-a-interno" aria-hidden="true">#</a> Externo a interno</h3><p>Los comandos externos envían una serie de cadenas a través de su salida estándar <code>stdout</code>. Estas cadenas se leen en la tubería y se ponen a disposición al comando interno que sigue en la tubería, o se muestran al usuario si el comando externo es el último paso en la tubería.</p><h3 id="externo-a-externo" tabindex="-1"><a class="header-anchor" href="#externo-a-externo" aria-hidden="true">#</a> Externo a externo</h3><p>Los comandos externos se comunican entre sí a través de estándar <code>stdin</code>/<code>stdout</code>. Como Nu detectará esta situación, redirigirá la salida estándar <code>stdout</code> del primer comando a la entrada estándar <code>stdin</code> del siguiente comando externo. De esta forma, se mantiene el comportamiento esperado de una tubería de shell entre comandos externos.</p>',20),d=[r];function t(i,c){return a(),o("div",null,d)}const u=e(s,[["render",t],["__file","comandos.html.vue"]]);export{u as default};
