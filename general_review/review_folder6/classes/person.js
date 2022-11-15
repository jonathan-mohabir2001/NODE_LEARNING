class Person{
  constructor(name, age){
    this.name = name; 
    this.age = age; 
  }
  describeSelf(){
    return (`Hi there name is ${this.name} and age is ${this.age}`)
  }
}