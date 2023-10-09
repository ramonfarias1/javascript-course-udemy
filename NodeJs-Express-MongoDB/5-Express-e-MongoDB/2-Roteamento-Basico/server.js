//# ROTEAMENTO BÁSICO
//# -----------------
// Roteamento refere-se a determinar como um aplicativo responde a uma solicitação do cliente para um endpoint específico, que é uma URL (ou caminho) e um método de solicitação HTTP específico (GET, POST, PUT, DELETE e assim por diante).

// Cada rota pode ter uma ou mais funções de tratamento, que são executadas quando a rota é correspondida.

// A definição da rota assume a seguinte estrutura:
//? app.method('/', (req, res) => {} );

/* Onde:
    - app = é uma instância do express;

    - method = é um método de solicitação HTTP, em letras minúsculas. https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

    - '/' = é um caminho no servidor.

    - (req, res) => {} = é a function executada quando a rota é correspondida.
*/

// Os exemplos a seguir ilustram a definição de rotas simples.

const express = require('express');
const app = express();
const port = 3000;

//# Exemplo 01, responde com "hello, world"! na página inicial:

// app.get('/', (req, res) => {
//     res.send('hello, world!');
// });

//# Exemplo 02, Responde à solicitação POST na rota raiz (/), a página inicial da aplicação:

app.get('/', (req, res) => {
    res.send('<form action="" method="post"><label for="qualquer-coisa">Escreva Qualquer Coisa: </label><input type="text" name="qualquer-coisa" id="qualquer-coisa"></form>');
});

app.post('/', (req, res) => {
    res.send('formulário enviado!');
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
    console.log(`Link: http://localhost:${port}`);
});