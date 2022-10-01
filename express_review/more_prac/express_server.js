/*
These Javascript files will include some more 
practise with NODE. 
Filesystem, path, express will all be revisted. 

Routing, requests, responses will be reviewed when using express for these files. 

*/
const path = require('path');
// path module imported
const fs = require('fs');
// const file system imported.

const express = require('express');
// express constant set
const PORT = process.env.PORT || 8000;
// port set to 8000
const app = express();
//app constant set to express methods.
const routes = require('./routes');
// all routes will be handled within the routes.js file, the statement above imports the module.
app.use('/', routes);
// this statement indicates that the application will be
/*
some random path code below. 
*/
console.log(path.basename(__dirname)); // the path of this directory was outputted to the console

console.log(path.basename(__filename)); // the file name has been printed out to the console

/*
fs.mkdir(path.join(__dirname, '/testfolder'), function (err) {
  if (err) throw err; 
  console.log('A  new directory was created')
});
new directory was created using file path method. 
*/

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} press ctrl+c to end.`);
});
