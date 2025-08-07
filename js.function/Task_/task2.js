function countingDigits(numbers){
    if(numbers %2 === 1){
        const result = numbers * 2;
        return result;
    }

    else{
        const result = numbers / 2;
        return result;
    }

}

const num1 = countingDigits(15);
const num2 = countingDigits(30);
console.log(num1);
console.log(num2);

