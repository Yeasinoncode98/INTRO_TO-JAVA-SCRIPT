
// let sum = 0;
// for (let i = 95; i >=20; i--){
//     console.log(i);
//     sum = sum + i;

    
// }

//     console.log('Sum of 95 - 20 numbers :',sum);

// let num = 9;

// for (let i = 1 ; i<=10; i++){
//     console.log(num + ' * ' + i + ' = ' + i * num);
// }


// let num = 0;
// let sum = 0;
// while (num <=10){
//     console.log(num);
//     sum = sum + num;
//     num++;
// }

// console.log("Sum of numbers",sum);
// let i = 5;
// do {
//     console.log('count',i);
// }

// while( i < 5);


// for (let i =0 ; i < 10; i++){
//     if (i === 5){
//         break;
//     }
//     console.log(i);
// }


// for (let i =1 ; i <= 10; i++){
//     if (i === 5 || i === 7){
//         continue;
//     }
//     console.log(i);
// }

// var message = 'hello';

// var firstCh = message[0].toUpperCase();
// var restCh = message.slice(1);
// console.log(firstCh);
// console.log(firstCh.concat(restCh)); //Inbuilt function for js (concat)

// console.log(firstCh + restCh); normal method by adding +


// var text = 'Javascript is awesome';

// console.log(text.includes("is"));

// var text = "javascript is awesome";
// var temp = ''

// for (var i = 0; i < text.length; i++ ){
//     // console.log(text[i]);
//     temp =  text[i] + temp;
// }

// console.log(temp);


var name = 'Yeasin';

var person = {
    Name: 'Yeasin',
   //Key  //Value = properties
   Age : 20,
   isStudent : true,

}

// console.log( person);

//Dot Notation (  .  )
// console.log(person.Name);




//Array Notation ( []   )
// console.log(person["Name"]);

// person.age = 25; //dot notation
// console.log(person);

// person['age'] = 28;
// console.log(person);

// delete person.age;
// console.log(person);

// for(var key in person){
//     console.log(key);
//     console.log(key + ':', person[key]);
// }

// var totalRows = 20;
// for (let i = 1; i <=50; i++){
//     if(i %3 === 0 || i %5 === 0){
//         console.log('Row' + i + ' - ' + 'Premimum Row ):');


//     }

//     else{
//          console.log('Row' + i + ' - ' + 'Normal Row');

//     }


// }



// problem 2 : find tag;

// solutions :

// var details = "This fabric is made with sale "

// if (details.includes("cotton")){
//     console.log('Material: cotton');
// }

// else if (details.includes('sale')){
//     console.log('category: Sale item');
// }


// Problem No 3 
// solutions 3 :


var person01 = {
    firstName : 'ismail',
    lastName : 'josim',
    employeeId : 101,
    departmentCode : 'HR',
    companyName: 'ExampleCo'

}

var lastThreeCh = person01.lastName.slice(0,3).toLowerCase();
var result = lastThreeCh + person01.employeeId+ "@"+person01.companyName.toLowerCase() + '.com';
console.log(result);


