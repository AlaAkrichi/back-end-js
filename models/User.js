const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    nom:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    tel:{
        type:String,
        required:true,
    },
    login:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);