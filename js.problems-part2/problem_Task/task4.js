const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAvgPrice(numbers) {
  let sum = 0;
  for (const avg of numbers) {
    sum = sum + avg.price;
  }
  const avg = sum / numbers.length;

  return avg;
}

const avg = findAvgPrice(phones);
console.log(avg.toFixed(2));
