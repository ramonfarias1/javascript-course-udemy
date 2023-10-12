exports.homePage = (req, res) => {
    // req.session.user = {nome: 'luiz', logado: true};
    console.log(req.session.user);
    // req.flash('info', 'vim informar algo');
    // req.flash('error', 'deu ruim');
    // req.flash('sucess', 'deu bom');
    console.log(req.flash('info'), req.flash('error'), req.flash('sucess'));

    res.render('index');
};

exports.homePagePost = (req, res) => {
    res.send(req.body);
};