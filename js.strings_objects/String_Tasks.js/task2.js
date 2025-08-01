let text = 'i am a good students get A+ and eat avacado';
let count = 0;

for (let i = 0; i<text.length; i++){
    if(text[i] === 'a' || text[i] === 'A'){
        count++;
    }
}

console.log("Number count for 'a' and 'A' :",count);
