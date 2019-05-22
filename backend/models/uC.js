var mongoose = require('mongoose');

let CadeiraSchema = new mongoose.Schema({
    nome:  String,
    regente: {type: mongoose.Schema.Types.ObjectId, ref: 'professores'}
});

const Cadeira = module.exports = mongoose.model('unidadeCurricular', CadeiraSchema);