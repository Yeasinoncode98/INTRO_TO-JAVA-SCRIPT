let totalRows = 50;

//Seat Price part

let premiumSeat = 800;
let normalSeat  = 500;

//Total income  and count
let income = 0;
let premiumCount = 0;
let normalCount = 0;

//loop Part


for (let i = 1 ; i <=totalRows ; i++) {
    if(i % 3 === 0 || i % 5 === 0){
        console.log("Row" + i + " - Premium Row");
        income = premiumSeat + income;
        premiumCount++;
    }

    else {
        console.log("Row" + i + " - Normal Row");
        income = normalSeat + income;
        normalCount++;
    }
}

console.log("Total Premium Seat: ",premiumCount);
console.log("Total normal Seat: ",normalCount);

console.log("Total Income : ",income);
