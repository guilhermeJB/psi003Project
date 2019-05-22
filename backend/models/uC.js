var mongoose = require('mongoose');

let CadeiraSchema = new mongoose.Schema({
    nome:  String,
    regente: {type: Number, ref: 'professores'}
});

const Cadeira = module.exports = mongoose.model('unidadeCurricular', CadeiraSchema);