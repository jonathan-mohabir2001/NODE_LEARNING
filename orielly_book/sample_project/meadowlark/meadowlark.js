/*
Meadowlark .js travel site, this js file contains the 
main code for this server. 

Refer to companion repo if any trouble.
*/
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 

const expressHandlebars = require('express-handlebars'); 
// hanlde bars module importred. 



app.engine('.handlebars', expressHandlebars.engine({extname: '.handlebars', defaultLayout:'main'}))
app.set('view engine', 'handlebars')
// configuration for handle bars. 


app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req,res) => {
  res.render('about')
})
// routes updated. These routes are now using the render method of the response. 
// render is able to read the handle bars files because of the engine and set methods. 

app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500)
  res.render('500')
})
app.use((req, res) => {
  res.status(404)
  res.render('404')
})



app.listen(PORT, () => {
  console.log(`Server started, running on PORT-${PORT}. Press ctrl+c to end.`)
})