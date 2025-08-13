//Task 1 (Train TT)

function totalFine(fare) {
    let total ;

    if(fare <= 0 || typeof fare !== 'number'){
        return "Invalid";
    }

    total =  fare +  fare * (20 / 100) + 30;

    return total;

}

// const total = totalFine(552);
// console.log(total);
