import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import HomeSkills from "../components/HomeSkills";
import Contact from "../components/Contact";

/**
 * -------------------------------------------------------------------------------------------------------
 *   HomePage.jsx -> Componente de la página principal
 * -------------------------------------------------------------------------------------------------------
 */
function HomePage() {
    return (
        <>
            <Hero go_home={false} />
            <AboutMe />
            <HomeSkills />
            <Contact />
        </>
    );
}

export default HomePage;
