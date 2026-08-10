import { useNavigate } from "react-router-dom";

// Estilos
import "../styles/AboutMe.css";

/**
 * -------------------------------------------------------------------------------------------------------
 *   AboutMe.jsx -> Componente que representa la sección "Sobre Mí" en la página principal
 *   Estructurado en: Formación y Base, Especialización y Tecnologías, y Objetivo Profesional.
 * -------------------------------------------------------------------------------------------------------
 */
export default function AboutMe() {
    const navigate = useNavigate();

    return (
        <section id="about" className="about-me">
            <div className="about-container">
                <header className="about-header">
                    <span className="about-kicker">Conóceme</span>
                    <h2 className="about-title">Sobre Mí</h2>
                    <p className="about-subtitle">Trayectoria académica, especialización tecnológica y enfoque profesional</p>
                </header>

                <div className="about-grid">
                    {/* Bloque 1: Formación y Base */}
                    <div className="about-card">
                        <div className="about-card-icon">🎓</div>
                        <h3 className="about-card-title">Formación y Base</h3>
                        <p className="about-card-text">
                            Soy <strong>Técnico Electromecánico</strong> graduado en la Escuela Técnica N° 1 "Dr. René Favaloro" y actualmente{" "}
                            <strong>estudiante avanzado de Ingeniería Electrónica en la Universidad Nacional de La Plata (UNLP)</strong>.
                        </p>
                        <p className="about-card-text">
                            Esta formación dual me otorga una sólida destreza práctica para la resolución de problemas en el mundo real, respaldada por una rigurosa formación analítica y científica
                            universitaria.
                        </p>
                        <div className="about-tags">
                            <span className="about-tag">Técnico Electromecánico</span>
                            <span className="about-tag">Ingeniería Electrónica (UNLP)</span>
                            <span className="about-tag">Capacidad Práctica & Analítica</span>
                        </div>
                    </div>

                    {/* Bloque 2: Especialización y Tecnologías */}
                    <div className="about-card">
                        <div className="about-card-icon">⚡</div>
                        <h3 className="about-card-title">Especialización & Tecnologías</h3>
                        <p className="about-card-text">
                            En el ámbito del <strong>software</strong>, me enfoco en el desarrollo web interactivo con <strong>React.js, JavaScript, HTML5 y CSS3</strong>, además del análisis y
                            adquisición de datos en <strong>MATLAB</strong>.
                        </p>
                        <p className="about-card-text">
                            En <strong>hardware y electrónica</strong>, desarrollo sistemas con microcontroladores <strong>STM32 y Atmel</strong>, automatización con <strong>PLC</strong> y diseño con{" "}
                            <strong>SolidWorks</strong>.
                        </p>
                        <div className="about-tech-groups">
                            <div className="tech-group">
                                <span className="tech-group-label">Software:</span>
                                <div className="about-tags">
                                    <span className="about-tag tag-software">React.js</span>
                                    <span className="about-tag tag-software">JavaScript</span>
                                    <span className="about-tag tag-software">HTML/CSS</span>
                                    <span className="about-tag tag-software">MATLAB</span>
                                </div>
                            </div>
                            <div className="tech-group">
                                <span className="tech-group-label">Hardware:</span>
                                <div className="about-tags">
                                    <span className="about-tag tag-hardware">STM32</span>
                                    <span className="about-tag tag-hardware">Atmel</span>
                                    <span className="about-tag tag-hardware">PLC / CNC</span>
                                    <span className="about-tag tag-hardware">SolidWorks</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloque 3: Objetivo */}
                    <div className="about-card">
                        <div className="about-card-icon">🎯</div>
                        <h3 className="about-card-title">Objetivo & Visión</h3>
                        <p className="about-card-text">
                            Me apasiona la convergencia entre el software de aplicación y los sistemas físicos. Busco abordar proyectos y desafíos tecnológicos que requieran desarrollo web moderno,
                            sistemas embebidos, instrumentación y automatización.
                        </p>
                        <p className="about-card-text">Mi objetivo es diseñar soluciones robustas, eficientes y seguras, aportando valor tanto en ingeniería como en desarrollo digital integral.</p>
                        <div className="about-tags">
                            <span className="about-tag tag-highlight">Integración Hardware + Software</span>
                            <span className="about-tag tag-highlight">Sistemas Embebidos</span>
                            <span className="about-tag tag-highlight">Soluciones Escalables</span>
                        </div>
                    </div>
                </div>

                <div className="about-actions">
                    <button onClick={() => navigate("/experience#certificaciones")} className="btn btn-primary">
                        Ver Proyectos & Certificaciones
                    </button>
                    <a href="#contact" className="btn btn-secondary">
                        Contáctame
                    </a>
                </div>
            </div>
        </section>
    );
}
