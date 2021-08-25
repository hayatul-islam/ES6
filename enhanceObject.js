
// Enhance Object

let name = 'Hayatul Emon';
let email = 'hayatul@gamil.com';

const Person = {
    name,
    email,

    print () {
        console.log(this.name, this.email)
    }
}
Person.print()

