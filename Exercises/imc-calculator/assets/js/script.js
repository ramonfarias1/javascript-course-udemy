function myScope() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', calcularIMC);
    function calcularIMC(evento) {
        evento.preventDefault();
        const peso = form.querySelector('#input-peso');
        const altura = form.querySelector('#input-altura');
        const resultado = document.querySelector('#resultado');
        if (peso.value === '' || peso.value === '0') {
            resultado.style.display = 'block';
            resultado.innerHTML = 'Digite seu peso!';
            resultado.style.backgroundColor = '#ff9090';
            resultado.style.color = 'darkred';
        } else if (altura.value === '' || altura.value === '0') {
            resultado.style.display = 'block';
            resultado.innerHTML = 'Digite sua altura!';
            resultado.style.backgroundColor = '#ff9090';
            resultado.style.color = 'darkred';
        } else {
            const pesoConvertido = Number(peso.value);
            const alturaConvertida = Number(altura.value);
            const imc = Number((pesoConvertido / (alturaConvertida ** 2)).toFixed(2));
            if (imc < 17) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Muito abaixo do peso)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            } else if (imc >= 17 && imc <= 18.49) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            } else if (imc >= 18.50 && imc <= 24.99) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            } else if (imc >= 25 && imc <= 29.99) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Acima do peso)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            } else if (imc >= 30 && imc <= 34.99) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Obesidade I)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            } else if (imc >= 35 && imc <= 39.99) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Obesidade II Severa)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            } else if (imc >= 40) {
                resultado.style.display = 'block';
                resultado.innerHTML = `Seu IMC é ${imc} (Obesidade III Mórbida)`;
                resultado.style.backgroundColor = 'cadetblue';
                resultado.style.color = 'black';
            };
        };
    };
};

myScope();