/*
This js file contains...

Understanding node. 
Nodemon added to package.json to provide automatic refreshing of the server when new code is added 
Always refer to package.json for configuration information. 
*/
const http = require('http'); 
// http module imported. 
const PORT = process.env.PORT || 3000; 
// port listener set to 3000 within local host. 

const server = http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('hello there, this is server code. and we are writing in node!')
})

server.listen(PORT, () => {
  console.log( `The server has started on ${PORT}, press ctrl+c to end ` )
})
