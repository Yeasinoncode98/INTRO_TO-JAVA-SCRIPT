// Array
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [one, two, , , five, ...rest] = arr;

console.log(one, two, five, rest);

// Object

const person = {
  name: "Yeasin",
  age: 25,
  roll: 29,
  address: {
    city: "dhaka",
    country: "Bangladesh",
  },
};

const {
  name,
  age: myAge,
  address: { city, country },
} = person;
console.log(name, myAge, city, country);

//

// const name = person.name;
// const age = person.age;
// const city = person.city;
// const country = person.country;
