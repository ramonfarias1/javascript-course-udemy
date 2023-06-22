function obterNomeDiaDaSemana(diaDaSemana) {
    let nomeDiaDaSemana;
    switch (diaDaSemana) {
        case 0:
            nomeDiaDaSemana = 'Domingo';
            break; // Quando o JavaScript chega na palavra break, ele sai da estrutura switch.
        case 1:
            nomeDiaDaSemana = 'Segunda';
            break; // Como estamos dentro de uma função, você pode usar return no lugar de break para parar a estrutura e a função.
        case 2:
            nomeDiaDaSemana = 'Terça';
            break; //! Nota: Se você omitir a instrução break, o próximo caso será executado mesmo se a avaliação não condiz com o caso.
        case 3:
            nomeDiaDaSemana = 'Quarta';
            break;
        case 4:
            nomeDiaDaSemana = 'Quinta';
            break;
        case 5:
            nomeDiaDaSemana = 'Sexta';
            break;
        case 6:
            nomeDiaDaSemana = 'Sabádo';
            break;
        default: // A palavra-chave "default" especifica o código a ser executado se não houver correspondência de caso.
            nomeDiaDaSemana = '';
            break // Não é necessário colocar break no ultimo case da estrutura switch, mas você pode colocar se quiser, não faz diferença nenhuma.
    };
    return nomeDiaDaSemana;
};

const data = new Date();
const diaDaSemana = data.getDay();
const nomeDiaDaSemana = obterNomeDiaDaSemana(diaDaSemana);
console.log(diaDaSemana, nomeDiaDaSemana);

//# Tem como fazer utilizando if else ou somente if também.

// function obterNomeDiaDaSemana(diaDaSemana) {
//     if (diaDaSemana === 0) return 'Domingo';
//     if (diaDaSemana === 1) return 'Segunda';
//     if (diaDaSemana === 2) return 'terça';
//     if (diaDaSemana === 3) return 'quarta';
//     if (diaDaSemana === 4) return 'quinta';
//     if (diaDaSemana === 5) return 'Sexta';
//     if (diaDaSemana === 6) return 'Sabádo';
// };

// const data = new Date();
// const diaDaSemana = data.getDay();
// const nomeDiaDaSemana = obterNomeDiaDaSemana(diaDaSemana);
// console.log(diaDaSemana, nomeDiaDaSemana);