var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExameSchema = new Schema({

    data: {type:Date,required : true},
    epoca: {type: String, enum: ["1","2","3"],required : true},
    cadeira : {type: Schema.Types.ObjectId, ref: "Cadeira", required : true},
    semestre: {type:Number, enum:[1,2],required : true},
    dia: {type:String, enum: ["Seg","Ter","Qua","Qui","Sex","Sab"], required : true},
    horaInicio: {type:String,required : true}, //Data
    horaFim: {type:String,required : true}, //Data
    //duracao: {type: String, required : true},
    salas: {type:[String],required : true},
    anoCurso: {type: Number, enum:[1,2,3]},
    curso: {type:String}

});


module.exports = mongoose.model('exame', ExameSchema);
