function count_Zero(binaryStr){
    let count = 0;
    for(const char of binaryStr){
        if(char === '0'){
            count++;
        
        }
        
    }
    return count
}

const total = count_Zero('0001010000');
console.log(total);