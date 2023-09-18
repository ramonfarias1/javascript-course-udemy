//# Módulo Path

const path = require('path');

//# __dirname e __filename

console.log(__dirname); // Retorna o caminho referente a pasta em que está o arquivo no qual está sendo executado o código.

console.log(__filename); // Retorna o caminho referente ao arquivo em que está sendo executado o código.

//# path.resolve()
// O método do path "resolve()" serve para "resolver" caminhos de diretórios dependendo do sistema operacional. Por exemplo, com o windows ele irá utilizar o "c:/" e com o linux ele irá utilizar o "./" e "../".

console.log(path.resolve(__dirname, '..', '..')); // dois pontinhos(..) = serve para retornar para o diretório anterior.

console.log(path.resolve(__dirname, 'modules')); // Retorna a pasta modules referente a pasta deste arquivo;