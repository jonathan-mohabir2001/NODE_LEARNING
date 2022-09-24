/*
This is my first lines of JS writing for 
node practise. 
Node allows for programming on the server side with staying native 
to the Javascript programming language. 

Node works in a module manner, and those need to be imported into 
the node js file that you are working in. 

Below is code demonstrating my basic understanding of how to import, 
display and work with other modules in general. 
*/
// Before working with Node the directory must be initiated. To include a package.json

// package.json file added after running npm init in terminal.

const person = require('./person');
// this statement assigns person to the file 

const path = require('path'); 
// node also allows for functionality to print working directories, or files 


 const person1 = new person('Jonathan Mohabir', 20); 
 // creating new object of type person. 
 person1.describeSelf(); 
 // calling function to describe self. 

 // node index.js was ran in the terminal, the file was executed and printed out the object of person 
 
console.log (path.basename(__dirname)); 
console.log(path.basename(__filename)); 

/*
above are two lines using the basename method of Path. 

Basename allows for the displaying of directory names as well as files. 

In the console, the name of this directory will be printed. 
*/

// end of practise and basic intro to node. 


