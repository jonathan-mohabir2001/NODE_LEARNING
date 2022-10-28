class Course {
  constructor(name, length) {
    this.name = name; 
    this.length = length
  }
  // properties set. 
  describe(){
    return(`Course name is ${this.name} and the length of it is ${this.length}`)
  }
  //describe method created. 
}
module.exports= Course
// Course module exported. 