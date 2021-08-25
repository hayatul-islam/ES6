
// Lexical This 
const obj = {
    name: 'Hayatul Emon',
    print: function () {
        setTimeout(() => {
            console.log(this.name)
        },1000)
    }
}
obj.print;