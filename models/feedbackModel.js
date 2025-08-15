const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    mood:{
        type: String,
        enum: ['Happy', 'Angry', 'Sad','Calm','Curious'],
        default: 'neutral'
    }
},{timestamps: true});


const feedbackMOdel = mongoose.model('feedback', feedbackSchema);
module.exports = feedbackMOdel;
