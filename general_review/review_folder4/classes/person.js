class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    return(
      `<h1>Name is ${this.name} and age is ${this.age}</h1>`
    )
  }
}
module.exports = Person;
// class person exported as module. 