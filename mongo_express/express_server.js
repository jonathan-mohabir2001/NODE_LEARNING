const express = require('express'); 
const app = express()
const PORT = process.env.PORT || 8000;

const mongoose = require('mongoose');


// method to connect to db created below



mongoose.connect(
  process.env.MONGODB_URI, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})