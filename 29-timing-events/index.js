// O JavaScript pode ser executado em intervalos de tempo. Isso é chamado de eventos de tempo.

/*Os quatro principais métodos a serem usados com JavaScript são:

 - setTimeout(function, milliseconds)
   Executa uma vez uma função, depois de aguardar um número especificado de milissegundos.

 - setInterval(function, milliseconds)
   O mesmo que setTimeout(), mas repete a execução da função continuamente.

 - clearTimeout(setTimeoutVariable)
   Para a execução do setTimeout()
   O método usa a variável retornada de setTimeout()

 - clearInterval(setIntervalVariable)
   Para a execução do setInterval()
   O método usa a variável retornada de setInterval()
*/

//# setInterval()

//* Exemplo:

function retornaHoras() {
    return new Date().toLocaleTimeString('pt-BR');
};

const timer = setInterval(function() { // Esse método executa a instrução "console.log(retornaHoras());" de 1 em 1 segundos.
    console.log(retornaHoras());
}, 1000);

//# setTimeout()

//* Exemplo:

setTimeout(function() { // Esse método para a execução do "timer" em 6000ms(6seg)
    clearInterval(timer);
    console.log('hora parada!');
}, 6000);

//* Exemplo 2:

const mensagem = setTimeout(function() {
    console.log('Essa mensagem não aparecerá!');
}, 7000);

clearTimeout(mensagem); // Este método para a execução do outro médodo "mensagem = setTimeout(function() {})"