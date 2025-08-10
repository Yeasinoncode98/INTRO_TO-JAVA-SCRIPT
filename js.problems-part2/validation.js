function multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "please provide a number";
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5 , 'seven');
// console.log(result);


function fullName(first,second){
    if(typeof first !== 'string'){
        return "First Name should be a string";
    }

    else if (typeof second !== 'string'){
        return "Second Name Should be a string";
    }

    const full = first + ' ' + second;
    return full;
}

const full = fullName('Rahan', 'safan');
// console.log(full);


// for object

function getPrice(product){
    if(typeof product !== 'object'){
        return "please provide an object";
    }

    const price = product.price;
    return price;
}

const price = getPrice({name: 'chulkanir dandi', price : 35, color: 'green'});

// const price = getPrice(5);

// console.log(price);


//For Array 

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return "Please  Provide an Array";
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([7,12,15]);
console.log(second);
