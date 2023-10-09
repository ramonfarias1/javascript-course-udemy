const HomePageModel = require('../models/HomePageModel');

HomePageModel.find()
    .then(dados => console.log(dados))
    .catch(error => console.log(error));

exports.homePage = (req, res) => {
    res.render('index');
};

exports.homePagePost = (req, res) => {
    HomePageModel.create({ // Isso é só um exemplo, controllers não são responsáveis por fazer CRUD
        nome: req.body.nome,
        usuario: req.body.usuario,
        email: req.body.email,
        senha: req.body.senha
    })
        .then(dados => console.log(dados))
        .catch(error => console.log(error));

    res.send(req.body);
};