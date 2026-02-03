This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: frontend/src/**/*.{js,jsx,ts,tsx,css}, frontend/index.html, frontend/package.json, frontend/vite.config.js, frontend/tailwind.config.js
- Files matching these patterns are excluded: **/node_modules/**, **/dist/**, **/build/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
frontend/
  src/
    components/
      layout/
        Footer.jsx
        Hero.jsx
        Navbar.jsx
      sections/
        Contact.jsx
        Projects.jsx
        Services.jsx
      ui/
        Reveal.jsx
    pages/
      Home.jsx
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  tailwind.config.js
  vite.config.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="frontend/src/components/layout/Footer.jsx">
import { useMemo } from "react";

// 1. Centralizzazione dei dati (DRY)
const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "#", aria: "Visita il profilo LinkedIn" },
  { name: "Email", href: "mailto:lorenzoanzivinodigital@gmail.com", aria: "Invia una email" },
];

const LEGAL_LINKS = [
  { name: "Privacy", href: "#" },
  { name: "Cookies", href: "#" },
];

const Footer = () => {
  // Calcolo dinamico dell'anno per evitare aggiornamenti manuali
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Classi comuni per i link (DRY)
  const linkStyles = "text-slate-300 hover:text-white transition-colors duration-300 text-[10px] font-bold tracking-[0.2em] uppercase";
  const legalStyles = "hover:text-white transition-colors duration-300";

  return (
    <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          
          {/* BRANDING */}
          <div className="text-center md:text-left">
            <a href="#" className="group">
              <h3 className="text-2xl md:text-3xl font-serif font-medium">
                Lorenzo<span className="text-brand-blue group-hover:text-white transition-colors">.</span>
              </h3>
            </a>
          </div>

          {/* NAVIGAZIONE SOCIAL */}
          <nav className="flex items-center justify-center gap-6" aria-label="Social Links">
            {SOCIAL_LINKS.map((link, index) => (
              <div key={link.name} className="flex items-center gap-6">
                <a
                  href={link.href}
                  className={linkStyles}
                  aria-label={link.aria}
                >
                  {link.name}
                </a>
                {index < SOCIAL_LINKS.length - 1 && (
                  <span className="w-1 h-1 bg-white/20 rounded-full" aria-hidden="true"></span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-sans tracking-widest uppercase">
          <p className="text-center md:text-left">
            &copy; {currentYear} Lorenzo Anzivino. Tutti i diritti riservati.
          </p>
          
          <nav className="flex gap-8" aria-label="Legal Links">
            {LEGAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={legalStyles}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
</file>

<file path="frontend/src/components/layout/Hero.jsx">
import { useEffect, useState } from "react";

// Playlist Video Aggiornata (Tutti 25fps per massima compatibilità)
const videos = [
  "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/853789/853789-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Logica rotazione video automatica
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Aumentato a 8 secondi per un feeling più calmo

    return () => clearInterval(interval);
  }, []);

  // Classi comuni per i bottoni (DRY)
  const btnBase =
    "w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 font-bold tracking-[0.2em] text-xs uppercase transition-all rounded-sm text-center shadow-xl";
  const btnPrimary = `${btnBase} bg-white text-brand-navy hover:bg-slate-200`;
  const btnSecondary = `${btnBase} border border-white text-white hover:bg-white hover:text-brand-navy`;

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-navy"
      aria-label="Introduzione Portfolio"
    >
      {/* 1. BACKGROUND VIDEO SLIDER  */}
      <div className="absolute inset-0 z-0 w-full h-full" aria-hidden="true">
        {/* Overlay scuro fisso per leggibilità testo  */}
        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-1000"></div>

        {videos.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[3000ms] ease-in-out ${
              currentVideo === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      {/* 2. CONTENT LAYER  */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center text-white">
        <header className="animate-fade-in-up">
          <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.4em] uppercase mb-4 md:mb-8 text-slate-300 opacity-80">
            Visual Identity & Web Design
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 md:mb-10 text-shadow-lg">
            Design che si tocca. <br />
            <span className="italic opacity-90">Siti web che funzionano.</span>
          </h1>

          <p className="text-base md:text-xl font-sans font-light text-slate-200 max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed text-shadow px-4">
            Costruisco l'intera presenza digitale e fisica del tuo brand. Dal
            logo stampato alla piattaforma web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <a href="#portfolio" className={btnPrimary}>
              Vedi i Progetti
            </a>
            <a href="#contact" className={btnSecondary}>
              Contattami
            </a>
          </div>
        </header>
      </div>

      {/* 3. SCROLL INDICATOR  */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white opacity-40 text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
</file>

<file path="frontend/src/components/layout/Navbar.jsx">
import { useState, useEffect, useCallback } from "react";

// 1. Centralizzazione dei Link (DRY)
const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Servizi", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestione Scroll per cambiare sfondo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blocco dello scroll del body quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Handler unico per il click sui link
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Classi dinamiche per la barra
  const navBaseClasses = "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out";
  const navScrolledClasses = scrolled && !isOpen
    ? "bg-brand-navy/90 backdrop-blur-md py-4 shadow-lg"
    : "bg-transparent py-6 md:py-8";

  return (
    <nav className={`${navBaseClasses} ${navScrolledClasses}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#"
            onClick={handleLinkClick}
            className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white relative z-50"
          >
            Lorenzo<span className="text-slate-400">.</span>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-[0.15em]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="px-6 py-3 bg-white text-brand-navy text-xs font-bold tracking-[0.2em] hover:bg-slate-200 transition-colors shadow-lg rounded-sm"
            >
              CONTATTAMI
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
              aria-label={isOpen ? "Chiudi Menu" : "Apri Menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="w-8 h-8 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-brand-navy z-40 flex flex-col items-center justify-center space-y-12 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-full invisible pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            className="text-4xl font-serif font-medium text-white hover:text-brand-blue transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="mt-8 px-12 py-5 bg-white text-brand-navy font-bold tracking-[0.2em] text-sm uppercase shadow-2xl rounded-sm"
        >
          Contattami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
</file>

<file path="frontend/src/components/sections/Contact.jsx">
import { useState, useEffect } from "react";
import { Reveal } from "../ui/Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    bot_check: "",
  });
  const [status, setStatus] = useState("idle");

  // Reset del messaggio di successo dopo 3 secondi
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Usa la variabile d'ambiente o il fallback locale
    const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

    try {
      const response = await fetch(`${API_URL}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", bot_check: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Errore invio form:", error);
      setStatus("error");
    }
  };

  // Stili comuni per gli input per mantenere il codice DRY
  const inputStyles =
    "w-full bg-white border border-slate-200 p-4 text-brand-navy focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-sm placeholder:text-slate-300 font-serif";
  const labelStyles =
    "text-xs font-bold uppercase tracking-widest text-brand-navy ml-1";

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col lg:flex-row"
    >
      {/* COLONNA SINISTRA: IMMAGINE EVOCATIVA */}
      <div className="w-full lg:w-5/12 h-64 md:h-96 lg:h-auto relative overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-brand-navy/30"></div>
        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:bottom-10 md:left-10 p-6 bg-white/90 backdrop-blur-sm shadow-xl md:max-w-xs">
          <h4 className="font-serif text-brand-navy text-lg md:text-xl mb-2">
            Lorenzo Anzivino.
          </h4>
          <p className="font-sans text-xs md:text-sm text-slate-600 mb-4">
            Disponibile per progetti freelance e consulenze.
          </p>
          <a
            href="mailto:lorenzoanzivinodigital@gmail.com"
            className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand-navy underline decoration-brand-navy/30 hover:decoration-brand-navy break-all"
          >
            lorenzoanzivinodigital@gmail.com
          </a>
        </div>
      </div>

      {/* COLONNA DESTRA: IL FORM */}
      <div className="w-full lg:w-7/12 bg-brand-cream flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24">
        <Reveal>
          <div className="max-w-xl mx-auto lg:mx-0">
            <span className="text-brand-blue/60 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Inizia ora
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-6 leading-tight">
              Hai un progetto? <br />
              <span className="opacity-50 italic">Scrivimi.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-sans font-light mb-10 md:mb-12">
              Raccontami la tua idea. Che sia un logo per la tua pizzeria o un
              e-commerce complesso, troveremo la soluzione su misura.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hidden">
                <input
                  type="text"
                  name="bot_check"
                  value={formData.bot_check}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelStyles}>Nome</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Mario Rossi"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label className={labelStyles}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="mario@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelStyles}>Messaggio</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Vorrei rifare il logo del mio locale..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputStyles} resize-none`}
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full md:w-auto px-10 py-4 bg-brand-navy text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
                >
                  {status === "idle" && "Invia Richiesta"}
                  {status === "sending" && "Attendere..."}
                  {status === "success" && "Inviato con Successo"}
                  {status === "error" && "Errore, Riprova"}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
</file>

<file path="frontend/src/components/sections/Projects.jsx">
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../ui/Reveal";

const projects = [
  {
    title: "MyTrainUp",
    category: "Web App / UI Design",
    description:
      "Una piattaforma gestionale completa per Personal Trainer. L'obiettivo era semplificare il flusso di lavoro quotidiano: dalla gestione delle schede di allenamento alla fatturazione. Il design system è stato costruito su toni scuri ed energici per motivare l'utente.",
    tech: ["React", "Python", "Dashboard Design"],
    images: [
      "/mytrainup/dashboard.webp",
      "/mytrainup/nuovaScheda.webp",
      "/mytrainup/diarioDiBordo.webp",
      "/mytrainup/mieschede.webp",
    ],
    year: "2024",
  },
  {
    title: "Ristorante La Vetrina",
    category: "Brand Identity / Website",
    description:
      "Un progetto sensoriale. Ho curato il rebranding partendo dalla scelta della carta per il menù fisico fino alla fotografia dei piatti per il sito web. Il risultato è un'esperienza digitale che anticipa il profumo e l'atmosfera del locale.",
    tech: ["Web Design", "Photography", "Print"],
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    ],
    year: "2023",
  },
  {
    title: "Studio Legale Rossi",
    category: "Corporate Identity",
    description:
      "Rebranding per uno studio associato storico. La sfida era modernizzare l'immagine mantenendo l'autorevolezza istituzionale. Abbiamo optato per una palette minimalista, un logo tipografico senza tempo e un sito web istituzionale estremamente pulito.",
    tech: ["Branding", "Editorial Design", "Wordpress"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    ],
    year: "2023",
  },
];

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

  // Blocco scroll quando il lightbox è aperto
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
              Selected Works
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-brand-navy">
              Portfolio
            </h2>
          </Reveal>
        </header>

        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-24 md:gap-48">
          {projects.map((project, index) => (
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
                        Voglio un progetto così
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
                "Il design è l'intelligenza resa visibile."
              </p>
            </blockquote>
            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-brand-navy text-white text-xs font-bold tracking-[0.3em] uppercase shadow-2xl hover:bg-brand-blue hover:-translate-y-1 transition-all duration-300"
            >
              Inizia un Progetto
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
</file>

<file path="frontend/src/components/sections/Services.jsx">
import { Reveal } from "../ui/Reveal";

// 1. Centralizzazione dei dati per rendere il componente DRY e manutenibile
const SERVICES_DATA = [
  {
    id: "physical",
    num: "01",
    label: "The Physical World",
    title: "Graphic \n Design.",
    description:
      "Non c'è niente di più potente di ciò che puoi toccare. Creo l'identità visiva del tuo brand curando ogni dettaglio stampato.",
    image:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Loghi & Brand Identity",
      "Menù Ristoranti & Carte Vini",
      "Packaging & Etichette",
      "Biglietti da visita di pregio",
    ],
    align: "left",
    btnText: "Richiedi Preventivo Grafica",
  },
  {
    id: "digital",
    num: "02",
    label: "The Digital World",
    title: "Web \n Development.",
    description:
      "Oltre l'estetica. Sviluppo siti web veloci, sicuri e scalabili grazie alla mia competenza in Cloud Computing.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Siti Vetrina Minimali",
      "Portfolio Interattivi",
      "Ottimizzazione SEO & Performance",
      "Hosting & Cloud Deploy",
    ],
    align: "right",
    btnText: "Richiedi Preventivo Web",
  },
];

// Sotto-componente per le sezioni standard (Atto 1 e 2)
const ServiceBlock = ({ service }) => {
  const isRight = service.align === "right";

  return (
    <div
      className="relative w-full min-h-screen flex items-center bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url('${service.image}')` }}
    >
      <div
        className={`absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px] ${
          isRight ? "md:bg-brand-navy/80" : "md:bg-brand-navy/60"
        }`}
      ></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div
          className={`flex flex-col ${
            isRight ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div
            className={`w-full md:w-1/2 text-white ${
              isRight ? "md:text-right flex flex-col md:items-end" : ""
            }`}
          >
            <Reveal>
              <span className="text-brand-cream text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                {service.num} — {service.label}
              </span>

              <h2 className="text-4xl md:text-7xl font-serif font-medium mb-6 md:mb-8 leading-tight text-shadow-lg whitespace-pre-line">
                {service.title}
              </h2>

              <div
                className={`w-20 h-1 bg-white mb-8 ${
                  isRight ? "md:ml-auto" : ""
                }`}
              ></div>

              <p className="text-lg md:text-2xl font-sans font-light text-slate-200 mb-10 leading-relaxed max-w-lg text-shadow">
                {service.description}
              </p>

              <ul
                className={`space-y-4 text-slate-300 font-sans tracking-wide mb-12 text-sm md:text-base ${
                  isRight ? "flex flex-col items-start md:items-end" : ""
                }`}
              >
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-4 ${
                      isRight ? "flex-row-reverse md:flex-row" : ""
                    }`}
                  >
                    {item}{" "}
                    <span className="w-8 md:w-12 h-[1px] bg-white/30"></span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-block px-10 py-4 border border-white text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-xl"
              >
                {service.btnText}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="w-full bg-brand-navy">
      {/* ATTI 1 & 2: Fisico e Digitale */}
      {SERVICES_DATA.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}

      {/* ATTO 3: LA SINTESI (Mantenuto custom per il layout unico a griglia) */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center bg-center bg-cover md:bg-fixed py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-[2px] mix-blend-multiply"></div>

        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <Reveal>
            <span className="text-brand-cream text-xs font-bold tracking-[0.3em] uppercase mb-6 block opacity-80">
              03 — The Hybrid Approach
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 text-shadow-lg">
              Il Pacchetto Completo
            </h2>
            <p className="text-base md:text-xl text-slate-200 font-sans font-light max-w-3xl mx-auto mb-16 leading-relaxed text-shadow">
              La vera forza sta nell'unione. Progetto la tua identità visiva e
              la traduco in codice, senza intermediari. Un unico referente, una
              visione coerente, tempi dimezzati.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
              {[
                {
                  t: "Coerenza",
                  d: "Il logo sul biglietto da visita matcha perfettamente i pixel del sito web.",
                },
                {
                  t: "Velocità",
                  d: "Nessun telefono senza fili tra grafico e programmatore. Faccio tutto io.",
                },
                {
                  t: "Tecnica",
                  d: "Non solo bello. Il sito è costruito su infrastruttura Cloud solida.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 rounded-sm"
                >
                  <h3 className="font-serif text-xl md:text-2xl mb-4 text-white">
                    {box.t}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {box.d}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-12 py-5 bg-white text-brand-navy font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-cream transition-all shadow-2xl transform hover:-translate-y-1"
            >
              Richiedi Preventivo Unico
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
</file>

<file path="frontend/src/components/ui/Reveal.jsx">
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "fit-content", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    // RIMOSSO overflow: "hidden" per evitare tagli su elementi 3D
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // Animazione più lenta ed elegante
      >
        {children}
      </motion.div>
    </div>
  );
};
</file>

<file path="frontend/src/pages/Home.jsx">
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
</file>

<file path="frontend/src/App.jsx">
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";

/**
 * Punto di ingresso principale dell'applicazione React.
 * Gestisce i wrapper globali, le utility di stile per l'intero viewport
 * e le animazioni di montaggio/smontaggio dei componenti.
 */
function App() {
  return (
    <div
      className="min-h-screen font-sans antialiased selection:bg-brand-navy selection:text-white"
      style={{ backgroundColor: "#F4F4F0" }} // Imposta il brand-cream come base per evitare flash bianchi
    >
      <AnimatePresence mode="wait">
        <Home />
      </AnimatePresence>
    </div>
  );
}

export default App;
</file>

<file path="frontend/src/index.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 1. CONFIGURAZIONE VARIABILI & RESETS */
:root {
  --brand-cream: #F4F4F0;
  --brand-navy: #0F172A;
  --brand-blue: #334155;
}

html {
  scroll-behavior: smooth;
  /* Ottimizzazione del rendering del testo a livello globale */
  text-rendering: optimizeLegibility;
}

body {
  @apply bg-brand-cream text-brand-navy antialiased transition-colors duration-300;
  /* Rendering editoriale ultra-nitido */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 2. SCROLLBAR CINEMATIC (Cross-browser) */
/* Chrome, Safari, Edge e Opera */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(15, 23, 42, 0.2); /* Navy molto leggero */
  border-radius: 20px;
  border: 2px solid transparent; /* Crea un effetto di padding */
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(15, 23, 42, 0.6);
  background-clip: content-box;
}

/* Supporto Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(15, 23, 42, 0.2) transparent;
}

/* 3. SELECTION & FOCUS */
::selection {
  background-color: var(--brand-navy);
  color: #ffffff;
}

/* Focus visibile ma elegante per l'accessibilità */
:focus-visible {
  @apply outline-none ring-2 ring-brand-navy/20;
}

/* 4. UTILITIES AVANZATE (Layer Utilities) */
@layer utilities {
  /* Ombre per testi sopra video/immagini */
  .text-shadow {
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .text-shadow-lg {
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  /* Effetto "Vetro" per elementi UI sopra sfondi complessi */
  .glass-effect {
    @apply backdrop-blur-md bg-white/80 border border-white/20;
  }

  /* Overlay per immagini nel Portfolio */
  .image-overlay-dark {
    background: linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.4) 100%);
  }

  /* Animazione fluida per i link nel testo */
  .link-underline {
    @apply relative overflow-hidden;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .link-underline:hover {
    background-size: 100% 1px;
  }
}

/* 5. FIX PER I VIDEO (Hero Section) */
video {
  filter: brightness(0.9) contrast(1.1); /* Piccola correzione colore per look cinematografico */
}
</file>

<file path="frontend/src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path="frontend/index.html">
<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>Lorenzo Anzivino | Design & Full-Stack Development</title>
    
    <meta name="description" content="Portfolio di Lorenzo Anzivino. Specializzato in Brand Identity e Sviluppo Web Full-Stack. Creatore di MyTrainUp. Soluzioni digitali su misura." />
    <meta name="keywords" content="Lorenzo Anzivino, Full-Stack Developer, Graphic Design, MyTrainUp, Web Design Italia, React Developer, Python Flask" />
    <link rel="canonical" href="https://tuodominio.it" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tuodominio.it" />
    <meta property="og:title" content="Lorenzo Anzivino | Design & Development" />
    <meta property="og:description" content="Costruisco l'identità digitale e fisica del tuo brand. Dal logo al codice." />
    <meta property="og:image" content="https://tuodominio.it/og-image.jpg" /> <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Lorenzo Anzivino | Portfolio" />
    <meta name="twitter:description" content="Sviluppo Web e Brand Identity. Creatore di MyTrainUp." />
    <meta name="twitter:image" content="https://tuodominio.it/og-image.jpg" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  </head>
  
  <body style="background-color: #F4F4F0;" class="font-sans antialiased text-brand-navy">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="frontend/package.json">
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.23.26",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "vite": "^7.2.4"
  }
}
</file>

<file path="frontend/tailwind.config.js">
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      colors: {
        brand: {
          cream: "#F4F4F0", // Sfondo "Carta"
          white: "#FFFFFF",
          navy: "#0F172A", // Blu scuro profondo (ottimo per testi su cream)
          charcoal: "#0a0a0a", // QUASI Nero (per sfondi video/dark mode cinematico)
          blue: "#334155",
        },
      },
      // Animazioni fluide "Cinematic"
      animation: {
        "scroll-vertical": "scrollVertical 15s linear infinite",
        "fade-in-up": "fadeInUp 1s ease-out forwards", // L'elemento sale e appare
        "fade-in": "fadeIn 1.2s ease-out forwards", // Apparizione lenta
      },
      keyframes: {
        scrollVertical: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
</file>

<file path="frontend/vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
</file>

</files>
