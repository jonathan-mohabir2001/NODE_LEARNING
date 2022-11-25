const express = require('express');
const app = express();
const PORT = process.env.PORT||8000; 


const mongoose = require('mongoose')

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/bookstore')
let db = mongoose.connection; 

// checking the connection 

db.once("open", function() {
  console.log(`Connected to db`)
})

db.on("error", function(err){
  console.log("You got an error dude. ")
})
app.listen(PORT, () => {
  console.log(`Server started running on ${PORT}`)
})