/*
This file will contain initial server code
*/

const express = require("express"); 
const PORT = process.env.PORT || 3001; 

const app = express(); 

app.get("/api" , (req,res) => {
  res.json({message:"Hello from server!"});
});

app.listen(PORT, () => {
  console.log(`Server listening into ${PORT}`); 
})

/*
Simple server set up using express, node beginner code. 
*/