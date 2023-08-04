// Polimorfismo é quando queremos que os filhos se comportem diferente dos seus pais, ou seja, temos os mesmo métodos, com os mesmos nomes mas com diferentes comportamentos. Em outras palavras, um object filho pode executar os mesmos métodos do seu object pai mas de maneira diferente.

//* Exemplo:

// No exemplo abaixo temos uma classe base chamada "Conta" que contém os métodos "sacar()" e "depositar()":

class Conta { // Superclass
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    };

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente!");
            return;
        };

        this.saldo -= valor;
        console.log(`R$ ${valor.toFixed(2)} sacado, agora seu saldo é de R$ ${this.saldo.toFixed(2)}.`);
        return;
    };

    depositar(valor) {
        this.saldo += valor;
        console.log(`R$ ${valor.toFixed(2)} depositado, seu saldo agora é de R$ ${this.saldo.toFixed(2)}.`);
        return;
    };
};

// Depois temos duas classes chamadas "CC" e "CP" que são filhas da classe "Conta" e que herdam suas propriedades e métodos. Cada uma dessas classes filhas teram sua própria implementação do método "sacar()":

class CC extends Conta { // Subclass
    constructor(agencia, conta, saldo, credito) {
        super(agencia, conta, saldo);
        this.credito = credito;
    };

    sacar(valor) {
        if (valor > (this.saldo + this.credito)) {
            console.log('Saldo Insuficiente!');
            return;
        };

        this.saldo -= valor;
        console.log(`R$ ${valor.toFixed(2)} sacado, agora seu saldo é de R$ ${this.saldo.toFixed(2)}.`);
        return;
    };
};

// Na classe "CC" acima, no método "sacar()", não é possível sacar o dinheiro se o valor de saque for maior que o saldo da conta + o credito da conta. Diferente do método "sacar()" da classe pai "Conta" que não é possível sacar o dinheiro apenas se o valor de saque for maior que o saldo da conta apenas.

class CP extends Conta { // Subclass
    constructor(agencia, conta, saldo, limiteSaque) {
        super(agencia, conta, saldo);
        this.limiteSaque = limiteSaque;
    };

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo Insuficiente!');
            return;
        };
        if (valor > this.limiteSaque) {
            console.log('Limite de saque atingido!');
            return;
        };

        this.saldo -= valor;
        console.log(`R$ ${valor.toFixed(2)} sacado, agora seu saldo é de R$ ${this.saldo.toFixed(2)}.`);
        return;
    };
};

// Na classe "CP" acima, no método "sacar()", não é possível sacar o dinheiro se o valor de saque for maior que o saldo da conta ou se o valor de saque for maior que o limite de saque. Diferente do método "sacar()" da sua classe irmã "CC" e da sua classe pai "Conta".

// Perceba que ambas as classes "CC" e "CP" estão substituindo (override) o método "sacar()" da classe base "Conta". Essa é uma forma de polimorfismo chamada polimorfismo de substituição.

// Agora, podemos criar objetos dessas classes e invocar o método "sacar()" em cada um deles:

const conta01 = new Conta(1234, 4321, 0);
console.log(conta01);
conta01.depositar(5000);
conta01.sacar(1500);

const cc01 = new CC(1234, 4321, 0, 1000); // Crédito
console.log(cc01);
cc01.depositar(5000);
cc01.sacar(5500);

const cp01 = new CP(1234, 4321, 0, 2000); // Limite de saque
console.log(cp01);
cp01.depositar(5000);
cp01.sacar(3000);

// Acima temos diferentes objetos (conta01, cc01 e cp01) respondendo ao mesmo método "sacar()", mas cada um executando a implementação específica da sua própria classe.