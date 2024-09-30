export const invoice = [

    { 
        id: 10,
        name: 'compra de oficios',
        date: new Date(),
        client:{
            name: 'jhon',
            age: 35,
        },
        items: [
            {
                product: 'sillas', 
                price: 199, 
                quantity: 2        },
            {
                product: 'mesa',
                price: 245, 
                quantity: 20
            },
        ],
    },
    { 
        id: 11,
        name: 'compra de computacion',
        date: new Date(),
        client:{
            name: 'jhon',
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
        ],
    }, 
    { 
        id: 12,
        name: 'compra de papeleria',
        date: new Date(),
        client:{
            name: 'jhon',
            age: 35,
        },
        items: [
            {
                product: 'cuaderno', 
                price: 500, 
                quantity: 26        },
            {
                product: 'Libro',
                price: 285, 
                quantity: 30
            },
        ],
    }, 
    { 
        id: 13,
        name: 'compra de cafeteria',
        date: new Date(),
        client:{
            name: 'jhon',
            age: 35,
        },
        items: [
            {
                product: 'cafe', 
                price: 5000, 
                quantity: 8       },
            {
                product: 'azucar',
                price: 200, 
                quantity: 20
            },
        ],
    }

];

export const invoicesName = invoice.map( i =>{

    return i.name;
});

export const invoiceByClientName =(clientName) =>{
    
    return invoice.find(i => i.client.name === clientName)
}

const invoiceById = (id) =>{
    return invoice.find(i => i.id === id)
}

export{
    invoice as default,
    invoiceById,
    
}