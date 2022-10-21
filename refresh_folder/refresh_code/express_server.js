const express = require('express'); 
// express imported. 
const app = express(); 
// app set to express methods. 
const PORT = process.env.PORT || 8000; 
// port number set to 8000. 
const fs = require('fs')
const path = require('path'); 
// file system and path modules imported. 
/*
fs.mkdir(path.join(__dirname, "classes") , {} , function(err) {
  if (err) throw err
  console.log('A new directory has been created within the parent directory!')
})
new directory created using the filesystem module. 
*/

const newPerson = require('./classes/Person'); 

var firstPerson = new newPerson ("Jonathan", 21); 
// firstPerson created as new object of person class. 

app.get('/person1', (req, res) => {
  res.send(firstPerson.description()); 
})
// routing to js Object firstPerson 


/*
Declarative JS practise below, results outputted to console.
"Make functions behave like variables."
*/


var welcomeMessage = function(message){
  console.log(message)
}
// variable assigned to a function. 

var secondMessage = greeting => {
  console.log(greeting)
};

var thridMessage = {
  statement: "Hello there world", 
  speak(statement){
    return this.statement
  }
}

secondMessage("Random message")
thridMessage.speak("Hello world")
welcomeMessage("Welcoming message")

// home route. 
app.get('/', (req, res) => {
  res.send('<h1>User has landed onto home page </h1>')
})
app.listen(PORT, () => {
  console.log(`Server has started running onto port ${PORT}`)  
})










