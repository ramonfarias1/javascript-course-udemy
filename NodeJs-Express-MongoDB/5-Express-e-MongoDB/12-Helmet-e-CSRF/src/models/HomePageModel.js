const mongoose = require('mongoose');

const HomePageSchema = new mongoose.Schema({
    nome: { type: String, required: false },
    usuario: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

const HomePageModel = mongoose.model('HomePage', HomePageSchema);

module.exports = HomePageModel;