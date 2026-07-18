import { useNavigate } from "react-router-dom"

// Styles
import '../styles/Footer.css'

/**
 * -------------------------------------------------------------------------------------------------------
 *  Footer.jsx -> Componente de pie de página con información de derechos de autor y navegación
 * -------------------------------------------------------------------------------------------------------
 */
export default function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()


  // --> RENDERIZADO
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Christian Herrera. Todos los derechos reservados.</p>
          <p className="footer-credit">
            <button onClick={() => navigate("/#hero")} className="footer-link-button">
              Página principal
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}