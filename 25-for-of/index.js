// (for of) permite que você faça um loop sobre estruturas de dados iteráveis como Arrays, Strings, Maps, NodeLists e muito mais.

// Ele itera os valores das estruturas e não o índice.

// Para cada iteração, o valor da próxima propriedade é atribuído à variável. A variável pode ser declarada com let, const ou var.

//# Com Strings:

const nome = 'Haruo Yaguchi';

for (let valor of nome) {
    // itera os valores
    console.log(valor);
};

//# Com Arrays:

const nomes = ['haruo', 'zed', 'leon', 'ada'];

for (let valor of nomes) {
    // itera os valores
    console.log(valor);
};

//# Não funciona com objects:

// Objects não são estruturas iteraveis

const pessoa1 = {
    nome: 'david',
    sobrenome: 'martinez',
    idade: 21
};

for ( let valor of pessoa1) {
    console.log(valor);
};

// for (clássico) - estrutura de loop de uso geral

// for in (retorna o índice ou chave) - strings, arrays e objects

// for of (retorna o valor) - iteráveis, strings e arrays