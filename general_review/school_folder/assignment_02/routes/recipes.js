// File to contain routes for application 
const express = require('express')
const router = express.Router(); 
const {check, validationResult} = require('express-validator'); 


const ingredients = [
  "Ingredient01", 
  "Ingredient02",
  "Ingredient03",
  "Ingredient04",
]


router.route("/add").get((req, res)=> {
  res.render('add_recipe', {
    ingredients:ingredients, 
  })
})
.post(async(req, res) => {
  await check("name" , "name is required").notEmpty().run(req)
  await check("Description" , "Description is required").notEmpty().run(req)
  await check("Difficulty" , "Difficulty  is not  required").isEmpty().run(req)
  await check("Ingredients" , "Ingredients are required").notEmpty().run(req)
  await check("Steps" , "Steps are required").notEmpty().run(req)
})
