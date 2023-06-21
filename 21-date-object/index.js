// O objeto date é criado a partir da função construtora new Date().

// Os objetos Date são estáticos.

// Por padrão, o JavaScript usará o fuso horário do navegador e exibirá uma data como uma cadeia de caracteres de texto completo: Qua Jun 21 2023 16:28:50 GMT-0300 (Hora Padrão de Brasília).

// Há 9 maneiras de criar um objeto date:
/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

const data = new Date(); // Usa-se a palavra "new" para chamar uma função construtora, e o nome de toda função construtora tem a primeira letra maiúscula.
console.log(data.toString()); // Mostra a data no formato americano

const tresHoras = 60 * 60 * 3 * 1000;
const data1 = new Date(0 + tresHoras);
console.log(data1.toString()); // Retorna a data do marco zero do sistema de calendário usado pelo sistema operacional UNIX. JavaScript armazena datas como número de milissegundos desde 01 de janeiro de 1970. Zero hora é 01 de janeiro de 1970 00:00:00 UTC. Um dia (24 horas) é 86 400 000 milissegundos.

const data2 = new Date(2018, 3, 7, 18, 5, 27, 999);
console.log(data2.toString());

//! Notas:
//! O mês no JavaScript começa no 0, exemplo: Janeiro 0 - Dezembro 11
//! O limite de ms é 999, assim como o limite pra segundos e minutos é 60, e para a hora 24, então se colocar 1000ms o JavaScript adicionará mais 1 segundo, se colocar 60seg o JavaScript adicionará mais 1 min e assim por diante.

const data3 = new Date(2018, 3, 7, 18, 5,); // Pode-se omitir os parâmetros, fazendo com que eles tenham seus valores inicias.
console.log(data3.toString());

//! Nota: Você não pode omitir mês. Se você fornecer apenas um parâmetro, ele será tratado como milissegundos.

const data4 = new Date(2018, 3, 7, 18,);
console.log(data4.toString());

const data5 = new Date(2018, 3, 7,);
console.log(data5.toString());

const data6 = new Date(2018, 3,);
console.log(data6.toString());

const data7 = new Date(2018); //  Será tratado como milisegundos, pois o mês foi omitido
console.log(data7.toString());

//# new Date(cadeia de caracteres de data)
// Date(date string) Cria um objeto Date a partir de uma cadeia de caracteres de data:

const data8 = new Date('April 18, 2002 18:18:18');
console.log(data8.toString());

const data9 = new Date("2002-04-18");
console.log(data9.toString());

//# Métodos Date
// Quando um objeto date é criado, vários métodos permitem que você opere em ela.

// Os métodos de data permitem que você obtenha e defina o ano, mês, dia, hora, minuto, segundo e milissegundo de objetos de data, usando a hora local ou UTC Hora (universal, ou GMT).

const dataa = new Date(1687383462019);
console.log(dataa.toString());
console.log('Dia da Semana', dataa.getDay()); // 0 = Domingo - 6 = Sabádo
console.log('Dia', dataa.getDate());
console.log('Mês', dataa.getMonth() + 1); // Soma +1 pois o mês no JavaScript começa em 0
console.log('Ano', dataa.getFullYear());
console.log('Horas', dataa.getHours());
console.log('Minutos', dataa.getMinutes());
console.log('Segundos', dataa.getSeconds());
console.log('Milisegundos', dataa.getMilliseconds());

console.log(Date.now()); // Retorna o valor numérico correspondente ao tempo corrente - o número de milisegundos passados desde 1 de Janeiro de 1970 00:00:00 UTC.

//# Função que formata a data para o padrão brasileiro

function formatarDataParaOPadraoBrasileiro(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const horas = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${horas}:${min}:${seg}`;
};

function zeroAEsquerda(valor) {
    return valor >= 10 ? valor : `0${valor}`
}

const data01 = new Date();
const dataBrasil = formatarDataParaOPadraoBrasileiro(data01);

console.log(dataBrasil);