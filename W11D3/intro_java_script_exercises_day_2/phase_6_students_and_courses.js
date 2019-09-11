function Student(firstname, lastname, courses = []) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.courses = courses;
}

Student.prototype.name = function() {
  return `${this.firstname} ${this.lastname}`;
}

Student.prototype.enroll = function(course) {
  this.hasConflict(course);
  this.courses.push(course);
  course.students.push(this);
}

Student.prototype.hasConflict = function(course) {
  for (let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) {
      throw "Classes have conflicting timeslots!";
    }
  }
}

Student.prototype.courseLoad = function() {
  let load = {};
  this.courses.forEach(function(course) {
    if (load[course.department] === undefined) {
      load[course.department] = 0;
    }
    load[course.department] += course.credits;
  });
  return load;
}

bob = new Student("Bob", "Jabroni");
emily = new Student("Emily", "McStudent");
mary = new Student("Mary", "McMary");

function Course(name, department, credits, weekDays, timeBlock, students = []) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = students;
  this.timeBlock = timeBlock;
  this.weekDays = weekDays;
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

Course.prototype.conflictsWith = function(course) {
  if (this.timeBlock === course.timeBlock) {
    for (let i = 0; i < this.weekDays.length; i++) {
      if (course.weekDays.includes(this.weekDays[i])) return true;
    }
  }
  return false;
}

let student1 = new Student("Nigel", "Leffler");
let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
let course2 = new Course("201", "CS", 3, ["wed"], 1);
let course3 = new Course("301", "ENG", 3, ["tue"], 1);
let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
// student1.enroll(course2);
student1.enroll(course4);
console.log(student1.courseLoad());
console.log('should be true = ' + course1.conflictsWith(course2));
console.log('should be false = ' + course1.conflictsWith(course3));
console.log('should be false = ' + course1.conflictsWith(course4));