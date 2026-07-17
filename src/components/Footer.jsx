import { useNavigate } from "react-router-dom"

// Styles
import '../styles/Footer.css'

export default function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Christian Herrera. Todos los derechos reservados.</p>
          <p className="footer-credit">
            <button onClick={() => navigate("/")} className="footer-link-button">
              Página principal
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}