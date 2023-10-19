//# REQUEST QUERY STRING(req.query)
//# -------------------------------

// Esta propriedade é um objeto que contém uma propriedade para cada parâmetro de query string na rota. Quando o query parser está desativado, é um objeto vazio {}, caso contrário, é o resultado do query parser configurado.

// URL: http://localhost:3000/pessoa?nome=joão&sobrenome=silva&idade=33
// req.query: { "nome": "joão", "sobrenome": "silva", "idade": "33" }

//* Nota: Como a forma de req.query é baseada em entradas controladas pelo usuário, todas as propriedades e valores neste objeto não são confiáveis e devem ser validados antes de confiar. Por exemplo, req.query.foo.toString() pode falhar de várias maneiras, por exemplo, foo pode não estar lá ou pode não ser uma string, e toString pode não ser uma função e, em vez disso, uma string ou outra entrada do usuário.

//* Nota: Geralmente só usamos query strings para coisas bem simples que não requerem nenhuma segurança.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send();
});

app.get('/pessoa', (req, res) => {
    res.send(req.query);
});

//# REQUEST BODY(req.body)
//# ----------------------

// Contém pares de valores-chave de dados enviados no corpo da solicitação. Por padrão, é undefined e é preenchido quando você usa o middleware de body-parsing, como express.json() ou express.urlencoded().

//* Nota: Como a forma de req.body é baseada em entradas controladas pelo usuário, todas as propriedades e valores neste object não são confiáveis e devem ser validados antes de confiar. Por exemplo, req.body.foo.toString() pode falhar de várias maneiras, por exemplo, foo pode não estar lá ou pode não ser uma string, e toString pode não ser uma function e, em vez disso, uma string ou outra entrada do usuário.

app.use( express.urlencoded( {extended: true} ) );
app.use(express.json());

//# express.urlencoded( {extended: true} );
//# ---------------------------------------

// app.use() = Serve para montar a Middleware Function especificada no caminho especificado. A Middleware Function é executada quando a base do caminho solicitado corresponde ao caminho.

// express.urlencoded() = Esta é uma Middleware Function integrada no Express. Ela analisa solicitações(Requests) recebidas com cargas(PayLoads) codificadas em URL e é baseada no body-parser(req.body).

// {extended: true} = Esta opção permite escolher entre analisar os dados codificados em URL com a biblioteca "querystring" (quando falso) ou a biblioteca "qs" (quando verdadeiro). A sintaxe “estendida” permite que objects e arrays ricos sejam codificados no formato codificado por URL, permitindo uma experiência semelhante a JSON com codificação por URL. Para obter mais informações, consulte a biblioteca "qs".

//# express.json();
//# ---------------

/* express.json() é usado para analisar dados JSON que são enviados para o servidor como parte de uma solicitação HTTP, normalmente em um formato JSON no corpo da solicitação. Ele é uma parte importante para criar APIs RESTful, onde os dados são frequentemente enviados e recebidos em formato JSON.

Aqui está uma explicação mais detalhada do que é, para que serve e como usá-lo:

O que é express.json():
O express.json() é um middleware do Express.js projetado para analisar o corpo das solicitações HTTP que contêm dados no formato JSON. Ele é construído sobre o módulo body-parser, que é responsável por analisar o corpo da solicitação e disponibilizar esses dados para manipulação no seu aplicativo.

Para que serve:
O principal propósito do express.json() é analisar o corpo de solicitações HTTP que contêm dados JSON e transformá-los em objetos JavaScript para que você possa facilmente trabalhar com esses dados no seu aplicativo. Isso é particularmente útil ao criar APIs RESTful, onde os dados são frequentemente enviados e recebidos no formato JSON. Isso permite que seu aplicativo leia os dados enviados pelo cliente e responda de acordo.
*/

app.get('/form', (req, res) => {
    res.send('<form action="" method="post"><label for="nome">Nome:</label><input type="text" name="nome" id="nome"></form>');
});

app.post('/form', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server iniciado na porta ${port}`);
    console.log(`Link: http://localhost:${port}`);
});