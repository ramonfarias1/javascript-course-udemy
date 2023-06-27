// O operador instanceof testa se um objeto tem, em seu prototype, a função construtora.

const data = new Date();

if (data instanceof Date) {
    console.log('data é um obejto Date');
} else {
    console.log('data NÃO é um objeto date');
};