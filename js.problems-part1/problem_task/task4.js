function longest(str){
    str = str.split(" ");
    let largest = "";

    for(let i =0 ; i < str.length;i++){
        if(str[i].length > largest.length){
            largest = str[i];
        }
    }
    return largest;
}

console.log(longest("Hello guys this is geeksforgeeks where" +
            " students learn programming"));