
const invoice = { 
    id: 10,
    name: 'compra de oficina',
    date: new Date(),
    client:{
        id: 2,
        name: 'jhon',
        lastName: 'pepe',
        age: 35,
    },
    items: [
        {
            product: 'keyboard', 
            price: 399, 
            quantity: 2        },
        {
            product: 'mouse',
            price: 200, 
            quantity: 20
        },
        {
            product: 'paper',
            price: 100, 
            quantity: 30
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total += item.price * item.quantity;
        });

        return total;
    },
    greetings: function(){
        return `Hola ${this.client.name}`
    }

};

console.log(invoice.company?.name);
if(invoice.company?.name){
    console.log('perfeto!!!')
} else{
    console.log('no hay empresa')
}