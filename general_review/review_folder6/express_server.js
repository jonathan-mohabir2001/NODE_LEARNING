const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 







app.listen(PORT, () => {
  console.log( `Server has started, running on port ${PORT} press ctrl+c to end`)
})