class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    };

    sacar(valor) {
        if (valor > this.saldo) return console.log("Saldo Insuficiente!");
        this.saldo -= valor;
        return console.log(`R$ ${valor.toFixed(2)} sacado, agora seu saldo é de R$ ${this.saldo.toFixed(2)}.`);
    };

    depositar(valor) {
        this.saldo += valor;
        return console.log(`R$ ${valor.toFixed(2)} depositado, seu saldo agora é de R$ ${this.saldo.toFixed(2)}.`);
    };
};

const conta01 = new Conta(1234, 1234, 5000);

conta01.sacar(1500);
console.log(conta01);

conta01.depositar(500);
console.log(conta01);

class CC extends Conta {
    constructor(limite) {
        super(limite);
    };

    sacar(valor) {
        if (valor > limite) 
    }
};

const cc01 = new CC(4321, 4321, 7500, 10000);

console.log(cc01);

cc01.sacar(2000);
console.log(cc01);