const velocidade = Symbol('velocidade'); // Symbol foi usado para dificultar o acesso a variável velocidade

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[velocidade] = 0;
    };

    get velocidade() {
        return this[velocidade];
    };

    set velocidade(valor) {
        if (valor < 0 || valor > 100) return;
        if (typeof valor !== 'number') return;
        this[velocidade] = valor;
    };
    // É importante utilizar "set" aqui para colocar algumas condições antes de definir um valor na velocidade quando quisermos, para impedir que ocorra erros como: colocar um valor maior que o limite de 100 ou menor que o limite de 0 e verificar se esse valor é do tipo number.

    acelerar() {
        if (this[velocidade] >= 100) return;
        this[velocidade]++;
    };

    freiar() {
        if (this[velocidade] <= 0) return;
        this[velocidade]--;
    };
};

const carro1 = new Carro('prisma ltz');

carro1.velocidade = 10;

console.log(carro1);


for (let i = 0; i <= 102; i++) {
    console.log(carro1.velocidade);
    carro1.acelerar();
};

for (let i = 0; i <= 102; i++) {
    console.log(carro1.velocidade);
    carro1.freiar();
};