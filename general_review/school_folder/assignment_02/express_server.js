/*
Assignment 02 created by Jonathan M. 

MongoDb + express app. 
*/
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const path  = require('path')

// MongoDb config starts here. 
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/foodstore')
const db = mongoose.connection 
db.once("open", () => {
// runs once and then , logs a connection  message
  console.log(`Successful connection to MongoDB`)
})
db.on("error", (error) => {
  // "on an " error, log the error message. 
  console.log(`We have an error! `)
})
// MongoDb connection established. 





app.get('/', (req, res) => {
  res.render('home.pug')
})


app.set('/', path.join(__dirname, 'views'))
app.set('view-engine', 'pug')
// view engine set to view pug files. 
app.listen(PORT, () => {
  console.log(`Server started, running on port-${PORT}`)
})


