const express = require("express");
const app = express();
const PORT = 8000; // default port 8000 
// start up added. 

const mongoose = require('mongoose')
const db = mongoose.connection; 








app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})