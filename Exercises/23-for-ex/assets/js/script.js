const elementos = [{ tag: 'p', texto: 'frase 1' }, { tag: 'div', texto: 'frase 2' }, { tag: 'section', texto: 'frase 3' }, { tag: 'footer', texto: 'frase 4' }];

const tagDiv = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto); // Node Text
    tagCriada.appendChild(textoCriado);
    tagDiv.appendChild(tagCriada);
};

const tagMain = document.querySelector('main');
tagMain.appendChild(tagDiv);