const mongoose = require("mongoose")

// Declare the Schema of the Mongo model
const factureSchema = new mongoose.Schema({
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
    datePaiement:{
        type:Date,
        required:true,
    },
    etatPaiement:{
        type : String,
        required : true
    },
    montant: {
        type : Number,
        required:true
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"client"
    }
});

//Export the model
module.exports = mongoose.model('Facture', factureSchema);