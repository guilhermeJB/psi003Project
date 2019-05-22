var mongoose = require('mongoose');

let professorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
});

const Professor = module.exports = mongoose.model('professores', professorSchema);