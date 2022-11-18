const express = require('express');
const app = express(); 

app.get('/', function(req,res, next){
  res.render('Add', {name:"add a recipe"}); 
}).post((req,res)=>{
  console.log(req.body.name)
})
module.exports = router; 