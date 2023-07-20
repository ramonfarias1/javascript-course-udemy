//# Recursive Functions
// É quando uma function chama a si mesma
// recursão é usada para resolver problemas que contêm sub-problemas menores
// Uma function recursiva precisa receber uma condição para que a mesma pare de ser executada, se não ela entrará em looping infinito.

function recursive(num) {
    console.log(num);
    if (num === 10) return;
    num++
    recursive(num);
};

recursive(0);