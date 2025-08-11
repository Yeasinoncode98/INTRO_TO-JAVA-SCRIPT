function validProposal(person1,person2){

    if(typeof person1 !== 'object' || typeof person2 !== 'object'){
        return "Invalid";
    }

if(person1.gender == person2.gender){
    return false;

}

if(Math.abs(person1.age-person2.age)> 7){
return false;
}

return true;


}

console.log(
  validProposal(
    { name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
  )
);