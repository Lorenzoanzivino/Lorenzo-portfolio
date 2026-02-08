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

  // Stili adattati per il look "Cinematic Dark"
  const inputStyles =
    "w-full bg-white/5 border border-white/10 p-4 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all shadow-sm placeholder:text-white/20 font-serif";
  const labelStyles =
    "text-xs font-bold uppercase tracking-widest text-white/60 ml-1";

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center bg-center bg-cover md:bg-fixed py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      {/* Overlay scuro cinematico */}
      <div className="absolute inset-0 bg-brand-navy/90 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Layout centrato e bilanciato (Max 6xl) per avvicinare gli elementi */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-6xl mx-auto">
          {/* INFO A SINISTRA */}
          <div className="w-full lg:w-5/12 text-white">
            <Reveal>
              <span className="text-brand-cream text-xs font-bold tracking-[0.3em] uppercase mb-4 block opacity-70">
                {CONTENT.CONTACT.BADGE}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                {CONTENT.CONTACT.TITLE_MAIN} <br />
                <span className="opacity-50 italic">
                  {CONTENT.CONTACT.TITLE_ITALIC}
                </span>
              </h2>
              <p className="text-base md:text-lg text-slate-300 font-sans font-light mb-10 leading-relaxed max-w-md">
                {CONTENT.CONTACT.DESCRIPTION}
              </p>

              <div className="pt-8 border-t border-white/10">
                <h4 className="font-serif text-white text-lg mb-2">
                  {CONTENT.CONTACT.SIDEBAR_NAME}
                </h4>
                <p className="font-sans text-xs text-white/60 mb-4 uppercase tracking-widest">
                  {CONTENT.CONTACT.SIDEBAR_TAGLINE}
                </p>
                <a
                  href={`mailto:${CONTENT.CONTACT.EMAIL_LINK}`}
                  className="text-xs font-bold tracking-widest uppercase text-white hover:text-brand-cream transition-colors underline decoration-white/30"
                >
                  {CONTENT.CONTACT.EMAIL_LINK}
                </a>
              </div>
            </Reveal>
          </div>

          {/* FORM A DESTRA */}
          <div className="w-full lg:w-7/12">
            <Reveal delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl">
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
                      className="w-full px-10 py-5 bg-white text-brand-navy font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-cream transition-all shadow-xl disabled:opacity-50"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
