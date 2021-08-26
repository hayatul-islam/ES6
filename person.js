
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

// Inheritance 
class Student extends Person {
    constructor(name, email, id){
        super(name, email);
        this.id = id;
    }

    welcome(){
        super.print();
        console.log(`ID; ${this.id}`)
    }
}

let p1 = new Person('Haytul Emon', 'hayatul@gmail.com');
console.log(p1)

p1.print()

const st1 = new Student('S M Shaown', 'shaown@gmail.com', 11)
console.log(st1)

st1.welcome()

