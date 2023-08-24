// double array element
const arr = [2, 4, 5, 6]

const result = [];
for (const double of arr) {
    const doubleIt = double * 2;
    result.push(doubleIt)
}
// console.log(result);

const arrMap = [2, 5, 6, 3, 8];
function doubleId(number) {
    // console.log(number);
    return number * 2;
}

const result2 = arrMap.map(doubleId);
// console.log(result2); 

const arrMap2 = [2, 5, 6, 3, 4, 5, 6];

const double2 = n => n * 2;

const result3 = arrMap2.map(double2)
// console.log(result3);

const result4 = arrMap2.map(n => n * 2);
console.log(result4);
