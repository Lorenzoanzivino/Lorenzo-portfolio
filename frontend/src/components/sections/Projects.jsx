import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { CONTENT } from "../../data/content";

const ProjectMedia = ({ images, title, onExpand }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSlider = images.length > 1;

  useEffect(() => {
    if (!isSlider) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isSlider, images.length]);

  return (
    <div
      className="relative overflow-hidden shadow-2xl rounded-sm aspect-[4/3] cursor-zoom-in group-hover:shadow-brand-navy/10 transition-all duration-700"
      onClick={() => onExpand(images[currentIndex])}
    >
      <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/5 transition-colors duration-500 z-10"></div>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Preview ${idx + 1} del progetto ${title}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out ${
            currentIndex === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {isSlider && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx ? "bg-white w-4" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
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
      className="relative py-24 md:py-40 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-brand-cream/95 z-0"></div>

      <div className="relative z-10">
        <header className="container mx-auto px-4 md:px-6 mb-20 md:mb-32 text-center">
          <Reveal>
            <span className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
              {CONTENT.PROJECTS.HEADER_SUBTITLE}
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-brand-navy">
              {CONTENT.PROJECTS.HEADER_TITLE}
            </h2>
          </Reveal>
        </header>

        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-24 md:gap-48">
          {CONTENT.PROJECTS.DATA.map((project, index) => (
            <article key={index} className="group">
              <Reveal delay={index * 0.1}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-1/2 relative">
                    <ProjectMedia
                      images={project.images}
                      title={project.title}
                      onExpand={setSelectedImage}
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] md:text-xs font-bold tracking-widest text-brand-navy z-20 shadow-sm">
                      {project.year}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                    <span className="text-brand-blue/60 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-6xl font-serif text-brand-navy mb-6 leading-tight group-hover:text-brand-blue transition-colors duration-500">
                      {project.title}
                    </h3>
                    <div className="w-16 h-[1px] bg-brand-navy/20 mb-8"></div>
                    <p className="text-base md:text-xl text-slate-600 font-sans font-light leading-relaxed mb-10 max-w-prose">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] md:text-xs font-bold tracking-widest text-brand-navy/40 uppercase border border-brand-navy/10 px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="group/link flex items-center gap-4 text-brand-navy text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all"
                    >
                      <span className="border-b border-brand-navy/30 pb-1 group-hover/link:border-brand-navy transition-all">
                        {CONTENT.PROJECTS.PROJECT_LINK_TEXT}
                      </span>
                      <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <footer className="container mx-auto px-6 mt-32 md:mt-48 text-center">
          <Reveal>
            <blockquote className="mb-10 md:mb-16">
              <p className="text-slate-400 font-serif italic text-2xl md:text-4xl px-4 max-w-4xl mx-auto">
                {CONTENT.PROJECTS.FOOTER_QUOTE}
              </p>
            </blockquote>
            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-brand-navy text-white text-xs font-bold tracking-[0.3em] uppercase shadow-2xl hover:bg-brand-blue hover:-translate-y-1 transition-all duration-300"
            >
              {CONTENT.PROJECTS.FOOTER_CTA}
            </a>
          </Reveal>
        </footer>
      </div>

      {/* LIGHTBOX OVERLAY */}
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
              className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Project detail"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-12 right-0 text-white hover:text-brand-cream transition-colors p-2"
                aria-label="Chiudi"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
