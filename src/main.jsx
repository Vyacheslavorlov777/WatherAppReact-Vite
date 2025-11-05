import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import Temperature from './components/Temperature.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Temperature value={25} />
  </StrictMode>,
)
