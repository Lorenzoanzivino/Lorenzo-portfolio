import pytest
from app import create_app


@pytest.fixture
def app():
    # Creiamo l'app in modalità testing
    app = create_app()
    app.config.update(
        {
            "TESTING": True,
        }
    )
    yield app


@pytest.fixture
def client(app):
    # Forniamo un client per simulare le richieste HTTP
    return app.test_client()
