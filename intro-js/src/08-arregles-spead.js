
const products = [
    'mesa',
    'silla',
    'escritorio',
    'cama',
    'sofa',
]; 

const products2 = products.concat('sillon');
//products.push('sillon');

const fruits = ['manzana', 'pera','fresa','mango'];

const mercado = [...fruits , ...products];
const mercado2 = products2.concat(fruits).concat('lechuga','papas','uvas');
console.log(mercado);
console.log(products);

