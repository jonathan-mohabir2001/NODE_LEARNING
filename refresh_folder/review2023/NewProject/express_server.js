const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; 


const fs = require('fs')
const path = require('path')



app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (req, res) => { 
  res.render('home')
})
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`)
})