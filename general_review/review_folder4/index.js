const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000;
const fs = require('fs')
const path = require('path');

const PersonObject = require('./classes/person')
// personobject constant assigned person class. 
/*
fs.mkdir(path.join(__dirname, "classes"), {}, function(err){
  if(err) throw err 
  console.log( `New directory created!`)
})
fs.mkdir(path.join(__dirname,"public"),{}, function(err){
  if(err) throw err
  console.log("new directory created. ")
})
*/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/public/index.html"))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,"/public/contact.html"))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,"/public/about.html"))
})
// Routing accomplished to send html pages for home, contact, and about. 

// class object created below. 
const person1 = new PersonObject("Jonathan M", 21); 
app.get('/person', (req, res) => {
  res.send(person1.talk()); 
})
// route to send class object, talk method accessed. 

//ES6 object destructuring and spread operator below. 

const makeDeveloper = ({firstName, lastName}) => {
  return(`<h1>This dude ${firstName}-${lastName} is a full stack developer, using MERN or MEAN </h1>`)
}
// make developer function created. 
const thisGuy = {
  firstName:"Jonathan", 
  lastName:"Mohabir"
}
app.get('/developer', (req, res) => {
  res.send(makeDeveloper(thisGuy)); 
})

const foodArray = ["Pizza", "Burger", "Veggies"]
const drinkArray = ["Water", "Coke", "Pepsi"]
// new arrays created. 
const newMeal = [...foodArray, ...drinkArray]; 
// array of newMeal uses the spread operator to access the values of the food array and drink array. 

app.get('/meal', (req,res) => {
  res.send(newMeal.join(" ..."))
})


app.listen(PORT, () => {
  console.log(`Server has started on port - ${PORT}`)
})