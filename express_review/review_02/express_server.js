/*
Express server review, as well as routing.
*/
const express = require('express');
// express module imported.
const app = express();
// app assigned all express methods.
const PORT = process.env.PORT || 8000;

const router = require('./routes');
// constant router importing routes module.


app.use('/' , router); 
// all routing implemented through passing the use
// method. Everything starting from the root will 
// incorporate the router module. 



app.listen(PORT, () => {
  console.log(`The server has been started on ${PORT}`);
});
// listen method to listen into port. 