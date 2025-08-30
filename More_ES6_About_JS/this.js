class Vehicles {
  #tin;
  constructor(type, brand, price) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.#tin = "1234";
  }

  getThis() {
    console.log(this);
  }

  getPrice() {
    return this.price;
  }

  //   #tin means encapsulation cant be accesed from outside
  // not can be used as global variable
  getTin() {
    return this.#tin;
  }
}

const car1 = new Vehicles("car", "Honda", 50000);
const car2 = new Vehicles("car", "Toyota", 40000);
// car1.getThis();

console.log(car1.price);

// console.log(car2.getPrice());
// console.log(car1.getPrice());

const student = {
  name: "Rahul Dravid",
  score: 10000,

  getSCore: function () {
    console.log(this);
  },

  getScoreArrow: () => {
    console.log(this);
  },
};

// student.getSCore();
// student.getScoreArrow();
// console.log("Ultimate this", this);
