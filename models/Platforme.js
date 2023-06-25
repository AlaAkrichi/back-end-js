const mongoose = require('mongoose'); // Erase if already required
const Abonnement = require("./Abonnement")
// Declare the Schema of the Mongo model
var platformeSchema = new mongoose.Schema({
    nom_logiciel:{
        type:String,
        required:true
    },
    version:{
        type:String,
        required:true
    }
});

//Export the model
module.exports = Abonnement.discriminator('Platforme', platformeSchema);