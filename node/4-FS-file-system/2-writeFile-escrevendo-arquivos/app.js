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

const pessoasJSON = JSON.stringify(pessoas, undefined, 4);
escrever(pessoasJSON, caminho);

async function leArquivo() {
    const pessoas = await ler(caminho);
    mostraDados(pessoas);
};

function mostraDados(pessoas) {
    const dados = JSON.parse(pessoas);
    console.log(dados);
};

leArquivo();