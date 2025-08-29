const {
  price,
  quantity,
  tax = 20,
} = { name: "shirt", price: 700, quantity: 7 };

// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price;

// const discount = (price * 20) / 100;
// const yourPay = price - discount;
// const vatAmount = (price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

// console.log(price, quantity, tax);

// const price = product.price;

// .........................................

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmount = yourPay + vatAmount;

// Another example

const device = {
  name: "phone",
  brand: "samsung",
  price: 17000,
};

const { brand } = device;

// ...........................................................
// for Array

const numbers = [25, 38, 89, 101];
const [first, second] = numbers;

const [math, physics] = numbers;

console.log(math);
