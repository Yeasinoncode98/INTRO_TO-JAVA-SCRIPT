const heights2 = [167, 190, 120, 165, 137];

function minHeights(numbers){
    let min =numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }

    return min;
}

const result = minHeights(heights2);
console.log(result);