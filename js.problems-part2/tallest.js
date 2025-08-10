//Max height
const heights = [65,66,68,72,78,60,65,66,88];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
      if(num > max){
        max = num;
   }
    }
    return max;
}

const max = getMax(heights);
console.log("Tallest person from the list: ",max);


//Min height

const heightlist = [90,23,12,78,50,100];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }

    return min;
}

const min = getMin(heightlist);
console.log("Min Height of people from the list: ",min);



