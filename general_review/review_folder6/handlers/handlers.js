const human = require('../classes/person'); 
const vehicle = require('../classes/car'); 
// person and vehicle can create objects now. 

const firstPerson = new human("Jonathan", "21")



exports.viewPerson =(req, res)=> {
  res.send(firstPerson.describeSelf())
}