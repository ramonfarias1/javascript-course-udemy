exports.homePage = (req, res) => {
    res.render('index', {
        titulo: 'titulo da página',
        lorem: '<p>lorem ipsum bla bla bla</p>',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
};

exports.homePagePost = (req, res) => {
    res.render('index', {
        titulo: 'titulo da página',
        lorem: '<p>lorem ipsum bla bla bla</p>',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nome: res.locals.user.nome, // usando os valores de "user" em res.locals
        idade: res.locals.user.idade // usando os valores de "user" em res.locals
    });
};