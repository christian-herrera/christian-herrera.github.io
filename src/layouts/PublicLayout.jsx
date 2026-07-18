import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


/**
 * -------------------------------------------------------------------------------------------------------
 *  PublicLayout.jsx -> Componente de diseño público que envuelve las rutas públicas con un pie de página
 * -------------------------------------------------------------------------------------------------------
 */
function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
