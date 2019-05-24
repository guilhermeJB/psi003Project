var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExameSchema = new Schema({

    data: {type:Date,required : true},
    epoca: {type: String, enum: ["1a epoca","2a epoca","E.Especial"],required : true},
    cadeira : {type: Schema.Types.ObjectId, ref: "Cadeira", required : true},
    semestre: {type:Number, enum:[1,2],required : true},
    dia: {type:String, enum: ["2a","3a","4a","5a","6a","Sáb"], required : true},
    horaInicio: {type:String,required : true}, //Data
    horaFim: {type:String,required : true}, //Data
    //duracao: {type: String, required : true},
    salas: {type:[String],required : true},
    anoCurso: {type: Number, enum:[1,2,3]},
    curso: {type:String, enum: ["Engenharia Informática","Tecnologias de Informação"]}

});


module.exports = mongoose.model('Exame', ExameSchema);
