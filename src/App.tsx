import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import CommandMenu from './components/CommandMenu';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Preloader />
      <CommandMenu />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
