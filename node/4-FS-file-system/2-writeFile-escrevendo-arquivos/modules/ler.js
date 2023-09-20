const fs = require('fs').promises;

module.exports = caminho => fs.readFile(caminho, {encoding: 'utf8'});