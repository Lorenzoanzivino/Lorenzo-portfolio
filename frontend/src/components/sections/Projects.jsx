import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { CONTENT } from "../../data/content";

const ProjectMedia = ({ images, title, onExpand }) => {
  // Rimosso lo slider: prendiamo solo la prima immagine
  const mainImage = images[0];

  return (
    <div
      className="relative group cursor-zoom-in perspective-1000"
      onClick={() => onExpand(mainImage)}
    >
      <div className="relative overflow-hidden rounded-sm shadow-2xl bg-white/5 aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.01] border border-white/10">
        {/* Overlay hover cinematico */}
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500 z-10"></div>

        <img
          src={mainImage}
          alt={`Preview del progetto ${title}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-all duration-1000 ease-in-out"
        />
        {/* Nota: object-[center_20%] sposta l'immagine verso l'alto nel contenitore */}
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
  }, [selectedImage]);

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen py-24 md:py-40 overflow-hidden bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url('${CONTENT.PROJECTS.BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-brand-navy/90 backdrop-blur-[2px]"></div>

      <div className="relative z-10">
        <header className="container mx-auto px-6 mb-24 md:mb-32 flex flex-col items-center text-center">
          <Reveal>
            <span className="text-brand-cream text-xs font-bold tracking-[0.4em] uppercase mb-4 block opacity-70">
              {CONTENT.PROJECTS.HEADER_SUBTITLE}
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-white">
              {CONTENT.PROJECTS.HEADER_TITLE}
            </h2>
          </Reveal>
        </header>

        <div className="container mx-auto px-6 flex flex-col gap-32 md:gap-48 max-w-6xl">
          {CONTENT.PROJECTS.DATA.map((project, index) => (
            <article key={index} className="group">
              <Reveal delay={index * 0.1}>
                <div
                  className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-7/12 relative">
                    <ProjectMedia
                      images={project.images}
                      title={project.title}
                      onExpand={setSelectedImage}
                    />
                    <div className="absolute -top-4 -right-4 md:top-6 md:-right-6 bg-white shadow-xl px-4 py-2 text-[10px] font-bold tracking-widest text-brand-navy z-20">
                      {project.year}
                    </div>
                  </div>

                  <div className="w-full md:w-5/12 flex flex-col justify-center items-start text-white">
                    <span className="text-brand-cream/60 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                      {project.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-brand-cream transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-300 font-sans font-light leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold tracking-widest text-white/40 uppercase border border-white/10 px-3 py-1 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-4 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all"
                    >
                      <span className="border-b-2 border-white/20 pb-1 group-hover/link:border-white transition-all duration-300">
                        {CONTENT.PROJECTS.PROJECT_LINK_TEXT}
                      </span>
                      <svg
                        className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <footer className="container mx-auto px-6 mt-32 md:mt-48 flex flex-col items-center text-center text-white">
          <Reveal>
            <blockquote className="mb-12">
              <p className="text-slate-400 font-serif italic text-2xl md:text-3xl px-4 max-w-3xl mx-auto">
                {CONTENT.PROJECTS.FOOTER_QUOTE}
              </p>
            </blockquote>
            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-white text-brand-navy text-xs font-bold tracking-[0.3em] uppercase shadow-2xl hover:bg-brand-cream hover:-translate-y-1 transition-all duration-300"
            >
              {CONTENT.PROJECTS.FOOTER_CTA}
            </a>
          </Reveal>
        </footer>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Project detail"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
