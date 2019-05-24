var mongoose = require('mongoose');

let salaSchema = new mongoose.Schema({
    numero: String
});

const sala = module.exports = mongoose.model('salas', salaSchema);