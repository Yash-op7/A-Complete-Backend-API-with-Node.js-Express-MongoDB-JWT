const mongoose = require('mongoose');
const {required } = require('joi');

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    isPositive: Boolean,
    // posts:["Posts"]
})

module.exports = mongoose.model('User', userSchema);