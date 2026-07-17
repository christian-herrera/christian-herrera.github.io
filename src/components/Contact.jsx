import '../styles/Contact.css'

export default function Contact() {
  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      href: 'https://github.com/christian-herrera',
      description: 'Repositorios, proyectos y código abierto',
      handle: '@christian-herrera',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.95 3.21 9.14 7.66 10.62.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.12.68-3.78-1.5-3.78-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.55.99 1.55.99 1 .99 2.62.7 3.26.54.1-.43.39-.7.71-.86-2.49-.28-5.11-1.25-5.11-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.08 1.15a10.6 10.6 0 012.8-.38c.95 0 1.91.13 2.8.38 2.13-1.45 3.07-1.15 3.07-1.15.61 1.52.23 2.64.11 2.92.72.79 1.15 1.8 1.15 3.03 0 4.33-2.62 5.28-5.12 5.56.4.35.75 1.05.75 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.65.78.54 4.44-1.48 7.64-5.67 7.64-10.62C23.25 5.48 18.27.5 12 .5z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/christian-herrera-ing',
      description: 'Perfil profesional y experiencia',
      handle: '@christian-herrera-ing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4zM8.5 8h3.84v2h.05c.54-1.02 1.86-2 3.83-2 4.1 0 4.86 2.7 4.86 6.2V22h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.2 0-2.54 1.72-2.54 3.49V22h-4z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'twitter',
      name: 'Twitter',
      href: 'https://twitter.com/ChriissRP',
      description: 'Actualizaciones rápidas y publicaciones',
      handle: '@ChriissRP',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.72 4.22 4.22 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19c-.48.13-.98.2-1.5.2-.37 0-.73-.04-1.08-.1a4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.12 12.12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.7 8.7 0 0024 6.5a8.4 8.4 0 01-2.54.7z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://www.instagram.com/chris1496.rp/',
      description: 'Fotos, historias y contenido visual',
      handle: '@chris1496.rp',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.75.75h8.5A7 7 0 0 1 23.25 7.75v8.5a7 7 0 0 1-7 7h-8.5a7 7 0 0 1-7-7v-8.5a7 7 0 0 1 7-7Zm0 1.5a5.5 5.5 0 0 0-5.5 5.5v8.5a5.5 5.5 0 0 0 5.5 5.5h8.5a5.5 5.5 0 0 0 5.5-5.5v-8.5a5.5 5.5 0 0 0-5.5-5.5h-8.5Zm4.25 3.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Zm0 1.5a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Zm5.95-.95a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" fill="currentColor" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Redes y Contacto</h2>
          <p>
            Descubre mis proyectos, contribuciones y actividades a través de mis perfiles y canales oficiales.          </p>
        </div>

        <div className="contact-content">
          <div className="contact-socials full-width">
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="social-link"
                >
                  <div className="social-header">
                    <span className="social-name">{social.name}</span>
                    <span className="social-icon" aria-hidden="true">{social.icon}</span>
                  </div>

                  <span className="social-copy">
                    <span className="social-description">{social.description}</span>
                    <span className="social-handle">{social.handle}</span>
                  </span>

                  <span className="social-action" aria-hidden="true">Ver perfil →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
