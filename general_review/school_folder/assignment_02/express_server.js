/*
Assignment 02, created by Jonathan M. 
*/

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000; 
const path = require('path')
// express router imported, app set express methods. 
const Recipe = require('./models/Recipe'); 


const indexRouter = require('./routes/index')
// index router imported


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/foodstore")

let dbconnect = mongoose.connection; 
dbconnect.once("open", () => {
  console.log("database connection established")
})
dbconnect.on("error", (error) => {
  console.log("We have an error! ")
})
// connnection set, once function and on function created. 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug'); 
// view engine set to view pug files. 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
// middleware set, able to send static files from public directory. 

app.use('/', indexRouter)
//  home route established, using index router. 

app.route("/recipe/delete/:id").get((req,res ) => {
  var id = req.params.id;
  Recipe.deleteOne({_id:id}, (error) => {
    if(error){
      res.send('<h1>ERROR</h1>')
    }
    else{
      res.redirect('/')
    }
  })
})

app.route("/recipe/edit/:id").get((req, res)=> {
  var id = req.params.id;
  Recipe.findById(id, (error, recipe) => {
    if(error){
      res.end("this recipe cannot be edited")
    }
    else{
      res.render('Edit', {name:"edit a recipe", ingredients:["Tomatoe", "Pizza dough", "Pepperoni", "HotPepper", "Onion"]})
    }
  })


}).post((req, res) => {
  var id = req.params.id; 
  var recipe = new Recipe(); 
  recipe.name = req.body.name; 
  recipe.description = req.body.description; 
  recipe.difficulty = req.body.difficulty; 
  recipe.ingredients = req.body.ingredients; 
  recipe.steps = req.body.steps
  console.log(req.body.name)
  Recipe.updateOne({_id:id}, recipe ,(error) => {
    res.redirect('/')
  })
})
app.route("/recipe/add").get((req,res) => {
  res.render('add', {name:"add a recipe",ingredients:["Tomatoe", "Pizza dough", "Pepperoni", "HotPepper", "Onion"]})
})
.post((req, res) => {
  var recipe = new Recipe()
  recipe.name = req.body.name; 
  recipe.description = req.body.description; 
  recipe.difficulty = req.body.difficulty; 
  recipe.ingredients = req.body.ingredients; 
  recipe.steps = req.body.steps
  recipe.save((error) => {
    if(error){
      console.log(error)
      res.end("erorr occured")
    }
    else{
      res.redirect("/")
    }
  })
});


app.use(function ( req, res, next) {
  next(createError(404)); 
})
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(PORT, () => {
  console.log( `Server started on port ${PORT}, ctrl+c to end`)
})

