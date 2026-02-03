import os
from app import create_app

# Creazione dell'istanza tramite Application Factory
# Questo permette a Flask di essere importato correttamente anche da server WSGI (come Gunicorn)
app = create_app()

if __name__ == "__main__":
    # Estraiamo le configurazioni dall'ambiente per una maggiore flessibilità.
    # Questo ti permette di cambiare porta o host dal file .env senza modificare il codice.
    host = os.getenv("FLASK_HOST", "127.0.0.1")
    port = int(os.getenv("FLASK_PORT", 5000))

    # Converte la stringa del .env in un booleano reale
    debug_mode = os.getenv("FLASK_DEBUG", "True").lower() in ("true", "1", "t")

    app.run(host=host, port=port, debug=debug_mode)
