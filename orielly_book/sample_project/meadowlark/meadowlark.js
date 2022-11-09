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
const handlers = require('./lib/handlers'); 
// handlers imported. 
app.engine(
  '.handlebars',
  expressHandlebars.engine({ defaultLayout: 'main.handlebars' })
);
app.set('view engine', 'handlebars');
// configuration for handle bars.
app.use(express.static(__dirname + '/public'));
// setting up the middleware to allow for the serving of static files.
app.get('/', handlers.home)
app.get('/about', handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)
// error handling updated, sending the 404 page.
app.listen(PORT, () => {
  console.log(`Server started, running on PORT-${PORT}. Press ctrl+c to end.`);
});
