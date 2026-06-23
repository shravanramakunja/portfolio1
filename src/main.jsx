import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisScroll from './component/LenisScroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisScroll>
      <App />
    </LenisScroll>
  </StrictMode>,
)
