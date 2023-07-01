const mongoose = require('mongoose'); // Erase if already required
const autiIncrement = require('mongoose-id-autoincrement');
autiIncrement.initialize(mongoose.connection);
// Declare the Schema of the Mongo model
var abonnementSchema = new mongoose.Schema({
    id : {
        type:String,
        required:true, 
        index: true,
        unique:true,
        default : 0
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