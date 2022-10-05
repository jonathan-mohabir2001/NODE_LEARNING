/* 
this js file will be responsible for handling routing 
within this javascript project. 
*/
const express = require('express');
// express constant set.
const routing = express.Router();
// routing assigned all of routing functionality by express.

const path = require('path'); 
// path assigned constant of path module. 
const fs = require('fs'); 
const { Router } = require('express');
// fs assigned fs module. 

routing.get('/', (req, res) => {
  res.send('<h1> this is the sever sending a message</h1>');
});


routing.get('/home' , (req,res) => {
  // an html file will be sent when writing the response below 
  res.sendFile(path.join(__dirname, 'homePage.html'))
  // in order to send html files back, they must have their paths joined and names specified 
})

routing.get('/about', (req,res) => {
  res.sendFile(path.join(__dirname, 'aboutMe.html'))
})



module.exports = routing;
// router.js exported as router in order to be implemented when called within the express server index.js file.
