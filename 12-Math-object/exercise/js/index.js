const numero = Number(prompt('Digite um número!'));

const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

const resultados = document.getElementById('resultados');
resultados.innerHTML += `<p>Raíz Quadrada: ${Math.sqrt(numero)}</p>`;
resultados.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
resultados.innerHTML += `<p>é NaN? ${Number.isNaN(numero)}</p>`;
resultados.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
resultados.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
resultados.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;