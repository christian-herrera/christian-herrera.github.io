import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'

function ProjectsPage() {
  return (
    <>
      <Hero 
        btn1_url="/" 
        btn1_text="Web Principal" 
        text="Aquí encontrarás una lista de mis proyectos más recientes." />
      <Timeline />
      <Contact />
    </>
  )
}

export default ProjectsPage
