
// default parameter 
let add = (a, b=0) => a + b;
console.log(add(4))

let sqr = (a, b=a) => a * b;
console.log(sqr(10))
console.log(sqr(10, 5))

// rest operator
function sum(...num) {
    return num.reduce((a,b) => (a+b))
}
console.log(sum(10, 30, 40))

// Spread Operator
let arr = [1,2,3,4,5];
console.log(...arr)

let arr2 = [...arr, 33, 66]
console.log(arr2)


const obj = {
    name: 'Hayatul Emon',
    email: 'hayatul@gmail.com'
}

const obj2 = {
    ...obj,
    name: 'hayatul',
    age: 21
}
console.log(obj2)
