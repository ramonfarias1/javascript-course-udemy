//# Já vimos:
/*
 - Object.keys() = retorna as chaves
 - Object.freeze() = congela o object
 - Object.defineProperty() = define uma propriedade e permite configurar ela mais a fundo
 - Object.defineProperties() = define várias propriedades
*/

//# Objects também são passados por referência:

// const produto = {nome: 'sapato', preco: 280.99};
// const produtoReferência = produto;

// console.log(produtoReferência);
// console.log(produto);

// produtoReferência.nome = 'tênis'; // Vai alterar nos dois objects

// console.log(produtoReferência);
// console.log(produto);

//# Copiando um object para outro object utilizando o (...) spread operator:

// const produto = {nome: 'sapato', preco: 280.99};
// const produtoCopiado = {
//     ...produto,
//     material: 'couro', // Também é possível adicionar outras propriedades junto do spread operator
//     anoFabricacao: 1999
// };

// console.log(produto);
// console.log(produtoCopiado);

// produtoCopiado.nome = 'tênis'; // Vai alterar apenas no (produtoCopiado)
// produtoCopiado.preco = 99.99;

// console.log(produto);
// console.log(produtoCopiado);

//# Copiando um object para outro object utilizando o ( Object.assign() ):

// const produto = { nome: 'sapato', preco: 280.99 };

// const produtoCopiado = Object.assign({}, produto, {marca: 'adidas', ano: 2019}); // É possível copiar as propriedades de vários objects juntos.

// console.log(produto);
// console.log(produtoCopiado);

// produtoCopiado.nome = 'tênis'; // Vai alterar apenas no (produtoCopiado)
// produtoCopiado.preco = 99.99;

// console.log(produto);
// console.log(produtoCopiado);

//# Copiando apenas uma propriedade específica de um object para outro object:

// const produto = {nome: 'sapato', preco: 99.99, marca: 'adidas'};

// const marcaProduto = {marca: produto.marca};

// console.log(produto);
// console.log(marcaProduto);

//# Retornando as chaves de um object em um array com ( Object.keys() ):

// const produto = {nome: 'tenis', preco: 19.99, marca: 'adidas', ano: 2023};

// const chavesProduto = Object.keys(produto);

// console.log(chavesProduto);

//# Retornando em um array o valor das propriedades de um object com ( Object.values() ):

// const produto = {nome: 'tenis', preco: 19.99, marca: 'adidas', ano: 2023};

// const valoresPropriedadesDoProduto = Object.values(produto);

// console.log(valoresPropriedadesDoProduto);

//# Retornando em um array as propriedades e seus valores de um object com ( Object.entries() ):

const produto = {nome: 'tenis', preco: 19.99, marca: 'adidas', ano: 2023};

const propriedadesEValores = Object.entries(produto);

console.log(propriedadesEValores);

//* Iterando sobre o array:

for ( let entry of propriedadesEValores) {
    console.log(entry[0], entry[1]);
};

//# Congelando um object com ( Object.freeze() ):

// const produto = {nome: 'tenis', preco: 19.99, marca: 'adidas', ano: 2023};

// console.log(produto);

// Object.freeze(produto);

// produto.nome = 'sapato'; // o nome não será alterado pois o object está congelado

//# Retornando os descritores de uma propriedade de um object com ( Object.getOwnPropertyDescriptor() ):

// const produto = {nome: 'tenis', preco: 19.99, marca: 'adidas', ano: 2023};

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Pega os descritores da propriedade "nome"