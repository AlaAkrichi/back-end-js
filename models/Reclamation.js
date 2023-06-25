const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var reclamationSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    titre:{
        type : String,
        required : true
    },
    text:{
        type : String,
        required : true
    },
    dateCreation:{
        type:Date,
        required:true,
    },
    dateTraitement:{
        type:Date,
        required:true,
    },
    etat:{
        type : String,
        required : true
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"client",
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

});

//Export the model
module.exports = mongoose.model('Reclamation', reclamationSchema);