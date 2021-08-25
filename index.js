
// var vs let vs const 

// const 
const x = 10;
// x = 33; // TypeError

const arr = [];
arr.push(10);
arr.push(14);

// arr = [] // TypeError

console.log(arr)

// var 
var b = 10;
if(true){
    var b = 20;
    console.log(b)
}
console.log(b)


// let
let a = 10;
if(true){
    let a = 20;
    console.log(a)
}
console.log(a)

function demo(){
    {
        let x = 10;

        { // blog
            const x = 15;
            // x = 20 // TypeError
            console.log(x)
        }
        x = 30;
        console.log(x)
    }
    console.log(x)
}
demo()

