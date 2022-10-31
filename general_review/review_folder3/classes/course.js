class Course{
  constructor(id, name, courses) {
    this.id = id;
    this.name = name; 
    this.courses = courses; 
    
  }
  information() {
    return(`Course id: ${this.id}course name is ${name}} courses are ${this.courses}`)
  }
}

module.exports = Course; 
