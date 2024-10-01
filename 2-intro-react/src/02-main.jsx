import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{helloWorld} from './components/helloworld.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelloWorld />
  </StrictMode>,
)
