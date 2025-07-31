const address = 'andorkilla';
const part = address.slice(2,5);

console.log(part);

//to slice needed part from strig we can use 
// .slice before the varible under which that value is added
//ex- address = "kukata" another variable part = address.Slice(2,5)
// here 2 shows from which index it started and 
// 5 shows take before 5 not the value of 5
// go from 2 index to 4 index but the limit is set to 5 index 


//const sentence =' i am a good and hardworking person. ';
// console.log(sentence.split(' ')) //double space
// console.log(sentence.split('a'));

//Split 

// const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
// const friends = friendsStr.split(',');
// console.log(friends);

//split helps us to cut words , sentence inside or outside from anywhere
//split also helps us to sep name and many otherswork

const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
