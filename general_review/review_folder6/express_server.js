const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
// express module imported, app assigned express methods. 

const handlers = require('./handlers/handlers')
// handlers js file imported. 
app.set('view engine', 'pug')
// view engine set. 
app.get('/', handlers.home); 
app.get('/about', handlers.about)










app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`)
})