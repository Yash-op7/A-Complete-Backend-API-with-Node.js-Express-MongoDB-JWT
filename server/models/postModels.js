const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is reqd.'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'desc is reqd.'],
        trim: true,
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
}, {
    timestaps:true
});

module.exports = mongoose.model('Post', postSchema);