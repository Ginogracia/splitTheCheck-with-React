import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Inputs from './components/Inputs.jsx'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Inputs />
  </StrictMode>,
)
