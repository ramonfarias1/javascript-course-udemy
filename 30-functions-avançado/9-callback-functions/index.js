// CallBack é uma função passada como um argumento para outra função.

// Essa técnica permite que uma função chame outra função.

// Uma função de CallBack pode ser executada após a conclusão de outra função.

//! Nota: Ao passar uma função como argumento, lembre-se de não usar parênteses.

//* Exemplo:

function random(max = 3000, min = 1000) {
    const num = Math.random() * (max - min) + min;
    return Math.round(num);
};

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, random());
};

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, random());
};

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, random());
    
};

f1(f1callback);

function f1callback() {
    f2(f2callback);
};

function f2callback() {
    f3(f3callback);
};

function f3callback() {
    console.log('terminou!');
};