function counter(numbers,find){
    let count = 0;
    for(const num of numbers){
        if(num === find){
            count++;
            // console.log(num);
        }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5];

// const result = counter(numbers);
// console.log(result);

console.log(counter(numbers,5));
console.log(counter(numbers,25));

