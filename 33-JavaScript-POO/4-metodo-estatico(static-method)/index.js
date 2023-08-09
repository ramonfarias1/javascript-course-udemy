// A palavra chave static define um método estático para a classe.

// Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Em vez disso, eles são chamados na própria classe.

// Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação, como funções para criar ou clonar objetos.

//* Exemplo:

class TV {
    constructor(nome) {
        this.nome = nome;
        this.volume = 0;
    };
    // Métodos de Instância:
    aumentarVolume() {
        this.volume += 2;
        console.log('volume: ' + this.volume);
    };

    diminuirVolume() {
        this.volume -= 2;
        console.log('volume: ' + this.volume);
    };
    // Método Static:
    static falaOi() {
        console.log('Oi!')
    };
};

TV.falaOi(); // O método foi chamado sem precisar ter que instanciar a classe.

// Você chama o método static pela classe e não pelo object:

const minhaTV = new TV('LG');
//? minhaTV.falaOi();
// TypeError: tv.falaOi is not a function

//# Se você quiser usar o object dentro do método static, você pode enviá-lo como parâmetro:

//* Exemplo:

class Numeros {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    };

    static somaDosNumeros(numeros) {
        return numeros.n1 + numeros.n2;
    };
};

const meusNumeros = new Numeros(3, 2);

console.log( Numeros.somaDosNumeros(meusNumeros) ); // < - Aqui foi passado o object "meusNumeros" para o parâmetro do método static.

//# Chamando um método static de dentro de outro método static:
// Para chamar um método estático dentro de outro método estático da mesma classe, podemos utilizar a palavra reservada "this".

class chamadaDoMetodoStatic {
    static metodoStatic() {
        return "O método static foi chamado";
    };

    static outroMetodoStatic() {
        return this.metodoStatic() + ' de dentro de outro método static!';
    };
};

console.log(chamadaDoMetodoStatic.metodoStatic());

console.log(chamadaDoMetodoStatic.outroMetodoStatic());