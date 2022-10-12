/*
This node file will be working with PUG.
A templating engine. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// express constant imported, app set, port set.

/*
These two statments below allow for 
the use of the templating engine to be of use. 
*/

app.set('views,', './views')
// allows for pointing to the views directory
app.set('view engine','pug')
// this statement has the app pointing to pug index file . 
 
app.get('/', (req,res) => {
  res.render('index')
})
// upon the get request, the render method will return the pug file. 

// index.html file being sent.

// routing parameters code below... important to know for assignment.


app.get('/member/:name/planet/:home', (req, res) => {
	const memberDetails = {
		member: req.params.name,
		planet: req.params.home
    // express parameter routing must be done first 
    // within this const 
  }
	res.render('gurdian', memberDetails);
  // the render method must be sent using the gurdian template. 

});



app.get('/members/:name', (req, res) => {
  res.end(
    `A request has been made to see a member with name:${req.params.name}`
  );
  // req . params . field ... indicate what parameters the code should point to.
});

app.get('/cellnumber/:num', (req, res) => {
  res.end(`A request has been made to see a cell number of ${req.params.num}`);
});

app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
});
// tracking route parameters.

app.get('*', (req, res, next) => {
  res.status(200).send('Sorry, requested page not found.');
  next();
});
// handling responses if pages are not routed to properly.

app.listen(PORT, () => {
  // listen statement to track port.
  console.log(`Server has started on ${PORT}`);
  // nodemon in use, no need to start stop server manually.
});
