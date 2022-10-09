/*
Lab 03 created by Jonathan M. 
Express server coded below. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const fs = require('fs');
const path = require('path');
// multer is the module which is needed to work with files. This is installed through terminal and added to package.json
const multer = require('multer');
// multer imported.
// file called 'uploads' will be created below using file system module.
/*
fs.mkdir(path.join(__dirname, '/uploads'), {}, function (err) {
  if (err) throw err;
  console.log('A new folder has been created! ');
});
// file system module code written to create folder responsible for containing uploads folder.
  code commented out to prevent erros.
*/
app.listen(PORT, () => {
  console.log(`The server has started on... ${PORT} press ctrl c to end. `);
});
app.get('/', (req, res) => {
  res.send('<h1>This is the server home</h1>');
});

// multer configurations below.
const storage = multer.diskStorage({
  // storage will  be configured below.
  destination: function (req, file, callback) {
    callback(null, '/uploads');
  },
  // the destination is passed a function with a callback.
  // the parameters passed to the callback are an error handling null
  // and the location of the directory containing images.

  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
    // file name configuration.
  },
});
// multer storage configured.

var upload = multer({ storage: storage });
// upload variable assigend the storage configurations.

app.get('/formpics', (req, res) => {
  res.sendFile(__dirname + '/uploads/index.html');
});
