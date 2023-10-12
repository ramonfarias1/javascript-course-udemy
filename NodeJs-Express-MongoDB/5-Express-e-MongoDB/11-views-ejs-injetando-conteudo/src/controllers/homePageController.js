exports.homePage = (req, res) => {
    res.render('index', {
        titulo: 'titulo da página',
        lorem: '<p>lorem ipsum bla bla bla</p>',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.homePagePost = (req, res) => {
    res.send(req.body);
};