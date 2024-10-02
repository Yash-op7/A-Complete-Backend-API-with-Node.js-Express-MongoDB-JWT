const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is reqd.'],
        trim: true,
        unique: [true, 'Email must be unique'],
        minLength: [5, 'emial must have 5 chars'],
        lowercase: true,
    },
    password: {
        type: String,
        minLength: [8, 'pwd must be 8 chars'],
        required: [true, 'Pwd is reqd.'],
        select:false,
        trim: true
    },
    verified: {
        type:Boolean,
        default: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false
    },
    verificationCodeValidation: {
        type: Number,
        select: false
    },
    verificationCode: {
        type: String,
        select: false
    },
    forgotPasswordCodeValidation: {
        type: Number,
        select: false
    },
    
}, {
    timestaps:true
});

module.exports = mongoose.model('User', userSchema);