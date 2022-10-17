// review for midterm - week 02. 
const http = require('http'); 
// http module imported. 
const PORT = process.env.PORT || 3000; 
// port set to 3000. 
http.createServer((req,res)=> {
  res.write('Hello there world')
}).listen(PORT, () => console.log( `Server has started on ${PORT}`))

