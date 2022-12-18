/*
Backend for the fetching NASA API Picture
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;







app.get('/', (req, res) => {
    res.send('Hello World!');
}) 


app.get("/api", (req, res) => {
  res.json({"users": ["user1", "user2", "user3", "user4"]})
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})