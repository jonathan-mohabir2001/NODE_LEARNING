const express = require('express'); 
// express imported. 
const app = express(); 
// app assigend all express methods. 
const PORT = process.env.PORT || 8000; 
// Objects and object destructuring to  be practised below .

const newPizza = {
  crust:"Thin", 
  meat:"Chicken", 
  cheese:"Mozza",
}
//object created called pizza with 3 parameters. 
const {cheese, meat} = newPizza; 
// two properties grabbed from the pizza object
app.get('/viewpizza' , (req, res) => {
  res.send(newPizza)
})
// response sending the whole object
app.get('/viewcheese', (req, res) => {
  res.send(cheese)
})
// response sending the cheese prop, the value is then rendered to the screen
app.get('/viewmeat', (req,res)=> {
  res.send(meat)
})
// response to send the meat property, its value is rendered to the screen


const makePresident = ({firstName, lastName}) => {
  // arrow function. 
  // two props wrapped firstname and lastname
  return(`The president of USA is: ${firstName}- ${lastName}`)
//returning a template string using the two props. 
}

const presidentObject = {
  firstName:"Jonathan", 
  lastName: "Mohabir"
}
// object created with two props correlated to the makePresident function
app.get('/viewpresident', (req, res) => {
  res.send(makePresident(presidentObject))
})
// response called the makePresident function.
// make president function takes the presidentObject.
// my name is then rendered out to the screen.

app.get('/', (req,res) => {
  res.send('User has landed on Express home')
})
// listen statement set. 
app.listen(PORT, () => {
  console.log( `SERVER RUNNING ON PORT${PORT} PRESS CTRL +C TO END`)
})