var http = require('http');
// variable http assigned require method with http passed into parameter

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello world , this is a text message!');
 
  
  })
  .listen(8080);
/*
HTTP accessed and using create server a function is created 
to output messages to client.
*/
