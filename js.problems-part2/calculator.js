function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function division(num1,num2){
    return num1 / num2;
}

// function modulus(num1,num2){
//     return num1 % num2;
// }

function calculator(a,b,operation){

    if ( operation === 'add'){
        const result = add(a,b);
        return result;
    }

    else if ( operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }

    else if ( operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }

    else if ( operation === 'division'){
        const result = division(a,b);
        return result;
    }

    else{
        return "only 'add' 'subtract', 'multiply', 'divide' operation is allowed "
    }



}


const result = calculator(5,7,'add')

console.log(result);