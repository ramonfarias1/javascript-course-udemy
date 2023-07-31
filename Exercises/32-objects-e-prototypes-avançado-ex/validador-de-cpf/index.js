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

const cpfInput = '669.281.818-42';
let cpf = cpfInput.replaceAll('.', '').replace('-', '').slice(0, -2);

let total = 0;
let i = 10;
let digitos = '';

for (let r = 0 ; r < 2 ; r++) {
    for (let n of cpf) {
        total += Number(n) * i;
        i--
    };
    
    total = 11-(total % 11);
    
    digitos += total < 10 ? String(total) : String(0);
    cpf += digitos;
    i = 11;
};

console.log(cpf);

console.log(digitos);
cpfInput.endsWith(digitos) ? console.log('cpf válido') : console.log('cpf não válido');