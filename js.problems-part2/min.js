const prices = [20000,16000,50000,100000,122000,30000,35000];

function getMin (numbers){

    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }

    return min;
}

const lowestPrice = getMin(prices);
console.log("Cheapest Phone price from the market is: ",lowestPrice);