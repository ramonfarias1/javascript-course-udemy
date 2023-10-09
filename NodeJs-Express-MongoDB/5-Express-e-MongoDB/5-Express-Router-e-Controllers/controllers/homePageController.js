exports.homePage = (req, res) => {
    res.send('<form action="" method="post"><label for="nome">Nome:</label><input type="text" name="nome" id="nome"></form>');
};

exports.homePagePost = (req, res) => {
    res.send(`Nome enviado: ${req.body.nome}`);
};