//# O OBJECT MODULE
//# ---------------

//? console.log(module);
console.log(module.exports);

//# EXPORTANDO
//# ----------

const nome = 'joão';
const sobrenome = 'ferreira';

function falaNome() {
    return nome + ' ' + sobrenome;
};

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    };
};

//# exportando um de cada vez

//* Exemplo 01:
// Especificando o object "module".

//? module.exports.nome = nome;
//? module.exports.sobrenome = sobrenome;
//? module.exports.falaNome = falaNome;
//? module.exports.Pessoa = Pessoa;

//? console.log(module.exports);

//* Exemplo 02:
// NÃO especificando o object "module".

//? exports.nome = nome;
//? exports.sobrenome = sobrenome;
//? exports.falaNome = falaNome;
//? exports.Pessoa = Pessoa;

//? console.log(exports);

//* Exemplo 03:
// Criando na exportação.

//? exports.nome2 = 'Hiago';
//? exports.sobrenome2 = 'Martins';
//? exports.qualquerCoisa = 'Qualquer Coisa';
//? exports.falaOutraCoisa = function() {
//?     return 'Outra Coisa';
//? };
//? exports.Pessoa2 = class Pessoa2 {
//?     constructor(nome) {
//?         this.nome = nome;
//?     };
//? };

//? console.log(exports);

//* Exemplo 04:
// Exportando usando a palavra-chave "this".

this.nome = nome;
this.sobrenome = sobrenome;
this.falaNome = falaNome;
this.Pessoa = Pessoa;
this.qualquerCoisa = 'qualquer Coisa';

console.log(exports);

//# exportando tudo de uma vez

//* Exemplo 01:
// Especificando o object "module".

module.exports = {
    nome,
    sobrenome,
    falaNome,
    Pessoa
};

console.log(exports);

//* Exemplo 02:
// NÃO expecificando o object "module".

exports = {
    nome,
    sobrenome,
    falaNome,
    Pessoa
};

console.log(exports);