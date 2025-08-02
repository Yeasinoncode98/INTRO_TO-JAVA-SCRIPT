let text = "I dont know you please comeback to the school at time";
text = text.toLowerCase();

if (text.includes('a') && text.includes('e') && text.includes('i') && text.includes('o') && text.includes('u')){
    console.log("Vowels are not missing");
}

else {
    console.log("Yes,Vowels are missing");
}

console.log(text.length);
