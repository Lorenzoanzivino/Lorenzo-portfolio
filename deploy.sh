#!/bin/bash

# --- CONFIGURAZIONE ---
SERVER_USER="root"
SERVER_IP="87.106.51.137"
FRONTEND_LOCAL_PATH="./frontend"
FRONTEND_REMOTE_PATH="/var/www/portfolio/frontend"
BACKEND_LOCAL_PATH="./backend"
BACKEND_REMOTE_PATH="/var/www/portfolio/backend"

echo "🚀 Avvio procedura di deploy cinematico..."

# 1. BUILD FRONTEND
echo "📦 Building del frontend in corso..."
cd $FRONTEND_LOCAL_PATH
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Errore durante la build. Deploy annullato."
    exit 1
fi
cd ..

# 2. TRASFERIMENTO FRONTEND (Solo cartella dist)
echo "📤 Trasferimento file frontend al server..."
# Usiamo rsync per trasferire solo le differenze (più veloce di scp)
rsync -avz --delete $FRONTEND_LOCAL_PATH/dist/ $SERVER_USER@$SERVER_IP:$FRONTEND_REMOTE_PATH

# 3. TRASFERIMENTO BACKEND (Opzionale - se hai modificato Python)
echo "🐍 Sincronizzazione file backend..."
rsync -avz --exclude 'venv' --exclude '__pycache__' $BACKEND_LOCAL_PATH/ $SERVER_USER@$SERVER_IP:$BACKEND_REMOTE_PATH

# 4. RIAVVIO SERVIZI SUL SERVER
echo "🔄 Riavvio Nginx e Backend Service..."
ssh $SERVER_USER@$SERVER_IP << EOF
    systemctl restart portfolio-backend
    systemctl restart nginx
    echo "✅ Servizi riavviati con successo."
EOF

echo "✨ Deploy completato! Il tuo portfolio è live."