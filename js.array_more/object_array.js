const numbers = [1,2,3,4,5];

const players = [{},{},{}];

const employess = [
    {name : 'Ashik', designation : 'content Writer', salary : 25000},
    {name : 'Atik', designation : 'Developer', salary : 21000},
    {name : 'Abdul', designation : 'Digital Marketer', salary : 22000},
    {name : 'Rahim', designation : 'Backend Developer', salary : 29000},

]

employess[0].name = 'Ashraf';

// console.log(employess[0]);
// console.log(employess[3].designation);

// for (const employee of employess){
//     console.log(employee.salary,employee.designation);
// }

for (const emp of employess){
    const person = emp;
    const personInfo = person.name + " : " + person.salary;
    console.log(personInfo);

}