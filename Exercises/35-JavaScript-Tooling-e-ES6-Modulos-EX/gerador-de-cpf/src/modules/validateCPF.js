export default class ValidateCPF {
    constructor(cpfInputValue) {
        Object.defineProperty(this, 'cpf', {
            enumerable: true,
            configurable: false,

            get: function () {
                return cpfInputValue.replaceAll('.', '').replace('-', '');
            },
        });
    };

    startValidation() {
        if (this.cpf.length !== 11 || isNaN(this.cpf) || this.cpf === this.cpf[0].repeat(this.cpf.length)) return false;

        const cpfValido = this.generateValidCPF();
        return cpfValido === this.cpf ? true : false;
    };

    generateValidCPF() {
        const cpfSemDigitos = this.cpf.slice(0, -2);
        const cpfValido = ValidateCPF.createsDigits(cpfSemDigitos);
        return cpfValido;
    };

    static createsDigits(cpfSemDigitos) {
        const cpfArray = cpfSemDigitos.split('');

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
};