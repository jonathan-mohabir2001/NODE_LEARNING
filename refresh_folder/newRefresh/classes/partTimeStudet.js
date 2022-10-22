const student = require("./student");
// create subclass named partTimeStudent of student class
class partTimeStudent extends student {
  constructor(name, age, id, grade, hours) {
    super(name, age, id, grade);
    this.hours = hours;
  }
  // override the method of student class
  getGrade() {
    if (this.hours < 10) {
      return "F";
    } else {
      return this.grade;
    }
  }
}