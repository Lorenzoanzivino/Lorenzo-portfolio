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
