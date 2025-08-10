//find a year is leap year or not

function isLeapYear(year){
    if(year % 100 != 0 && year % 4 === 0){
        return true;
    }

    else if (year % 400 === 0){
        return true;
    }

    else {
        return false;
    }

    
}


// const isLeap = isLeapYear(2024);
console.log(isLeapYear(2028));

const isLeap2 = isLeapYear(2025);
console.log(isLeap2);


