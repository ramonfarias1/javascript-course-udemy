exports.homePage = (req, res) => { // Middleware Function
    // console.log();
    // console.log(`olha o que tem na minha req.session.nome: ${req.session.nome}`);
    // console.log();
    res.render('index');
    // next();
};

exports.homePagePost = (req, res) => { // Middleware Function
    res.send(req.body);
};