import { useState, useEffect, useCallback } from "react";
import { CONTENT } from "../../data/content";

// 1. Centralizzazione dei Link (Dati strutturali + Testi da content.js)
const getNavLinks = () => [
  { name: CONTENT.NAVBAR.LINK_HOME, href: "#" },
  { name: CONTENT.NAVBAR.LINK_ABOUT, href: "#about" },
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
