
const instructor= [
    {name: 'Nodi', age:28, position: 'senior'},
    {name: 'Akil', age:26, position: 'junior'},
    {name: 'Shobuj', age:30, position: 'senior'},
]

const result = instructor.filter(display => display.position === 'senior' );

console.log(result);