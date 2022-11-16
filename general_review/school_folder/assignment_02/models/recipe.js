const mongoose = require('mongoose'); 
// mongoose module imported. 

let recipeSchema = mongoose.Schema({
  name: {
    type:String, 
    required:true
  }, 

  description:{
    type:String, 
    required:true
  }, 

  difficulty:{
    type: Number, 
    required:true
  }, 
  
  ingredients:{
    type:[String], 
    required:true
  }, 

  steps:{
    type:[String], 
    required:true
  }

})
const Recipe = module.exports = mongoose.model("Recipe", recipeSchema); 
// Recipe constant assigned the created Recipe model. 