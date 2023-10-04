exports.middlewareRetornaNome = (req, res, next) => {
    if (req.body.nome) {
        console.log();
        console.log(`O nome enviado por você foi: ${req.body.nome}`);
        // console.log('Passou no Middleware Global!');
        console.log();
    };
    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log();
    console.log('Outro middleware!');
    console.log();
    next();
};