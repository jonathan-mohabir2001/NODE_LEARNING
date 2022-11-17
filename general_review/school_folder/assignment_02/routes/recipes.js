/*
All routing done through this JS file. 
*/ 

const express = require('express')
const router  = express.Router(); 
const {check, validationResult} = require('express-validator')
// express validator imported. 

const Recipe = require('../models/recipe'); 
// Recipe mongoose schema imported. 

let ingredients = [
  "Ingrident01", 
  "Ingrident02", 
  "Ingrident03", 
  "Ingrident04", 
  "Ingrident05", 
]
let steps = [0,1,2,3,4]

router
  .route("/add")
  // Get method renders the pug add_book page
  .get((req, res) => {
    // Render page with list of genres
    res.render("add_recipe", {
      ingredients: ingredients,
    });
    // Post method accepts form submission and saves book in MongoDB
  })
  .post(async (req, res) => {

    await check("name", "Name of food required").notEmpty().run(req)
    await check ("description" , "Description of food required").notEmpty().run(req)
    await check("difficulty", "Difficulty not required").isEmpty().run(req)
    await check("ingredients", "Ingredients are required").notEmpty().run(req)
  })


