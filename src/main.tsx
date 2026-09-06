import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
const ACCESS_CODE = "AMPER2024";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <App/>
  </StrictMode>,
)
