function myScope() { // É sempre bom colocar todo o código dentro de uma função para evitar conflitos de nomes de variáveis iguais, que podem estar dentro de bibliotecas importadas e etc.
    const form = document.querySelector('.form');
    form.addEventListener('submit', getData);

    const clients = [];

    function getData(evento) {
        evento.preventDefault();

        const name = form.querySelector('.name');
        const lastName = form.querySelector('.last-name');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        clients.push( {
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value,
        });
        console.log(clients);
        
        const divResultados = document.querySelector('.resultados');
        divResultados.innerHTML += `<p>Name: ${name.value} <br> Last Name: ${lastName.value} <br> Weight: ${weight.value}Kg <br>Height: ${height.value}m</p>`;
    };
};

myScope();