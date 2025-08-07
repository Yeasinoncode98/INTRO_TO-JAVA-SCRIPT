function count_ones(binaryStr){
    let count = 0;
    for(const char of binaryStr){
        if(char === '1'){
            count++;
        }
    }
    return count;
}

const result = count_ones('10101010111');
console.log(result);