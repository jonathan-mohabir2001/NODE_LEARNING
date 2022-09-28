/*
Jonathan's practise of the path module for node. 
*/


const path = require('path');
// the path module must be imported from node.

console.log(path.basename(__dirname));
// this console output prints the directory I am currently in and it's path

console.log(path.basename(__filename));
// this console output prints the filename and path that this file is currently in

console.log(path.parse(__dirname));
// this console output will print the directory name but in a object-notation format

console.log(path.parse(__filename));
// this console output will print the filename within object notation as well.

console.log(path.join(__dirname, '/parentFolder ', '/childFolder')); 
/*
 the join is passed three parameters. First the name of the directory I am currently in using __dirname,
 and then two other folders with the / before their names. 
 This statement defines where folders can go to within this directory.  
*/
// basic review of path module complete. 
