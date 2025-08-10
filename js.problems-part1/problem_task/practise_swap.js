let a = 10;
let b = 12;
let temp;

temp = a;
a = b;
b = temp;

console.log(a,b);

//

let x = 22;
let y = 23;

[x,y] = [y,x];
console.log(x,y);