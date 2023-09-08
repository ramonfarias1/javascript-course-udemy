/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//# Modulos
// À medida que nosso programa cresce, ele pode conter muitas linhas de código. Em vez de colocar tudo em um único arquivo, você pode usar módulos para separar códigos em arquivos separados de acordo com sua funcionalidade. Isso torna nosso código organizado e mais fácil de manter.

// Módulo é um arquivo que contém código para executar uma tarefa específica. Um módulo pode conter variáveis, funções, classes etc.

// Os módulos também dependem da tag <script type="module">
//? <script type="module">
//? import message from "./message.js";
//? </script>

//# Importando de um módulo

//? import { nome, sobrenome, idade, soma, Pessoa } from './modulo1.js';
// "idade" não será importada pois a mesma não foi exportada, ocorrerá um erro mostrando isso.

//? console.log(nome, sobrenome, idade);
//? console.log(soma(5, 3));

//? const p1 = new Pessoa('test', 'test');
//? console.log(p1);

//# Renomeando importações

//? import { nome as nome2, sobrenome as sobrenome2, idade, soma, Pessoa } from './modulo1.js';

//? const nome = 'bojji';
//? const sobrenome = 'king';

//? console.log(nome, sobrenome, nome2, sobrenome2, idade);
//? console.log(soma(5, 3));

//? const p1 = new Pessoa('test', 'test');
//? console.log(p1);

//# Importando módulos já renomeados na Exportação

//? import { nome2, sobrenome2, idade2, soma2, Pessoa2} from './modulo1.js';

//? const nome = 'bojji';
//? const sobrenome = 'king';

//? console.log(nome, sobrenome, nome2, sobrenome2, idade2);
//? console.log(soma2(5, 3));

//? const p1 = new Pessoa2('test', 'test');
//? console.log(p1);

//# Importando tudo de uma vez
// Utilize o *(asterisco) para importar de uma vez todos os módulos que foram exportados

// O resultado será um object contendo todos os módulos importados

//? import * as meuModulo from './modulo1.js';

//? console.log(meuModulo);

//# Importando um módulo Default
// Não é necessário usar chaves{} para importar um módulo default

//? import Pessoa from './modulo1.js';

//? const p1 = new Pessoa('test', 'test');
//? console.log(p1);

//# Importando um módulo default junto de outros módulos

//? import Pessoa, {nome, sobrenome, idade, soma} from './modulo1.js';

//? console.log(nome, sobrenome, idade, soma(2, 2));

//? const p1 = new Pessoa('test', 'test');
//? console.log(p1);

//# Benefícios de usar Módulos

// A base de código é mais fácil de manter porque código diferente com funcionalidades diferentes estão em arquivos diferentes.

// Torna o código reutilizável. Você pode definir um módulo e usá-lo inúmeras vezes de acordo com suas necessidades.
/******/ })()
;
//# sourceMappingURL=bundle.js.map