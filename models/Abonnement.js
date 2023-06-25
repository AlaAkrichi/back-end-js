const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var abonnementSchema = new mongoose.Schema({
    id : {
        type:Number,
        required:true, 
        index: true,
        unique:true
    },
    libelle:{
        type:String,
        required:true
    },    
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"client"
    }
});

//Export the model
module.exports = mongoose.model('Abonnement', abonnementSchema);