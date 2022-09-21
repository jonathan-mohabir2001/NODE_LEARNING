/*
This javascript file will contain a javascript 
object which will describe myself. It will be exported 
to the node file in order to output to port 8080.
*/

var jonathanObject = {
  myName: 'Jonathan Mohabir',
  myAge: 20, 
  myBirthYear: 2001, 
  myJob: 'MERN Stack developer'
}

var jonathanName; 
var jonathanAge; 
var jonathanBirthYear; 
var jonathanJob; 


exports.myPerson = function(){
  return (
    jonathanName,
    jonathanAge, 
    jonathanBirthYear, 
    jonathanJob
  );
}

