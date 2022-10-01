const express = require('express');
const Person = require('./person');
// express imported
const app = express();
// app assigned express methods
const router = express.Router();
// constant router declared, assigned router method

const person = require('./person');

var person1 = new Person('Jonathan Mohabir ', 20);
// person 1 created from person class

router.get('/', (req, res) => {
  res.send('<h1>You have landed onto the home page</h1>');
});
// the response sent is a message for the user visiting the root/home page. \

router.get('/about', (req, res) => {
  res.send('<h1> This is the about page </h1>');
});
// get method responding for about page

router.get('/error', (req, res) => {
  res.status(500);
  res.send('<h1>Something went wrong </h1>');
});
// response status code set to 500
// when user types in error, the status code is internal server error

router.get('/person', (req, res) => {
  res.send(person1);
});
// this route points to the javascript object created.
// output to the console is returned with a key value pair within the browser.

module.exports = router;
// router
