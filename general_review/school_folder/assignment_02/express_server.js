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

// Middleware added. 
// url encoding, json , and serving files from public directory. 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index.pug')
})


app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})

