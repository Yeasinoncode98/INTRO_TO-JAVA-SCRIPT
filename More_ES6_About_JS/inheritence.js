class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// For Dogesh Vai
class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

// For Cat

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} is Meowing`);
  }
}

// For Bird

class Bird extends Animal {
  constructor(name, species, age) {
    super(name, age);
    this.species = species;
  }

  chirping() {
    console.log(`${this.name} is chirping`);
  }
}

// For Dogesh Vai Side

const dog1 = new Dog("Coffee", "Siberian", 12);
dog1.eat();
// console.log(dog1);

// For Cat Side

const cat1 = new Cat("Tom", "White", 8);
cat1.eat();

// For Bird Side

const bird1 = new Bird("Luci", "African", 8);
bird1.eat();
