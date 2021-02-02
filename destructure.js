const person = { name: 'Jack', age: '25', email: 'jack3344@gmail.com', address: 'Austin, Texas', gfName: 'Ema watson' };
const { gfName, name, email } = person;

console.log(gfName, name, email);

const complexObject={
        name:'Jarry',
        info:{
            phone:01545455454,
            address: 'Gulshan'
        }
}
const {address}= complexObject.info;
console.log(address);