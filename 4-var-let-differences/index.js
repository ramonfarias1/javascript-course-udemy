//# ( var ) Pode ser redeclarado

//? var nome = 'juca';
//? var nome = 'ramon';

//# ( let ) Não pode ser redeclarado

//? let nome = 'ramon';
//? let nome = 'juca';
// Vai ocorrer um erro de Sintaxe dizendo que a variável já foi declarada.
// Se quiser mudar o valor da variável let, apenas digite o nome dela sem o ( let ):
//? nome = 'juca';

// Dica: não declare variáveis sem colocar let ou const primeiro, pois fazendo isso você está declarando uma variável global que é usada em todo o sistema, então se você por um acaso se esquecer que criou essa variável e for tentar criar outra com mesmo nome, pode acabar compromentendo o sistema.

//* Exemplo:
//? nome2 = 'fernando';

//# ( let ) Tem escopo de bloco { ... bloco }
// Se criarmos uma variável let e depois criarmos um bloco, seja ele um bloco if, switch, function e etc, podemos criar outra variável let dentro desse bloco com o mesmo nome da variável let que está fora do bloco, sem afetar a mesma, ou seja, a variável let que está fora do bloco não vai ser redeclarada ou não vai ter seu valor alterado. Isso acontece pois o escopo da variável let que está dentro do bloco é somente aquele bloco, então isso faz com que elas sejam variáveis diferentes uma da outra.

// Caso use o console.log fora do bloco, exibirá o valor da variável let que foi criada fora do bloco, caso use o console.log dentro do bloco, exibirá o valor da variável let que foi criada dentro do bloco.

//* Exemplo:
//? const verdadeira = true;

//? let nome = 'fora bloco';
// Criada uma nova variável let de escopo global
//? console.log(nome);

//? if (verdadeira) {
    //? let nome = 'dentro bloco';
    //Criada uma nova variável let de escopo de bloco
    //? console.log(nome);
//? };

//? console.log(nome);

// Caso o JavaScript não ache a variável let dentro do escopo do bloco, ele irá procurar no escopo superior a qual o bloco está dentro, que pode ser outro bloco, ou, o escopo global mesmo, então se tiver vários blocos aninhados por exemplo, um dentro do outro, e chamarmos o método console.log(nome), para exibir o valor da variável let "nome" no último bloco do aninhamento, ele irá procurar primeiro nesse bloco se tem a variável let, se não tiver, ele vai para o bloco superior á ele, e se não tiver nesse bloco superior, ele vai para um mais superior ainda, e assim por diante até achar a variável let "nome". Se não achar da erro.

//* Exemplo:

//? let nome = 'ramon';
//? console.log(nome);

//? if (true) {
//?  // let nome = 'fernando';
     // Não achou vai procurar no bloco superior
//?     console.log(nome);

//?     if (true) {
//?         let nome = 'mateus';
//?         console.log(nome);

//?         if (true) {
//?          // let nome = 'yusuke';
             // Não achou, vai procurar no bloco superior
//?             console.log(nome);
//?         };
//?     };
//? };

// Caso a variável let seja criada depois de chama-la, o javascript apontará um erro.

//* Exemplo:

//? let nome = 'ramon';
//? console.log(nome);

//? if (true) {
//?     let nome = 'douglas';
//?     console.log(nome);

//?     if (true) {
//?         console.log(nome);
//?         // Erro aqui
//?         let nome = 'outro nome';
//?     };
//? };

//# ( var ) Tem escopo de function() {...}
// Ao contrário de "let", se criarmos uma variável com o mesmo nome de outra usando "var" dentro de um bloco, ela será redeclarada e reinicializada, pois "var" só tem escopo de function.

//* Exemplo:

//? var nome = 'ramon';
//? console.log(nome);

//? if (true) {
//?     var nome = 'josivaldo';
//?     console.log(nome);

//?     if (true) {
//?         var nome = 'Sub Zero';
//?         console.log(nome);
//?     };
//? };

//? console.log(nome);
// Nesse último console.log, o valor de saída será o último valor dado a variável nome.

//* Exemplo com functions() { ... }:

var nome = 'ramon';

function mostraNome() {
    console.log(nome);
    // Irá mostrar o nome normalmente pois a variável está no escopo global
    var nome2 = 'saitama';

    if (true) {
        console.log(nome2);
        var nome2 = 'luffy';
    };
    console.log(nome2);
};

mostraNome();

console.log(nome2);
// Não irá mostrar o nome2 pois essa variável está protegida dentro do escopo da function

//! Var tem o hoisting também.