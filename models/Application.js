const mongoose = require('mongoose'); // Erase if already required
const Service = require("./Service")
// Declare the Schema of the Mongo model
var applicationSchema = new mongoose.Schema({
    nom_app:{
        type:String,
        required:true
    },
    version:{
        type:String,
        required:true
    }
});

//Export the model
module.exports = Service.discriminator('Application', applicationSchema);