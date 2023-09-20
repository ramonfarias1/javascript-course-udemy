//# FS (File System)

// O FS (File System) é um módulo integrado do Node.js que fornece uma API para interagir com o sistema de arquivos do computador em que o Node.js está sendo executado. Ele permite a leitura, gravação, exclusão e manipulação de arquivos e diretórios.

// Com o módulo FS, é possível criar, abrir, ler, gravar e fechar arquivos, além de manipular diretórios, como criar, renomear e excluir. Ele também inclui recursos para manipulação de fluxos de dados, como a criação de fluxos de leitura e gravação.

//  módulo FS é amplamente utilizado em aplicativos Node.js para tarefas que envolvem interação com o sistema de arquivos, como o armazenamento de arquivos de configuração, logs, arquivos de dados e muito mais. Ele é especialmente útil em aplicativos de servidor, como servidores da web e aplicativos de back-end, que precisam interagir com o sistema de arquivos do servidor para armazenar e recuperar dados.

// Uma coisa peculiar sobre o módulo FS é que todos os métodos são assíncronos por padrão, mas eles também podem rodar de forma síncrona adicionando "Sync" no nome.

//* Exemplo:
// Usando os métodos "fs.readdir()", "fs.stat()" e "stats.isDirectory()" para listar apenas arquivos específicos que queremos.

const fs = require('fs').promises;
const path = require('path');

async function lerDiretorio(diretorio) {
    diretorio = diretorio || path.resolve(__dirname);
    const files = await fs.readdir(diretorio);
    mostraArquivos(files, diretorio);
};

async function mostraArquivos(files, diretorio) {
    for (const file of files) {
        const caminhoDoArquivo = path.resolve(diretorio, file);
        const stats = await fs.stat(caminhoDoArquivo);

        if ( /\.git/g.test(caminhoDoArquivo) ) continue;
        if ( /node_modules/g.test(caminhoDoArquivo) ) continue;
        if ( /\.vscode/g.test(caminhoDoArquivo) ) continue;
        
        if (stats.isDirectory()) {
            lerDiretorio(caminhoDoArquivo);
            continue;
        };

        if ( !/\.css$/g.test(caminhoDoArquivo) && !/\.html$/g.test(caminhoDoArquivo) ) continue;

        console.log(caminhoDoArquivo);
    };
};

lerDiretorio('./../');