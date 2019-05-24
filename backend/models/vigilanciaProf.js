var mongoose = require('mongoose');

let vPSchema = new mongoose.Schema({
    professor: {type: mongoose.Schema.Types.ObjectId, ref: "professores"},
    vigilancia: {type: mongoose.Schema.Types.ObjectId, ref: 'vigilancias'}
});

const vP = module.exports = mongoose.model('vigilanciaProf', vPSchema);