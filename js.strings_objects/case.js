const school = "RAJ UK uttara Model School";//mixed case

console.log(school);
console.log(school.toLowerCase());//lowercase
console.log(school.toUpperCase());//uppercase

//use toLowerCase to make sentence turn into small 
//use toUpperCase to make sentence turn into Capital 

//uppercase = ABCD EFG
//Lowercase = abcd efg



const subject = "Chemistry";
const book ='chemistry';


//Best system for comparision for strings
if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("I am reading book eibar fatai felbo");

}

else {
    console.log('hudai hudai page ultai');
}

const drink = " water";
const liquid = ' water '


if (drink.trim() === liquid.trim()){
    console.log("Panir Opor Name Jibon");
}

else {
    console.log("Pani khawa lagbena");
}

//note 
// jodi string er age pore faka whitespace pore jai unwantedly 
//tkhn seta thik korar jnno dui pashe trim() dile white space ta thik kore dibe taile r white space kaj korbena 
//kintu emn gap like - "wat er" word er majkhane emn pic thakle seta thik korte parbena
