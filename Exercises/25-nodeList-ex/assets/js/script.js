const paragraphs = document.querySelectorAll('main p'); // Pega todas as tags "p" dentro de main

const stylesBody = getComputedStyle(document.body); // Pega todos os estilos CSS do body

const backgroundColorBody = stylesBody.backgroundColor; // Pega a cor de fundo do body

console.log(paragraphs);

for (let p of paragraphs) {
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
};