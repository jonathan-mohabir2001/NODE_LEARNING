const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const fs = require('fs');
const path = require('path');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set middle ware to allow pug files to use bootstrap
app.use(
  '/css',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);

app.get('/', (req, res) => {
  res.render('info');
});

app.get('/signIn', (req, res) => {
  res.render('signIn');
});

app.get('/signUp', (req, res) => {
  res.render('signUp');
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
