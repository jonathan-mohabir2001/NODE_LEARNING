/*
BackEnd Server for MainApp
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const handlers = require('./handlers');
const mongoose = require('mongoose');





// DATABASE CONNECTION START
const MONGO_URL = "mongodb://127.0.0.1/MainApp"
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));
// DATABAESE CONNECTION END


app.get('/', handlers.home); 
app.get('/signup', handlers.about);
app.get('/login ', handlers.contact);





app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})