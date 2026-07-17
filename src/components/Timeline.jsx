import { useEffect, useRef, useState } from 'react'
import '../styles/Timeline.css'

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

export default function Timeline() {
  const timelineRef = useRef(null)
  const itemsRef = useRef([])
  const [projects, setProjects] = useState([])

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

  useEffect(() => {
    let isMounted = true

    fetch('/timeline.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar timeline.json')
        return res.json()
      })
      .then((data) => {
        if (!isMounted) return
        const normalized = data.map((item, idx) => ({
          id: item.id ?? idx + 1,
          year: item.fecha || '',
          title: item.titulo || '',
          shortDescription: item.descripcion || '',
          titulos: item.titulos === true,
          category: Array.isArray(item.categoria)
            ? item.categoria
            : typeof item.categoria === 'string'
            ? item.categoria.split(',').map((s) => s.trim())
            : item.category || [],
          botones: normalizeButtons(item.botones),
        }))
        setProjects(normalized)
      })
      .catch((err) => console.error(err))

    return () => {
      isMounted = false
    }
  }, [])

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

  return (
    <section id="projects" className="timeline">
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

