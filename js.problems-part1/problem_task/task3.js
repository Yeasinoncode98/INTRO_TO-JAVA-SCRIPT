//normal way 
function  counterVowels(words){
      words = words.toLowerCase();
    let count = 0;
    for(const char of words){
    if(char === 'a' || char=== 'e' || char=== 'i' || char === 'o' || char === 'u'){
           count++;
    }
    
}

return count;

}

const sentence = counterVowels("kop KOP");
console.log(sentence);

//...............includes method 

function counter (words){
       words = words.toLowerCase();
       let count = 0;
       const vowels = ['a', 'e', 'i','o','u'];
       for(const char of words){
              if(vowels.includes(char)){
                     count++;
              }
       }

       return count;
}


const line = counter("I am a big Duck");
console.log(line);

