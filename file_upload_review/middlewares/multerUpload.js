const express = require('express');

const multer = require('multer');
// multer module imported.

/*
Multer configurations below: 
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // the folder which will be holding the destination must already exist
    // in this case, the fileUploads folder will be the destination
    cb(null, 'public/fileUploads');
    // the callback is passed the destination of where this must be passed to.
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  // the file name configuration above.
  // the callback is passed the original name of the file.
});

//Filter the image type
const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)＄/)) {
    //If the file uploaded is not any of this file type

    // If error in file type, then attacch this error to the request header
    req.fileValidationError = 'You can upload only image files';
    return cb(null, false, req.fileValidationError);
  }
  cb(null, true);
};
// filtering of image complete.

exports.upload = multer({ storage: storage, fileFilter: imageFileFilter });
// this module is now exported and named upload.

// this concludes the end of the multer configuration for handling image file uploads.
