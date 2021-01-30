const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    qty:{
        type:String,
        required:true,
        minlength:1
    }
    
    // name:String,
    // qty:Number
},{timestamps:true});

module.exports = mongoose.model("Book",schema);