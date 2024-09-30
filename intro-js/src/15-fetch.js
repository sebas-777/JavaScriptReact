
const httpClient = fetch('https://jsonplaceholder.org/users'); 

/* httpClient.then(response =>{
    console.log(response);
    response.json().then(data =>{

    })
}) */

/* httpClient
    .then(response => response.json())
    .then(data => console.log(data)); */


const findAllUsers = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
     
}
const users = await findAllUsers();
console.log(users);
findAllUsers();
console.log('Hola que tal!');