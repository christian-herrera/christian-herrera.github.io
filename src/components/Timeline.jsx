import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Estilos
import '../styles/Timeline.css'

// Datos
import projects_json from '../assets/timeline.json'

// Constantes
const getCategoryColor = (category) => {
  const colors = {
    'académico': 'category-academico',
    'unlp': 'category-unlp',
    'stm32': 'category-stm32',
    'atmel': 'category-atmel',
    'matlab': 'category-matlab',
    'html': 'category-html',
    'css': 'category-css',
    'javascript': 'category-javascript',
    'nodejs': 'category-nodejs',
    'embedded': 'category-embedded',
  }
  return colors[category] || 'category-default'
}


/**
 * -------------------------------------------------------------------------------------------------------
 *   Timeline.jsx -> Componente que representa la línea de tiempo de proyectos
 * -------------------------------------------------------------------------------------------------------
 */
export default function Timeline() {
  const timelineRef = useRef(null)
  const itemsRef = useRef([])
  const [projects, setProjects] = useState([])
  const location = useLocation()

  // --> Utilidad: Normaliza los botones en cada proyecto
  const normalizeButtons = (buttons) => {
    if (!Array.isArray(buttons)) return []

    return buttons
      .map((button, index) => ({
        id: button?.id ?? `${button?.label || 'button'}-${index}`,
        label: button?.label || '',
        url: typeof button?.url === 'string' ? button.url.trim() : '',
      }))
      .filter((button) => button.label)
  }

  // --> Utilidad: Al montar, desplaza al # si existe
  useEffect(() => {
    // Si hay un hash en la URL, desplazamos suavemente hasta el elemento correspondiente
    if (location.hash) {
      const targetElement = document.querySelector(location.hash)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: "start" })
      }
    }
  }, [location])

  // --> Utilidad: Al montar
  useEffect(() => {
    // Normaliza los datos del JSON
    const normalized = projects_json.map((item, idx) => ({
      id: item.id ?? idx + 1,
      year: item.fecha || '',
      title: item.titulo || '',
      shortDescription: item.descripcion || '',
      titulos: item.titulos === true,
      category: Array.isArray(item.categoria)
        ? item.categoria
        : typeof item.categoria === 'string'
          ? item.categoria.split(',').map((s) => s.trim())
          : [],
      botones: normalizeButtons(item.botones),
    }))
    setProjects(normalized)
  }, [])


  // --> Utilidad: Observador de intersección para animar los elementos de la línea de tiempo
  useEffect(() => {
    if (!projects.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('active', entry.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )

    const nodes = itemsRef.current.slice(0, projects.length)
    nodes.forEach((node) => node && observer.observe(node))

    return () => observer.disconnect()
  }, [projects])


  // --> RENDERIZADO
  return (
    <section id="timeline" className="timeline">
      <div className="timeline-container">
        <div className="section-header">
          <h2>Mi Línea de Tiempo</h2>
          <p>Un recorrido visual por mis proyectos más destacados</p>
        </div>

        <div className="timeline-wrapper" ref={timelineRef}>
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>

                <div className={`timeline-entry ${project.titulos ? 'timeline-entry-titulos' : ''}`}>
                  <div className="entry-header">
                    <span className="year-badge">{project.year}</span>
                    <h3 className="entry-title">{project.title}</h3>
                  </div>

                  <p className="entry-description">{project.shortDescription}</p>

                  <div className="entry-categories">
                    {project.category.map((cat) => (
                      <span key={cat} className={`badge ${getCategoryColor(cat)}`}>
                        {cat}
                      </span>
                    ))}
                  </div>

                  {project.botones.length > 0 && (
                    <div className="entry-actions">
                      {project.botones.map((button) => {
                        if (button.url) {
                          return (
                            <a
                              key={button.id}
                              href={button.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="entry-button"
                            >
                              {button.label}
                            </a>
                          )
                        }

                        return (
                          <button key={button.id} type="button" className="entry-button" disabled>
                            {button.label}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

