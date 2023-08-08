class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if (this.ligado) {
            console.log(`O ${this.nome} já está ligado!`);
            return;
        };

        this.ligado = true;
        console.log(`O ${this.nome} foi ligado!`);
    };

    desligar() {
        if (!this.ligado) {
            console.log(`O ${this.nome} já está desligado!`);
            return;
        };

        this.ligado = false;
        console.log(`O ${this.nome} foi desligado!`);
    };
};

const dq = new DispositivoEletronico('Dispositivo Qualquer');
console.log(dq);
dq.desligar();
dq.ligar();
dq.ligar();
dq.desligar();

class Celular extends DispositivoEletronico {
    constructor(nome, cor, marca, modelo) {
        super(nome);
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
    };
};

const cell1 = new Celular('celular', 'preto', 'Xiaomi', 'POCO X3 Pro');
console.log(cell1);
cell1.desligar();
cell1.ligar();
cell1.ligar();
cell1.desligar();

class Laptop extends Celular {};

const laptop1 = new Laptop('')