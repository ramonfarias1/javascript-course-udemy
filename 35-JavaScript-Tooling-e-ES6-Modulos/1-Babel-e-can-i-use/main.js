// caniuse.com

/* Comandos:

npm init -y
Cria um arquivo padrão "package.json" com as informações extraídas do diretório atual.

npm install --save-dev @babel/core @babel/cli @babel/preset-env
Instala o Babel com o preset ENV ativado como dev dependenci

npx babel main.js -w -o bundle.js --presets=@babel/env
Compila o "main.js" para um arquivo externo "bundle.js" usando o preset ENV, e também adiciona a opção de "watch" através do comando "-w" para que sempre que o arquivo principal ser alterado, o externo também ser alterado automaticamente.

npm run babelWatcher
Inicia o comando anterior se ele estiver no "package.json"
*/

const nome = 'Aoba';
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
};

const pessoa1 = new Pessoa('Aoba', 'Silva');
console.log(pessoa1);