function random(min, max) {
    return Math.floor( Math.random() * (max - min) + min );
};

const num = () => String.fromCharCode( random(48, 57) );
const mai = () => String.fromCharCode( random(65, 90) );
const min = () => String.fromCharCode( random(97, 122) );

const sym = () => {
    const symbols = ['@', '#', '!', '$', '%', '&'];
    return symbols[ random(0, symbols.length) ];
};

export default function generatesPassword(quant, numbers, symbols, ucLetters, lcLetters) {
    const password = [];

    for (let i = 0; i < Number(quant); i++) {
        const geradores = [];

        if (numbers) geradores.push( num() );
        if (symbols) geradores.push( sym() );
        if (ucLetters) geradores.push( mai() );
        if (lcLetters) geradores.push( min() );

        password.push( geradores[random(0, geradores.length)] );
    };
    
    return password.join('');
};