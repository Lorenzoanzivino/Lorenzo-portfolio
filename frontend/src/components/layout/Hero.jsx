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
