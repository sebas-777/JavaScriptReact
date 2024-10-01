import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorld } from './components/helloworld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld 
    users={'pepe'} 
    id={' 1 '}
    title='hola mundo'
    />
  </StrictMode>,
)
