const express = require('express');
const app = express(); 
const PORT = process.env.PORT ||8000; 

const path = require('path');
const fs = require('fs');

app.use(express.json());

//set view engine to pug files 
app.set('view engine', 'pug');

//set the path to the views folder





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})