const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};
const jay = Object.create(StudentProto);
jay.init("Jay", 2005, "computer sci");
jay.calcAge();
