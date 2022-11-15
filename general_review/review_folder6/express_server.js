const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 

const handlers = require('./handlers/handlers')

// views set to allow for pug files to be rendered. 
app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', handlers.renderHome)
app.get('/users', handlers.renderForm)
app.get('/car', handlers.viewCar)



app.listen(PORT, () => {
  console.log( `Server has started, running on port ${PORT} press ctrl+c to end`)
})