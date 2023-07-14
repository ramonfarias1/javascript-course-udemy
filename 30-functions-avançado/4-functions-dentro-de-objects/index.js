const obj = {
    functionDentroObj: function() {
        console.log('estou dentro de um object');
    },
};

obj.functionDentroObj();

// Pode-se declarar uma function dentro de um object sem precisar nomear uma chave e também sem a palavra "function":

const obj2 = {
    functionDentroObj2() {
        console.log('estou dentro de um object2');
    },
};

obj2.functionDentroObj2();