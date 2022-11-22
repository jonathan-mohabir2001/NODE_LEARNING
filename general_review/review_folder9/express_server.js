const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 
// express imported, app set, port set. 

const mongoose= require('mongoose')
// mongoose imported. 
var connectionString = "mongodb://127.0.0.1/UserStore"
// conncection to database string set to variable 

const handlers = require('./handlers/handlers'); 
// handlers imported. 

const path = require('path')
const fs = require('fs'); 

const userModel = require('./models/userSchema'); 
// userSchema imported. 




mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
  if(err) throw err
  console.log("Successful connection to MongoDb Database!")
})
// connect method created, connection to mongo db established. 


app.set(path.join(__dirname, "views"))
app.set('view-engine', "pug");
// view engine set to view pug files. 

app.use(express.urlencoded({extended:true}))
// middleware added. 

app.get('/', handlers.home)
app.get('/form', handlers.form)
// two routes, created, for home render and form render. 







app.listen(PORT, () => {
  console.log(`Server started, running on port${PORT}, press ctrl+c to end `)
})