// npm i --save-dev @babel/core @babel/cli @babel/preset-env babel-loader webpack webpack-cli

// npm i regenerator-runtime core-js

const nome = 'test';
const obj = {nome};
const novoObj = {...obj};
document.body.innerHTML = novoObj.nome;