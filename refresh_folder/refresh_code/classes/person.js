// class person will be created to be returned within express server. 

class Person  {
constructor(name, age){
  this.name = name; 
  this.age = age; 
}

description(){
  return(`Name is ${this.name} and age is ${this.age} `)
}
}
// class created. 

module.exports = Person; 
// Person class exported as module. 