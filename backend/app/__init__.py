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
