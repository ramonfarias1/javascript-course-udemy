// console.log(module);
// console.log(module.exports)

const nome = 'joão';
const sobrenome = 'ferreira';

function falaNome() {
    return nome + ' ' + sobrenome;
};

// module.exports.nome = nome;
// module.exports.falaNome = falaNome;
exports.nome = nome;
// exports.outroNome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'qualquer Coisa';

// console.log(exports);