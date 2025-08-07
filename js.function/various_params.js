/**
 * for a given string tell me whether it has even number of characters or not
 * 
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str,size);

    if(size %2 === 0){
        console.log("Even Size");
        return true;
    }

    else{
        console.log("Odd Size");
        return false;
    }




}

// evenSizedString("Dhaka");
// evenSizedString("London");

function doubleOrTriple(number,doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }

    else {
        const result = number * 3;
        return result
    }



}

// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(3,false));


function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

// const kop = numberOfElements([12,45,34,56,3434,567,3,4]);
// console.log(kop);

//

function getAge(person){
    const age = person.age;
    return age;
}

const reuslt = {
    name:"Dj",
    age : 12,
}

console.log(getAge(reuslt));