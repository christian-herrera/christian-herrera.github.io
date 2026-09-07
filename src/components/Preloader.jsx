import { useEffect, useState } from "react";
import profileImage from "../assets/avatar.webp";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Estilos
import "../styles/Preloader.css";

/**
 * -------------------------------------------------------------------------------------------------------
 *   Preloader.jsx -> Componente de precarga de recursos principales mediante Promise.all
 *   Asegura que las imágenes críticas y partículas estén descargadas y listas antes de mostrar la UI.
 * -------------------------------------------------------------------------------------------------------
 */
export default function Preloader({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // 1. Promesa para pre-cargar la imagen del avatar principal
        const preloadAvatar = new Promise((resolve) => {
            const img = new Image();
            img.src = profileImage;
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
                img.onerror = resolve; // Previene bloqueo si la imagen falla
            }
        });

        // 2. Promesa para inicializar el motor de partículas
        const preloadParticles = loadSlim(tsParticles).catch(() => {});

        // 3. Tiempo mínimo de espera para garantizar la carga completa en segundo plano (2000ms / 2 segundos)
        const minTimePromise = new Promise((resolve) => setTimeout(resolve, 1000));

        // 4. Timeout de seguridad máximo (4500ms) en caso de conexiones lentas
        const safetyTimeoutPromise = new Promise((resolve) => setTimeout(resolve, 4500));

        // Ejecutar Promise.all con todos los recursos requeridos
        const resourcesPromise = Promise.all([preloadAvatar, preloadParticles, minTimePromise]);

        Promise.race([resourcesPromise, safetyTimeoutPromise]).then(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 500); // Coincide con la duración de la transición CSS
        });
    }, []);

    return (
        <>
            {isLoading && (
                <div className={`react-preloader-overlay ${isFadingOut ? "fade-out" : ""}`}>
                    <div className="preloader-content">
                        <div className="preloader-spinner"></div>
                        {/* <span className="preloader-title">Christian Herrera</span> */}
                    </div>
                </div>
            )}
            {children}
        </>
    );
}
