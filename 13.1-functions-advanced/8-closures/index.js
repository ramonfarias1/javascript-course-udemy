// Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

// Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico.

//* Exemplo:

function retornaUmaFunction() {
    const nome = 'Hunk';
    return function() {
        console.log(nome);
    };
};

const functionRecebida = retornaUmaFunction();
console.log(functionRecebida());

console.dir(functionRecebida); // console.dir() mostra as propriedades de um objeto javascript

/* No exemplo acima, a constante "functionRecebida" chama uma function que retorna outra function, e a function que foi retornada fica armazenada dentro da constante "functionRecebida".
Quando chamamos a function que está dentro da constante "functionRecebida" através do "console.log(functionRecebida());", ela realizada a sua tarefa que é mostrar o nome no console.
Mas como essa function mostra o nome no console se o nome está armazenado numa constante que está em outra function que não foi retornada para dentro da constante "functionRecebida"?
Simples, no momento da criação das duas functions, mas especificamente da function que vai ser retornada, a mesma, já quarda o escopo lexico, então esse escopo léxico pode ser acessado de qualquer lugar que a function esteja. Isso se chama "closure".

Quando mostramos as propriedades da function que está dentro da constante "functionRecebida", no caso a function que foi retornada, usando "console.dir(functionRecebida);" vemos uma propriedade chamada "scopes", e dentro de "scopes" tem outra propriedade chamada "closure", que armazena o escopo da function "retornaFunction" que é seu pai, então ela também tem acesso a tudo que está dentro do escopo do seu pai também.
*/

//* Outro Exemplo:
// A function retornada pode ter varios closures diferentes quando fazemos isso:

function retornaUmaFunction2(nome) {
    return function() {
        return nome;
    };
};

const recebeUmaFunction = retornaUmaFunction2('Kirk');
const recebeUmaFunction2 = retornaUmaFunction2('Hunk');

console.log(recebeUmaFunction());
console.log(recebeUmaFunction2());

// No exemplo acima a constante "recebeUmaFunction" armazena uma function com o closure tendo "kirk" como argumento do parâmetro nome.

// E a constante "recebeUmaFunction2" armazena uma function com o closure tendo "Hunk" como argumento do parâmetro nome.