import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Estilos
import '../styles/Hero.css'

// Datos
import profileImage from '../assets/avatar.webp'

// Componentes
import BackgroundParticles from './BackgroundParticles'


/**
 * -------------------------------------------------------------------------------------------------------
 *   Hero.jsx -> Componente que representa la sección de presentación del portafolio
 * -------------------------------------------------------------------------------------------------------
 */
export default function Hero({ btn1_url, btn1_text, text }) {
  const navigate = useNavigate();
  const location = useLocation();

  // --> Utilidad: Al montar, desplaza al # si existe
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: "start" });
      }
    }
  }, [location]);


  const btn1Url = btn1_url || "/projects#timeline";
  const btn1Text = btn1_text || "Ver mis proyectos";
  const heroText = text || "Apasionado por la tecnología, el aprendizaje continuo y la creación de soluciones eficientes para desafíos del mundo real.";


  // --> RENDERIZADO
  return (
    <section id="hero" className="hero">
      <BackgroundParticles />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hola, soy Chris</h1>
          <p className="hero-subtitle">
            {heroText}
          </p>
          <div className="hero-cta">
            <button onClick={() => navigate(btn1Url)} className="btn btn-primary">
              {btn1Text}
            </button>
            <a href="#contact" className="btn btn-secondary">
              Contáctame
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gradient-blob"></div>
          <div className="hero-photo-frame">
            <img
              src={profileImage}
              alt="Chris"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
