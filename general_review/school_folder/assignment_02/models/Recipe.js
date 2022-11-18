/*
Mongoose model creation below. 
*/
const mongoose = require('mongoose')

let recipeSchema = mongoose.Schema({

  name:{
   type:String, 
   required:true  
  }, 
  description:{
    type:String, 
    required:true
  }, 
  difficulty:{
    type:Number, 
    required:true 
  }, 
  ingredients:{
    type:[String], 
    required:true
  }, 
  steps:{
    type:[Number], 
    required:false
  }
})
// model now created with necessary fields.
module.exports = mongoose.model("Recipe", recipeSchema); 
// model is now exported. 
