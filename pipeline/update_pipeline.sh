#!/bin/bash
set -e

echo "[*] Sincronizando dados públicos do Governo Federal..."
.venv/bin/python pipeline/fetch_federal_data.py

echo "[*] Gerando Dossiê Cívico Federal em PDF (8 Páginas)..."
.venv/bin/python pipeline/generate_federal_pdf.py

echo "[*] Executando build de produção com Vite..."
npm run build

echo "[+] Atualização concluída com sucesso!"
