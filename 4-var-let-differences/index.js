var nome = 'ramon'
var nome = 'juca' // (var) pode ser redeclarado

let nome2 = 'ramon'
let nome2 = 'juca' // o let não pode

let nome3 = 'ramon'
nome3 = 'juca' // se quiser mudar o valor da variável let, apenas digite o nome dela sem o (let)

// dica: não declare variáveis sem colocar let ou const primeiro, pois fazendo isso você está declarando uma variável global que é usada em todo o sistema, então se você por um acaso se esquecer que criou essa variável e for tentar criar outra com mesmo nome, pode acabar compromentendo o sistema.

// Ex:

nome = 'ramon'