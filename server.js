const dotenv = require('dotenv');
const express = require('express');
const userModel=require('./models/User')

  
dotenv.config()

 // connect my database 
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/database_manel'; 

mongoose.connect(mongoDB,{useUnifiedTopology: true, useNewUrlParser:true}) ;

module.exports = mongoose ;

const app = express()

//test for first time
app.get('/User', (req,res)=>{
    res.send('hello my user')
});

//route for add one user
app.post('/addUser', (req,res)=>{
    userModel.create(req.body, function(err, user){
        err? console.log(err): res.json(user)
    })
});

//route for get all users

app.get('/getAllUsers', (req,res)=>{
    userModel.find({}).exec(function(err,user){
        err? console.log(err): res.json(user)
    })
});

//route for update one user

app.put('/updateUser/:id', (req,res)=>{
    userModel.updateOne({_id: req.params.id},req.body,function(err,user){
        err? console.log(err): res.json(user)
    });
})

//route for delete one user

app.delete('/deleteUserById/:id', (req,res)=>{
    userModel.deleteOne({_id: req.params.id},function(err,user){  
        err? console.log(err): res.json(user)
    })
});
















app.listen(5003,console.log('Server running at http://127.0.0.1:5003/')) 





 

