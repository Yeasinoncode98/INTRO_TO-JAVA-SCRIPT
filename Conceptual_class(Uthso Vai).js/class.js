class student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }
  getInfo() {
    console.log(`Name: ${this.name},Roll:${this.roll},Marks: ${this.marks}`);
  }
}

// const s1 = new student("Yeasin", 21, 80);
// const s2 = new student("Arafat", 22, 40);
// const s3 = new student("Mahatir", 22, 90);

// console.log(s1);
// console.log(s2);
// console.log(s3);

// s1.getInfo();
// s2.getInfo();
// s3.getInfo();

// Four pillar of OOP:
// Abstraction,Encapsulation,Inheritance,Polymorphism

// Inheritance
class BestStudent extends student {
  constructor(name, roll, marks, acheievement) {
    super(name, roll, marks);
    this.achievement = achievement;
  }
  showAchievement() {
    console.log(`${this.name}'achievement is ${this.acheievement}`);
  }
}

const BestStd = new BestStudent("Yeasin", 21, 90, "BlackBElt");

BestStd.getInfo();
