// const mongoose = require ('mongoose')
// const Schema= mongoose.Schema
// const userSchema= new Schema ({
//     name:{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number
//     },
//     email :{
//         type:String
//     }
// })
// module.exports=mongoose.model('user',userSchema)
const mongoose=require('mongoose')

const userModel=mongoose.Schema({
    name:{
        type:String, 
    },
    age:{
        type:Number,

    },
    location:{
        type:String ,

    },
    email :{
        type:String,

    }
})
module.exports=mongoose.model('User',userModel) 