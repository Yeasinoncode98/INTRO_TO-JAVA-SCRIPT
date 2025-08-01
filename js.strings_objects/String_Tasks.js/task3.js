let text = "Education";
text = text.toLowerCase();

if (text.includes('a') && text.includes('e') && text.includes('i') && text.includes('o') && text.includes('u')){
    console.log("Vowels are not missing");
}

else {
    console.log("Yes,Vowles are missing");
}

console.log(text.length);