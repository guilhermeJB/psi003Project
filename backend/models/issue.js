var mongoose = require('mongoose');

let IssueSchema = new mongoose.Schema({
    nome: {
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

const Issue = module.exports = mongoose.model('issue', IssueSchema);