/*
Routing functionality is written inside this Js file. 
*/

const express = require('express');
// express constant assigned express module.
const routes = express.Router();
// routes constants assigned Router() from accessed using dot notation

const greeting =
  'Hi there my name is Jonathan, I just wrote some express code!';
// greeting constant declared for message

routes.get('/', (req, res) => {
  /*.get is passed two parameters.
   the Home path, and the request and response is then passed
  to an arrow function that returns an end message.
  */
  res.end(`<h1>Server says:${greeting}`);
});

module.exports = routes;
// this statement allows for the routing functionality to be exported into the server.js file.
