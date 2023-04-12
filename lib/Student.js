const Course = require('./Course');

class Student extends Course {
  constructor(name, start_date, course_type) {
    super(start_date, course_type);

    this.name = name;
  }
}

module.exports = Student;