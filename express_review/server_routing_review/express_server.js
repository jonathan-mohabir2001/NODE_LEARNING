/*
Express server set up and routing will be reviewed once again. 
*/
const express = require('express');
// constant express used to represent express module.
const app = express();
// app constant set to all of express methods.
const PORT = process.env.PORT || 3000;
// setting envrionment variable for the port, port set to listen into port 3000.
app.listen(PORT, () => {
  console.log(`The Server has started on... ${PORT} press ctrl+c to exit`);
});
// the "listen" method is passed first the PORT variable.
// then it is passed an arrow function
// inside of that arrow function, there is a message passed to the console to indicate what port the app has started on.

// ROUTING CODED BELOW...

app.get('/', (req, res) => {
  // GET method IS A WAY BY WHICH ROUTES ARE ADDED 
  res.send('<h1>Hello there this is home</h1>');
  // RES.SEND is a higher level of nodes, res.end. 
});

app.get('/about', (req, res) => {
  res.send('<h1>This is about page </h1>');
});


app.get('/contact', (req, res) => {
  res.send('<h1> This is the contact page</h1>');
});

// end of basic routing review... for the 3240294 time.lol 