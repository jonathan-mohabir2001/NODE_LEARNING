const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const router = express.Router();
// router will be utilized in this project. 

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
// port set to listen onto port 8000

app.get('/', (req, res) => {
  res.send('<h1> Home page rendered </h1>');
});
