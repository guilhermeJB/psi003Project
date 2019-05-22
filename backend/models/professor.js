var mongoose = require('mongoose');

let professorSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
});

const Professor = module.exports = mongoose.model('professores', professorSchema);