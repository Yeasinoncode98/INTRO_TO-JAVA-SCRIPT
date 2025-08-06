//Primitive type data

let price = 25;
let comp_price = price;

// price = 20;
comp_price = 15;

// console.log(price);
// console.log(comp_price);


//Non_Primitive data type

const products = [25 , 25, 25];
const comp_products = [];

// const comp_products = products;

for(const product of products){
    comp_products.push(product);
}



comp_products[0] = 15;
products[1] = 55;

// console.log(products);
// console.log(comp_products);


//...............................

//system 1 

const numbers = [1,2,3,4];
// const new_numbers = Array.from(numbers);  //system 1
// const new_numbers = [].concat(numbers);  //system 2

const new_numbers = [...numbers];

new_numbers.push(99);

console.log(numbers);
console.log(new_numbers);


//shallow copy
//deep copy