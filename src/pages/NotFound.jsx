import { Link } from 'react-router-dom'

// Estilos
import '../styles/NotFound.css'

/**
 * -------------------------------------------------------------------------------------------------------
 *   NotFound.jsx -> Componente para la página de error 404
 * -------------------------------------------------------------------------------------------------------
 */
export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <div className="not-found-visual">
          <div className="error-blob"></div>
          <div className="error-code">
            <span className="error-digit">4</span>
            <span className="error-digit">0</span>
            <span className="error-digit">4</span>
          </div>
        </div>

        <div className="not-found-content">
          <h1 className="not-found-title">Página no encontrada</h1>
          <p className="not-found-subtitle">
            Parece que esta página desapareció en el ciberespacio.
            No te preocupes, aquí hay algunos enlaces útiles:
          </p>

          <div className="not-found-cta">
            <Link to="/" className="btn btn-primary">
              Volver al inicio
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Ver mis proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
