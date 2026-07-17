import '../styles/PkiPage.css'
import { useState, useEffect } from 'react'

const CANode = ({ title, description, expiryDate, status, links, children, isRoot = false }) => {
  const statusColor = status === 'ACTIVO' ? 'success' : 'warning'
  const statusLabel = status === 'ACTIVO' ? 'ACTIVO' : 'ADVERTENCIA'

  return (
    <div className={`node ${isRoot ? 'root' : ''}`}>
      <div className="badge-container">
        <span className="badge expiry">Vence: {expiryDate}</span>
        <span className={`badge ${statusColor}`}>{statusLabel}</span>
      </div>
      <h2 className="node-title">{title}</h2>
      <p className="node-description">{description}</p>
      <div className="links">
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      {children && <div className="subtree">{children}</div>}
    </div>
  )
}

export default function PkiPage() {
  const [pkiData, setPkiData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPkiData = async () => {
      try {
        const response = await fetch('/pki.json')
        const data = await response.json()
        setPkiData(data)
      } catch (error) {
        console.error('Error loading PKI data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPkiData()
  }, [])

  if (loading) {
    return (
      <main className="pki-page">
        <div className="pki-container">
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)' }}>Cargando...</p>
        </div>
      </main>
    )
  }

  if (!pkiData) {
    return (
      <main className="pki-page">
        <div className="pki-container">
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)' }}>- Error al cargar los datos- </p>
        </div>
      </main>
    )
  }

  const { caRoot, subCas, lastUpdate } = pkiData

  return (
    <main className="pki-page">
      <div className="pki-container">
        <header className="pki-header">
          <h1>Infraestructura PKI Personal</h1>
        </header>

        <div className="tree">
          <CANode
            title={caRoot.title}
            description={caRoot.description}
            expiryDate={caRoot.expiryDate}
            status={caRoot.status}
            links={caRoot.links}
            isRoot={true}
          >
            {subCas.map((subCa, index) => (
              <CANode
                key={index}
                title={subCa.title}
                description={subCa.description}
                expiryDate={subCa.expiryDate}
                status={subCa.status}
                links={subCa.links}
              />
            ))}
          </CANode>
        </div>

        <footer className="pki-footer">
          <p>Infraestructura PKI • Christian Herrera • Última actualización: {lastUpdate}</p>
        </footer>
      </div>
    </main>
  )
}
