const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const currySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false
    }
})
module.exports=mongoose.model('Curry',currySchema)