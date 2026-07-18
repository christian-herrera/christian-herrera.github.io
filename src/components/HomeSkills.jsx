import { useNavigate } from 'react-router-dom'

// Estilos
import '../styles/HomeSkills.css'

// Datos
const skills = [
  {
    id: 1,
    icon: '🎓',
    title: 'Las matemáticas...',
    description: 'Siempre me han encantado las matemáticas porque me ayudan a pensar de forma lógica y a ver el mundo con otros ojos. Es mi herramienta para resolver problemas cotidianos y divertirme con números.'
  },
  {
    id: 2,
    icon: '👥',
    title: 'Trabajo en grupo...',
    description: 'Me gusta trabajar en equipo, compartir ideas y aprender de los demás. Creo que la colaboración es clave para crear proyectos geniales y alcanzar objetivos juntos.'
  },
  {
    id: 3,
    icon: '🧠',
    title: 'Investigación...',
    description: 'Investigar me permite explorar nuevas ideas y desafiar mi curiosidad. Siempre estoy buscando aprender algo nuevo y encontrar maneras diferentes de hacer las cosas.'
  },
  {
    id: 4,
    icon: '💻',
    title: 'Desarrollo...',
    description: 'Desarrollar software es mi pasión. Me encanta crear soluciones prácticas y divertidas que simplifiquen tareas y mejoren la experiencia de los usuarios.'
  },
  {
    id: 5,
    icon: '📋',
    title: 'Documentación...',
    description: 'Para mí, documentar es tan importante como el propio desarrollo. Me aseguro de dejar todo claro y sencillo para que cualquiera pueda entender y seguir mis proyectos sin problema.'
  },
  {
    id: 6,
    icon: '🔐',
    title: 'Seguridad...',
    description: 'La seguridad es algo que siempre tengo presente en mis proyectos. Me gusta cuidar cada detalle para proteger la información y asegurar que todo funcione de manera confiable.'
  }
]



/**
 * -------------------------------------------------------------------------------------------------------
 *   HomeSkills.jsx -> Componente que representa la sección de habilidades en la página principal
 * -------------------------------------------------------------------------------------------------------
 */
export default function HomeSkills() {
  const navigate = useNavigate()


  // --> RENDERIZADO
  return (
    <section id="skills" className="home-skills">
      <div className="skills-container">
        <header className="skills-header">
          <h2 className="skills-title">Bienvenido a mi humilde portfolio!</h2>
          <p className="skills-subtitle">Te detallo algunas de mis cualidades...</p>
        </header>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="skills-actions">
          <a href="mailto:christian.herrera@ing.unlp.edu.ar" className="btn btn-primary">
            Escríbeme!
          </a>
          <button onClick={() => navigate('/pki')} className="btn btn-primary">
            Infraestructura PKI
          </button>
          <a href="/PubKey.txt" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Clave Pública
          </a>
        </div>
      </div>
    </section>
  )
}