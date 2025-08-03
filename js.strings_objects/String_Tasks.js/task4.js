// let text = "I have an apple.";
// let newText = text.replaceAll('a', 'A');
// console.log(newText); // Output: "I hAve an apple."



let text = "Xylophone and X-Ray";

if(text.includes('x')){
    text = text.replaceAll('x', 'y');
}
if(text.includes('X')){
    text = text.replaceAll('X', 'Y');
}

console.log(text);

