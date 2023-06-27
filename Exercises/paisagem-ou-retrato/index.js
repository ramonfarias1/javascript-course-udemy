//? const ePaisagem = (width, height) => width > height ? true : false;

//? console.log(ePaisagem(400, 500));

//# Melhorado:

const ePaisagem = (width, height) => width > height;
// A própria condição já retorna true sozinha se o width for maior, não é necessário pedir para retonar true ou false. 
console.log(ePaisagem(400, 500));