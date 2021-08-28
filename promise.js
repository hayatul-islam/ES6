

// promise 
let myFirstPromise = new Promise((resolve, reject) => {

    let name = 'Hayatul Emon';
    // resolve(name)

    setTimeout(() => resolve(name), 3000)
})

myFirstPromise
    .then((name) => {
        console.log(`We are ${name}`)
    })
    
// API
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(body => {
        const list = body.map(data => {
            let li = document.createElement('li');
            let text = `Name: ${data.name}, Email: ${data.email}`
            let textNode = document.createTextNode(text);

            li.appendChild(textNode)
            return li;
        });
        
        list.forEach((li) =>{
            document.getElementById('myList').appendChild(li)
        })
    })

    .catch(err => console.log(err))


