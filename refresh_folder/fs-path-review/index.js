// filesytem and path moudle review below. 

const fs = require('fs'); 
// filesystem imported. 
const path = require('path'); 
// path module imported 
console.log(path.basename(__dirname)); 
// directory name to be printed out below. 
console.log(path.basename(__filename)); 
// file name to be printed below.
// names will be printed again but within json format 
console.log(path.parse(__dirname)); 
console.log(path.parse(__filename)); 

// file system review below. 
fs.mkdir(path.join(__dirname, '/homedirectory'), {} , function(err){
  if(err) throw err
  console.log('A new file has been created. ') 
})


