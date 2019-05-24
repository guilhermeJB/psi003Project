var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exameProfessorSchema = new Schema({
    exames: [{type:Schema.Types.ObjectId, ref:'Exame', required : true}],
    professor: {type: Schema.Types.ObjectId, ref:'Professor', required : true}
    
});

module.exports = mongoose.model('exameProfessor', exameProfessorSchema);