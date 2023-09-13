//# regenerator-runtime e core-js

//# regenerator-runtime:
/*O regenerator-runtime é uma biblioteca JavaScript que faz parte do ecossistema do Babel, um transpiler (compilador de código) muito popular usado para converter código JavaScript moderno em versões mais antigas que sejam compatíveis com navegadores mais antigos.

O principal objetivo do regenerator-runtime é permitir a utilização de funcionalidades assíncronas avançadas, como as funções assíncronas (async/await), em navegadores que não suportam nativamente essas funcionalidades ou em ambientes que não têm suporte para Promises e Generators, que são usados ​​internamente pelo async/await.

Quando você usa o Babel para transpilar seu código JavaScript, ele pode transformar funções assíncronas em código que depende do regenerator-runtime para funcionar corretamente em ambientes que não suportam nativamente funcionalidades assíncronas.

Você geralmente não precisa se preocupar diretamente com o regenerator-runtime, pois o Babel cuida disso automaticamente para você quando você configura suas transformações de código. No entanto, é importante estar ciente de sua existência e de como o Babel e o regenerator-runtime funcionam juntos para tornar seu código compatível com navegadores mais antigos.
*/

//# core-js:
/* O core-js é uma biblioteca JavaScript que fornece uma implementação de polyfill (ou "shim") para funcionalidades ECMAScript (ES) modernas em navegadores e ambientes que podem não suportar nativamente essas funcionalidades. Em essência, o core-js preenche as lacunas de compatibilidade entre diferentes versões de navegadores e ambientes JavaScript.

A principal finalidade do core-js é permitir que os desenvolvedores escrevam código JavaScript moderno, usando as funcionalidades mais recentes do ECMAScript, sem se preocupar com a compatibilidade com versões mais antigas de navegadores ou ambientes que não possuem suporte nativo para essas funcionalidades.

Algumas das funcionalidades comuns que o core-js pode polifilizar incluem:

1 - Métodos de array, como Array.prototype.includes, Array.prototype.find, Array.prototype.findIndex, etc.
2 - Funcionalidades de objetos, como Object.assign, Object.keys, Object.values, etc.
3 - Funcionalidades de string, como String.prototype.startsWith, String.prototype.endsWith, String.prototype.includes, etc.
4 - Funcionalidades de Promise.
5 - Funcionalidades de Generators e Iterators.
Para usar o core-js, você geralmente o inclui como uma dependência em seu projeto JavaScript e o importa no início do seu código para que os polyfills sejam aplicados antes de qualquer outro código ser executado. Isso garante que seu código funcione consistentemente em diferentes navegadores e ambientes.

O core-js é uma ferramenta valiosa para desenvolvedores que desejam escrever código JavaScript moderno e se beneficiar das funcionalidades mais recentes do ECMAScript, ao mesmo tempo em que mantêm a compatibilidade com versões mais antigas de navegadores e ambientes JavaScript.
*/

import 'regenerator-runtime/runtime';
import 'core-js/stable';

import './assets/css/style.css';
import executa from './modules/promise.js';

executa();