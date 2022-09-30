const express = require('express');
// express module imported
const app = express();
// app assigned express methods
const PORT = process.env.PORT || 8000;
// port set to listen into 8000
app.get('/about', (req, res) => {
  res.send('about');
}); // sends to about page

app.get('/error', (req, res) => {
  res.status(500);
  res.send('You have an error');
}); // if the status code is read as 500, the response will send an error message.

app.get('/greeting', (req, res) => {
  res.send('Greeting to user', {
    message: 'HELLO',
  });
});

// home page routed, and listen method coded.
app.get('/', (req, res) => {
  res.send('<h1>You have landed on the base home page</h1>');
});
app.listen(PORT, () => {
  console.log(`The server has started on ${PORT}`);
});
