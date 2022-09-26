const express = require('express');
// express imported from node modules
const PORT = process.env.PORT || 8000;
// port set to listen into port 8000
const app = express();
// app constant assigned all methods from express.
const routes = require('./routing');
// routes constant importing all functionality from routing.js file

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED ON ${PORT}`);
});
