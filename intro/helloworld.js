/*
Welcome to Jonathan's first lines of node programming. 

This directory will be dedicated to Node development, this is 
a continuation of basic Javascript Learning. 
*/

const http = require('http'); 
const port = process.env.por6t || 3000

const server = http.createServer((req,res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('This is my first example of node programming ')
})

