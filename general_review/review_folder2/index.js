const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 
const fs = require('fs')
const path = require('path'); 
/*
fs.mkdir(path.join(__dirname, "public"), {} , function(err){
  if (err) throw err 
  console.log('New directory created. ')
})
*/

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})
app.get('/contact', (req, res ) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"))
})
app.listen(PORT, () => {
  console.log(`Server has started on  ${PORT}`)
}) 

const makeFullStack= ({firstName, lastName}) => {
  return(`${firstName} - ${lastName} is a full stack developer.`)
}
const thisGuy ={
  firstName:"Jonathan", 
  lastName:"Mohabir"
}
app.get('/viewdeveloper', (req, res) => {
  res.send(makeFullStack(thisGuy))
})