const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    sex: Number,
    phone: Number,
    birthday: String
});

module.exports = mongoose.model('User', UserSchema);