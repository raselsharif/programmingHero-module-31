const data = [{name: 'rasel sharif', id: 1171, address: 'badda'}];

// console.log(data[0].name);

const product = {
    count : 5000,
    data: [
        {name: 'rasel sharif', id: 1171, address: 'badda'},
        {name: 'sharif rasel', id: 1172, address: 'badda, dhaka'}
    ],
}
// console.log(product.data[1].address);

const user = {
    id: 1171,
    name: 'rasel',
    address: {
        street: {
            first: 'badda',
            secound: 'dhaka',
            third: 'hossen market'
        }
    }
}
// console.log(user.address.street.secound);

const user1 = {
    id: 1171,
    name: 'rasel',
    addresses: {
        street: {
            first: 'badda',
            city: 'dhaka',
            third: 'hossen market'
        }
    }
}
console.log(user1.address?.street.secound);