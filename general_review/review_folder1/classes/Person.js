// Random JavaScript Class to declare person with properties and methods. 
class Person{
  constructor(name, age){
    this.name = name; 
    this.age = age
  }
  //fields set. 
  description(){
    return(`Hi there name is ${this.name} age is ${this.age}`)
  }
  // method set.
}

module.exports = Person; 
// Person class exported, able to use as module. 

