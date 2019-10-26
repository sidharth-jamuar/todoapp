const mongoose=require('mongoose');
const {Schema}=mongoose;

const todoSchema=new Schema({
    creator:String,
    id:String,
    category:String,
    Description:String
})
const Todo=mongoose.model('user',todoSchema)

module.exports={Todo}