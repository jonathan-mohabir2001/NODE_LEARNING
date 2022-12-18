const express = require('express')
const PORT = process.env.PORT || 8000; 
const app = express()

//start a server
app.listen(PORT, function(){
  console.log('server is running on port: ' + PORT)
})



const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://jona2001:jon12@cluster0.4yd1lwp.mongodb.net/test')
const db = mongoose.connection; 

db.once("open", function(){
  console.log('connection to atlas db ')
})
db.on("error", function(error) {
  console.log("error")
})