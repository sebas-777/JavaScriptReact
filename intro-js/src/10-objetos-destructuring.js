
const user ={
    username: 'pepe',
    age: 35,
    ranking: 2,
};

const detail =( {username, age} ) =>{
    console.log(`el detalle del usuario ${username} es ${age} años`);
}

detail(user);
console.log(user.username,user.age, user.ranking);
console.log(`${user.username} tiene ${user.age} años y tiene el ranking ${user.ranking}`);