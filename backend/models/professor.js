var mongoose = require('mongoose');

let professorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    departamento: String,
    cadeiras: [{semestre: String, codCadeira: Number}]
});

professorSchema.methods.findByName = function(nome, cb){
    return this.model('professores').find({name: new RegExp(nome, 'i')}, cb);
}



const Professor = module.exports = mongoose.model('professores', professorSchema);