//# PARÂMETROS DE ROTA(req.params)
//# ------------------------------

// Os parâmetros de rota são segmentos de URL nomeados que são usados para capturar os valores especificados em sua posição na URL. Os valores capturados são colocados no object "req.params", com o nome do parâmetro de rota especificado no caminho como suas respectivas chaves.

// Route Path: /user/:userId/fotos/:fotoId
// Request URL: http://localhost:3000/user/josoares13/fotos/img33
// req.params: { "userId": "josoares13", "fotoId": "img33" }

//# Utilize o sinal de interrogação(?) caso queira que a inserção dos parâmetros seja opcional:

// Route Path: /user/:userId?/fotos/:fotoId?
// Request URL: http://localhost:3000/user/josoares13/fotos/
// req.params: { "userId": "josoares13" }

// Para definir rotas com parâmetros de rota, basta especificar os parâmetros de rota no caminho da rota conforme mostrado abaixo.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<a href="http://localhost:${port}/user/josoares13/fotos/img33">http://localhost:3000/user/josoares13/fotos/img33</a>`);
});

app.get('/user/:userId?', (req, res) => { // <-- Parâmetros de rota aqui
    res.send(req.params);
});

app.get('/user/:username?/fotos/:fotoId?', (req, res) => { // <-- Parâmetros de rota aqui
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
    console.log(`Link: http://localhost:${port}`);
});

//* Nota: O nome dos parâmetros de rota deve ser composto por “caracteres de palavra” ([A-Za-z0-9_]).

//# Como o hífen (-) e o ponto (.) são interpretados literalmente, eles podem ser usados junto com parâmetros de rota para fins úteis:

// Route path: /voos/:partida-:chegada
// Request URL: http://localhost:3000/voos/brasil-japão
// req.params: { "partida": "brasil", "chegada": "japão" }

// Route path: /planta/:gênero.:espécie
// Request URL: http://localhost:3000/planta/Prunus.persica
// req.params: { "gênero": "Prunus", "espécie": "persica" }

//# Para ter mais controle sobre a string exata que pode ser correspondida por um parâmetro de rota, você pode anexar uma expressão regular entre parênteses():

// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}