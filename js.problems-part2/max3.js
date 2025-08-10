const jim = 256;
const tim = 389;
const kim = 168;

if(jim > tim && jim > kim){
    console.log("jim is the ultimate boss");
}

else if (tim > jim && tim > kim){
    console.log("tim is the ultimate boss");
}

else {
    console.log("kim is the boss");
}

//using function
function maxNumbers(num1,num2,num3){
    if(num1 > num2 && num1 > num2){
        return num1;
    }

    else if (num2 > num1 && num2 > num3){
        return num2;
    }

    else {
        return num3;
    }
}

const result = maxNumbers(56,89,98);
console.log("Big Number is : ",result);


//
const max = Math.max(1,2,89,100,866,98,91276,2374);
console.log("Max using Math.max",max);