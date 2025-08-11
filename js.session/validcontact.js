// function validContact(contact){
//     if (contact .length != 11){
//         return false;
//     }

//     if(contact.startsWith("01")){
//         return true;
//     }

//     if(contact.includes(" ") == true){
//         return true;
//     }

// }

// console.log(validContact("01819234567"));


function validContact(contact){

    if(typeof contact != "string"){
        return "Invalid"
    }

    if(contact.length == 11 && contact.startsWith("01") ==  true && contact.includes(" ") != true ){
        return true;
    }

    else {
        return false;
    }
}

console.log(validContact(["01869583817"]));