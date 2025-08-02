var person01 = {
    firstName : 'ismail',
    lastName : 'josim',
    employeeId : 101,
    departmentCode : 'HR',
    companyName: 'alphacorp'

}



var lastThreeCh = person01.lastName.slice(0,3).toLowerCase();
var result = lastThreeCh + person01.employeeId+ "@"+person01.companyName.toLowerCase() + '.com';
console.log("ID :",result);

// var person01 = {
//     firstName : 'ismail',
//     lastName : 'josim',
//     employeeId : 101,
//     departmentCode : 'HR',
//     companyName: 'alphacorp'

// }

// if(person01.lastName.length < 3){
// let firstCh = person01.firstName.slice(0,6).toLowerCase();
// let password = person01.firstName.slice(3,6).toLowerCase(); + "#" + person01.departmentCode;
// console.log(password);
// }

let userName = "";

if(person01.lastName < 3) {
    userName = person01.lastName.toLowerCase();
}

else{
    userName = person01.lastName.slice(0,3).toLowerCase();
}

console.log("UserName : ",userName);


let password = "";

if(person01.lastName.length >=3){
    password = person01.firstName.slice(-3).toLowerCase() + "#" +person01.departmentCode;
}

else {
    password = person01.firstName.toLowerCase() + "#" + person01.departmentCode;
}

console.log("Password :",password);


