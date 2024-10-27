//We create schema related to vendors//
const mongoose= require('mongoose');



const VendorSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique: true,

    },

    password:{
        type:String,
        require:true
    },

    firm:[
        {
type:mongoose.Schema.Types.ObjectId,
ref:'firm'
        }
    ]
    
})

const Vendor = mongoose.model('vendor', VendorSchema);

module.exports= Vendor;