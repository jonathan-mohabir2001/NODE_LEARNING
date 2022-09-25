/*
This JS file contains practise with the framework express. 

Express is very helpful for creating servers using javscript knowledge. 

This js file will demonstrate routing functionality upon requests. 
*/
const express = require('express'); 
// express constant is assigend the module express from node. 
const PORT = process.env.PORT || 8000; 
// a port is declared and is set to 8000. Local host will be accessed to test these outputs
const app = express(); 
// app will be accessing methods of express 
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`); 
})
// this statement will have a log out to the console to show what port the app is set to. 

const router = require('./routing'); 
// this router constant is assigned the routing file.  All the functionality from that routing file is now accessible. 

app.use('/' , router); 
/*

*/