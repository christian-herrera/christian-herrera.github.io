import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos
import './styles/global.css'

// Componentes
import AppRouter from './router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
