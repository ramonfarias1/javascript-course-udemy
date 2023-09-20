const fs = require('fs').promises;

module.exports = (PessoasJSON, caminho) => fs.writeFile(caminho, PessoasJSON, {flag: 'w', encoding: 'utf8'});