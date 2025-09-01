// function counter() {
//   let count = 0;
//   function innerFunction() {}
//   console.log("Inside the inner func someone called me");
//   return innerFunction;
// }

// const output = counter();
// console.log(output());

function counter() {
  let count = 10;
  return function (user) {
    count = count + 1;
    console.log("Inside the inner func", user, count);
  };
}

// const innerFunc = counter();
// innerFunc();
// innerFunc();
// innerFunc();

const rahimCounter = counter();
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
console.log("..........................................");

const karimCounter = counter();
karimCounter("karim");
karimCounter("karim");
karimCounter("karim");
karimCounter("karim");
rahimCounter("rahim");

console.log(".........................................");

const jabbarCounter = counter();
jabbarCounter("jabbar");
jabbarCounter("jabbar");
karimCounter("karim");
rahimCounter("rahim");
