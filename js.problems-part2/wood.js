/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50cft
 * 
 */

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood;
    const TableTotalWood = tableQuantity * perTableWood;
    const BedTotalWood   = bedQuantity   * perBedWood;

    const totalWood = ChairTotalWood + TableTotalWood + BedTotalWood;

    return totalWood;


}

const totalWoodNeeded = woodQuantity(1,1,4);
console.log(totalWoodNeeded);