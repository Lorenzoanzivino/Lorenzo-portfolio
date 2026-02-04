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
