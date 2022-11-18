//Route below to return home page. 

const express = require('express')
const router = express.Router(); 
const mongoose = require('mongoose')
const Recipe = require('../models/Recipe')


//Get the home page  

router.get('/', function (req, res,next){
  Recipe.find({}, (error,recipeArray) => {
    if (error){
      console.log('Something went wrong')
    }
    else{
      res.render('index', {name:'FoodStore',recipes:recipeArray })
    }
  })
})
module.exports = router; 
