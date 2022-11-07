/*
Meadowlark .js travel site, this js file contains the 
main code for this server. 

Refer to companion repo if any trouble.
*/
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 


app.get('/', (req, res) => {
  res.send('<h1>hey user, welcome to the home </h1>')
}) 
app.get('/about', (req, res) => {
  res.send('<h2>Hey user, welcome to the about page </h2>')
})
// default routes created. 

app.use('/',(req, res) => {
  res.status(404)
  res.send('<h2>Page not found!</h2>')
})
app.use('/', (req,res) => {
  res.status(500)
  res.send('<h2>Server error!</h2>')
})
// custom middleware added


app.listen(PORT, () => {
  console.log(`Server started, running on PORT-${PORT}. Press ctrl+c to end.`)
})




