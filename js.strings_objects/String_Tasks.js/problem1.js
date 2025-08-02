var totalRows = 20;
for (let i = 5; i <=totalRows; i++){
    if(i %3 === 0 || i %5 === 0){
        console.log('Row' + i + ' - ' + 'Premimum Row ):');


    }

    else{
         console.log('Row' + i + ' - ' + 'Normal Row');

    }
}


let premiumSeat =800;
let normalSeat = 500;
let premiumCount = 0;
let normalCount  =0;
let income = 0;

for ( let i = 5 ; i <=totalRows ; i++){
    if (i %3 === 0 || i %5 === 0){
 income = premiumSeat + income;
 premiumCount++;

    }
    else {
        income = normalSeat + income;
        normalCount++;
    }
}

console.log("Premium Seat In The row: ",premiumCount);
console.log("Normal Seat In The row: ",normalCount);

console.log("Total Income: ",income);




