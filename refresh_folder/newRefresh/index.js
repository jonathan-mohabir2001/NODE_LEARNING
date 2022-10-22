const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 3000; 

const fs= require('fs')
const path = require('path')



var greeting= function(message){
  console.log(message) ; 

}
// variable declarative function. 
var saySomething = words => {
  console.log(words)
; }





app.get('/',  (req, res) => {
  res.send(' You are home Tyler Durden!')
})


app.listen(PORT, () => {
  console.log( `Server started on ${PORT}`)
})
