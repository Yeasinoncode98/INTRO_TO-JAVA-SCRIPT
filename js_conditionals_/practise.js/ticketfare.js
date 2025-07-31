var age = 70;
var ticketFare = 700;
var finalFare ;
var isStudent = false;

if (age < 10) {
finalFare = 0;
}

else if (isStudent === true ){
    finalFare = ticketFare * 0.5;
    
}

else if (age >= 60) {
    finalFare = ticketFare - (ticketFare * 15/100);
}

else {
    finalFare = ticketFare;
}

console.log(finalFare);