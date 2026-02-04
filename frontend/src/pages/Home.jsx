import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import About from "../components/sections/About"; // <--- Nuovo import
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About /> {/* <--- Inserita qui */}
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
