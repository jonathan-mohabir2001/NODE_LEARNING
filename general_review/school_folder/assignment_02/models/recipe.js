/* 
this js file contains the model which will be displayed 
*/
const mongoose = require('mongoose')
// mongoose imported. 

let recipeSchema = mongoose.Schema({
// variable recipeSchema created. 

  name:{
    type:String, 
    required :true
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
    type:[String], 
    requried:true 
  }
})

let Recipe = module.exports = mongoose.model("Recipe", recipeSchema); 
// model created and exported as module. 