/*
This node file will cover req, and res methods and properties. 
*/
const express = require('express');
// express module imported.
const app = express();
// app assigned express methods.
const PORT = process.env.PORT || 8000;
// port constant set.

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});
// this response sends info about the about page.

app.get('/error', (req, res) => {
  res.status(500);
  // status sets the status code of the HTTP status code.
  res.send('You have an error!');
});
/*
The response from the network tab in the developer tools has returned 
a status code of 500; internal server error. 
*/
app.get('/text', (req, res) => {
  res.type('text/plain');
  // the response type is set to a plain fashioned text
  res.send('This is some text');
});
// the response above sends a plain message with it's type set to plain text.

//app.get('/greeting', (req, res) => {
//res.status(200);
//res.send('Greeting is', {
//  MessageChannel: 'Hello there',
//});
//});
// code above had an invalid status code.

app.get('/', (req, res) => {
  res.send('You have landed on home');
});
// get response returning message for user landing onto the home.

//error handler below.
app.use((err, req, res, next) => {
  console.error('** SERVER ERROR,:' + err.message);
  res.status(500).render('08-error', {
    message: 'You should not have clicked that.',
  });
});

// some comment 

// 404 handler below

app.use((req, res) => {
  res.status(404).send('you got a 404. ');
});
// any thing that isn't set as a route will be redirected to this send response.

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}, press ctrl+c to end`);
});
// listen method set to listen into port.
