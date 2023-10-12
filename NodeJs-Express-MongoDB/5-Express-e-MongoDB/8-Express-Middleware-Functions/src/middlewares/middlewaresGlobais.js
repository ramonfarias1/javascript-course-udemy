exports.middlewareRetornaNome = (req, res, next) => {
    if (req.body.nome) {
        console.log(`O nome enviado por você foi: ${req.body.nome}`);
        // console.log('Passou no Middleware Global!');
    };
    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('Outro middleware!');
    next();
};