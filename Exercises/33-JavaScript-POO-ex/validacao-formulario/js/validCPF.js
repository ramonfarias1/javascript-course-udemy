class ValidaCpf {
    constructor(cpfInputValue) {
        Object.defineProperty(this, 'cpf', {
            enumerable: true,
            configurable: false,

            get: function () {
                return cpfInputValue.replaceAll('.', '').replace('-', '');
            },
        });
    };

    iniciarValidacao() {
        if (this.cpf.length !== 11 || isNaN(this.cpf) || this.cpf === this.cpf[0].repeat(this.cpf.length)) return false;

        const cpfValidado = () => {
            const cpfArray = this.cpf.slice(0, -2).split('');

            for (let i = 0; i < 2; i++) {
                let contador = cpfArray.length + 1;
                
                const totalMult = cpfArray.reduce((acumulador, valor) => {
                    acumulador += Number(valor) * contador;
                    contador--;
                    return acumulador;
                }, 0);

                const digito = 11 - (totalMult % 11);
                digito < 10 ? cpfArray.push(digito.toString()) : cpfArray.push('0');
            };

            return cpfArray.join('');
        };

        return cpfValidado() === this.cpf ? true : false;
    };
};