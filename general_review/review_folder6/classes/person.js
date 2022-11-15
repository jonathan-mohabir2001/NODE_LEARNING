class Person{
  constructor(name, age){
    this.name = name; 
    this.age = age; 
  }
  describeSelf(){
    return (`<h1>Hi there name is ${this.name} and age is ${this.age}</h1>`)
  }
}
module.exports = Person; 
// personm class exported. 