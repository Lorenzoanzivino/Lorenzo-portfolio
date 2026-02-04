export const CONTENT = {
  NAVBAR: {
    LOGO_NAME: "Lorenzo",
    LINK_HOME: "Home",
    LINK_EXPERTISE: "Competenze",
    LINK_PROJECTS: "Progetti",
    LINK_ABOUT: "Chi sono",
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
  // Aggiungi o aggiorna in src/data/content.js
  SERVICES: {
    BLOCK_01: {
      LABEL: "01 — Frontend Development",
      TITLE: "Interfacce \n Reattive.",
      DESCRIPTION:
        "Sviluppo UI moderne e performanti con focus sulla User Experience. Utilizzo i tool più recenti per garantire velocità di caricamento e interazioni fluide.",
      ITEMS: [
        "React 19 & React Hooks",
        "Tailwind CSS & Vite",
        "Framer Motion (Animations)",
        "UI/UX Design Patterns",
      ],
      CTA: "ESPLORA IL CODICE",
      HREF: "https://github.com/Lorenzoanzivino/Lorenzo-portfolio",
      EXTERNAL: true,
    },
    BLOCK_02: {
      LABEL: "02 — Backend & Architecture",
      TITLE: "Sistemi & \n Logiche.",
      DESCRIPTION:
        "Progettazione di architetture server-side robuste e scalabili. Gestione efficiente del dato e implementazione di logiche di business complesse.",
      ITEMS: [
        "Python Flask & REST API",
        "Java & Spring Boot",
        "PostgreSQL / SQLite",
        "Database Design & Auth",
      ],
      CTA: "ANALISI BACKEND",
      HREF: "https://github.com/Lorenzoanzivino/MyTrainUp-public",
      EXTERNAL: true,
    },
    BLOCK_03: {
      LABEL: "03 — Full-Stack Lifecycle",
      TITLE: "Sinergia Totale",
      DESCRIPTION:
        "Unisco Frontend e Backend in un unico ecosistema scalabile, gestendo l'intero ciclo di vita del prodotto, dall'analisi al deployment.",
      GRID: [
        {
          t: "Git Workflow",
          d: "Branching strategy professionale, PR e gestione dei conflitti per un codice pulito.",
        },
        {
          t: "Cloud Deploy",
          d: "Configurazione server Linux, Nginx, Gunicorn e certificati SSL per la messa in produzione.",
        },
        {
          t: "MVP Analysis",
          d: "Approccio strutturato: Analisi → Design → Implementazione → Test → Release.",
        },
      ],
      CTA: "COLLABORIAMO",
      HREF: "https://github.com/Lorenzoanzivino",
      EXTERNAL: true,
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
  ABOUT: {
    BADGE: "PROFILE",
    TITLE: "Oltre lo \n schermo.",
    DESCRIPTION:
      "Application Cloud Developer specializzato nello sviluppo di applicazioni web e backend full-stack. Unisco la precisione dell'ingegneria software con la visione del design system, progettando soluzioni scalabili e manutenibili. Utilizzo metodologie moderne di sviluppo e deployment cloud per trasformare requisiti complessi in applicazioni affidabili e performanti.",
    IMAGE: "/FotoPortFolio.jpeg",
    BG_IMAGE:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    TECH_TAGS: ["Python", "Java", "Javascript", "PostgreSQL", "Docker"],
    METHODOLOGY: [
      { label: "Analisi", icon: "🔍" },
      { label: "Progettazione", icon: "📐" },
      { label: "Implementazione", icon: "💻" },
      { label: "Refactor & Test", icon: "🧪" },
    ],
  },
};
