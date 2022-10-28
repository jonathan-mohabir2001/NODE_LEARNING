/*
GENERAL REVIEW FOLDER 1 - Node knowledge check. 
This node app incorporates everything I know about MERN stack, focusing on Express and node. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// PORT number set, app set to express methods, express moudle is imported.
const fs = require('fs');
const path = require('path');
// filesystem and path module imported.
/*
Code commented out to prevent re-write of directory classes.
fs.mkdir((path.join(__dirname, "/classes")), {} , function(err) {
  if(err) throw err 
  console.log('A New directory named classes has been created. ')
})
*/
/*
fs.mkdir((path.join(__dirname ,"public")), {}, function(err){
  if (err) throw err 
})
*/
const course = require('./classes/Course');
const person = require('./classes/Person');
// both classes imported, able to create objects from here.
const courseTemplate = course;
const viewCourse = new courseTemplate('Computer Science', '8-Semesters');
// object of course class created.
const personTemplate = person;
const somePerson = new personTemplate('Jonathan M', 21);
// new person created.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});
// routes created and will send the created HTML pages which will render the home, contact and about page.
app.get('/viewperson', (req, res) => {
  res.send(somePerson.description()); 
})
app.get('/viewcourse', (req, res) => {
  res.send(viewCourse.describe()); 
})
// routes created to show some JavaScript classes which are exported as modules 

//some ES6 Stuff below. 

const makeFullStack = ({firstName, lastName}) => {
  return(`${firstName} - ${lastName} is a MERN STACK DEV!`)
}
const newPerson = {
  firstName:"Jonathan", 
  lastName:"Mohabir "
}
app.get('/viewdeveloper', (req, res) => {
  res.send(makeFullStack(newPerson))
})
// this response applied the fullstack function to the new person object. 


app.listen(PORT, () => {
  console.log(`The server has started on ${PORT}`);
});
// listener statement for PORT number.
