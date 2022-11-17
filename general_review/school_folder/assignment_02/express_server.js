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

mongoose.connect('mongodb://127.0.0.1/foodstore')
// connection string entered. 
let db = mongoose.connection; 
// db assigned mongoose connection methods. 

db.once("open", () => {
  console.log(`Connection to DB established!`)
})
db.on("error" , (error) => {
  console.log(`We have an error!`)
})
//database connection set, error handling created. 


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))
// middle ware added. Allows urlencoding, json, and serving files from directory public. 


app.set('/', path.join(__dirname, 'views')); 
app.set('view-engine', 'pug')
// view engine set to view pug files 

app.get('/', (req,res) => {
  res.render('index.pug')
})
app.get('/add-recipe', (req, res) => {
  res.render('add_recipe.pug')
})

app.listen(PORT, () => {
  console.log( `Server started on port ${PORT}, ctrl+c to end.`)  
})