var weight = 70;
var height = 1.6;

var bmi = weight / (height*height);

if(bmi < 18.5){
    console.log('You are underweight');
}

else if (bmi >= 18.5 && bmi <= 24.9 ){
    console.log("You have normal bmi! perfect");
}

else if (bmi >= 25 && bmi <= 29.9){
    console.log("You are overweight loose weight plzz");
}

else {
    console.log("You have obsesity");
}