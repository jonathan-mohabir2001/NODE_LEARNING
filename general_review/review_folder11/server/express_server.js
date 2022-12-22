const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const handlers = require('./handlers');




app.get('/', handlers.home); 
app.get('/about', handlers.about);
app.get('/contact', handlers.contact);








app.use(express.static('public'));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})