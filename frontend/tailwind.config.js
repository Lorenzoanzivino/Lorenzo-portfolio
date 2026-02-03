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
