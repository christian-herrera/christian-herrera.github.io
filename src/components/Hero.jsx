import { useNavigate } from "react-router-dom";
import '../styles/Hero.css'


// Contenido
import profileImage from '../assets/avatar.webp'

export default function Hero({btn1_url, btn1_text, text}) {
  const navigate = useNavigate();

  const btn1Url = btn1_url || "/projects";
  const btn1Text = btn1_text || "Ver mis proyectos";
  const heroText = text || "Apasionado por la tecnología, el aprendizaje continuo y la creación de soluciones eficientes para desafíos del mundo real.";


  return (
    <section id="hero" className="hero">
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
            {/* <a href={btn1Url} className="btn btn-primary">
              {btn1Text}
            </a> */}
            
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
