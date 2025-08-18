
function totalFine(fare) {
    let total ;

    if(fare <= 0 || typeof fare !== 'number'){
        return "Invalid";
    }

    total =  fare +  fare * (20 / 100) + 30;

    return total;

}

