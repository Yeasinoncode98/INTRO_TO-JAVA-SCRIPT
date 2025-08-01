let text =' hello from chatgpt to me brother how are you'.trim();

let words = text.split(" ");

for ( let i = 0; i <words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

//what is the main diff between primitive vs non-primitive 