//# Com Arrays:

const frutas = ['abacaxi', 'manga', 'kiwi'];
// i = índice
for (let i in frutas) {
    // Percorre os indices do array
    console.log(i);
};

//* Exemplo pegando os valores do array:

for (let i in frutas) {
    console.log(frutas[i]);
};

//# Com objects:

const pessoa = {
    nome:  'gael',
    sobrenome: 'slaveknight',
    idade: 55
};
// i = índice
for ( let i in pessoa) {
    // Percorre as chaves do object
    console.log(i);
};

//* Exemplo pegando o valor da chave:

for ( let i in pessoa) {
    console.log(pessoa[i]);
};

/* Exemplo explicado:
 - o loop for in itera sobre o object pessoa
 - cada iteração retorna uma chave (i)
 - a chave é usada para acessar o valor da chave
 - o valor da chave é pessoa[i]
*/