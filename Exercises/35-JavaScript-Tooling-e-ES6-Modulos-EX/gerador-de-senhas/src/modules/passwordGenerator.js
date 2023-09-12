const random = (min, max) => Math.floor( Math.random() * (max - min) + min );

const returnsRandomNumber = () => String.fromCharCode( random(48, 57) );
const returnsRandomUppercaseLetter = () => String.fromCharCode( random(65, 90) );
const returnsRandomLowercaseLetter = () => String.fromCharCode( random(97, 122) );
const returnsRandomSymbol = () => {
    const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+', '.', ',', '?', ';'];
    return symbols[ random(0, symbols.length) ];
};

export default (quantity, numbers, symbols, uppercase, lowercase) => {
    const generatedPassword = [];

    for (let i = 0; i < Number(quantity); i++) {
        const generatedCharacters = [];

        numbers && generatedCharacters.push( returnsRandomNumber() );
        symbols && generatedCharacters.push( returnsRandomSymbol() );
        uppercase && generatedCharacters.push( returnsRandomUppercaseLetter() );
        lowercase && generatedCharacters.push( returnsRandomLowercaseLetter() );

        generatedPassword.push( generatedCharacters[random(0, generatedCharacters.length)] );
    };
    
    return generatedPassword.join('') || 'Enter the quantity and select an option to generate the password!!';
};