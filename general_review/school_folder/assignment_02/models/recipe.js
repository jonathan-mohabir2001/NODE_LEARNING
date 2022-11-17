/*
Model of Recipe for the database created below. 
*/
const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
  
  name:{

    type:String, 
    required:true
  }, 
// name attr set 
  description:{
    type:String, 
    required:true
  }, 
// description attr set 

  difficulty:{
    type:Number, 
    required:false
  }, 
// difficulty attr set. 
  ingredients:{
    type:[String], 
    required:true
  }, 
// ingridients attr set. 
  steps:{
    type:[Number], 
    required:true
  }
// steps attr set. 
})
const  Recipe = module.exports = mongoose.model("Recipe", recipeSchema)


