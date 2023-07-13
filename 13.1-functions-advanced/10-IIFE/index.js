//# (IIFE) = Immediately Invoked Function Expression
// É uma função em JavaScript que é auto-invocada.

// Primeiro declaramos uma function anônima dentro de parênteses(). Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

// Depois criamos a expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

//* Exemplo:

const nome = 'David';

(function() {
    console.log(nome);
})();

//? console.log(nome) // Não é possível acessar as variáveis que estão dentro da function anônima.