import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Estilos
import "../styles/CertificationsCards.css";

// Datos
import certificaciones_json from "../assets/certificaciones.json";

/**
 * --------------------------------------------------------------------------------------------------------
 *   CertificationsCards.jsx -> Componente que muestra las certificaciones como tarjetas de grilla
 * --------------------------------------------------------------------------------------------------------
 */
export default function CertificationsCards() {
    const [certs, setCerts] = useState([]);
    const cardsRef = useRef([]);
    const location = useLocation();

    // --> Utilidad: Al montar, desplaza al # si existe
    useEffect(() => {
        // Si hay un hash en la URL, desplazamos suavemente hasta el elemento correspondiente
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    // --> Utilidad: Normaliza los botones de cada certificacion
    const normalizeButtons = (buttons) => {
        if (!Array.isArray(buttons)) return [];
        return buttons
            .map((btn, i) => ({
                id: btn?.id ?? `${btn?.label || "btn"}-${i}`,
                label: btn?.label || "",
                url: typeof btn?.url === "string" ? btn.url.trim() : "",
            }))
            .filter((btn) => btn.label);
    };

    // --> Utilidad: Al montar: normaliza los datos del JSON
    useEffect(() => {
        const normalized = certificaciones_json.map((item, idx) => ({
            id: item.id ?? idx + 1,
            fecha: item.fecha || "",
            titulo: item.titulo || "",
            descripcion: item.descripcion || "",
            titulos: item.titulos === true,
            categoria: Array.isArray(item.categoria) ? item.categoria : typeof item.categoria === "string" ? item.categoria.split(",").map((s) => s.trim()) : [],
            botones: normalizeButtons(item.botones),
        }));
        setCerts(normalized);
    }, []);

    // --> Utilidad: Intersection Observer para la animacion de entrada
    useEffect(() => {
        if (!certs.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("cert-card--visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const nodes = cardsRef.current.slice(0, certs.length);
        nodes.forEach((node) => node && observer.observe(node));

        return () => observer.disconnect();
    }, [certs]);

    // --> RENDERIZADO
    return (
        <section id="certificaciones" className="cert-section">
            <div className="cert-container">
                <div className="section-header">
                    <h2>Certificaciones &amp; Titulos</h2>
                    <p>Formacion academica y reconocimientos profesionales obtenidos a lo largo del tiempo</p>
                </div>

                <div className="cert-grid">
                    {certs.map((cert, index) => (
                        <article key={cert.id} ref={(elem) => (cardsRef.current[index] = elem)} className={`cert-card ${cert.titulos ? "cert-card--titulo" : ""}`} style={{ "--card-index": index }}>
                            {/* Cabecera */}
                            <div className="cert-card__header">
                                <span className="cert-card__fecha">{cert.fecha}</span>
                                {cert.titulos && (
                                    <span className="cert-card__titulo-badge" title="Titulo oficial">
                                        🏅
                                    </span>
                                )}
                            </div>

                            {/* Titulo */}
                            <h3 className="cert-card__title">{cert.titulo}</h3>

                            {/* Descripcion */}
                            <p className="cert-card__desc">{cert.descripcion}</p>

                            {/* Categorias */}
                            {cert.categoria.length > 0 && (
                                <div className="cert-card__categories">
                                    {cert.categoria.map((cat) => (
                                        <span key={cat} className={`cert-badge cert-badge-${cat}`}>
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Botones */}
                            {cert.botones.length > 0 && (
                                <div className="cert-card__actions">
                                    {cert.botones.map((btn) =>
                                        btn.url ? (
                                            <a key={btn.id} href={btn.url} target="_blank" rel="noopener noreferrer" className="cert-card__btn">
                                                {btn.label}
                                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <button key={btn.id} type="button" className="cert-card__btn" disabled>
                                                {btn.label}
                                            </button>
                                        )
                                    )}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
