function timer() {
    function zeroAEsquerda(valor) {
        return valor < 10 ? `0${valor}` : valor;
    };

    function getTimer() {
        seg++

        if (min === 60) {
            hour++;
            min = 0;
        };

        if (seg === 60) {
            min++;
            seg = 0;
        };

        return `${zeroAEsquerda(hour)}:${zeroAEsquerda(min)}:${zeroAEsquerda(seg)}`;
    };

    const tagH1 = document.querySelector('h1');

    let hour = 0;
    let min = 0;
    let seg = 0;

    let timer;

    document.addEventListener('click', function (event) {
        const element = event.target;
        if (element.classList.contains('start-button')) {
            clearInterval(timer);
            tagH1.classList.remove('stopped');

            timer = setInterval(function () {
                tagH1.innerText = getTimer();
            }, 1000);
        };

        if (element.classList.contains('stop-button')) {
            clearInterval(timer);

            tagH1.classList.add('stopped');
        };

        if (element.classList.contains('reset-button')) {
            clearInterval(timer);

            hour = 0;
            min = 0;
            seg = 0;

            tagH1.innerText = `00:00:00`;
            tagH1.classList.remove('stopped');
        };
    });
};

timer();