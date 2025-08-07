//is even or not

function isEven(number){
    if(number %2 === 0){
        return true;
    }

    else{
        return false;
    }
}

// const good =isEven(11);
// console.log(good);

console.log(isEven(10));//shorthand
console.log(isEven(9)); //shorthand

//odd number chck

function isOdd(number){
    if(number %2 === 1){
        return true;
    }

    else{
        return false;
    }
}

console.log(isOdd(8)); //shorthand
console.log(isOdd(15));//shorthand
