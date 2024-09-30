
import {invoiceById} from './data/invoices';




const findInvoicesById =(id)=>{
    const promise = new Promise((resolve, reject) => {
    
        setTimeout(() => { 
            const result = invoiceById(12);
            if(result){
                resolve(result);
            }else{
                reject('No se encontro la factura');
            }
            
        },2500)
    }); 

    return promise;
}
    


findInvoicesById(12)
    .then(console.log)
    .catch(console.error);


