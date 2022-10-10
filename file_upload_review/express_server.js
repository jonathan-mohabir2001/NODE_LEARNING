/*
This node file will be covering file uploading. 
Multer is the module which will be worked with to cover this. 

The multer configurations have been written in the 
middlewares directory under the multerUpload.js file. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// express, app, port set.

// multer will need to be imported from the middleswares directory.

const { upload } = require('./middlewares/multerUpload');
// upload constant assigned the multerUpload js file.
// all multer configs are now stored to the upload variable.

app.use(express.static('public'));
// this statement allows the entire app to have static files served.

app.post('/upload', upload.single('filename'), (req, res) => {
  /*
  The post method is first passed... 
  the name of the action attribute from the html file.

  the upload method is then using dot notation to access a single file upload... 
  coming from the input field of "filename"
  */
  console.log(req.file); //Here your file is logged to the console!
  res.end('FIle Upload successfull: Here it is!: ' + JSON.stringify(req.file));
  // this statement shows the file upload.
});

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

// port listener set.
app.listen(PORT, () => {
  console.log(`The server has started onto PORT ${PORT}
    press ctrl + c to end. 
  `);
});
