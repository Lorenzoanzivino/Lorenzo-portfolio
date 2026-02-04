This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
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
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
public/
  mytrainup/
    dashboard.webp
    diarioDiBordo.webp
    mieschede.webp
    nuovaScheda.webp
src/
  assets/
    react.svg
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
  data/
    content.js
  pages/
    Home.jsx
  App.jsx
  index.css
  main.jsx
.env.example
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/assets/react.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
</file>

<file path="src/components/layout/Footer.jsx">
import { useMemo } from "react";
import { CONTENT } from "../../data/content";

const Footer = () => {
  // Calcolo dinamico dell'anno per evitare aggiornamenti manuali
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Classi comuni per i link (DRY)
  const linkStyles =
    "text-slate-300 hover:text-white transition-colors duration-300 text-[10px] font-bold tracking-[0.2em] uppercase";
  const legalStyles = "hover:text-white transition-colors duration-300";

  return (
    <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* BRANDING */}
          <div className="text-center md:text-left">
            <a href="#" className="group">
              <h3 className="text-2xl md:text-3xl font-serif font-medium">
                {CONTENT.FOOTER.BRAND_NAME}
                <span className="text-brand-blue group-hover:text-white transition-colors">
                  .
                </span>
              </h3>
            </a>
          </div>

          {/* NAVIGAZIONE SOCIAL */}
          <nav
            className="flex items-center justify-center gap-6"
            aria-label="Social Links"
          >
            {CONTENT.FOOTER.SOCIALS.map((link, index) => (
              <div key={link.name} className="flex items-center gap-6">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyles}
                  aria-label={link.aria}
                >
                  {link.name}
                </a>
                {index < CONTENT.FOOTER.SOCIALS.length - 1 && (
                  <span
                    className="w-1 h-1 bg-white/20 rounded-full"
                    aria-hidden="true"
                  ></span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-sans tracking-widest uppercase">
          <p className="text-center md:text-left">
            &copy; {currentYear} {CONTENT.FOOTER.BRAND_NAME} Anzivino.{" "}
            {CONTENT.FOOTER.RIGHTS}
          </p>

          <nav className="flex gap-8" aria-label="Legal Links">
            {CONTENT.FOOTER.LEGAL.map((link) => (
              <a key={link.name} href={link.href} className={legalStyles}>
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

<file path="src/components/layout/Hero.jsx">
import { useEffect, useState } from "react";
import { CONTENT } from "../../data/content";

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
            {CONTENT.HERO.SUBTITLE}
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 md:mb-10 text-shadow-lg">
            {CONTENT.HERO.TITLE_1} <br />
            <span className="italic opacity-90">
              {CONTENT.HERO.TITLE_2_ITALIC}
            </span>
          </h1>

          <p className="text-base md:text-xl font-sans font-light text-slate-200 max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed text-shadow px-4">
            {CONTENT.HERO.DESCRIPTION}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <a href="#portfolio" className={btnPrimary}>
              {CONTENT.HERO.CTA_PROJECTS}
            </a>
            <a href="#contact" className={btnSecondary}>
              {CONTENT.HERO.CTA_CONTACT}
            </a>
          </div>
        </header>
      </div>

      {/* 3. SCROLL INDICATOR  */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white opacity-40 text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
            {CONTENT.HERO.LABEL_SCROLL}
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
</file>

<file path="src/components/layout/Navbar.jsx">
import { useState, useEffect, useCallback } from "react";
import { CONTENT } from "../../data/content";

// 1. Centralizzazione dei Link (Dati strutturali + Testi da content.js)
const getNavLinks = () => [
  { name: CONTENT.NAVBAR.LINK_HOME, href: "#" },
  { name: CONTENT.NAVBAR.LINK_EXPERTISE, href: "#services" },
  { name: CONTENT.NAVBAR.LINK_PROJECTS, href: "#portfolio" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const NAV_LINKS = getNavLinks();

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
  const navBaseClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out";
  const navScrolledClasses =
    scrolled && !isOpen
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
            {CONTENT.NAVBAR.LOGO_NAME}
            <span className="text-slate-400">.</span>
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
              {CONTENT.NAVBAR.CTA_COLLABORATE}
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
              aria-label={
                isOpen ? CONTENT.NAVBAR.ARIA_CLOSE : CONTENT.NAVBAR.ARIA_OPEN
              }
              aria-expanded={isOpen}
            >
              <svg
                className="w-8 h-8 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
          {CONTENT.NAVBAR.CTA_COLLABORATE}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
</file>

<file path="src/components/sections/Contact.jsx">
import { useState, useEffect } from "react";
import { Reveal } from "../ui/Reveal";
import { CONTENT } from "../../data/content";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    bot_check: "",
  });
  const [status, setStatus] = useState("idle");

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

  const inputStyles =
    "w-full bg-white border border-slate-200 p-4 text-brand-navy focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-sm placeholder:text-slate-300 font-serif";
  const labelStyles =
    "text-xs font-bold uppercase tracking-widest text-brand-navy ml-1";

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col lg:flex-row"
    >
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
            {CONTENT.CONTACT.SIDEBAR_NAME}
          </h4>
          <p className="font-sans text-xs md:text-sm text-slate-600 mb-4">
            {CONTENT.CONTACT.SIDEBAR_TAGLINE}
          </p>
          <a
            href={`mailto:${CONTENT.CONTACT.EMAIL_LINK}`}
            className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand-navy underline decoration-brand-navy/30 hover:decoration-brand-navy break-all"
          >
            {CONTENT.CONTACT.EMAIL_LINK}
          </a>
        </div>
      </div>

      <div className="w-full lg:w-7/12 bg-brand-cream flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24">
        <Reveal>
          <div className="max-w-xl mx-auto lg:mx-0">
            <span className="text-brand-blue/60 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              {CONTENT.CONTACT.BADGE}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-6 leading-tight">
              {CONTENT.CONTACT.TITLE_MAIN} <br />
              <span className="opacity-50 italic">
                {CONTENT.CONTACT.TITLE_ITALIC}
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-sans font-light mb-10 md:mb-12">
              {CONTENT.CONTACT.DESCRIPTION}
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
                  <label className={labelStyles}>
                    {CONTENT.CONTACT.LABELS.NAME}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={CONTENT.CONTACT.PLACEHOLDERS.NAME}
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label className={labelStyles}>
                    {CONTENT.CONTACT.LABELS.EMAIL}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={CONTENT.CONTACT.PLACEHOLDERS.EMAIL}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelStyles}>
                  {CONTENT.CONTACT.LABELS.MESSAGE}
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder={CONTENT.CONTACT.PLACEHOLDERS.MESSAGE}
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
                  {status === "idle" && CONTENT.CONTACT.STATUS.IDLE}
                  {status === "sending" && CONTENT.CONTACT.STATUS.SENDING}
                  {status === "success" && CONTENT.CONTACT.STATUS.SUCCESS}
                  {status === "error" && CONTENT.CONTACT.STATUS.ERROR}
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

<file path="src/components/sections/Projects.jsx">
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
</file>

<file path="src/components/sections/Services.jsx">
import { Reveal } from "../ui/Reveal";
import { CONTENT } from "../../data/content";

const SERVICES_DATA = [
  {
    id: "physical",
    num: "01",
    label: CONTENT.SERVICES.BLOCK_01.LABEL,
    title: CONTENT.SERVICES.BLOCK_01.TITLE,
    description: CONTENT.SERVICES.BLOCK_01.DESCRIPTION,
    image:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop",
    items: CONTENT.SERVICES.BLOCK_01.ITEMS,
    align: "left",
    btnText: CONTENT.SERVICES.BLOCK_01.CTA,
  },
  {
    id: "digital",
    num: "02",
    label: CONTENT.SERVICES.BLOCK_02.LABEL,
    title: CONTENT.SERVICES.BLOCK_02.TITLE,
    description: CONTENT.SERVICES.BLOCK_02.DESCRIPTION,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    items: CONTENT.SERVICES.BLOCK_02.ITEMS,
    align: "right",
    btnText: CONTENT.SERVICES.BLOCK_02.CTA,
  },
];

const ServiceBlock = ({ service }) => {
  const isRight = service.align === "right";

  return (
    <div
      className="relative w-full min-h-screen flex items-center bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url('${service.image}')` }}
    >
      <div
        className={`absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px] ${isRight ? "md:bg-brand-navy/80" : "md:bg-brand-navy/60"}`}
      ></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div
          className={`flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <div
            className={`w-full md:w-1/2 text-white ${isRight ? "md:text-right flex flex-col md:items-end" : ""}`}
          >
            <Reveal>
              <span className="text-brand-cream text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                {service.label}
              </span>

              <h2 className="text-4xl md:text-7xl font-serif font-medium mb-6 md:mb-8 leading-tight text-shadow-lg whitespace-pre-line">
                {service.title}
              </h2>

              <div
                className={`w-20 h-1 bg-white mb-8 ${isRight ? "md:ml-auto" : ""}`}
              ></div>

              <p className="text-lg md:text-2xl font-sans font-light text-slate-200 mb-10 leading-relaxed max-w-lg text-shadow">
                {service.description}
              </p>

              <ul
                className={`space-y-4 text-slate-300 font-sans tracking-wide mb-12 text-sm md:text-base ${isRight ? "flex flex-col items-start md:items-end" : ""}`}
              >
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-4 ${isRight ? "flex-row-reverse md:flex-row" : ""}`}
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
      {SERVICES_DATA.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}

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
              {CONTENT.SERVICES.BLOCK_03.LABEL}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 text-shadow-lg">
              {CONTENT.SERVICES.BLOCK_03.TITLE}
            </h2>
            <p className="text-base md:text-xl text-slate-200 font-sans font-light max-w-3xl mx-auto mb-16 leading-relaxed text-shadow">
              {CONTENT.SERVICES.BLOCK_03.DESCRIPTION}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
              {CONTENT.SERVICES.BLOCK_03.GRID.map((box, i) => (
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
              {CONTENT.SERVICES.BLOCK_03.CTA}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
</file>

<file path="src/components/ui/Reveal.jsx">
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

<file path="src/data/content.js">
export const CONTENT = {
  NAVBAR: {
    LOGO_NAME: "Lorenzo",
    LINK_HOME: "Home",
    LINK_EXPERTISE: "Competenze",
    LINK_PROJECTS: "Progetti",
    CTA_COLLABORATE: "COLLABORIAMO",
    ARIA_OPEN: "Apri menu",
    ARIA_CLOSE: "Chiudi menu",
  },
  HERO: {
    SUBTITLE: "Full-Stack Development & UI Design",
    TITLE_1: "L'architettura del design.",
    TITLE_2_ITALIC: "Il codice della creatività.",
    DESCRIPTION:
      "Progetto e sviluppo ecosistemi digitali completi, integrando logiche backend scalabili con interfacce utente ad alte prestazioni.",
    CTA_PROJECTS: "ESPLORA I PROGETTI",
    CTA_CONTACT: "PARLIAMO DI IDEE",
    LABEL_SCROLL: "SCROLL",
  },
  SERVICES: {
    BLOCK_01: {
      LABEL: "01 — UI/UX & Mobile-First",
      TITLE: "Interface \n Engineering.",
      DESCRIPTION:
        "Progettazione di interfacce intuitive e sistemi visivi coerenti. Un approccio orientato all'utente che unisce estetica e funzionalità attraverso una meticolosa fase di analisi dei requisiti e prototipazione.",
      ITEMS: [
        "Mobile-First Design Systems",
        "UI/UX per Web & App Mobile",
        "Prototipazione Interattiva",
        "Asset Grafici Ottimizzati",
      ],
      CTA: "VEDI APPROCCIO DESIGN",
    },
    BLOCK_02: {
      LABEL: "02 — Backend & Cloud Architecture",
      TITLE: "Scalable \n Solutions.",
      DESCRIPTION:
        "Sviluppo di logiche server-side robuste e architetture cloud-ready. Dalle API in Flask ai moduli Enterprise in Java/Spring, con focus su integrità dei dati e performance elevate.",
      ITEMS: [
        "Backend Dev (Python / Java)",
        "Database Relazionali & Cloud",
        "API Design & Integrazione",
        "Cyber Security Fundamentals",
      ],
      CTA: "VEDI STACK TECNICO",
    },
    BLOCK_03: {
      LABEL: "03 — Full-Stack Lifecycle",
      TITLE: "Ingegneria del Prodotto",
      DESCRIPTION:
        "Gestione dell'intero ciclo di vita del software: dall'analisi funzionale al deploy. Un workflow strutturato che garantisce soluzioni scalabili, sicure e tecnicamente solide.",
      GRID: [
        {
          t: "Sinergia",
          d: "Integrazione fluida tra backend e frontend, con gestione dati complessi tramite JSON-based engines.",
        },
        {
          t: "Metodo",
          d: "Approccio iterativo: Analisi → Progettazione → Implementazione → Test → Rilascio.",
        },
        {
          t: "Versatilità",
          d: "Sviluppo cross-platform, dalle web app responsive ai motori di gioco mobile.",
        },
      ],
      CTA: "COLLABORIAMO",
    },
  },
  PROJECTS: {
    HEADER_SUBTITLE: "SELECTED CASE STUDIES",
    HEADER_TITLE: "Development & Design",
    PROJECT_LINK_TEXT: "ANALISI TECNICA",
    FOOTER_QUOTE: '"Il software è una combinazione di arte e ingegneria."',
    FOOTER_CTA: "APRI UNA COLLABORAZIONE",
    DATA: [
      {
        title: "MyTrainUp",
        category: "Full-Stack Web App",
        description:
          "Piattaforma gestionale per Personal Trainer. Architettura progettata per l'ottimizzazione del workflow: dalla gestione dei piani di allenamento dinamici alla reportistica. Design system ad alte prestazioni ottimizzato per il monitoraggio dati.",
        tech: ["React 19", "Python Flask", "Dashboard Architecture"],
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
        category: "Visual Identity System",
        description:
          "Sviluppo di un ecosistema digitale integrato. Progettazione della visual identity e dell'architettura web orientata alla user experience, garantendo una coerenza totale tra interfacce digitali e materiali fisici.",
        tech: ["UI/UX Design", "Web Architecture", "Visual Assets"],
        images: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
        ],
        year: "2023",
      },
      {
        title: "Studio Legale Rossi",
        category: "Corporate Infrastructure",
        description:
          "Rebranding e sviluppo di una piattaforma istituzionale scalabile. Focus sulla chiarezza dell'infrastruttura informativa e sull'implementazione di un design system minimalista orientato all'autorevolezza digitale.",
        tech: ["Brand Architecture", "Information Design", "Web Systems"],
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        ],
        year: "2023",
      },
    ],
  },
  CONTACT: {
    SIDEBAR_NAME: "Lorenzo Anzivino.",
    SIDEBAR_TAGLINE:
      "Disponibile per collaborazioni tecniche e architettura software.",
    EMAIL_LINK: "lorenzoanzivinodigital@gmail.com",
    BADGE: "CONNECT",
    TITLE_MAIN: "Entriamo in",
    TITLE_ITALIC: "contatto.",
    DESCRIPTION:
      "Condividi la tua visione tecnica. Sono interessato a discutere di nuove tecnologie, ottimizzazione di sistemi esistenti o sviluppo di prodotti digitali innovativi.",
    LABELS: {
      NAME: "Nome",
      EMAIL: "Email",
      MESSAGE: "Messaggio",
    },
    PLACEHOLDERS: {
      NAME: "Il tuo nome",
      EMAIL: "tua@email.com",
      MESSAGE: "Descrivi brevemente l'idea o la sfida tecnica...",
    },
    STATUS: {
      IDLE: "INVIA MESSAGGIO",
      SENDING: "INVIO IN CORSO...",
      SUCCESS: "MESSAGGIO INVIATO",
      ERROR: "ERRORE SERVER",
    },
  },

  FOOTER: {
    BRAND_NAME: "Lorenzo",
    SOCIALS: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/lorenzo-anzivino-dev",
        aria: "Visita il profilo LinkedIn professionale",
      },
      {
        name: "GitHub",
        href: "https://github.com/Lorenzoanzivino",
        aria: "Esplora i repository GitHub",
      },
      {
        name: "Email",
        href: "mailto:lorenzoanzivinodigital@gmail.com",
        aria: "Invia una comunicazione tecnica via email",
      },
    ],
    LEGAL: [
      { name: "Privacy", href: "#" },
      { name: "Cookies", href: "#" },
    ],
    RIGHTS: "Tutti i diritti riservati.",
  },
};
</file>

<file path="src/pages/Home.jsx">
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

<file path="src/App.jsx">
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

<file path="src/index.css">
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

<file path="src/main.jsx">
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

<file path=".env.example">
# URL del backend (es: http://localhost:5000 o https://api.tuosito.it)
VITE_API_URL=
</file>

<file path="eslint.config.js">
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
</file>

<file path="index.html">
<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='16 18 22 12 16 6'%3E%3C/polyline%3E%3Cpolyline points='8 6 2 12 8 18'%3E%3C/polyline%3E%3C/svg%3E" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>Lorenzo Anzivino | Design & Full-Stack Development</title>
    
    <meta name="description" content="Portfolio di Lorenzo Anzivino. Specializzato in Brand Identity e Sviluppo Web Full-Stack. Creatore di MyTrainUp. Soluzioni digitali su misura." />
    <meta name="keywords" content="Lorenzo Anzivino, Full-Stack Developer, Graphic Design, MyTrainUp, Web Design Italia, React Developer, Python Flask" />
    <link rel="canonical" href="https://tuodominio.it" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tuodominio.it" />
    <meta property="og:title" content="Lorenzo Anzivino | Design & Development" />
    <meta property="og:description" content="Costruisco l'identità digitale e fisica del tuo brand. Dal logo al codice." />
    <meta property="og:image" content="https://tuodominio.it/og-image.jpg" /> 
    
    <meta name="twitter:card" content="summary_large_image" />
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

<file path="package.json">
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

<file path="postcss.config.js">
// ! frontend/postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
</file>

<file path="tailwind.config.js">
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

<file path="vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
</file>

<file path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env

# Repomix / AI Context files
repomix-*.md

# Production
build/
</file>

<file path="README.md">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</file>

</files>
