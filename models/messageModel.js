const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        ubnique:true
    },
    company:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:String,
        required:true,
        
    },
    subject:{
         type: String,
        required: true,
        enmum: ['General Inquiry', 'Sales', 'Technical Support', 'Partnerships']
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});



const messageModel = mongoose.model('message', messageSchema);
module.exports = messageModel;