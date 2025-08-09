function tempConverter(temperature){
    const F = temperature * 1.8 + 32;
    return F; 
}

const tempInF = tempConverter(35);
console.log(tempInF);