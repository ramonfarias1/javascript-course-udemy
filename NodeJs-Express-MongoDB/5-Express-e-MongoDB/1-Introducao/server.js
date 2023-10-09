//# EXPRESS

// Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. Ele facilita o desenvolvimento de aplicações back-end e até, em conjunto com sistemas de templates, aplicações full-stack.

/* O Express oferece soluções para:
    - Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
    - Integrar "view engines" para inserir dados nos templates.
    - Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
    - Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.
*/

//* Exemplo simples:

const express = require('express');
const app = express();
const port = 3000;

// Operações mais comuns de uma API:
//         Criar,  Ler,  Atualizar, Apagar
// CRUD -> Create, Read, Update,    Delete
//         POST,   GET,  PUT,       DELETE

// Rotas da API:
// https://meusite.com/ <-- GET = entregue a página(rota)
// https://meusite.com/contatos <-- GET = entregue a página(rota)/contatos
// https://meusite.com/contatos <-- GET = entregue a página(rota)/sobre

app.get('/', (req, res) => {
    // req = requisição do usuário
    // res = resposta do servidor
    res.send('<label for="text">text: </label> <form method="post"> <input type="text" name="test" id="text"></form>');
});

app.post('/', (req, res) => {
    res.send('Formulário Enviado!');
});

app.get('/contatos', (req, res) => {
    res.send('(45)4002-8922');
});

app.listen(port, () => { // o express vai "ouvir" a porta 3000
    console.log(`Servidor executando na porta ${port}`);
    console.log(`link: http://localhost:${port}`);
});

// Neste exemplo iniciamos um servidor que ouve na porta 3000 para conexões. O aplicativo responde com um “form” para pedidos para o URL raiz (/) ou rota. Para qualquer outro caminho, ele responderá com um 404 Não encontrado.

// Ao enviarmos o formulário, o aplicativo responderá com "formulário enviado" na URL/Rota raiz(/).

// Também foi criada uma rota (/contatos) que quando acessada a mesma responde com um telefone para contato.