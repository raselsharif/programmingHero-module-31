const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'mac', price: 150000 },
]

const pName = products.map(p => p.name);
// console.log(pName);
const pPrice = products.map(p => p.price);
// console.log(pPrice);

const bigAmount = products.filter(p => p.price > 40000);
console.log(bigAmount);
const oneBigAmount = products.find(p => p.price > 40000);
console.log(oneBigAmount);

const pPriceTotal = products.reduce((p, c) => p + c.price, 0);
// console.log(pPriceTotal);