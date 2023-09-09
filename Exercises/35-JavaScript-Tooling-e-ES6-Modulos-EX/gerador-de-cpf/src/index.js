import './assets/css/style.css';
import generateCPF from './modules/generateCPF.js';

function formatCPF(cpf) {
    return (
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
    );
};

const generateBtn = document.querySelector('input.generate');

generateBtn.addEventListener('click', ()=> {
    const spanCPF = document.querySelector('span.cpf');
    const cpf = generateCPF();
    spanCPF.innerHTML = formatCPF(cpf);
});