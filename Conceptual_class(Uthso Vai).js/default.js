const myFunc = (name = "Arafat", age = 18) => {
  console.log(`My Name is ${name}.My age is ${age}`);
  return age + 5;
};

console.log(myFunc("rahim", 22));
