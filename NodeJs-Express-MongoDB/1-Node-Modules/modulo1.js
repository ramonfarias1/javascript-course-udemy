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

//? this.nome = nome;
//? this.sobrenome = sobrenome;
//? this.falaNome = falaNome;
//? this.Pessoa = Pessoa;
//? this.qualquerCoisa = 'qualquer Coisa';

//? console.log(exports);

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

//# Export Default com módulos do Node.js

module.exports = function(x, y) { // Vai exportar diretamente e unicamente a function
    return x * y;
};

console.log(module.exports);

// Normalmente o valor da chave "exports" é um object que recebe o que a gente quer exportar como chaves dentro do mesmo. Mas, no exemplo acima, o valor da chave "exports" foi substituído por uma function. Então quando formos importar este módulo, o que vai ser importado sempre será está function, pois ela está como se fosse o "default" dos módulos do javascript.