const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 

const handlers = require('./handlers/handlers')

// views set to allow for pug files to be rendered. 
app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', handlers.renderHome)
// home route 
app.get('/users', handlers.renderForm)
// users route to form 
app.get('/car', handlers.viewCar)
// view car object route 
app.get('/developer', handlers.viewDeveloper)


app.use(handlers.notFound);
app.use(handlers.serverError);
// error handling 

app.listen(PORT, () => {
  console.log( `Server has started, running on port ${PORT} press ctrl+c to end`)
})