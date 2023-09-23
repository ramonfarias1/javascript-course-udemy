const path = require('path');
const escrever = require('./modules/escrever.js');
const ler = require('./modules/ler.js');

const caminho = path.resolve(__dirname, 'pessoas.json');

const pessoas = [
    { nome: 'Bojji' },
    { nome: 'Satoru' },
    { nome: 'Sukuna' },
    { nome: 'Aizen' }
];

(async function salvaPessoas() {
    const pessoasJSON = JSON.stringify(pessoas, undefined, 4);
    await escrever(pessoasJSON, caminho);
    recebePessoas();
})();

async function recebePessoas() {
    const pessoasJSON = await ler(caminho);
    mostraPessoas(pessoasJSON);
};

function mostraPessoas(pessoasJSON) {
    const pessoas = JSON.parse(pessoasJSON);
    console.log(pessoas);
};