let data;
data = 0;
data = ""; //Direct empty string without any space is falsy
data = " "; //With a White-space inside string is truthy
data = "0";
data = false;
data = true;
data = null;
data = {};
data = [];
data = false;
data = true;
data = [];
console.log("Value of Data", data);

if (data) {
  console.log("Value of data is truthy");
} else {
  console.log(data, " is falsy");
}

// If i need to capture a falsy value to go inside if block

// Use logical not (!)
if (!data) {
  console.log("Inside if with a falsy value");
}

// Double NOT
// Capture any value to boolean (true,false)
// Capture all the positive values

if (!!data === true) {
  console.log("Only true inside the double not");
}
