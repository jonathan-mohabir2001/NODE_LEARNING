// practise js file to be exported

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describeSelf() {
    console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
  }

  /*
  This class represents a person with two properties, and one method. 
  
  This class will be exported and then imported into the index.js 
  file where the node file gets executed. 
  */
}

module.exports = Person;
// this statement exports the class Person.
// doing this allows for the node file to recognize this as a module.
