var ownMarks = 90;
var frndMarks = 75;

if (ownMarks > 80 ){
    if(frndMarks > 80) {
        console.log("Go for a lunch");

    }

    else if (frndMarks < 80 && frndMarks >= 60){
        console.log("Good luck nextTime");
    }

    else if (frndMarks < 60 && frndMarks >= 40){
        console.log("keep your friend's message unseen.");
    }

    else if (frndMarks < 40){
        console.log("Block Friend");
    }
   
 
}

   else{
        console.log("Go home and sleep and act sad ");
}


