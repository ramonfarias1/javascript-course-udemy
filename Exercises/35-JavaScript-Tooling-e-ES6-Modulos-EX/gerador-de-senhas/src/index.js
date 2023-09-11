import './assets/css/style.css';
import generatesPassword from './modules/generatesPassword.js';

const btnGenerate = document.querySelector('input.generate');

btnGenerate.addEventListener('click', () => {
    const inputAmountChar = document.querySelector('input.amountChar');
    const ckbNumbers = document.querySelector('input.numbers');
    const ckbSymbols = document.querySelector('input.symbols');
    const ckbUcLetters = document.querySelector('input.ucLetters');
    const ckbLcLetters = document.querySelector('input.lcLetters');
    const spanGP = document.querySelector('span.generatedPassword');

    spanGP.innerHTML = generatesPassword(inputAmountChar.value, ckbNumbers.checked, ckbSymbols.checked, ckbUcLetters.checked, ckbLcLetters.checked);
});