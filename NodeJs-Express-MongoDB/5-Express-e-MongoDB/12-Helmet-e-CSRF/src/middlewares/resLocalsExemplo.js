//# res.locals

/* É um objeto do Express.js que é usado para armazenar dados locais que são específicos para a resposta HTTP sendo processada por um middleware ou rota em um aplicativo Express.

Quando você define variáveis ou propriedades em res.locals, esses valores estarão disponíveis apenas durante o ciclo de vida da solicitação atual e podem ser usados em qualquer middleware ou rota subsequente que seja chamada como parte do processamento dessa solicitação.

Por exemplo, você pode usar res.locals para armazenar informações que devem ser acessíveis em várias partes do seu aplicativo, como dados de autenticação do usuário, informações de sessão ou qualquer outra informação que seja relevante para o processamento da solicitação. Isso pode ajudar a evitar a repetição de código e a manter seu código mais organizado. */

//# Confira o Exemplo abaixo:

module.exports = (req, res, next) => {
    // res.locals.user = {...req.body}
    res.locals.user = {
        nome: req.body.nome,
        idade: req.body.idade
    };
    
    next();
};

// Neste exemplo, o middleware define um object "user" em res.locals, e a rota "/" acessa essa informação para responder com os detalhes do usuário. Isso é útil quando você precisa compartilhar dados entre middleware e rotas sem precisar passá-los manualmente como parâmetros ou variáveis globais.

//# Veja os arquivos: "routes.js" e "homePageController.js", para mais detalhes.