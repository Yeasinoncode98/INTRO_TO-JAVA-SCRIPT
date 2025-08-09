//12 inch = 1 feet // Unit conversion

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);



//for 6 feet 3 inch 

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. '
    return result;
}

const shuvoHeight2 = inchToFeet2(75)
console.log(shuvoHeight2);


//

function mileTokm (mile){
    const kilo = mile * 1.60934;
    return kilo;


}


//fucntion

function kmToMile (kilo){
    const mile = parseInt(kilo * 0.621371);
    return mile;
}

const total = kmToMile(75);
console.log(total);