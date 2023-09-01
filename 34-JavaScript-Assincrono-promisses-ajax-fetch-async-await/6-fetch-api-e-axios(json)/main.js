// fetch('pessoas.json')
//     .then ( response => response.json() )
//     .then ( pessoas => criaTabela(pessoas) );

// axios.get('pessoas.json')
//     .then( response => criaTabela(response.data));

(async function() {
    const response = await axios.get('pessoas.json');
    criaTabela(response.data);
}());

function criaTabela(pessoas) {
    const table = document.createElement('table');
    const trHeaders = document.createElement('tr');
    const chavesObjetoPessoas = Object.keys(pessoas[0]);

    for (const chave of chavesObjetoPessoas) {
        const th = document.createElement('th');
        th.innerHTML = chave.toUpperCase();
        trHeaders.appendChild(th);
    };

    table.appendChild(trHeaders);

    for (const pessoa of pessoas) {
        const tr = document.createElement('tr');

        for (const chave of chavesObjetoPessoas) {
            const td = document.createElement('td');
            td.innerHTML = pessoa[chave];
            tr.appendChild(td);
        };

        table.appendChild(tr);
    };

    document.body.appendChild(table);
};