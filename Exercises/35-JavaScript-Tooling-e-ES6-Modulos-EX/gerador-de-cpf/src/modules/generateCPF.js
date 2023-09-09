import ValidateCPF from "./validateCPF.js";

export default function generateCPF() {
    const cpfWithoutDigits = [];

    for (let i = 1; i <= 9; i++) {
        cpfWithoutDigits.push( Math.floor( Math.random() * 10 ).toString() );
    };

    const cpf = ValidateCPF.createsDigits(cpfWithoutDigits.join(''));
    return cpf;
};