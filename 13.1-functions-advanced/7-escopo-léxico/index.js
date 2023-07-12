// Escopo léxico basicamente é um reconhecimento que uma função faz primeiramente dentro dela e depois nos escopos "pais".

//* Exemplo01:
// Nesse exemplo a function vai falar o nome que está dentro dela, pois este mesmo nome está dentro do escopo da function.

const nome = 'tors';

function falaNome() {
    const nome = 'thorffin';
    console.log(nome);
};

falaNome();

//* Exemplo02:
// Nesse exemplo a function vai falar o nome da variável que está fora dela, pois ela mesma não encontrou a variável nome dentro do seu próprio escopo, então procurará no escopo de seu "pai", que no caso é o escopo global.

const nome2 = 'Thorkell';

function falaNome2() {
    console.log(nome);
};

falaNome2();

//* Exemplo03:
// Nesse exemplo a function também irá falar o nome da variável que está fora do seu escopo, no caso o escopo global, pois mesmo que tenha uma variável dentro da function que chama a function que fala o nome, aquela variável não está dentro do escopo da própria function que fala o nome, e aquela variável também está protegida no escopo da function que chama a function que fala o nome.

const nome3 = 'Askelladd';

function falaNome3() {
    console.log(nome3);
};

function chamaAFunctionQueFalaNome3() {
    const nome3 = 'Bjorn';
    falaNome3();
};

chamaAFunctionQueFalaNome3();