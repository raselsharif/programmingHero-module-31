

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
];

const ages = people.map(a => a.age);
console.log(ages);
const result = ages.reduce((prev, pres) => prev + pres, 0);

console.log(result);