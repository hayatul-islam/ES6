
// class 

class Person {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print(){
        console.log(`Name: ${this.name}, Email: ${this.email}`)
    }
}

let p1 = new Person('Haytul Emon', 'hayatul@gmail.com');
console.log(p1)

p1.print()

