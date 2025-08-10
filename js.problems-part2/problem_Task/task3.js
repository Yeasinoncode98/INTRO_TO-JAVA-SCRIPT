// function longest(str){
//     str = str.split(" ");
//     let largest = "";

//     for(let i =0 ; i < str.length;i++){
//         if(str[i].length > largest.length){
//             largest = str[i];
//         }
//     }
//     return largest;
// }

// console.log(longest("Hello guys this is geeksforgeeks where" +
//             " students learn programming"));

//

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function shortNameFinder(words){
    let shortest = words[0];

    for(let i = 0; i < words.length ; i++ ){
        if(words[i].length < shortest.length){
            shortest = words[i];
        }
    }

    return shortest;
}

const sentence = shortNameFinder(heights2);
console.log(sentence);