// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// for(let key in myObject){
//     console.log(`key: ${key} | type: ${typeof myObject[key]}`);
// }


let student= {
    name : 'Yeasin Arafat',
    age : 17,
    city : 'Rajghat',
    school : "Southern English School & College",
};

for(let properties in student){
    console.log(`key: ${properties} | value: ${ student[properties]}`);
}