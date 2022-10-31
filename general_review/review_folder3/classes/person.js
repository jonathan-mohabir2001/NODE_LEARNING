class Person{
  constructor(name, age) {
    this.name = name; 
    this.age = age; 
  }

  description(){
    return(`Name is ${this.name} and age is ${this.age}`)
  }
}

module.exports = Person; 
