
import {invoice, invoicesName, invoiceByClientName} from './data/invoices';



console.log(invoicesName);
console.log(invoice);


const invoiceById = invoice.find(i => i.id === 13)
console.log(invoiceById); 

const invoiceFilter = invoice.filter(i => i.id > 1);
console.log(invoiceFilter);

const invoiceFilter2 = invoice.filter(i => i.items.includes({
    product: 'cafe', 
    price: 5000, 
    quantity: 8
}));

console.log(invoiceFilter2);
console.log('Buscar factura por nombre de cliente');
console.log(invoiceByClientName('jhon'));