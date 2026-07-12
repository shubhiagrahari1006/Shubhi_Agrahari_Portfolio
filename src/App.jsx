import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Badges from "./components/badges/badges";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Badges />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;