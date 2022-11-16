/*
Assignment 02 created by Jonathan M. 
MongoDb + Express app. Creating an application to create recipe's
*/
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000; 
// Express imported, app set, port set. 

const recipe_routes = require('./routes/recipes')
// routes module imported. 
const mongoose = require('mongoose'); 
mongoose.connect("mongodb://127.0.0.1/FoodRecipe")
// connection to database established. 
const db = mongoose.connection; 
// db set to connection methods. 
db.once("open", () => {
  console.log(`Connected to MongoDB Database`)
})
// once listener function created for successful connection to MongoDB
db.on("error" , (err) =>{
  console.log(`We have an error! `)
})
// on listener function with error handling.

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use(express.static('public'))
// middleware created, url encoded, json methods, allowing files to be served from public

let Recipe = require('./models/recipe'); 
// recipe scheme imported. 
app.set('view-engine','pug')
// view engine set to view pug files. 

//app.use('/recipe', recipe_routes)
// middleware added to this route "recipe"

// ADD CODE BELOW AFTER PUG TEMPLATES CREATED
/*
app.use('/', function(req, res){
    // Query MongoDB for books
    Book.find({}, function(err, books){
        // Catch error
        if (err) {
            console.log("error")
        } else {
            // Pass books to index
            res.render("index", {
                books: books
            });
        }
    });
});
*/


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})



