//# Modulos
// À medida que nosso programa cresce, ele pode conter muitas linhas de código. Em vez de colocar tudo em um único arquivo, você pode usar módulos para separar códigos em arquivos separados de acordo com sua funcionalidade. Isso torna nosso código organizado e mais fácil de manter.

// Módulo é um arquivo que contém código para executar uma tarefa específica. Um módulo pode conter variáveis, funções, classes etc.

// Os módulos também dependem da tag <script type="module">
//? <script type="module">
//? import message from "./message.js";
//? </script>

//# Importação

//? import { nome, sobrenome, idade, soma, Pessoa } from './modulo1.js';
// "idade" não será importada pois a mesma não foi exportada, ocorrerá um erro mostrando isso.

//? console.log(nome, sobrenome, idade);
//? console.log(soma(5, 3));

//? const p1 = new Pessoa('test', 'test');
//? console.log(p1);

























//? import { nome as nome2, sobrenome as sobrenome2, idade, soma } from './modulo1.js';

//? const nome = 'bojji';
//? const sobrenome = 'king';

//? console.log(nome, sobrenome, nome2, sobrenome2, idade);
//? console.log(soma(5, 3));

//? import { nome2, sobrenome2, idade, soma} from './modulo1.js';

//? const nome = 'bojji';
//? const sobrenome = 'king';

//? console.log(nome, sobrenome, nome2, sobrenome2, idade);
//? console.log(soma(5, 3));

//? import { nome, sobrenome, idade, soma, Pessoa as OutraCoisa } from './modulo1.js';

//? console.log(nome, sobrenome, idade);
//? console.log(soma(5,3));

//? const p1 = new OutraCoisa('Kaua', 'Farias');
//? console.log(p1);

//? import * as meuModulo from './modulo1.js';

//? console.log(meuModulo);

//? import soma from './modulo1.js';

//? console.log(soma(5,3));

//? import multiplica, {nome, sobrenome, idade, soma} from './modulo1.js';

//? console.log(multiplica(2, 2));
//? console.log(nome, sobrenome, idade, soma(2, 2));

// import Pessoa from './modulo1.js';

// const p1 = new Pessoa('iago', 'martins');
// console.log(p1);