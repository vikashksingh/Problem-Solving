// // using function constructor
// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
//   // this is bound to the lexical scope
//   // this.accelerate = () => {
//   //   this.speed += 10;
//   //   console.log(this.speed);
//   // };
//   // this.accelerate = () => {
//   //   this.speed += 10;
//   //   console.log(this.speed);
//   // };
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);
// car1.accelerate();
// car2.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();
// car2.brake();
// using class
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelarate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return (this.speed /= 1.6);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);
// car1.accelarate();
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1);
// car1.speedUS(10);
