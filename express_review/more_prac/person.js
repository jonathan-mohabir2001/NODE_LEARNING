class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // two constructors
  }
  describeSelf() {
    console.log(`My name is ${this.name} and age is ${this.age}`);
  }
}

module.exports = Person;
// class exported and will be imported into routes file.
