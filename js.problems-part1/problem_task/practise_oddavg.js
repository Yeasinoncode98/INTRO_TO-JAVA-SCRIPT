function oddAvg(numbers){
    let sum = 0;
    let count =0;
    for(const odd of numbers){
        if(odd %2 === 1){
            sum = sum + odd;
            count++;
        }
    }
    const avg = sum / count

    return avg;
}


const reuslt = oddAvg([42,13,58,65,81,96,7,5]);
console.log(reuslt);