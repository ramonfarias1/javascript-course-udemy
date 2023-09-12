import './assets/css/style.css';
import generatePassword from './modules/passwordGenerator.js';

const generateBtn = document.querySelector('input.generate');

generateBtn.addEventListener('click', () => {
    const quantityCharInput = document.querySelector('input.quantity-char');
    const numbersCheckbox = document.querySelector('input.numbers');
    const symbolsCheckbox = document.querySelector('input.symbols');
    const uppercaseCheckbox = document.querySelector('input.uppercase');
    const lowercaseCheckbox = document.querySelector('input.lowercase');
    const resultSpan = document.querySelector('span.result');

    const generatedPassword = generatePassword(
        quantityCharInput.value, 
        numbersCheckbox.checked, 
        symbolsCheckbox.checked, 
        uppercaseCheckbox.checked, 
        lowercaseCheckbox.checked
        );

    resultSpan.innerHTML = generatedPassword;
});