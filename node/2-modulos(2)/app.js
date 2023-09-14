const multiplica = require('./modules/module01.js');

console.log(multiplica(2, 5));

//# PATH
//# ----

const path = require('path');

console.log(__dirname); // referente a pasta em que está o arquivo
console.log(__filename); // referente ao arquivo

console.log(path.resolve(__dirname, '..', '..'));

console.log(path.resolve(__dirname, 'modules'));