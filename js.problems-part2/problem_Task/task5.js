const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function salaryGiver(amount){
    let sum = 0;
    for(const salary of amount){
        const currentSalary = salary.starting + (salary.experience * salary.increment) ;
        
        sum = sum + currentSalary;
    }
    
    return sum;
}

const total = salaryGiver(employees);
console.log(total);