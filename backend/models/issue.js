var mongoose = require('mongoose');

let profCSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    professor: {type: mongoose.Schema.Types.ObjectId, ref: 'professores'},
    cadeira: {type: mongoose.Schema.Types.ObjectId, ref: 'unidadeCurricular'}
});

const profC = module.exports = mongoose.model('profC', profCSchema);