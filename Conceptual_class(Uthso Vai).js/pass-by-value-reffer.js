const obj = {
  name: "yeasin",
  age: 25,
};

// pass by value
const name = "Arafat";
const myFunc = () => {
  value = "Yeasin";
  console.log("Inside func: ", value);
};

myFunc(name);
console.log("After func call: ", name);
