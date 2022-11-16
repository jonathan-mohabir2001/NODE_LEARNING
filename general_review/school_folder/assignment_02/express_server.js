/*
Assignment 02 created by Jonathan M. 

MongoDb + express app. 
*/
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const path  = require('path')

/*
Database setup below using the mongoose module and its methods
*/










app.get('/', (req, res) => {
  res.render('home.pug')
})
app.set('/', path.join(__dirname, 'views'))
app.set('view-engine', 'pug')
// view engine set to view pug files. 
app.listen(PORT, () => {
  console.log(`Server started, running on port-${PORT}`)
})


