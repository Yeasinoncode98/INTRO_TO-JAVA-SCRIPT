/**
 * 1.const --> value not going to be changed
 * 2.let --> value might change
 * 3.var --> sould not used (unless exceptional cases)
 */

const price = 500; //number
console.log(price);

const name = "kirkir ali khan"; //string
const isPoor = false; //boolean
// these are primitive

const friends = ["Elon","Mark","Bill","Jeff"];
const student = {
    Name: "Arafat",
    Age : 17,
    Adress : "Rajghat",
};

//these are non prmitive 
// here Name,Age,Address are keys or property

// console.log(friends[0]); 

//condition

if (price > 1000){
    console.log("Too expensive its not for me ");
}

else if (price > 500){
    console.log("Under little budget");
}

else {
    console.log("Price is good  its for me ");
}

//loop

let pushUp = 0;

while (pushUp < 10){
    console.log("pushUp",pushUp);
    pushUp++;
    // pushUp = pushUp + 1;
    // pushUp += 1;
}

for (let i = 0; i < 10 ; i++){
    console.log(i);
}