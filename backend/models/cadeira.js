var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CadeiraSchema = new Schema({

    nome: {type:String,required: true},
    codigo: {type:Number, min:0, required: true},
    departamento: {type:String, required: true},
    ano: {type:Number, enum:[1,2,3], required:true},
    semestre: {type:Number, enum:[1,2], required: true},
    ciclo: {type:Number, enum:[1,2], required : true},
    professorRegente: {type: Schema.Types.ObjectId, ref:'Professor', required: true},
    professoresAuxiliar: [{type: Schema.Types.ObjectId, ref:'Professor',required: true}]
});

module.exports = mongoose.model('Cadeira', CadeiraSchema);
