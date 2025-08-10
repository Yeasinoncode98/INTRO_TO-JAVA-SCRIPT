function calculateElectronicsBudget(quantityLap,quantitytab,quantitymo){
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptopTotalPrice = laptop * quantityLap;
    const tabletTotalPrice = tablet * quantitytab;
    const mobileTotalPrice = mobile * quantitymo;

    const total = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;

    return total;
 

}


const total = calculateElectronicsBudget(2,2,2);
console.log(total);