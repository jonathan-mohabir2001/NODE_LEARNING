const human = require('../classes/person'); 
const vehicle = require('../classes/car'); 
// person and vehicle can create objects now. 

const newObject = require('../es6-objects/developer')
const firstPerson = new human("Jonathan", "21")
const firstCar = new vehicle(2022, "Wrx-Sti", "Subi")

exports.viewPerson =(req, res)=> {
  res.send(firstPerson.describeSelf())
}
exports.viewCar = (req, res)=> {
  res.send(firstCar.vroom())
}
exports.viewDeveloper = (req, res)=> {
  res.send(newObject)
}
exports.renderHome = (req, res) => {
  res.render('home')
}
exports.renderForm = (req, res) => {
  res.render('form')
}


// able to view these objects now