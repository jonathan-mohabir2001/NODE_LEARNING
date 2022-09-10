/*
This Javascript file will again cover the basics 
of creating a server using node through the use 
of the Javascript knowledge. 

To this date Javascript fundamentals have helped 
me understand write code for now working with node. 

*/

const http = require('http'); 
const hostname = '127.0.0.1'; 
const port = 3000; 

// above we have constants for the http, hostname, and port listner 


const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain'); 
    res.end('Hello there, jonathan wrote this'); 
});


server.listen(port,hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})

/*
The line above is where Node creates it's magic 
first, the server is created... then goes onto  
assigning a variable named server with the http object 
with accessing it's method createServer. 

Two parameters request and response are then written into the 
brackets. Request has a status code of 200 assigned, the 
setHeader method has it's font style attached. 

And then the response at the end, is passed a custom message 
to display into the browser for user to see. 

The last line of this node example goes onto accessing the server 
and then using dotnotation to listen to the port. 

The console then has the results of the completed node file! 

*/
