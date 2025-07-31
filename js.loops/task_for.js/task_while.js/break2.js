let i = 1;
let sum =0;

while(true){
    sum = sum +i;
    console.log("added",i, "sum is ",sum);
    
    if ( sum >=100){
        break;
    }

    i++;
    
}

console.log("Final sum reached: " ,sum);
console.log("Last number added: " , i);