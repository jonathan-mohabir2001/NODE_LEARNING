/*
This node file will contain practise with the fs moudule.

Creating directories, and files will be covered. 

All methods will be practised, in an asynchronous fashion  

Path module is also utiliezed to define paths. 
*/

const path = require('path');
const fs = require('fs');
// path and fs modules imported.

fs.mkdir(
  path.join(__dirname, 'testFolder1'),
  // defining the path
  {}, // asynch
  function (err) {
    if (err) throw err;
    // function to catch any errros.
    console.log('A new directory has been created within this project');
    // log message to indicate success
  }
);

fs.writeFile(
  // writing file method below
  path.join(__dirname, 'testFolder1', 'greeting.txt'),
  // defining the path of where the file should be written into
  "Hi there, this is some of Jonathan's practise with the filesystem module",
  // message to be inserted into file

  function (err) {
    if (err) throw err;
    // function to catch any erros
    console.log('A file has been written into the created new folder!');
    // log message to indicate success.
  }
);

fs.appendFile(
  // appended new content to file
  path.join(__dirname, 'testFolder1', 'greeting.txt'),
  // defining path, and file name to have new content added to
  'NEW MESSAGE, HI HI',
  // new  messsage to be passed into file
  function (err) {
    if (err) throw err;
    // function to catch any error
    console.log('New content appended to file greeting txt under testFolder1');
  }
);
