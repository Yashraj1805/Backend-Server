const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        ubnique:true
    },
    password:{
        type:String,
        required:true,
        minlength: 8,
    },
    confirmPassword:{
        type:String,
        required:true
    },
    company:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:String,
        required:true,
        
    },
    location:{
        type:String,
        required:true
    }    
},{timestamps:true});

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;