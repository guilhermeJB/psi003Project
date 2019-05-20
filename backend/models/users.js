var mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
});

const users = module.exports = mongoose.model('users', userSchema);