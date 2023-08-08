// Um object Map contém pares key-value onde as keys podem ser qualquer tipo de dados.

// Um object Map lembra a ordem de inserção original das keys.

// Um object Map tem uma propriedade que representa o tamanho do mapa.

//# Métodos de Map:
/*
new Map() = Cria um novo objeto Map
    set() = Define o valor de uma chave em um Mapa
    get() = Obtém o valor de uma chave em um Mapa
  clear() = Remove todos os elementos de um Mapa
 delete() = Remove um elemento Map especificado por uma chave
    has() = Retorna true se uma chave existir em um Mapa
forEach() = Invoca um retorno de chamada para cada par chave/valor em um Mapa
entries() = Retorna um objeto iterador com os pares [chave, valor] em um Mapa
   keys() = Retorna um objeto iterador com as chaves em um Mapa
 values() = Retorna um objeto iterador dos valores em um Mapa
*/

//# Como criar um object Map
// Você pode criar um object Map das seguintes formas:

// - Passando um array para: new Map().
// - Criando um Map e usando: Map.set().

//# new Map()
// Você pode criar um Map passando um array para o constructor: new Map().

const frutas = new Map([
    [1, 'banana'],
    [2, 'laranja'],
    [3, 'melancia']
]);

console.log(frutas);
console.log(frutas.get(1));

//# Map.set()
// Você pode adicionar elementos a um Map com o método: set().

const quantidadeCarros = new Map();

quantidadeCarros.set('volvo', 10);
quantidadeCarros.set('fiat', 8);
quantidadeCarros.set('ford', 22);

console.log(quantidadeCarros);
console.log(quantidadeCarros.get('fiat'));

// O método set() também pode ser usado para alterar um valor que já existe de um Map:

quantidadeCarros.set('fiat', 11);
console.log(quantidadeCarros);
console.log(quantidadeCarros.get('fiat'));

//# Map.get()
// O método get() obtém o valor de uma key em um Map.

console.log(quantidadeCarros.get('ford'));

//# Map.size
// Retorna o número de elementos em um Map

console.log(quantidadeCarros.size);

//# Map.delete()
// Remove um elemento do Map

// quantidadeCarros.delete('ford');
console.log(quantidadeCarros);
console.log(quantidadeCarros.get('ford')); // Retorna underfined

//# Map.clear()
// Remove todos os elementos do Map

// quantidadeCarros.clear();
console.log(quantidadeCarros);

//# Map.has()
// Esse método retorna true se uma key existir dentro do Map

console.log(quantidadeCarros.has('volvo'));

// Se não existir, retorna false

quantidadeCarros.delete('volvo');
console.log(quantidadeCarros.has('volvo'));

//# Map.forEach()
// O método invoca um retorno de chamada para cada par chave/valor do Map

quantidadeCarros.forEach((value, key) => {
    console.log(key, value);
});

//# Map.entries()
// O método retorna um object iterador com o [key,values] em um mapa

console.log(quantidadeCarros.entries());

for (let [key, value] of quantidadeCarros.entries()) {
    console.log(key, value);
};

//# Map.keys()
// O método retorna um object iterador com as keys do Map

console.log(quantidadeCarros.keys());

for (let key of quantidadeCarros.keys()) {
    console.log(key);
};

//# Map.values()
// O método retorna um object iterador com os valores do Map

console.log(quantidadeCarros.values());

for (let value of quantidadeCarros.values()) {
    console.log(value);
};

// Você pode usar esse método para somar os valores do Map

let total = 0;

for (let value of quantidadeCarros.values()) {
    total += value;
};

console.log(total);

//# Um Object como key de um Map
// Ser capaz de usar objects como keys de um Map é um recurso importante do Map.

const macas = {nome: 'maças'};
const abacaxis = {nome: 'abacaxis'};
const kiwis = {nome: 'kiwis'};

const fruits = new Map();
fruits.set(macas, 122);
fruits.set(abacaxis, 78);
fruits.set(kiwis, 99);

console.log(fruits);
console.log(fruits.get(kiwis));

// Lembre-se: A key é um object (macas), não uma cadeia de caracteres ("macas")

console.log(fruits.get('kiwis')) // Undefined

//# Maps são Objects

console.log(typeof fruits) // Retorna Object

// instanceof retorna true:

console.log(fruits instanceof Object);
console.log(fruits instanceof Map);

//# Objects JavaScript vs Maps:
/* Diferença entre objects javascript e Maps:

Object:                                    Maps:
Não diretamente iterável	               Diretamente iterável
Não tem uma propriedade size	           Tem uma propriedade size
As chaves devem ser Strings (ou Symbols)   As chaves podem ser qualquer tipo de dados
As chaves não estão bem ordenadas	       As chaves são ordenadas por inserção
Ter chaves padrão	                       Não tem chaves padrão
*/

//# Exemplo de uso do Object Map

const pessoas = [
    {id: 3, nome: 'carlos'},
    {id: 2, nome: 'vinicius'},
    {id: 1, nome: 'hugo'}
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// };

// console.log(novasPessoas);

const mapPessoas = new Map();

for (const pessoa of pessoas ) {
    const {id} = pessoa;
    mapPessoas.set(id, {...pessoa});
};

console.log(mapPessoas);

for (const [identification, {id, nome}] of mapPessoas) {
    console.log(identification, id, nome);
};