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
