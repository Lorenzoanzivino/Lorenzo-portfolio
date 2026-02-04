def test_contact_success(client):
    """Test 1: Verifica che un invio con dati corretti funzioni."""
    payload = {
        "name": "Lorenzo Test",
        "email": "test@lorenzo.it",
        "message": "Questa è una prova tecnica di invio.",
    }
    response = client.post("/api/contact/", json=payload)

    assert response.status_code == 200
    assert response.json["status"] == "success"


def test_contact_honeypot(client):
    """Test 2: Verifica che il bot_check (Honeypot) blocchi l'invio (restituendo 200 ma ignorandolo)."""
    payload = {
        "name": "Bot",
        "email": "bot@spam.com",
        "message": "I am a bot",
        "bot_check": "I am filling this hidden field",  # Il bot abbocca
    }
    response = client.post("/api/contact/", json=payload)

    assert response.status_code == 200
    assert response.json["message"] == "Messaggio inviato"
    # Nota: restituiamo 200 per non far capire al bot di essere stato scoperto!


def test_contact_invalid_email(client):
    """Test 3: Verifica che un'email malformata venga rifiutata."""
    payload = {
        "name": "User",
        "email": "email_sbagliata.com",
        "message": "Messaggio di prova",
    }
    response = client.post("/api/contact/", json=payload)

    assert response.status_code == 400
    assert response.json["status"] == "error"
