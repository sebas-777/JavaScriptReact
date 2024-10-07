import { useState } from 'react'
import './App.css'
import logo from './assets/React-Symbol.png'

export  const App =()=> { 

  // Estado inicial para nombre y mensaje
  const[name,setName]= useState('');
  const[message,setMessage] = useState(''); 

  //Manejo de eventos de formulario
  const handleSubmit =(e)=>{
    e.preventDefault();
    alert(`Nombre: ${name}, Mensaje:${message}`)
  }


  return (
  
<div className='App'>
    <div className='logo-container'>
      <img 
      src={logo}
      className='react-logo'
      alt='react logo'
      />
    </div>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nombre:
        <input
         type="text"
         value={name}
         onChange={(e)=> setName(e.target.value)}
        
        />
      </label>
      <br/>
      <label htmlFor="message">
        Mensaje:
        <textarea
         value={message}
         onChange={(e)=>setMessage(e.target.value)}
        />
      </label>
      <br/>
      <button type="submit">Enviar</button>

    </form>

    </div>

</div>
  
     
  );
}


