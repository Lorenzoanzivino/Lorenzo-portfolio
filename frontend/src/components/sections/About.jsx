import { Reveal } from "../ui/Reveal";
import { CONTENT } from "../../data/content";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url('${CONTENT.ABOUT.BG_IMAGE}')` }}
    >
      {/* Overlay scuro cinematico */}
      <div className="absolute inset-0 bg-brand-navy/85 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Modificato: justify-center e max-w-6xl per avvicinare testo e foto verso il centro */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 max-w-6xl mx-auto">
          
          {/* TESTO A SINISTRA */}
          <div className="w-full md:w-1/2 text-white">
            <Reveal>
              <span className="text-brand-cream text-xs font-bold tracking-[0.3em] uppercase mb-4 block opacity-70">
                {CONTENT.ABOUT.BADGE}
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight whitespace-pre-line">
                {CONTENT.ABOUT.TITLE}
              </h2>
              <p className="text-lg md:text-xl font-sans font-light text-slate-200 mb-10 leading-relaxed max-w-lg">
                {CONTENT.ABOUT.DESCRIPTION}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-4 mb-12">
                {CONTENT.ABOUT.TECH_TAGS.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold tracking-widest uppercase border border-white/20 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* METHODOLOGY GRID - Centrata verticalmente per ogni elemento */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                {CONTENT.ABOUT.METHODOLOGY.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Centratura dell'icona rispetto al testo sottostante */}
                    <div className="flex flex-col items-center w-full md:w-fit">
                      <span className="text-2xl mb-3 block">{item.icon}</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* FOTO A DESTRA */}
          <div className="w-full md:w-5/12 flex justify-center">
            <Reveal delay={0.3}>
              <div className="relative">
                <img
                  src={CONTENT.ABOUT.IMAGE}
                  alt="Lorenzo Anzivino"
                  className="relative z-10 w-full max-w-sm shadow-2xl grayscale-[25%] hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4] rounded-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;