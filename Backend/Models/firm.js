const mongoose= require('mongoose');
const { schema } = require('./vendors');
const Vendor = require('./vendors');

const firmSchema = new mongoose.Schema({

    firmName:{
        type:String,
        required:true,
        unique:true
    },
    area:{
        type:String,
        required:true,
},

    category:{
        type:[{
            type:String,
            enum:['Veg','Non-Veg']
        },
    ]
 },

    region:{
        type:[{
            type:String,
            enum:['South-Indian','North-Indian','Chineese','Bakery']
        },
    ]
    },

    offer:{
        type:String,
    },

    image:{
        type:String
    },

    Vendor:[
        {
type:mongoose.Schema.Types.ObjectId,
ref:'Vendor'
        }
    ]
})

const firm=mongoose.model('firm',firmSchema)
module.exports=firm