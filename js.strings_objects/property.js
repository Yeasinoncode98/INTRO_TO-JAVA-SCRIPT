const person = {
    name : "sodor uddin",
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places': ['bandorbon', 'saintmartin','kuakata'],
}

// console.log(person);


//dot notation easy type most common
//dot symbol die object er property er value access kora 

// console.log(person.profession);
const income = person.salary;

// console.log(income);




//bracket notation 
//third bracket

console.log(person['age']);

///
const boyosh = person['age']
console.log(boyosh);



///
console.log(person['fav places']);

const KeyName = 'profession';
console.log(person[KeyName]);