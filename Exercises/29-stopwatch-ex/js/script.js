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

    const startButton = document.querySelector('span.start-button');
    const pauseButton = document.querySelector('span.pause-button');
    const resetButton = document.querySelector('span.reset-button');
    const tagH1 = document.querySelector('h1');
    const title = document.querySelector('.title');

    let hour = 0;
    let min = 0;
    let seg = 0;

    let timer;

    document.addEventListener('click', function (event) {
        const element = event.target;
        if (element.classList.contains('start-button')) {
            clearInterval(timer);
            tagH1.classList.remove('paused');
            startButton.classList.add('hidden');
            pauseButton.classList.remove('hidden');
            resetButton.classList.remove('hidden');

            timer = setInterval(function () {
                tagH1.innerText = getTimer();
                title.innerText = tagH1.innerText + ' - Stopwatch';

            }, 1000);
        };

        if (element.classList.contains('pause-button')) {
            clearInterval(timer);

            tagH1.classList.add('paused');
            startButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
        };

        if (element.classList.contains('reset-button')) {
            clearInterval(timer);

            hour = 0;
            min = 0;
            seg = 0;

            tagH1.innerText = `00:00:00`;
            tagH1.classList.remove('paused');
            startButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
            resetButton.classList.add('hidden');
        };
    });
};

timer();