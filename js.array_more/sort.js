const numbers = [6,1,8,2,3,5];
// console.log(numbers);
numbers.sort();

// console.log(numbers);


//strig type

const friends = ['sakib','akib','nokib','rakib','bakib'];
friends.sort();
// console.log(friends);

const ages = [1,5,100,15,8,2,28];
// console.log(ages);
// ages.sort();
// console.log(ages);

//acsending order
const sorted_ages = ages.sort(function(a,b){return a- b});
// console.log(sorted_ages);

//descending order

const sorted_ages_desc = ages.sort(function(a,b) {return  b - a});
console.log(sorted_ages_desc);