/*
This node file will be the entry point for this project. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// express method set, app assigned express methods, server set to port 3000

//error handling is provivded at the bottom. But Routing must be coming before
app.get('/', (req,res) => {
  res.type('text/plain')
  res.send('You have landed on the home page. ')
})
// this route starts at the beginning directory and renders the landed on about page message 
app.get('/about' , (req,res) => {
  res.type('text/plain')
  res.send('You have landed on the about page.')
})





// error handling will be created down below. for the entrie app will be created below
app.use((req, res) => {
  res.status(500);
  res.send('<h2>Server error</h2>');
});
// server given status code of 500, will return server error message.
app.use((req, res) => {
  res.status(404);
  res.send('<h2>Page not found</h2>');
});
// server will render a not found page.

app.listen(PORT, () => {
  console.log(`The server has started on localhost at port...${PORT}, press 
  ctrl+c to end.`);
});
// listen method set, console will be given information about the localhost server. 


