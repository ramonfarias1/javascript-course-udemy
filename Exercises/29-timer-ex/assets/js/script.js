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
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const resetButton = document.querySelector('#reset-button');

let hour = 0;
let min = 0;
let seg = 0;

let timer;

startButton.addEventListener('click', function () {
    clearInterval(timer);
    tagH1.style.color = 'black';

    timer = setInterval(function () {
        tagH1.innerText = getTimer();
    }, 1000);
});

stopButton.addEventListener('click', function () {
    clearInterval(timer);

    tagH1.style.color = 'red';
});

resetButton.addEventListener('click', function () {
    clearInterval(timer);

    hour = 0;
    min = 0;
    seg = 0;

    tagH1.innerText = `0${hour}:0${min}:0${seg}`;
    tagH1.style.color = 'black';
});