
// Destructuring 

// destructuring array 
const arr = [11, 22, 33];
let [a, b, c] = arr;

console.log(a, c)

// destructuring object
const obj = {
    name: 'Hayatul Emon',
    email: 'hayatul@gmail.com'
}

let {name, email} = obj;
console.log(name, email)

// function print(name, email) {
function print({name, email}) {
    console.log(`Hello ${name} Email: ${email}`);
}
// print(name, email)
print({email, name})

