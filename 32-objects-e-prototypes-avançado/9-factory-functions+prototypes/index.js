const falar = {
    falar() {
        console.log(`${this.nome} está falando!`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo!`);
    }
};

// Como os métodos "falar()", "comer()" e "beber()" não estão acoplados á function "novaPessoa", pode-se utilizar eles em qualquer object que quisermos, o nome disso é "MIXING".

function novaPessoa(nome, sobrenome) {
    // Passando Diretamente. Contra: Não será possível utilizar os métodos em qualquer object que quisermos:
    //? const pessoaPrototype = {
    //?     falar() {
    //?         console.log(`${this.nome} está falando!`);
    //?     },

    //?     comer() {
    //?         console.log(`${this.nome} está comendo!`);
    //?     },

    //?     beber() {
    //?         console.log(`${this.nome} está bebendo!`);
    //?     }
    //? };

    // Usando spread operator:
    const pessoaPrototype = {...falar, ...comer, ...beber};

    // Usando Object.assign():
    //? const pessoaPrototype = Object.assign({}, falar, comer, beber);

    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            enumerable: true,
            configurable: true,
            writable: true
        },

        sobrenome: {
            value: sobrenome,
            enumerable: true,
            configurable: true,
            writable: true
        }
    });
};

// Também podemos criar um object literal e colocar os métodos diretamente dentro dele e passar como object de prototype para o método Object.create():

//? function novaPessoa(nome, sobrenome) {
//?     return Object.create({
//?         falar() {
//?             console.log(`${this.nome} está falando!`);
//?         },

//?         comer() {
//?             console.log(`${this.nome} está comendo!`);
//?         },

//?         beber() {
//?             console.log(`${this.nome} está bebendo!`);
//?         }
//?     }, {
//?         nome: {
//?             value: nome,
//?             enumerable: true,
//?             configurable: true,
//?             writable: true
//?         },

//?         sobrenome: {
//?             value: sobrenome,
//?             enumerable: true,
//?             configurable: true,
//?             writable: true
//?         }
//?     });
//? };

const p1 = novaPessoa('Edivaldo', 'Pereira');
console.log(p1);
p1.falar();
p1.comer();
p1.beber();

const p2 = novaPessoa('Manoel', 'Azul');
console.log(p2);
p2.falar();
p2.comer();
p2.beber();