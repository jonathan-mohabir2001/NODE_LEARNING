/*
This node module will contain practise with basic 
importing of other Javascript files. 

It will import one creating the date, and 
one describing a javascript object. 
*/

var http = require('http');
// http imported to allow for http methods, properties
var dm = require('./findDate');
// variable dm assigned findDate js file

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date is currently:' + dm.myDate());
    res.end();
  })
  .listen(8080);
