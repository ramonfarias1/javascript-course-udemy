const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText,
                });
            };
        });
    });
};

document.addEventListener('click', event => {
    const element = event.target;

    if (element.tagName.toLowerCase() === 'a') {
        event.preventDefault();
        carregaPagina(element);
    };
});

async function carregaPagina(element) {
    const href = element.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const responseText = await request(objConfig);
        carregaResultado(responseText);
    } catch (error) {
        console.log(error);
    };
};

function carregaResultado(responseText) {
    const divResultado = document.querySelector('div.resultado');
    divResultado.innerHTML = responseText;
};