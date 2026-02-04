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
