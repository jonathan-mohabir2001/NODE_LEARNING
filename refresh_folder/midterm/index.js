const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 





app.get('/' , (req,res) => {
res.send('Hello there programmer')
})


app.listen( PORT , () => {
  console.log(`Server has started on ${PORT}`)
})


