const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const vikash = new Student("vikash", 1990, "computer Science");
console.log(vikash);
vikash.introduce();
vikash.calcAge();
Student.prototype.constructor = Student;
console.log(vikash instanceof Student);
console.log(vikash instanceof Person);
console.log(vikash instanceof Object);
