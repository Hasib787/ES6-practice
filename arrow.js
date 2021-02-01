// function doubleIt(num){
//     return num*2;
// }

// let doubleIt=function myFun(num){
//     return num*2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}
const total = doMath(7, 6);
console.log('The total=', total);
console.log(doubleIt(5));
console.log(add(25, 5));
console.log(give5());