//* Operador: condição ? expressão se verdadeiro : expressão se falso
// Ajuda a encurtar o código quando temos uma estrutura condicional com 1 if e 1 else apenas.

//* Exemplo:

// Um fórum tem um sistema de VIP por pontuação, usuários com mais de 1000 pontos são vips e usuários com menos de 1000 pontos não são vips.

const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000) {
    console.log('usuário VIP');
} else {
    console.log('usuário padrão');
};

//* Agora usando o operador ternário:

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Padrão';//Operador Ternário
console.log(nivelUsuario);