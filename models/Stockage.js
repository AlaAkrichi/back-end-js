const mongoose = require('mongoose'); // Erase if already required
const Ressource = require("./Ressource")
// Declare the Schema of the Mongo model
var stockageSchema = new mongoose.Schema({
    type_disque:{
        type:String,
        required:true
    },
    capacite:{
        type:Number,
        required:true
    }
});

//Export the model
module.exports = Ressource.discriminator('Stockage', stockageSchema);