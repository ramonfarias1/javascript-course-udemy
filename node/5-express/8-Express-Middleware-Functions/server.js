//# MIDDLEWARES
//# -----------

// Express é um Web Framework de routing(roteamento) e middleware que possui funcionalidade mínima própria: um aplicativo Express é essencialmente uma série de chamadas de Middleware Functions.

// Middleware Functions são functions que têm acesso ao object de solicitação (req), ao object de resposta (res) e à próxima middleware function no ciclo de solicitação-resposta do aplicativo. A próxima função de middleware é comumente indicada por uma variável chamada "next".

/* As funções de middleware podem executar as seguintes tarefas:

    - Executar qualquer código.
    - Fazer alterações na solicitação(request) e nos objetos de resposta(response).
    - Encerrar o ciclo de solicitação-resposta.
    - Chamar a próxima função de middleware na pilha.
*/

// Se a função de middleware atual não encerrar o ciclo de solicitação-resposta, ela deverá chamar next() para passar o controle para a próxima função de middleware. Caso contrário, a solicitação ficará suspensa.

/* Um aplicativo Express pode usar os seguintes tipos de middleware:

    - Middleware em nível de aplicativo
    - Middleware em nível de roteador
    - Middleware de tratamento de erros
    - Middleware integrado
    - Middleware de terceiros

   Para saber mais sobre esses tipos de middlewares, visite: https://expressjs.com/en/guide/using-middleware.html.
*/

// Você pode carregar middleware em nível de aplicativo e em nível de roteador com um caminho de montagem opcional. Você também pode carregar uma série de funções de middleware juntas, o que cria uma subpilha do sistema de middleware em um ponto de montagem.

const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const path = require('path');
const {middlewareRetornaNome, outroMiddleware} = require('./src/middlewares/middlewaresGlobais.js');

app.set( 'views', path.resolve(__dirname, 'src', 'views') );
app.set( 'view engine', 'ejs');

app.use( express.urlencoded( {extended: true} ) ); // Middleware integrado
app.use( express.static( path.resolve(__dirname, 'public') ) ); // Middleware Integrado

app.use(middlewareRetornaNome); // Usando o middleware Global
app.use(outroMiddleware);

app.use(routes);

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});