const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes.js');
const path = require('path');

app.set( 'views', path.resolve(__dirname, 'src', 'views') );
app.set('view engine', 'ejs');
// app.set(setting, value): Defini o nome da configuração ao valor. Você pode armazenar qualquer valor que desejar, mas certos nomes podem ser usados para configurar o comportamento do servidor, como foi feito acima onde usamos os nomes "views" e "view engine", o primeiro para apontar o diretório das views e o segundo para apontar qual view engine vai ser usada. Esses nomes especiais estão listados na tabela de configurações do aplicativo: https://expressjs.com/en/4x/api.html#app.settings.table.

app.use( express.urlencoded() );

app.use( express.static( path.resolve(__dirname, 'public') ) );
// express.static(root, [options]) = Esta é uma Middleware Function integrada do Express que trabalha com arquivos estáticos e é baseada no módulo "serve-static": https://expressjs.com/en/resources/middleware/serve-static.html.

// NOTA: Para obter melhores resultados, use um cache de proxy reverso para melhorar o desempenho do fornecimento de ativos estáticos: https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy.

// O argumento "root" especifica o diretório raiz a partir do qual servir ativos estáticos. A function determina o arquivo a ser servido combinando req.url com o diretório raiz fornecido. Quando um arquivo não é encontrado, em vez de enviar uma resposta 404, ele chama next() para passar para o próximo middleware, permitindo empilhamento e fallbacks.

// Consulte está tabela para as propriedades do object [Options]: https://expressjs.com/en/4x/api.html#example.of.express.static.

app.use(routes);

app.listen(port, () => {
    console.log(`servidor iniciado: http://localhost:${port}`);
});