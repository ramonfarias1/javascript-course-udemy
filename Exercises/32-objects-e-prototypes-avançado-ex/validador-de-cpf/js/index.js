/* 669.281.818-42

Primeiro Digito:

6 * 10 = 60
6 * 9 = 54
9 * 8 = 72
2 * 7 = 14
8 * 6 = 48
1 * 5 = 5
8 * 4 = 32
1 * 3 = 3
8 * 2 = 16
total = 304

11 - (304 % 11) = 4
Se o resultado aqui por maior que 9, então o digito será 0

Segundo Digito:

Vai adicionar o primeiro digito no final e começar a multiplicar a partir do 11 agora

6 * 11 = 66
6 * 10 = 60
9 * 9 = 81
2 * 8 = 16
8 * 7 = 56
1 * 6 = 6
8 * 5 = 40
1 * 4 = 4
8 * 3 = 24
4 * 2 = 8
total = 361

11 - (361 % 11) = 2
Se o resultado aqui por maior que 9, então o digito será 0
*/

// (function validaCPF() {
//     const cpfInput = '669.281.818-42';
//     const cpfLimpo = cpfInput.replaceAll('.', '').replace('-', '');
//     let cpf = cpfLimpo.slice(0, -2);
//     let num = 10;

//     for (let i = 0; i < 2; i++) {
//         let totalMult = 0;
//         let digito;

//         for (let valor of cpf) {
//             totalMult += Number(valor) * num;
//             num--;
//         };

//         digito = 11 - (totalMult % 11);
//         cpf += digito < 10 ? String(digito) : '0';
//         num = 11;
//     };

//     console.log(`Seu CPF: ${cpfLimpo}`);
//     console.log(`CPF Validado: ${cpf}`);

//     if (cpf === cpfLimpo) return console.log('Resultado: CPF Válido!');
//     return console.log('Resultado: CPF Inválido!');
// }());

// (function validaCPF() {
//     const cpfInput = '669.281.818-42';
//     const cpfLimpo = cpfInput.replaceAll('.', '').replace('-', '');

//     let cpfArray = cpfLimpo.slice(0, -2).split('');
//     let contador = 10;

//     for (let i = 0; i < 2; i++) {
//         const totalMult = cpfArray.reduce((acumulador, valor) => {
//             acumulador += Number(valor) * contador;
//             contador--;
//             return acumulador;
//         }, 0);

//         let digito = 11 - (totalMult % 11);

//         digito < 10 ? cpfArray.push(digito) : cpfArray.push('0');
//         contador = 11;
//     };

//     const cpf = cpfArray.join('');
//     console.log(`Seu CPF: ${cpfLimpo}`);
//     console.log(`CPF validado: ${cpf}`);

//     if (cpf === cpfLimpo) return console.log('Resultado: CPF Válido!');
//     return console.log('Resultado: CPF Inválido!');
// }());

function mascara(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

class ValidaCpf {
    constructor(cpfInputValue) {
        Object.defineProperty(this, 'cpf', {
            enumerable: true,
            configurable: false,

            get: function () {
                return cpfInputValue.replaceAll('.', '').replace('-', '');
            }
        });
    };

    iniciarValidacao() {
        if (this.cpf.length !== 11 || isNaN(this.cpf)) return false;
        if (this.cpf === this.cpf[0].repeat(this.cpf.length)) return false;

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
                digito < 10 ? cpfArray.push(digito) : cpfArray.push(0);
            };

            return cpfArray.join('');
        };

        return cpfValidado() === this.cpf ? true : false;
    };
};

const botaoValidar = document.querySelector('#botao-validar');
botaoValidar.addEventListener('click', () => {
    const cpfInput = document.querySelector('#cpf-input');
    const pResult = document.querySelector('#result');

    const cpf = new ValidaCpf(cpfInput.value);

    if (cpf.iniciarValidacao()) {
        pResult.innerText = 'CPF Válido!';
        pResult.setAttribute('class', 'valido');
        pResult.style.display = 'block';
    } else {
        pResult.innerText = 'CPF Inválido!';
        pResult.setAttribute('class', 'invalido');
        pResult.style.display = 'block';
    };
});