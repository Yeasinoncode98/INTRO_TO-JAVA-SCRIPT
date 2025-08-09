 /**
  * year will be a leap year if the year  is divisible by 4
  * simple logic not 100% true 
  * 
  */

 function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }

    else {
        return false;
    }
 }

 const lipi = isLeapYear(2052);
 console.log(lipi);

 /**
  * 1.Those year that is not divisible by 100 ,and, if the year is divisible by 4 :
  * then it will be a leapYear;
  * 
  * 2.if the year is divisible by 400 then it is a leap year
  * 
  * 3.else its not a leap year
  */

 function isLeapYear2 (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0 && year % 400){ //100 na dilei shomosha nei 
        return true;
    }

    else {
        return false;
    }

 
 }

 const lipi2 = isLeapYear(2028);
 console.log(lipi2);


 //

 function isLeapYear3(year){
    if((year % 100 !== 0 && year % 4 ===0 && year) || (year % 400 == 0)){
        return true;
    }
    else {
        return false;
    }
 }

 const kop = isLeapYear3(2052);
 console.log(kop);