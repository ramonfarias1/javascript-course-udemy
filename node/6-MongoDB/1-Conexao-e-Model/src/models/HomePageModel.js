const mongoose = require('mongoose');

// const UsuarioSchema = new mongoose.Schema({
//     nome: { type: String, required: true },
//     idade: { type: Number, required: true },
//     email: String
// });

const HomePageSchema = new mongoose.Schema({ // Criando Schema
    nome: { type: String, required: false },
    usuario: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

const HomePageModel = mongoose.model('HomePage', HomePageSchema); // Criando model

// const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = HomePageModel;

// class ValidaHomePageModel {
     // ...   
// };

// module.exports = ValidaHomePageModel;