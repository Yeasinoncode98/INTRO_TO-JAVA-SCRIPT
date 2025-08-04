function math () {
    let a = 10;
    let b = 20;
    let sum ;

    sum = a + b;

    console.log(sum);

}

math();

//.......................................

console.log("Today we will learn Function");



function hello (){
    console.log("I am a Function");
}

hello(); // we are calling fucntion

function moneyBag (){
    var money = 4500;
    console.log(" I have " + money + " Taka");
}

moneyBag();


//..............................................

function jogKorarMachine(input1, input2){

    let sum = input1 + input2;
    console.log("Sum is = " + sum);
return sum;
}

const result = jogKorarMachine(100,40);

console.log(result);



//........................

//biygKorarMachine

function biygKorarMachine(a,b){
    let minus = a - b;
    console.log("The value is : ",minus);
    return minus;
}


let minusResult =biygKorarMachine(15,5);
console.log(minusResult);


//Gun korar machine 

function gunkorarMachine(c,d){
let gun = c * d;
console.log("The multiplication of c and d is : ",gun);
return gun;
}

let multi = gunkorarMachine(5,10);
console.log(multi);


// Vahg Korar machine 

function vhagkorarMachine(e,f){
let vhag = e / f;
console.log("The division of e and f is : ",vhag);
return vhag;
}

let div = vhagkorarMachine(50,10);
console.log(div);
