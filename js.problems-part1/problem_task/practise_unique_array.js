const biriyaniKhor = ['abul', 'babul', 'cabul','abul','babul','dabul','kabul','cabul'];
const numbers = [1,12,1,56,87,56,10,89,10]

function  noDuplicate(array){
    let unique=[];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const result = noDuplicate(numbers);
console.log(result);