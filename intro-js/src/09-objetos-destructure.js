
const user ={
    username: 'pepe',
    age: 35,
    ranking: 2,
};

const{ username, age, ranking} = user;
console.log(username, age, ranking);
console.log(`${username} tiene ${age} años y tiene el ranking ${ranking}`);