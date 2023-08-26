
const oddArr = [1, 3, 5, 7, 9, 11, 13, 55, 67, 99, 101];
// console.log("Main Array (Odd): ", oddArr);

const newArr = [];
for (let arr of oddArr) {
    arr++;
    newArr.push(arr)
}
console.log(newArr);

const convToEven = oddArr.map(arr => arr + 1);
// console.log("Converted array (Even): ", convToEven);