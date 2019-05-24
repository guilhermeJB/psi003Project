var mongoose = require('mongoose');

let vigilanciaSchema = new mongoose.Schema({
    cadeira: {type: mongoose.Schema.Types.ObjectId, ref: "unidadeCurricular"},
    timeInicio: Date,
    timeFim: Date,
    sala: String
});

const vigilancia = module.exports = mongoose.model('vigilancias', vigilanciaSchema);