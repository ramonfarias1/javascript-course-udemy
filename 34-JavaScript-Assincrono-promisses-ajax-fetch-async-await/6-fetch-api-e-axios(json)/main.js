fetch('pessoas.json')
    .then ( response => response.json() )
    .then ( pessoas => criaTabela(pessoas) );

function criaTabela(pessoas) {
    const table = document.createElement('table');
    const trHeaders = document.createElement('tr');
    const chaves = [...Object.keys(pessoas[0])];
    console.log(chaves);

    for (const chave of chaves) {
        const th = document.createElement('th');
        th.innerHTML = chave;
        trHeaders.appendChild(th);
    };

    table.appendChild(trHeaders);

    for (const pessoa of pessoas) {
        const tr = document.createElement('tr');

        for (const chave of chaves) {
            const td = document.createElement('td');
            td.innerHTML = pessoa[chave];
            tr.appendChild(td);
        };

        table.appendChild(tr);
    };

    document.body.appendChild(table);
};