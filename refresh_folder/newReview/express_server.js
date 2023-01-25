const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; 



//set view engine to view pug files. 


app.set('view engine', 'pug')
app.set('views', './views')
//set up other neccessary middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())






app.get('/', (req,res) => {
  res.render('index.html')
})
app.get('/about', (req,res)=> {
  res.render('about.html')
})
app.get('/contact', (req,res)=> {
  res.render('contact.html')
})




app.listen(PORT, () =>{
  console.log(`Server started on port ${PORT}, press ctrl+c to end`)
})