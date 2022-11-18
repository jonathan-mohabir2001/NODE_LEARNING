const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
const path = require('path')
const file = require('fs')

const handlers = require('./handlers/handlers')


app.set(path.join(__dirname, "views"))
app.set('view-engine', 'pug')
// view engine set. 





app.get('/', handlers.homeRender)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})



