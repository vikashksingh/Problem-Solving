class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(fullName) {
    if (fullName.includes(" ")) this._fullName = fullName;
    else alert(`${fullName} is not a full Name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log("Hey There!!");
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // this line comes before any other line of assignment
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
}

const vikash = new Student("Vikash Singh", 1990, "Computer Science");

console.log(vikash);
vikash.introduce();
vikash.calcAge();
