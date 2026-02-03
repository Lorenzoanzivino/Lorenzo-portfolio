import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer"; // <--- Importa Footer

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* <--- Usa Footer qui */}
    </>
  );
};

export default Home;
