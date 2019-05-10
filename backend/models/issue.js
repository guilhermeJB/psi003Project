var mongoose = require('mongoose');

let ProfessoresSchema = new mongoose.Schema({
    name: {
        type:  String
    },
    nVig: {
        type: String
    ,
    vigTotal: {
        type: String
    }
}
});

const Issue = module.exports = mongoose.model('issue', ProfessoresSchema);