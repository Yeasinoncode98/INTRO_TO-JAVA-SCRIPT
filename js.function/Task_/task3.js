function make_avg(numbers){
    let sum =0;
    for(const num of numbers){
        sum = sum + num;
    }
    const avg = sum / numbers.length;
    return avg;
}

const result = make_avg([1,22,23,23,24]);
console.log(result);

