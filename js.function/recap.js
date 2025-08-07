function add (price1, price2){
    const total = price1 + price2; //variable e rekhe direct return dow
    return total;
}

const bill = add(5,80);
console.log(bill);

//

function add2 (price1,price2){
    return price1+price2; //shorthand
}

const bill2 = add2(10,20);
console.log(bill2);


//do some math

function doMath (num1,num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    const result = multi / 2;
    return result;
}

const result = doMath(10,5);
console.log(result);


