class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }

    print() {
        console.log(this.name, this.age);
    }
}


//export this class 
module.exports = Student;