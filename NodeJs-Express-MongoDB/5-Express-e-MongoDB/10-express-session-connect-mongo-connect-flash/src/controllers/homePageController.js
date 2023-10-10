exports.homePage = (req, res) => {
    // req.session.user = {nome: 'luiz', logado: true};
    console.log(req.session.user);
    res.render('index');
};

exports.homePagePost = (req, res) => {
    res.send(req.body);
};