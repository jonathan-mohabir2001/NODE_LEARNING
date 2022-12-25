const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; 


app.get('/', (req, res) => {
  res.send("Hello there world.")
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})