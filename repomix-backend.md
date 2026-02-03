This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: backend/**/*.py, backend/requirements.txt, backend/run.py
- Files matching these patterns are excluded: **/venv/**, **/__pycache__/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
backend/
  app/
    routes/
      contact.py
    __init__.py
  requirements.txt
  run.py
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="backend/app/routes/contact.py">
import os
import smtplib
import ssl
import re
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Blueprint, request, jsonify, current_app

# Ritorno alla configurazione standard del Blueprint
contact_bp = Blueprint("contact", __name__)

# Configurazione Regex per validazione email
EMAIL_REGEX = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"


def _send_email_logic(name, user_email, message):
    """Funzione interna per l'invio email in formato testo semplice (Plain Text)."""
    smtp_server = os.getenv("MAIL_SERVER")
    smtp_port = int(os.getenv("MAIL_PORT", 587))
    sender_email = os.getenv("MAIL_USERNAME")
    password = os.getenv("MAIL_PASSWORD")
    recipient_email = os.getenv("RECIPIENT_EMAIL")

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = recipient_email
    msg["Subject"] = f"PORTFOLIO LEAD: {name}"

    body = f"""
    Nuovo contatto dal sito web.
    
    DETTAGLI MITTENTE:
    ------------------------------------------------
    Nome:  {name}
    Email: {user_email}
    ------------------------------------------------
    
    MESSAGGIO:
    {message}
    """
    msg.attach(MIMEText(body, "plain"))

    context = ssl.create_default_context()
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls(context=context)
        server.login(sender_email, password)
        server.sendmail(sender_email, recipient_email, msg.as_string())


@contact_bp.route("/", methods=["POST"])
def send_contact_email():
    data = request.get_json()

    # 1. HONEYPOT CHECK (Anti-Bot)
    if data.get("bot_check"):
        current_app.logger.warning(
            f"Bot rilevato e bloccato (Honeypot). Email fornita: {data.get('email')}"
        )
        return jsonify({"status": "success", "message": "Messaggio inviato"}), 200

    name = data.get("name", "").strip()
    user_email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    # 2. VALIDAZIONE DATI
    if not all([name, user_email, message]):
        return (
            jsonify({"status": "error", "message": "Tutti i campi sono obbligatori"}),
            400,
        )

    if not re.match(EMAIL_REGEX, user_email):
        return (
            jsonify({"status": "error", "message": "Indirizzo email non valido"}),
            400,
        )

    # 3. INVIO EMAIL
    try:
        _send_email_logic(name, user_email, message)
        current_app.logger.info(f"Email inviata con successo da: {user_email}")
        return (
            jsonify({"status": "success", "message": "Email inviata con successo"}),
            200,
        )

    except Exception as e:
        current_app.logger.error(f"Errore critico durante l'invio SMTP: {str(e)}")
        return (
            jsonify(
                {"status": "error", "message": "Errore del server, riprova più tardi."}
            ),
            500,
        )
</file>

<file path="backend/app/__init__.py">
import os
import logging
from flask import Flask
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv

# Carica le variabili d'ambiente
load_dotenv()

# Inizializzazione globale del Limiter
limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)


def create_app():
    """Application Factory per l'app Flask."""
    app = Flask(__name__)

    # 1. LOGGING
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    )
    logger = logging.getLogger(__name__)

    # 2. RATE LIMITER
    limiter.init_app(app)
    logger.info("Rate Limiter inizializzato.")

    # 3. CORS
    allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
    CORS(app, resources={r"/api/*": {"origins": allowed_origins}})
    logger.info(f"CORS configurato per: {allowed_origins}")

    # 4. BLUEPRINTS
    from app.routes.contact import contact_bp

    app.register_blueprint(contact_bp, url_prefix="/api/contact")

    return app
</file>

<file path="backend/requirements.txt">
aniso8601==10.0.1
blinker==1.9.0
click==8.3.1
Deprecated==1.3.1
Flask==3.0.3
Flask-Cors==4.0.1
Flask-Limiter==4.1.1
Flask-RESTful==0.3.10
itsdangerous==2.2.0
Jinja2==3.1.6
limits==5.6.0
MarkupSafe==3.0.3
ordered-set==4.1.0
packaging==25.0
python-dotenv==1.0.1
pytz==2025.2
six==1.17.0
typing_extensions==4.15.0
Werkzeug==3.1.4
wrapt==2.0.1
</file>

<file path="backend/run.py">
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
</file>

</files>
