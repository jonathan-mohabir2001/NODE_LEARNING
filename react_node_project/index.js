/*
This file wil contain server initiation, and starting up 
the node environment.
*/

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
/*
Constants are now set, server is being processed 
and being listened to into port 3001
*/

/*
The node server is now listening to port 3001 
*/
