# Lorenzo Anzivino | Cinematic Portfolio & Visual Identity

[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Backend-Flask%203.0-000000?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com/)
[![Tailwind](https://img.shields.io/badge/Design-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Language-Python%203.10-3776AB?style=for-the-badge&logo=python)](https://www.python.org/)

Un'applicazione Full-Stack moderna che unisce un'estetica editoriale "cinematica" a un'architettura software solida e performante. Questo progetto rappresenta la mia identità digitale e il mio approccio allo sviluppo: cura maniacale per il design, codice pulito e soluzioni tecniche orientate alla sicurezza.

---

## 🎯 Cosa ho creato

Ho sviluppato un portfolio dinamico che va oltre il semplice sito statico. È una piattaforma composta da un **Frontend reattivo** ad alte prestazioni e un **Backend dedicato** per la gestione sicura delle interazioni e dei lead, ottimizzata per una narrazione visiva (Visual Identity) dei miei progetti core come _MyTrainUp_.

---

## 🛠️ Come l'ho creato (Tech Stack)

### Frontend: L'esperienza Utente

- **React + Vite**: Scelto per la velocità di rendering e la gestione efficiente dello stato.
- **Tailwind CSS**: Per un sistema di design custom basato su una palette "Cream & Charcoal" che richiama il mondo editoriale.
- **Framer Motion**: Utilizzato per implementare transizioni fluide e "reveal animations" che accompagnano l'utente durante lo scroll.

---

### Backend: L'infrastruttura

- **Flask (Python)**: Una micro-architettura per gestire le API di contatto in modo rapido e sicuro.
- **Flask-Limiter**: Protezione integrata contro il brute-force e lo spam sugli endpoint.
- **CORS Policy**: Configurazione granulare degli accessi per garantire che solo il frontend autorizzato possa comunicare con il server.

---

### ✅ Test & Qualità

Il progetto segue standard di sviluppo professionali con una copertura del codice verificata.

- **Framework**: Pytest + Pytest-Cov
- **Test Coverage**: 100% (Backend core logic)
- **Status**: ![Passed](https://img.shields.io/badge/tests-passed-brightgreen)

---

## ⚙️ Come funziona

Il progetto segue il paradigma della separazione delle responsabilità:

1.  **Interazione**: L'utente naviga in un'interfaccia "offline-first" e mobile-ready.
2.  **Sicurezza**: Il modulo di contatto integra una tecnica **Honeypot** (campo invisibile ai bot) per eliminare lo spam alla radice senza l'utilizzo di fastidiosi captcha.
3.  **Processamento**: Il backend riceve la richiesta, valida i dati tramite regex e logica server-side, e invia una notifica immediata via SMTP.

---

## 📂 Cosa contiene la Repository

Il codice è organizzato in modo modulare per facilitare la manutenzione:

```text
├── frontend/                   # Applicazione Client-side (React + Vite)
│   ├── src/components/         # Componenti modulari dell'interfaccia
│   ├── src/data/               # Single Source of Truth per i contenuti (content.js)
│   ├── src/services/           # Logiche per le chiamate API verso il backend
│   └── tailwind.config.js      # Definizione del Brand System e Design Tokens
├── backend/                    # Server-side API (Flask)
│   ├── app/routes/             # Definizione degli endpoint e logica di business
│   ├── tests/                  # Suite di test automatizzati (Pytest)
│   ├── htmlcov/                # Report grafici della Code Coverage
│   └── run.py                  # Entry point e configurazione dell'applicazione
└── README.md                   # Documentazione tecnica e architetturale
```

---

## 🚀 Setup Locale

### 1. Clonazione

```bash
git clone [https://github.com/tuo-username/lorenzo-anzivino-portfolio.git](https://github.com/tuo-username/lorenzo-anzivino-portfolio.git)
```

---

### 2. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Su Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 👨‍💻 Chi sono

### Lorenzo Anzivino - Full-Stack Developer & Visual Designer.

Lavoro seguendo un workflow rigoroso: Analisi → Progettazione → Implementazione → Refactor.

Questo portfolio è la prova tangibile del mio impegno nel trasformare idee complesse in prodotti digitali eleganti e funzionali.

[Email](mailto:lorenzoanzivinodigital@gmail.com) • [LinkedIn](https://www.linkedin.com/in/lorenzo-anzivino-dev) • [Portfolio Live](https://daCaricareAncora.it)

---

## 📄 Licenza

Questo progetto è sotto licenza MIT - vedi il file [LICENSE](LICENSE) per i dettagli.
