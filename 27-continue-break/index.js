// continue = pula para a próxima iteração

// break = quebra o loop, fazendo ele terminar

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//# for (clássico)

//? for (let i = 0 ; i < numeros.length ; i++) {
//?     if (numeros[i] === 2) {
//?         console.log(`pulado...`);
//?         continue;
//          continua para a próxima iteração
//?     };

//?     if (numeros[i] === 7) {
//?         console.log(`número ${numeros[i]} encontrado, terminando programa...`);
//?         break;
//          quebra o loop
//?     };
//?     console.log(numeros[i]);
//? };

//# for in

//? for (let i in numeros) {
//?     if (numeros[i] === 2) {
//?         console.log(`pulado...`);
//?         continue;
//          continua para a próxima iteração
//?     };

//?     if (numeros[i] === 7) {
//?         console.log(`número ${numeros[i]} encontrado, terminando programa...`);
//?         break;
//          quebra o loop
//?     };
//?     console.log(numeros[i]);
//? };

//# for of

//? for (let numero of numeros) {
//?     if (numero === 2) {
//?         console.log(`pulado...`);
//?         continue;
//          continua para a próxima iteração
//?     };

//?     if (numero === 7) {
//?         console.log(`número ${numero} encontrado, terminando programa...`);
//?         break;
//          quebra o loop
//?     };
//?     console.log(numero);
//? };

//# while

//? let i = 0

//? while (i < numeros.length) {
//?     if (numeros[i] === 2) {
//?         console.log(`pulado...`);
//?         i++;
//         //! com (while) NUNCA esqueça de incrementar a variável ANTES do (continue) e do (break), senão o loop será infinito.
//?         continue;
//          continua para a próxima iteração
//?     };

//?     if (numeros[i] === 7) {
//?         console.log(`número ${numeros[i]} encontrado, terminando programa...`);
//?         i++;
//         //! com (while) NUNCA esqueça de incrementar a variável ANTES do (continue) e do (break), senão o loop será infinito.
//?         break;
//          quebra o loop
//?     };
//?     console.log(numeros[i]);
//?     i++;
//? };

//# do while

do {
    if (numeros[i] === 2) {
        console.log(`pulado...`);
        i++;
        //! com (while) NUNCA esqueça de incrementar a variável ANTES do (continue) e do (break), senão o loop será infinito.
        continue;
        //          continua para a próxima iteração
    };

    if (numeros[i] === 7) {
        console.log(`número ${numeros[i]} encontrado, terminando programa...`);
        i++;
        //! com (while) NUNCA esqueça de incrementar a variável ANTES do (continue) e do (break), senão o loop será infinito.
        break;
        //          quebra o loop
    };
    console.log(numeros[i]);
    i++;
} while (i < numeros.length);