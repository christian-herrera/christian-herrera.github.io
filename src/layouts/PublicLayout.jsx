import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'

/**
 * -------------------------------------------------------------------------------------------------------
 *  PublicLayout.jsx -> Componente de diseño público que envuelve las rutas públicas con un pie de página y precarga
 * -------------------------------------------------------------------------------------------------------
 */
function App() {
  return (
    <Preloader>
      <div className="app">
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Preloader>
  )
}

export default App

