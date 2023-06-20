function myScope() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputPeso = e.target.querySelector('#input-peso');
        const inputAltura = e.target.querySelector('#input-altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setResultado('Peso Inválido!', false);
            return;
        };
        if (!altura) {
            setResultado('Altura Inválida!', false);
            return;
        };

        const imc = getIMC(peso, altura);
        const situacao = getSituacao(imc);
        const msg = `Seu IMC é ${imc} (${situacao})`;

        setResultado(msg, true);
    });

    function getSituacao(imc) {
        const situacao = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade I', 'Obesidade II (severa)', 'Obesidade III (mórbida)'];

        if (imc > 39.99) return situacao[6];
        if (imc > 34.99) return situacao[5];
        if (imc > 29.99) return situacao[4];
        if (imc > 24.99) return situacao[3];
        if (imc > 18.49) return situacao[2];
        if (imc >= 17) return situacao[1];
        if (imc < 17) return situacao[0];
    };

    function getIMC(peso, altura) {
        const imc = peso / altura ** 2;
        return Number(imc.toFixed(2));
    };

    function createParagraph() {
        const p = document.createElement('p');
        return p;
    };

    function setResultado(msg, isValid) {
        const divResultado = document.querySelector('#resultado');
        divResultado.innerHTML = '';
        const p = createParagraph();
        if (isValid) {
            p.classList.add('no-error');
        } else {
            p.classList.add('error');
        };
        p.innerHTML = msg;
        divResultado.appendChild(p);
    };
};

myScope();