// creating express server, revisiting routing, path and file system.
// node file created and initated.
const express = require('express');
// express constant imported.
const app = express();
// app constant set to all express methods.
const PORT = process.env.PORT || 8000;

const path = require('path');
const filesystem = require('fs');
// path and filesystem creation will be created below.

const routes = require('./router'); 
// constant routes importing router.js file. 
app.use('/', routes)
// all things starting from root, will be implmenting the routes. 

filesystem.writeFile(
  path.join(__dirname, 'homePage.html'),

  '<h1>Hello there world </h1>',

  function (err) {
    if (err) throw err;
  },
  console.log('A new file has been created!')
);

filesystem.writeFile(
  path.join(__dirname, 'aboutMe.html'), 
  '<h1> This is an about me page</h1>', 
  function(err){
    if(err) throw err
  }, 
  console.log('New about me page has been created. ')
)
// two functions created to write some html pages. 






// listening into the port which has been set to port 8000.
app.listen(PORT, () => {
  console.log(`The server has started on: ${PORT}`);
});
