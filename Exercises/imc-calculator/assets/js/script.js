function myScope() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputPeso = event.target.querySelector('#input-peso');
        const inputAltura = event.target.querySelector('#input-altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) return showResult('Peso Inválido!', false);
        if (!altura) return showResult('Altura Inválida!', false);

        const imc = calculateIMC(peso, altura);
        function calculateIMC(peso, altura) {
            return peso / altura ** 2;
        };

        const situation = situationIMC(imc);
        function situationIMC(imc) {
            const situation = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade I', 'Obesidade II (severa)', 'Obesidade III (mórbida)'];

            if (imc > 39.99) return situation[6];
            if (imc > 34.99) return situation[5];
            if (imc > 29.99) return situation[4];
            if (imc > 24.99) return situation[3];
            if (imc > 18.49) return situation[2];
            if (imc >= 17) return situation[1];
            if (imc < 17) return situation[0];
        };

        const result = `Seu IMC é ${imc.toFixed(2)} (${situation})`;

        showResult(result, true);

        function showResult(result, isValid) {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = '';

            const p = createParagraph();
            function createParagraph() {
                const p = document.createElement('p');

                if (isValid) {
                    p.classList.add('no-error');
                    return p;
                } else {
                    p.classList.add('error');
                    return p;
                };
            };

            p.innerHTML = result;
            divResult.appendChild(p);
        };
    });
};

myScope()