//# MÓDULOS DO NODE.JS
//# ------------------

// O Node usa por padrão o CommonJs para trabalhar com módulos, mas também suporta o padrão de módulos do ES6.

//# MÓDULOS INTEGRADOS DO NODE.JS
//# -----------------------------

// O Node.js tem um conjunto de módulos embutidos que você pode usar sem precisar instalar nada. Como por exemplo os módulos "path" e "http".

// Aqui está uma lista completa dos módulos: https://www.w3schools.com/nodejs/ref_modules.asp.

//# IMPORTANDO MÓDULOS
//# ------------------

//# módulos integrados

//? const path = require('path');

//# módulos propriamente criados

// Existem várias formas de se importar módulos propriamente criados.

//* Exemplo 01:

//? const modulo1 = require('./modulo1.js');
//? console.log(modulo1);
// Um Object contendo todas as variáveis, constantes, functions, objects e etc, que foram exportados.

//? console.log(modulo1.nome, modulo1.sobrenome);
//? console.log(modulo1.falaNome());

//? const p1 = new modulo1.Pessoa('fernando');
//? console.log(p1);

// No exemplo acima foi importado todas as variáveis, constantes, functions, objects e etc, que foram exportados do arquivo "modulo1" para dentro da constante de mesmo nome "modulo1".

//* Exemplo 02:

//? const falaNome = modulo1.falaNome;
//? console.log(falaNome());

// No exemplo acima foi pego a function "falaNome" de dentro do "modulo1" e armazenada em uma constante de mesmo nome.

//* Exemplo 03:

//? const falaNome = require('./modulo1.js').falaNome;
//? console.log(falaNome());

// No exemplo acima foi importado diretamente e somente a function "falaNome".

//* Exemplo 04:

//? const { nome, sobrenome, falaNome, Pessoa } = require('./modulo1.js');

//? console.log(nome, sobrenome);
//? console.log(falaNome());

//? const p1 = new Pessoa('fernando');
//? console.log(p1);

// No exemplo acima foi usado "desestruturação" para armazenar em constantes únicas cada coisa que foi exportada de "modulo1".

//* Exemplo 05:

//? const { Pessoa } = require('./modulo1.js');

//? const p1 = new Pessoa('João');
//? console.log(p1);

// No exemplo acima foi importado somente a class "Pessoa" usando desestruturação;