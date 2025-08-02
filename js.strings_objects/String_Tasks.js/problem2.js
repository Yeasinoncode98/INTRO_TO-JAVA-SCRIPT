let details = 'The dress is made of 100%  also';

if(details.includes('cotton')){
    console.log("Material: Cotton.");
}

else if (details.includes('sale')){
    console.log("category: Sale Item.");
}

else if (details.includes('new arrival')){
    console.log("Status: New Arrival.");
}

else if (details.includes('limited edition')){
    console.log("Availability: Limited.");
}

else {
    console.log("Tag: General");
}