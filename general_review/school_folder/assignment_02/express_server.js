/*
Assignment 02, created by Jonathan M. 
*/

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000; 
const path = require('path')
// express router imported, app set express methods. 

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/foodstore")

let dbconnect = mongoose.connection; 
dbconnect.once("open", () => {
  console.log("database connection established")
})
dbconnect.on("error", (error) => {
  console.log("We have an error! ")
})
// connnection set, once function and on function created. 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug'); 
// view engine set to view pug files. 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
// middleware set, able to send static files from public directory. 






app.listen(PORT, () => {
  console.log( `Server started on port ${PORT}, ctrl+c to end`)
})
