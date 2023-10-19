exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        res.render('invalid-csrf-token');
        return;
    };
};

exports.geraCsrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.resLocalsExample = (req, res, next) => {
    res.locals.user = {
        nome: req.body.nome,
        idade: req.body.idade
    };
    
    next();
};