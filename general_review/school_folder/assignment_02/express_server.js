/*
Assignment 03 created by Jonathan M. 

Express app, connecting to MongoDB, using Mongoose for 
CRUD operations. 

Routes completed within "handlers" directory under handlers.js
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const handlers = require('./handlers/handlers')
// handlers.js file imported to handle get requests 

app.get('/', handlers.homePage)

app.set('view-engine', 'pug');
// set method to allow rendering of pug files.

app.get('/', )


app.listen(PORT, () => {
  console.log(`Server has started on port-${PORT}`);
});
