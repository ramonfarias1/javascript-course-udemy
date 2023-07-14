//# Factory Function
// É uma function que retorna um novo object.

//* Exemplo:
// Suponha que desejas criar um object para 1 pessoa e retornar o nome completo dela. Como farias sem conhecer factory functions:

const pessoa1 = {
    nome: 'João',
    sobrenome: 'Bastos',
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
};

console.log(pessoa1.nomeCompleto());

// Agora suponha que desejas criar outro object para mais 1 pessoa, no caso agora seria 2 pessoas, então é só duplicar o código mudando para "pessoa2":

const pessoa2 = {
    nome: 'Bryan',
    sobrenome: 'Zambrosusky',
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
};

console.log(pessoa2.nomeCompleto());

// Nestes exemplos, os objetos "pessoa1" e "pessoa2" têm as mesmas propriedades e métodos.

// O problema é que quanto mais objetos você deseja criar, mais código duplicado você tem.

// Para evitar copiar o mesmo código novamente, você pode definir uma "factory function".

//* Exemplo utilizando Factory Function:

//? function criaPessoa(nome, sobrenome) {
//?     return {
//?         nome,
//?         sobrenome,
//?         nomeCompleto() {
                // return `${this.nome} está ${assunto}` // Usando "this"
//?             return nome + ' ' + sobrenome;
                // Você pode usar o parâmetro direto pois é mais performático ao invés de usar a palavra chave "this" para se referir ao objeto.
//?         },
//?     };
//? };

//? const pessoa01 = criaPessoa('Gael', 'Slaveknight');
//? const pessoa02 = criaPessoa('Artorias', 'do Abismo');

//? console.log(pessoa01.nomeCompleto());
//? console.log(pessoa02.nomeCompleto());

//* Outro Exemplo:
// Calculando o IMC de uma pessoa.

//? function criaPessoa(nome, sobrenome, altura, peso) {
//?     return {
//?         nome,
//?         sobrenome,
//?         altura,
//?         peso,

//?         nomeCompleto() {
//?             return nome + ' ' + sobrenome;
//?         },

//?         calcIMC() {
//?             const imc = peso / (altura ** 2);
//?             return imc.toFixed(2);
//?         },
//?     };
//? };

//? const pessoa01 = criaPessoa('Gael', 'Slaveknight', 2.0, 95);
//? const pessoa02 = criaPessoa('Artorias', 'do Abismo', 2.5, 82);

//? console.log(pessoa01.nomeCompleto(), pessoa01.calcIMC());
//? console.log(pessoa02.nomeCompleto(), pessoa02.calcIMC());

//# Getters e Setters
// Getters e setters permitem que você defina Acessadores ás propriedades de um object.

// Getters são usados para ler valores de propriedades, enquanto setters são usados para gravar valores em propriedades.

/* Por que usar Getters e Setters?
 - Fornece uma sintaxe mais simples.
 - Permite sintaxe igual para propriedades e métodos.
 - Ele pode garantir uma melhor qualidade de dados.
 */

 // Para utiliza-los basta apenas colocar "get" ou "set" logo antes do método.

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        
        get nomeCompleto() {
            return nome + ' ' + sobrenome;
        },
        
        set nomeCompleto(valor) {
            valorSplitted = valor.split(' ');
            nome = valorSplitted.shift();
            sobrenome = valorSplitted.join(' ');
        },

        get calcIMC() {
            const imc = peso / (altura ** 2);
            return imc.toFixed(2);
        },
    };
};

const pessoa01 = criaPessoa('Gael', 'Slaveknight', 2.0, 95);
const pessoa02 = criaPessoa('Artorias', 'do Abismo', 2.5, 82);

pessoa01.nomeCompleto = 'Ainz Ooal Gown';

console.log(pessoa01.nomeCompleto, pessoa01.calcIMC);
console.log(pessoa02.nomeCompleto, pessoa02.calcIMC);

// Veja no exemplo acima que não precisamos usar parênteses para chamar os métodos "nomeCompleto" e "calcIMC".