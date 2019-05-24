var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var ProfessorSchema = new Schema(
    {
    nome: {type: String, required: true, max: 100},
    status: {type: String, enum:["Professor Catedrático", "Professor Associado com Agregação", "Professor Associado", "Professor Auxiliar", "Professor Auxiliar Convidado", "Monitor", "Professor Sabático"], required: true},
    cadeiras: [{type:Schema.Types.ObjectId, ref: "Cadeira", required : true}],
    tipo: {type: String, enum: ["Regente", "Auxiliar"]},
    exames: {type: Object},//Codigos de exames(lista) + Numero de exames atribuidos(length)
    restrictions: {type: Object},//(???) Datas de restrição(lista)
    }
  );

// Export model.
module.exports = mongoose.model('Professor', ProfessorSchema);​
