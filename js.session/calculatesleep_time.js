function calculateSleepTime(times){

    let sum = 0;
    for(let time of times){
if(typeof time !== 'number'){
    return "Invalid";
}

        sum = sum + time;
    }

    let sleepTime = sum;
    let hour = Math.floor(sleepTime / 3600); // 1hour
    let remaining = sleepTime % 3600; //100second
    let minute = Math.floor(remaining / 60);

    remaining = remaining % 60;


    let result = {
        hour: hour,
        minute: minute,
        second: remaining,
    }
return result;

}


console.log(calculateSleepTime(['100','110',10]));



// let sleepTime = 3700;
// let hour = Math.floor(sleepTime / 3600); // 1hour
// let remaining = sleepTime % 3600; //100second
// let minute = Math.floor(remaining / 60);

// remaining = remaining % 60;

// console.log(hour,minute,remaining);

// console.log(Math.floor(5/2), 5 % 2); vahgfol and vahgsesh


