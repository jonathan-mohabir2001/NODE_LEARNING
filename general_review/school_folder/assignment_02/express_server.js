/*
Assignment 02 created by Jonathan M. 
*/
const express = require('express')
const app = express(); 
const PORT = process.env.PORT ||8000; 
// express import, app set, port set. 

const path = require('path')
const fs = require('fs')
// path and file system modules imported. 





const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1/foodstore")
let db = mongoose.connection; 
db.once("open", () => {
  console.log(`Database Connection established. `)
})
db.on("error", (error) => {
  console.log(`Error, no mongo connection`)
})





app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})

