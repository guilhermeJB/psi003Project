var mongoose = require('mongoose');

let CadeiraSchema = new mongoose.Schema({
    codigo: Number,
    nome:  String,
    regente: {type: mongoose.Schema.Types.ObjectId, ref: 'professores'}
});

const Cadeira = module.exports = mongoose.model('unidadeCurricular', CadeiraSchema);