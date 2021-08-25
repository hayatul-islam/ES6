
// Arrow function 

// without parameter
const print = () => {
    console.log('Hello Arrow Function');
}
print()

// single parameter
const print1 = name => {
    console.log('Hello Arrow Function',name);
}
print1('Hayatul Emon')

// single line 
const add = (a,b) => a + b;
console.log(add(4,5))

const sqr = x => x*x;
console.log(sqr(10))

// multiline 
const result = (x, y, z) => {
    const sum = x + y;
    const diff = x - z;

    return sum * diff;
}
console.log(result(4,5,2))
