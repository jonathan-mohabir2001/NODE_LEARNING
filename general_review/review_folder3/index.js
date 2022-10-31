const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
const fs = require('fs')
const path = require('path'); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,"/public/contact.html "))
})

app.get('/aboutme', (req,res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"))
})




app.listen(PORT, () =>{
  console.log(`Server has started, running on port-${PORT}. Press ctrl+c to end`)
})
