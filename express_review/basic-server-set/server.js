/*
Revisiting of setting up basic server using express. 
*/
const express = require('express');
// express module imported.
const app = express();
// constant needed to

const PORT = process.env.PORT || 8000;
// constant for port listening assigned to 8000.

app.get('/', function (req, res) {
  res.send('<h1> This is a message  sent back from server to client</h1>');
});

app.listen(PORT, () => {
  console.log(`The server has started on ${PORT}`);
});

// upon the guests vist to the home page starting from the root, they will be sent this message.
