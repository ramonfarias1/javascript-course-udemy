function myScope() {
    // function criaData() {
    //     const data = new Date();
    //     const diaDaSemana = obterNomeDiaDaSemana(data.getDay());
    //     const dia = data.getDate();
    //     const mes = obterNomeMes(data.getMonth());
    //     const ano = data.getFullYear();
    //     const horas = zeroAesquerda(data.getHours());
    //     const min = zeroAesquerda(data.getMinutes());

    //     return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${min}`;
    // };

    // function obterNomeDiaDaSemana(valor) {
    //     const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];

    //     return diasDaSemana[valor];
    // };

    // function obterNomeMes(valor) {
    //     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    //     return meses[valor];
    // };

    // function zeroAesquerda(valor) {
    //     return valor < 10 ? `0${valor}` : valor;
    // };

    // const h1 = document.querySelector('main h1');
    // h1.innerHTML = criaData();

    //# A melhor forma de criar data e hora

    const data = new Date();
    const h1 = document.querySelector('main h1');
    h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
};

myScope();