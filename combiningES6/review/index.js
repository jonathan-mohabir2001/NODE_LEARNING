const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// express imported, app set to express methods, port environment set.
const fs = require('fs');
const path = require('path');
// filesystem and path modules imported.
/*
fs.mkdir( (path.join(__dirname, "/public")),{} ,function(err){
  // make directory function of the file system module used. 
  if (err) throw err
  // error handling 
  console.log('A new directory has been created!')
  // messasge to display out to console 
})
*/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});
// user routed to home page. 
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"))
})
// route to send user the about page. 
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact.html"))
})
//route to contact page. 
app.listen(PORT, () => {
  console.log(`The Server has started on port-${PORT}, press ctrl+c to end.`);
});


// ES6 objects below.

const makeFullStack = ({firstName, lastName}) => {
  return(` <h1>${firstName}- ${lastName} is a full stack developer </h1>`)
}
const someDude= {
  firstName:'Jonathan', 
  lastName:'Mohabir'
}
app.get('/viewdev', (req, res) => {
  res.send(makeFullStack(someDude))
}); 
// route to send the full stack developer jonathan. 

// spread operator
const drinks = ["Coca Cola", "Pepsi", "Water"]
const food = ["Pizza", "Sandwhich" , "Greens"]
const together = [...drinks ,...food]
app.get('/viewarray', (req, res) => {
  res.send(together.join(", ...."))
})