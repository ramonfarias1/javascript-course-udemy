//# Substituindo valores em um Array ( array[0] = "alguma coisa" ):

const nomes = ['joana', 'celciu', 'pavani'];

console.log(nomes);

nomes[0] = 'Haru';

console.log(nomes);

//# Deletando valores de um array ( delete array[0] ):
// Remove somente o valor deixando um espaço vazio no índice do array

const carros = ['hb20', 'hillux', 's10'];

console.log(carros);

delete carros[2];

console.log(carros);

//# Array é passado por referência:
// Qualquer alteração feita em moveis2, também será feita em moveis1

const moveis1 = ['sofá', 'cama', 'mesa'];

const moveis2 = moveis1;

moveis2[0] = 'guarda-roupa';

console.log(moveis1, moveis2);

//# Copiando os valores de um array ( const array2 = [...array1] ):
// Copia os valores de um array usando o operador ( ...spread ), permitindo alterá-los sem alterar o array original.

const moveis3 = [...moveis1];

moveis3[0] = 'comoda';

console.log(moveis1, moveis2, moveis3);

//# Pegando o tamanho de um array ( array.length ):

const animais = ['gato', 'cachorro', 'urubu', 'tigre'];

console.log(animais.length);

//# Removendo valores de um array e retornando o mesmo:

//* Do começo ( array.shift() ):
// Ao remover valores do começo do array o JavaScript irá deslocar todos os valores que sobraram para ocupar os primeiros índices.

const animalRemovido1 = animais.shift();

console.log(animais, animalRemovido1);

//* Do Final ( array.pop() ):

const animalRemovido2 = animais.pop();

console.log(animais, animalRemovido1, animalRemovido2);

//# Adicionando valores em um array:

//* No começo ( array.unshift() ):
// Ao adicionar valores no começo do array o JavaScript irá deslocar todos os outros valores para índices posteriores.

animais.unshift('lobo-cinzento');

console.log(animais);

//* No Final ( array.push() );

animais.push('coelho-branco');

console.log(animais);

//# Fatiando um array ( array.slice(start, end) ):
// Números negativos faz com que o fatiamento ocorra do fim para o começo

const laptops = ['samsung', 'lenovo', 'apple', 'asus', 'positivo'];

console.log(laptops.slice(2, 4));

console.log(laptops.slice(2, -1));

console.log(laptops.slice(0, -4));

//# Convertendo uma String em um Array ( string.split(' ') ):

const umaString = 'Teste de Divisão';

const umaStringDividida = umaString.split(' ');

console.log(umaStringDividida);

const pessoas = 'joão, joana, felix, reinaldo';

const pessoasArray = pessoas.split(', ');

console.log(pessoasArray);

//# Convertendo um Array em uma String ( array.join(' ') ):

const pessoasString = pessoasArray.join(', ');

console.log(pessoasString);