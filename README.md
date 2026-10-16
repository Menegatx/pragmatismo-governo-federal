# Brasil Transparente | Auditoria Pragmática do Governo Federal (Lula 3)

Plataforma cívica e suprapartidária de fiscalização contábil, orçamentária e material do Governo Federal (gestão Luiz Inácio Lula da Silva: 2023–2026).

---

## 🎯 Princípios Metodológicos
1. **Pragmatismo Político & Materialismo**: Análise estritamente focada na materialidade dos números (no bolso e no prato do trabalhador), descartando ruído ideológico, memes e guerras de torcidas partidárias.
2. **Storytelling com Dados (Cole Nussbaumer Knaflic)**: Tradução do Orçamento Geral da União (R$ 5,5 trilhões) para a escala doméstica de uma família de R$ 10.000 mensais ("A Casa do Brasil").
3. **Equilíbrio Técnico e Imparcialidade**: Reconhecimento factual de conquistas reais (desemprego em 6,4%, aumento real do salário mínimo, saída de 24 milhões do mapa da fome) e denúncia contundente de gargalos e riscos (o ralo de R$ 748 bilhões anuais de juros pagos a rentistas, a dívida pública em 78% do PIB e o sequestro de mais de R$ 53 bilhões pelo Centrão em emendas parlamentares).
4. **Blindagem Jurídica e Dados Abertos**: Fundamentado na Constituição Federal de 1988 (Art. 5º, IV, IX e XIV), Lei de Acesso à Informação (Lei 12.527/11) e jurisprudência vinculante do STF (ADPF 130).

---

## 📊 Fontes de Dados Primárias Oficiais
- **Tesouro Nacional**: Relatórios do Tesouro Nacional (RTN) e Declaração de Contas Federais.
- **Banco Central do Brasil (API SGS)**: Séries temporais de Selic, dívida bruta e despesas financeiras.
- **IBGE (PNAD Contínua & SIDRA)**: Taxa de desocupação, rendimento médio real habitual e IPCA.
- **SIOP / Congresso Nacional**: Execução das Emendas Individuais, de Bancada e Emendas Pix.
- **Tribunal Superior Eleitoral (TSE)**: Diretrizes do Programa de Governo da Coligação Brasil da Esperança (2022).
- **ONU / FAO**: Relatório SOFI 2024 sobre segurança alimentar global.

---

## 🛠️ Tecnologias Utilizadas
- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide React, Recharts.
- **Pipeline de Dados & PDF**: Python 3, ReportLab (Geração de Dossiê Multipage com `NumberedCanvas`).

---

## 🚀 Como Executar Localmente
```bash
# 1. Instalar dependências Node
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev

# 3. Gerar o Dossiê em PDF (8 Páginas)
.venv/bin/python pipeline/generate_federal_pdf.py

# 4. Build de Produção
npm run build
```
