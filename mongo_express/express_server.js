const express = require("express");
const app = express();
const PORT = process.env.PORT|| 8000; 

const handleBars = require('express-handlebars');

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');









app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
})