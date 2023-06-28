//# try e catch
// (try) define um bloco de código a ser testado para erros enquanto está sendo executado
// (catch) captura o erro e define um bloco de código para ser executado, se ocorrer um erro no bloco (try)
// try e catch vem em pares

/* Sintaxe:
try {
  bloco de código a ser executado e testado
}
catch(err) {
  bloco de código a ser executado caso houver algum erro no bloco (try)
}
*/

// try {
//     console.log(x + y);
// } catch(err) {
//     console.log('as variáveis "x" e "y" não foram declaradas');
//     console.log(err);
//     //! Nunca exiba o erro para o usuário, pois além de o usuário não entender nada, é muito inseguro.
// };

//# throw
// throw(lança) um erro personalizado

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y não são números');
        // Pode-se usar somente "throw" também, sem usar a função construtora "Error"
    };
    return x + y;
};

try {
    console.log(soma(2, 3));
    console.log(soma('a', 3));
} catch(err) {
    console.log('algo mais amigável pro usuário');
    //console.log(err);
    //!Nunca exiba o erro para o usuário, pois além de o usuário não entender nada, é muito inseguro.
};

//# finally
// Se der erro ou não, o bloco de texto de finally sempre será executado, independente do resultado.

try {
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e deu ERRO!!!', a);
  console.log('fechei o arquivo'); // Não vai ser executado por causa do erro
} catch (err) {
  console.log('tratando o erro');
} finally {
  console.log('fechando o arquivo...');
};

// Explicando o exemplo acima: o javascript tenta(try) abrir um arquivo e consegue, depois começa a manipular o arquivo, mas da um erro no meio da manipulação e não segue para a instrução de fechar o arquivo, o erro seguirá para o bloco (catch) mas o arquivo ainda ficará aberto, isso se não tiver o bloco (finnaly). Se tiver o bloco (finnaly) pode-se da a instrução de fechar o arquivo, e essa instrução sempre vai ser executada, pois o (finnaly) sempre é executado independente do resultado do (try) e (catch).

//# Exemplo com Date:

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Não é uma instância de Date');
  };

  if (!data) {
    data = new Date();
  };

  return data.toLocaleTimeString('pt-BR', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

try {
  const data = new Date('01-01-1970 15:07:08');
  console.log(retornaHora());
} catch(err) {
  // Tratar erro
  console.log(err)
} finally {
  console.log('tenha um bom dia!');
};