var mongoose = require('mongoose');

let IssueSchema = new mongoose.Schema({
    title: {
        type:  String
    },
    responsible: {
        type: String
    ,
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
}
});

const Issue = module.exports = mongoose.model('Issue', IssueSchema);