import { useEffect, useId, useRef } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

// Pre-carga del motor slim de forma global para optimizar el rendimiento al montar
const slimLoadPromise = loadSlim(tsParticles);

export default function BackgroundParticles() {
    const containerRef = useRef(null);
    const particleId = useId();

    useEffect(() => {
        let container;
        let isMounted = true;

        const initParticles = async () => {
            await slimLoadPromise;

            // Guardas de seguridad por si el componente se desmonta durante la carga asíncrona
            if (!isMounted || !containerRef.current) return;

            container = await tsParticles.load({
                id: containerRef.current.id,
                options: {
                    fullScreen: { enable: false }, // Mantiene las partículas dentro del div contenedor
                    fpsLimit: 120,                 // Animaciones fluidas en pantallas con alta tasa de refresco
                    detectRetina: true,
                    background: { color: { value: 'transparent' } },

                    particles: {
                        color: { value: '#c7e7ff' },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } },       // Tamaños sutiles y variados
                        opacity: { value: { min: 0.18, max: 0.55 } }, // Efecto visual de profundidad

                        // Configuración de la red geométrica de líneas conectoras
                        links: {
                            enable: true,
                            color: '#8bd3ff',
                            distance: 140, // Distancia máxima para trazar una línea entre dos puntos
                            opacity: 0.2,  // Líneas de fondo muy sutiles para no saturar
                            width: 1,
                        },

                        // Control de movimiento constante
                        move: {
                            enable: true,
                            speed: 1.15,       // Velocidad relajada y elegante
                            direction: 'none', // Movimiento multidireccional libre
                            random: true,
                            straight: false,
                            outModes: { default: 'out' }, // Reaparecen por el lado opuesto al salir
                        },

                        // Densidad adaptable a la pantalla
                        number: {
                            density: { enable: true, width: 1200, height: 800 },
                            value: 55, // Cantidad óptima y equilibrada
                        },
                    },

                    // Configuración de interactividad con el cursor
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: 'grab' }, // Activa el efecto de atracción geométrica
                            onClick: { enable: false },
                        },
                        modes: {
                            grab: {
                                distance: 160,     // Radio de alcance del cursor para atraer líneas (mejorado)
                                links: { opacity: 0.5 }, // Las líneas conectadas al cursor se vuelven más visibles
                            },
                        },
                    },
                },
            });
        };

        initParticles();

        // Limpieza estricta del efecto para prevenir fugas de memoria
        return () => {
            isMounted = false;
            container?.destroy();
        };
    }, [particleId]);

    return (
        <div
            ref={containerRef}
            id={particleId}
            className="hero-particles"
            aria-hidden="true"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'initial' // Requerido si el contenedor padre restringe eventos del mouse
            }}
        />
    );
}