const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// imported express modules, we set express methods, and a port number.

//routes for app

app.get('/', (req, res) => {
  res.send('Hello world, this is my backend.');
});

app.get('/users', (req, res) => {
  res.send('Hello this is the users page');
});

app.get('/mypage', (req, res) => {
  res.send('Hello world, welcome to my page');
});

// This statements starts our application.
app.listen(PORT, () => {
  console.log(
    `Hello there, server started on port ${PORT}, press ctrl +c to end`
  );
});
