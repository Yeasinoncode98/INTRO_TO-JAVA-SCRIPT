function willSuccess(marks){

    let passCount = 0;
    let failCount = 0;


    if(Array.isArray(marks) !=  true){
        return "Invalid";
    }

    for(const mark of marks){
        if(mark >= 50){
            passCount++;
            // console.log(passCount);
        }

        else {
            failCount++;
            // console.log(failCount);
        }
    }


    if(passCount > failCount){
        return true;
    }

    else {
        return false;
    }


}

console.log(willSuccess([90]));