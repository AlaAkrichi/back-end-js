const mongoose = require("mongoose")


// Declare the Schema of the Mongo model
const demandeSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
        index:true,
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
        ref:"client"
    }
});

//Export the model
module.exports = mongoose.model('Demande', demandeSchema);