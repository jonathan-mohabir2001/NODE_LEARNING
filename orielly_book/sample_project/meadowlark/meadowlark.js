/*
Meadowlark .js travel site, this js file contains the 
main code for this server. 

Refer to companion repo if any trouble.
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const expressHandlebars = require('express-handlebars');

const newConst = 'random'; 



// hanlde bars module importred.
app.engine(
  '.handlebars',
  expressHandlebars.engine({ defaultLayout: 'main.handlebars' })
);
app.set('view engine', 'handlebars');
// configuration for handle bars.
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
  //this contant uses 
  res.render('about', {fortune: randomFortune})
});

// routes updated. These routes are now using the render method of the response.
// render is able to read the handle bars files because of the engine and set methods.

// an array of strings will be created below.

const fortunes = [
  'Look up, not down',
  ' Do not Fear what you do not know',
  'You will have a pleasent surprise',
];
// array of messages created. 




app.use(express.static(__dirname + '/public'));
// setting up the middleware to allow for the serving of static files.
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500);
  res.render('500');
});
// error handling updated, sending the 505 handlebars page.
app.use((req, res) => {
  res.status(404);
  res.render('404');
});
// error handling updated, sending the 404 page.
app.listen(PORT, () => {
  console.log(`Server started, running on PORT-${PORT}. Press ctrl+c to end.`);
});
