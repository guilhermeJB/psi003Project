var mongoose = require('mongoose');

let professorSchema = new mongoose.Schema({
    nome: String
});

const Professor = module.exports = mongoose.model('professores', professorSchema);