/*
This js file will be responsible for finding the date of today.
*/

const d = new Date(); 
// simple constant d to assign as date object 
exports.myDate= function() {
  return d.getDate(); 
}
// exporting my date in order to allow for this to be accessed outside the module. 


