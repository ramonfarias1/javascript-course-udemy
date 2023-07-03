//# First-class Function
/* O termo "primeira classe" significa que a função é tratada da mesma forma que qualquer tipo de valor no javascript. Por exemplo, para você atribuir um valor a uma variável, você faz assim:

const umNumber = 18;
const umaString = 'qualquer coisa';
const umaFunction = function() { console.log('minha function')};

Ou seja, utilizou-se a mesma sintaxe nas três formas, e o javascript entende do mesmo jeito. Também pode-se passar a function como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável, do mesmo jeito que você faz com qualquer outro tipo. Isso que significa "primeira classe".
*/

//* Exemplo:

const souFirstClass = function () { // criou-se uma function anônima atribuida como valor á uma variável
    console.log('sou first class');
};

function executaUmaFunction(funcao) { // criou-se uma function que executa outra function recebida através do parâmentro.
    funcao();
};

executaUmaFunction(souFirstClass); // Isso são exemplos do porque functions são First-class.