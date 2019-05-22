var mongoose = require('mongoose');

let CadeiraSchema = new mongoose.Schema({
    nome: {
        type:  String
    },
    regente: {
        type: String
    ,
    professores: {
        type: String
    }
}
});

const Cadeira = module.exports = mongoose.model('unidadeCurricular', CadeiraSchema);