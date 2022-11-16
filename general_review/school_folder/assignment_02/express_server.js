/*
Assignment 02 created by Jonathan M. 

MongoDb + Express app. Creating an application to create recipe's
*/
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000; 
// Express imported, app set, port set. 
const path = require('path');
// path and filesystem modules imported 
const mongoose = require('mongoose'); 
mongoose.connect("mongodb://127.0.0.1/FoodRecipe")
// connection to database established. 
const db = mongoose.connection; 
// db set to connection methods. 
db.once("open", () => {
  console.log(`Connected to MongoDB Database`)
})
// once listener function created for successful connection to MongoDB
db.on("error" , (err) =>{
  console.log(`We have an error! `)
})
// on listener function with error handling. 

app.set('view-engine','pug')
// view engine set to view pug files. 





app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})



