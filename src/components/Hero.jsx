import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Estilos
import "../styles/Hero.css";

// Datos
import profileImage from "../assets/avatar.webp";

// Componentes
import BackgroundParticles from "./BackgroundParticles";

/**
 * -------------------------------------------------------------------------------------------------------
 *   Hero.jsx -> Sección Hero futurista y simplificada de uso exclusivo para HomePage
 * -------------------------------------------------------------------------------------------------------
 */
export default function Hero({ go_home = true }) {
    const navigate = useNavigate();
    const location = useLocation();

    // --> Utilidad: Al montar, desplaza al # si existe
    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    // --> RENDERIZADO
    return (
        <section id="hero" className="hero">
            <BackgroundParticles />
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">
                        <span className="hero-wave-icon">👋</span> Hola, soy
                    </p>

                    <h1 className="hero-name">
                        Christian <span className="hero-name-highlight">Herrera</span>
                    </h1>

                    <p className="hero-role">
                        Desarrollador de Software <span className="hero-role-separator">/</span> Estudiante de Ing. Electrónica
                    </p>

                    <p className="hero-description">Técnico Electromecánico enfocado en el desarrollo web moderno, sistemas embebidos y la integración entre software y hardware.</p>

                    <div className="hero-tech-strip">
                        <span className="tech-item">
                            <span className="tech-prefix">#</span>React.js
                        </span>
                        <span className="tech-divider">•</span>
                        <span className="tech-item">
                            <span className="tech-prefix">#</span>JavaScript
                        </span>
                        <span className="tech-divider">•</span>
                        <span className="tech-item">
                            <span className="tech-prefix">#</span>STM32 / Atmel
                        </span>
                        <span className="tech-divider">•</span>
                        <span className="tech-item">
                            <span className="tech-prefix">#</span>UNLP
                        </span>
                    </div>

                    <div className="hero-cta">
                        <button onClick={() => navigate(go_home ? "/" : "/experience#certificaciones")} className="btn btn-primary btn-glow">
                            {go_home ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="btn-icon">
                                        <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Inicio
                                </>
                            ) : (
                                <>
                                    Experiencia
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="btn-icon">
                                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </>
                            )}
                        </button>
                        <button onClick={() => navigate("/#about")} className="btn btn-secondary">
                            Sobre Mí
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="gradient-blob"></div>
                    <div className="cyber-ring">
                        <svg viewBox="0 0 100 100" className="cyber-ring-svg">
                            <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="6 6" />
                        </svg>
                    </div>
                    <div className="hero-photo-frame">
                        <img src={profileImage} alt="Christian Herrera" className="hero-photo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
