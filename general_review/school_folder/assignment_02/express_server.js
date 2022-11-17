/*
Assignment 02, created by Jonathan M. 
CRUD application through mongoose, express and mongoDB to create recipes databse 
*/
const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 
const path = require('path')

const mongoose = require('mongoose')
// mongoose imported. 

app.get('/', (req,res) => {
  res.send('hello world. ')
})






app.set('/', path.join(__dirname, 'views')); 
app.set('view-engine', 'pug')
// view engine set to view pug files 
app.listen(PORT, () => {
  console.log( `Server started on port ${PORT}, ctrl+c to end.`)  
})