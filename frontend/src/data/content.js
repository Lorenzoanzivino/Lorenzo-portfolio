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

  // src/data/content.js

  PROJECTS: {
    HEADER_SUBTITLE: "SELECTED CASE STUDIES",
    HEADER_TITLE: "Development & Design",
    // Sfondo cinematico scuro (puoi cambiare il file in /public/project.jpg)
    BG_IMAGE:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    PROJECT_LINK_TEXT: "ANALISI TECNICA",
    FOOTER_QUOTE: '"Il software è una combinazione di arte e ingegneria."',
    FOOTER_CTA: "APRI UNA COLLABORAZIONE",
    DATA: [
      {
        title: "MyTrainUp",
        subtitle: "L'Ecosistema Fitness Digitale",
        category: "Full-Stack Application",
        description:
          "Piattaforma gestionale per personal trainer. Il cuore del sistema è un motore JSON-based che genera piani di allenamento dinamici, integrando logica offline-first e monitoraggio dei progressi in tempo reale.",
        tech: ["React 19", "Python Flask", "PostgreSQL", "JSON Engines"],
        images: ["/mytrainup/iphoneWebApp.jpeg"],
        year: "2024",
        href: "https://github.com/Lorenzoanzivino/MyTrainUp-public",
      },
      {
        title: "Java Enterprise Lab",
        subtitle: "Core Ecosystem & Design Patterns",
        category: "Backend Development",
        description:
          "Sviluppo di moduli Java Enterprise focalizzati sulla scalabilità. Implementazione di design pattern avanzati e gestione delle dipendenze per la costruzione di backend robusti e manutenibili.",
        tech: ["Java", "Spring Boot", "Eclipse", "Maven", "oop"],
        images: [
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        ],
        year: "In Sviluppo",
        href: "https://github.com/Lorenzoanzivino/workspace_java_eclipse",
      },
      {
        title: "Esercizi ITS Academy",
        subtitle: "Cloud & Cyber Security Research",
        category: "Infrastructure & Dev",
        description:
          "Laboratorio tecnico dedicato all'analisi di architetture cloud, database relazionali e sicurezza informatica. Una raccolta di implementazioni OOP e configurazioni di rete per sistemi moderni.",
        tech: ["Cloud Arch", "SQL", "Cyber Security", "OOP"],
        images: [
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        ],
        year: "In Sviluppo",
        href: "https://github.com/Lorenzoanzivino/Esercizi_ITS",
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
