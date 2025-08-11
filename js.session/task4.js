function evenFinderSum(numbers){
    let count = 0;
    let sum = 0;

    for(const num of numbers){
        if(num %2 === 0){
            sum = sum+num;
            count++;
        }
    }
    console.log(count);

    return sum;
}


const result = evenFinderSum([11,12,12,12,12]);
console.log(result);
// conso
