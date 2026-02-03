import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";

/**
 * Punto di ingresso principale dell'applicazione React.
 * Gestisce i wrapper globali, le utility di stile per l'intero viewport
 * e le animazioni di montaggio/smontaggio dei componenti.
 */
function App() {
  return (
    <div
      className="min-h-screen font-sans antialiased selection:bg-brand-navy selection:text-white"
      style={{ backgroundColor: "#F4F4F0" }} // Imposta il brand-cream come base per evitare flash bianchi
    >
      <AnimatePresence mode="wait">
        <Home />
      </AnimatePresence>
    </div>
  );
}

export default App;
