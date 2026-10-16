#!/usr/bin/env python3
"""
Gerador de Dossiê Cívico Federal Completo em PDF (8 Páginas)
Auditoria Pragmática e Materialista das Contas do Governo Federal (Lula 3: 2023-2026)
Utiliza ReportLab com Canvas numerado, paginação 'Página X de Y' e layout profissional.
"""

import os
import json
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.pdfgen import canvas

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "data")
PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "..", "public")
os.makedirs(PUBLIC_DIR, exist_ok=True)
PDF_OUTPUT = os.path.join(PUBLIC_DIR, "dossie-auditoria-governo-federal.pdf")


class NumberedCanvas(canvas.Canvas):
    """Canvas de dois passos para calcular o total exato de páginas (Página X de Y)."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))

        # Cabeçalho em todas as páginas exceto na Capa (Página 1)
        if self._pageNumber > 1:
            self.setStrokeColor(colors.HexColor("#334155"))
            self.setLineWidth(0.5)
            self.line(1.5 * cm, 28.5 * cm, 19.5 * cm, 28.5 * cm)
            self.drawString(1.5 * cm, 28.7 * cm, "BRASIL TRANSPARENTE • AUDITORIA PRAGMÁTICA DO GOVERNO FEDERAL (LULA 3)")
            self.drawRightString(19.5 * cm, 28.7 * cm, "OUTUBRO/2026 • DADOS OFICIAIS")

        # Rodapé em todas as páginas
        self.setStrokeColor(colors.HexColor("#334155"))
        self.setLineWidth(0.5)
        self.line(1.5 * cm, 1.8 * cm, 19.5 * cm, 1.8 * cm)
        self.drawString(1.5 * cm, 1.3 * cm, "Documento de Controle Social Cívico • Lei de Acesso à Informação (Lei 12.527/11) • CF/88 Art. 5º")
        self.drawRightString(19.5 * cm, 1.3 * cm, f"Página {self._pageNumber} de {page_count}")
        self.restoreState()


def build_pdf():
    print("[*] Gerando Dossiê Cívico do Governo Federal em PDF (8 Páginas)...")
    
    # Carregando dados JSON
    with open(os.path.join(DATA_DIR, "macro_fiscal.json"), "r", encoding="utf-8") as f:
        macro = json.load(f)
    with open(os.path.join(DATA_DIR, "trabalhador_social.json"), "r", encoding="utf-8") as f:
        trabalhador = json.load(f)
    with open(os.path.join(DATA_DIR, "emendas_congresso.json"), "r", encoding="utf-8") as f:
        emendas = json.load(f)
    with open(os.path.join(DATA_DIR, "promessometro_federal.json"), "r", encoding="utf-8") as f:
        promessas = json.load(f)
    with open(os.path.join(DATA_DIR, "storytelling_brasil.json"), "r", encoding="utf-8") as f:
        storytelling = json.load(f)
    with open(os.path.join(DATA_DIR, "veredito_pragmatico.json"), "r", encoding="utf-8") as f:
        veredito = json.load(f)

    doc = SimpleDocTemplate(
        PDF_OUTPUT,
        pagesize=A4,
        leftMargin=1.5 * cm,
        rightMargin=1.5 * cm,
        topMargin=2.2 * cm,
        bottomMargin=2.2 * cm
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    c_primary = colors.HexColor("#0284c7")
    c_dark = colors.HexColor("#0f172a")
    c_slate = colors.HexColor("#334155")
    c_muted = colors.HexColor("#64748b")
    c_green = colors.HexColor("#10b981")
    c_red = colors.HexColor("#ef4444")

    style_title = ParagraphStyle('DocTitle', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=24, leading=28, textColor=c_dark)
    style_subtitle = ParagraphStyle('DocSub', parent=styles['Normal'], fontName='Helvetica', fontSize=12, leading=16, textColor=c_muted)
    style_h1 = ParagraphStyle('SectionH1', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=15, leading=19, textColor=c_primary, spaceBefore=8, spaceAfter=6)
    style_h2 = ParagraphStyle('SectionH2', parent=styles['Heading3'], fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=c_dark, spaceBefore=6, spaceAfter=4)
    style_body = ParagraphStyle('BodyDark', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=13, textColor=c_dark)
    style_callout = ParagraphStyle('Callout', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=9, leading=13, textColor=c_slate)
    style_th = ParagraphStyle('TH', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=colors.white)
    style_td = ParagraphStyle('TD', parent=styles['Normal'], fontName='Helvetica', fontSize=8, leading=10, textColor=c_dark)
    style_td_bold = ParagraphStyle('TDBold', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=c_dark)

    story = []

    # =========================================================================
    # PÁGINA 1: CAPA INSTITUCIONAL & SUMÁRIO EXECUTIVO
    # =========================================================================
    story.append(Spacer(1, 1.5 * cm))
    story.append(Paragraph("DOSSIÊ DE AUDITORIA CÍVICA NACIONAL", ParagraphStyle('SubCapa', fontName='Helvetica-Bold', fontSize=11, leading=13, textColor=c_primary)))
    story.append(Spacer(1, 0.3 * cm))
    story.append(Paragraph("Raio-X Materialista e Suprapartidário das Contas do Governo Federal (Lula 3)", style_title))
    story.append(Spacer(1, 0.4 * cm))
    story.append(Paragraph("Uma auditoria independente focada na materialidade dos números, na mesa do trabalhador e nos gargalos das finanças públicas do Brasil (2023–2026).", style_subtitle))
    story.append(Spacer(1, 0.8 * cm))
    story.append(HRFlowable(width="100%", thickness=2, color=c_primary, spaceBefore=5, spaceAfter=15))

    kpi_table_data = [
        [
            Paragraph("<b>ORÇAMENTO ANUAL</b><br/><font size=13 color='#0f172a'><b>R$ 5,5 Trilhões</b></font><br/><font size=7 color='#64748b'>Volume total do OGU</font>", style_td),
            Paragraph("<b>DESEMPREGO (IBGE)</b><br/><font size=13 color='#10b981'><b>6,4%</b></font><br/><font size=7 color='#64748b'>Mínima histórica em 10 anos</font>", style_td),
            Paragraph("<b>JUROS DA DÍVIDA</b><br/><font size=13 color='#ef4444'><b>R$ 748 Bilhões/ano</b></font><br/><font size=7 color='#64748b'>Dreno pago a rentistas</font>", style_td),
            Paragraph("<b>EMENDAS CONGRESSO</b><br/><font size=13 color='#f59e0b'><b>R$ 53,2 Bilhões</b></font><br/><font size=7 color='#64748b'>Pico de poder do Centrão</font>", style_td),
        ]
    ]
    t_kpi = Table(kpi_table_data, colWidths=[4.2*cm, 4.2*cm, 4.4*cm, 4.2*cm])
    t_kpi.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_kpi)

    story.append(Spacer(1, 0.8 * cm))
    story.append(Paragraph("1. Apresentação e Propósito Deste Documento", style_h1))
    story.append(Paragraph(
        "O presente dossiê tem como finalidade submeter a gestão do Governo Federal (exercício 2023 a 2026, mandato de Luiz Inácio Lula da Silva) a um rigoroso escrutínio materialista, técnico e estritamente suprapartidário. No debate público brasileiro, as discussões sobre finanças públicas costumam ser contaminadas por polarização ideológica vazia, memes e narrativas de torcida organizada. Este trabalho substitui o ruído pelo rastro frio dos números oficiais.",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))
    story.append(Paragraph(
        "Todas as informações aqui consolidadas foram extraídas de bases públicas primárias: <b>Tesouro Nacional (RTN)</b>, <b>Banco Central do Brasil (SGS)</b>, <b>Instituto Brasileiro de Geografia e Estatística (IBGE/PNAD)</b>, <b>Sistema Integrado de Planejamento e Orçamento (SIOP)</b> e <b>Tribunal Superior Eleitoral (TSE)</b>.",
        style_body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 2: STORYTELLING - "A CASA DA REPÚBLICA"
    # =========================================================================
    story.append(Paragraph("2. Storytelling com Dados: A Casa da República", style_h1))
    story.append(Paragraph(
        "<i>Metodologia baseada nos princípios de Cole Nussbaumer Knaflic ('Storytelling com Dados'): traduzir números na escala de trilhões de reais para o orçamento doméstico do trabalhador comum.</i>",
        style_callout
    ))
    story.append(Spacer(1, 0.4 * cm))
    story.append(Paragraph(
        "Falar em R$ 5,5 trilhões de reais é abstrato demais para qualquer cidadão. Para entender a real prioridade das finanças do Brasil, imagine que toda a arrecadação da União fosse o salário mensal de uma família de <b>R$ 10.000,00</b>. Veja para onde vai cada real:",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))

    casa_rows = [
        [Paragraph("Destinação no Orçamento Familiar", style_th), Paragraph("Valor Proporcional", style_th), Paragraph("% do Total", style_th), Paragraph("O que Significa na Prática para a Casa", style_th)]
    ]
    for item in storytelling["itens"]:
        casa_rows.append([
            Paragraph(f"<b>{item['titulo']}</b>", style_td),
            Paragraph(f"<b>{item['valor']}</b>", style_td_bold),
            Paragraph(item["percentual"], style_td),
            Paragraph(item["descricao"], style_td)
        ])
    t_casa = Table(casa_rows, colWidths=[5.0*cm, 2.5*cm, 2.0*cm, 7.5*cm])
    t_casa.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_dark),
        ('ALIGN', (1,1), (2,-1), 'CENTER'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_casa)

    story.append(Spacer(1, 0.5 * cm))
    story.append(Paragraph("<b>A Lição Central da Casa:</b>", style_h2))
    story.append(Paragraph(
        "Enquanto <b>R$ 2.720</b> são entregues religiosamente todo mês ao gerente do banco para pagar juros do cartão de crédito da casa (dívida pública), sobram míseros <b>R$ 310</b> para consertar o telhado, trocar o encanamento e pavimentar a entrada (investimentos em infraestrutura). Essa é a trava estrutural do desenvolvimento brasileiro.",
        style_body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 3: O BOLSO E A MESA DO TRABALHADOR
    # =========================================================================
    story.append(Paragraph("3. O Bolso e a Mesa: Condições Materiais da População", style_h1))
    story.append(Paragraph(
        "A avaliação pragmática de qualquer governo começa por onde a vida acontece: no estômago, na carteira de trabalho e no carrinho de supermercado da classe trabalhadora.",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))

    social_rows = [
        [Paragraph("Indicador Social / Econômico", style_th), Paragraph("Fim de 2022", style_th), Paragraph("Gestão Lula 3", style_th), Paragraph("Variação Real & Impacto Factual", style_th)]
    ]
    for ind in trabalhador["indicadores_sociais"]:
        social_rows.append([
            Paragraph(f"<b>{ind['indicador']}</b>", style_td),
            Paragraph(ind["valor_2022"], style_td),
            Paragraph(f"<b>{ind['valor_atual']}</b>", style_td_bold),
            Paragraph(f"<b>{ind['variacao_real']}</b>: {ind['impacto']}", style_td)
        ])
    t_social = Table(social_rows, colWidths=[4.2*cm, 2.5*cm, 2.8*cm, 7.5*cm])
    t_social.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_dark),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_social)

    story.append(Spacer(1, 0.5 * cm))
    story.append(Paragraph("Comportamento da Inflação de Alimentos e Cesta Básica:", style_h2))
    
    inf_rows = [
        [Paragraph("Item / Segmento de Preços", style_th), Paragraph("2022 (Base)", style_th), Paragraph("Lula 3 (2024/2026)", style_th), Paragraph("Diagnóstico Material", style_th)]
    ]
    for inf in trabalhador["inflacao_detalhada"]:
        inf_rows.append([
            Paragraph(f"<b>{inf['item']}</b>", style_td),
            Paragraph(inf["valor_2022"], style_td),
            Paragraph(f"<b>{inf['valor_atual']}</b>", style_td_bold),
            Paragraph(inf["status"], style_td)
        ])
    t_inf = Table(inf_rows, colWidths=[4.5*cm, 2.8*cm, 2.8*cm, 6.9*cm])
    t_inf.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#1e293b")),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_inf)
    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 4: FINANÇAS PÚBLICAS, DÍVIDA E JUROS
    # =========================================================================
    story.append(Paragraph("4. Macroeconomia Fiscal: O Ralo dos Juros e o Arcabouço", style_h1))
    story.append(Paragraph(
        "A sustentabilidade de uma nação repousa no equilíbrio entre arrecadação, despesas produtivas e o custo do endividamento público. A seguir, auditamos a trajetória fiscal dos últimos anos:",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))

    fisc_rows = [
        [Paragraph("Ano", style_th), Paragraph("Governo", style_th), Paragraph("Primário (R$ Bi)", style_th), Paragraph("Dívida/PIB", style_th), Paragraph("Selic", style_th), Paragraph("Investimento", style_th)]
    ]
    for row in macro["evolucao_fiscal"]:
        cor_prim = "#10b981" if row["resultado_primario"] > 0 else "#ef4444"
        fisc_rows.append([
            Paragraph(row["ano"], style_td_bold),
            Paragraph(row["presidente"], style_td),
            Paragraph(f"<font color='{cor_prim}'><b>{row['resultado_primario']:+.1f}</b></font>", style_td),
            Paragraph(f"{row['divida_pib']:.1f}%", style_td),
            Paragraph(f"{row['selic']:.2f}%", style_td),
            Paragraph(f"R$ {row['investimento_real']:.1f} Bi", style_td)
        ])
    t_fisc = Table(fisc_rows, colWidths=[2.0*cm, 3.2*cm, 3.0*cm, 2.8*cm, 2.5*cm, 3.5*cm])
    t_fisc.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_dark),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('ALIGN', (0,1), (-1,-1), 'CENTER'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_fisc)

    story.append(Spacer(1, 0.6 * cm))
    story.append(Paragraph("Análise do Arcabouço Fiscal e Desafios de Arrecadação:", style_h2))
    story.append(Paragraph(
        "O Arcabouço Fiscal (Lei Complementar 200/2023) substituiu o Teto de Gastos com o objetivo de compatibilizar responsabilidade fiscal com investimentos sociais. No entanto, sua mecânica depende intrinsecamente de um <b>crescimento contínuo de receitas extraordinárias</b> (tributação de fundos de super-ricos, offshores, apostas esportivas e renegociação de contencioso tributário no Carf).",
        style_body
    ))
    story.append(Spacer(1, 0.3 * cm))
    story.append(Paragraph(
        "<b>O Gargalo Estrutural:</b> A dívida bruta saltou para próximo de 78% do PIB. Como a taxa Selic permaneceu em patamares elevados (entre 10,5% e 12,25%), a fatura de juros da dívida atingiu cerca de <b>R$ 748 bilhões anuais</b>. Isso significa que mais de 7% do PIB brasileiro é drenado anualmente para remunerar detentores de títulos da dívida, limitando o espaço de manobra do Estado para serviços essenciais.",
        style_body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 5: O "SEQUESTRO" DO ORÇAMENTO PELO CENTRÃO
    # =========================================================================
    story.append(Paragraph("5. Emendas Parlamentares e o 'Sequestro' do Orçamento", style_h1))
    story.append(Paragraph(
        "Nenhum diagnóstico do Governo Federal é honesto sem expor a fratura institucional no controle das verbas públicas: o Poder Executivo perdeu progressivamente o poder de alocação orçamentária para o Congresso Nacional.",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))

    em_rows = [
        [Paragraph("Ano de Referência", style_th), Paragraph("Volume de Emendas", style_th), Paragraph("Marco Institucional / Modelo de Repasse", style_th)]
    ]
    for em in emendas["serie_historica"]:
        em_rows.append([
            Paragraph(em["ano"], style_td_bold),
            Paragraph(f"<b>R$ {em['valor_bi']:.1f} Bilhões</b>", style_td),
            Paragraph(em["rotulo"], style_td)
        ])
    t_em = Table(em_rows, colWidths=[3.5*cm, 4.0*cm, 9.5*cm])
    t_em.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#78350f")),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#fef3c7")]),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#fde68a")),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_em)

    story.append(Spacer(1, 0.6 * cm))
    story.append(Paragraph("As 3 Deformações Materiais das Emendas Impositivas:", style_h2))
    for prob in emendas["problemas_materiais"]:
        story.append(Paragraph(f"• <b>{prob['titulo']}</b>: {prob['descricao']}", style_body))
        story.append(Spacer(1, 0.2 * cm))

    story.append(Spacer(1, 0.4 * cm))
    story.append(Paragraph(
        "<b>Conclusão Institucional:</b> Em 2024, a intervenção do Supremo Tribunal Federal (decisões do Min. Flávio Dino) paralisando as 'Emendas Pix' colocou freio na sangria e exigiu transparência de destinação. No entanto, o custo político para o Executivo governar sem ceder bilhões a líderes partidários continua sendo um dos maiores entraves do país.",
        style_body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 6: PROMESSÔMETRO FEDERAL (TSE VS. REALIDADE)
    # =========================================================================
    story.append(Paragraph("6. Promessômetro Federal: Plano de Governo Registrado no TSE", style_h1))
    story.append(Paragraph(
        "Confronto técnico entre as principais diretrizes registradas no Tribunal Superior Eleitoral pela Coligação Brasil da Esperança em 2022 e o que foi efetivamente executado até o momento:",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))

    prom_rows = [
        [Paragraph("Compromisso de Campanha", style_th), Paragraph("Status", style_th), Paragraph("%", style_th), Paragraph("Realidade Material Auditada", style_th)]
    ]
    for p in promessas["metas"]:
        cor_st = "#10b981" if p["cor"] == "emerald" else ("#f59e0b" if p["cor"] == "amber" else "#ef4444")
        prom_rows.append([
            Paragraph(f"<b>{p['titulo']}</b>", style_td),
            Paragraph(f"<font color='{cor_st}'><b>{p['status']}</b></font>", style_td),
            Paragraph(f"<b>{p['percentual']}%</b>", style_td_bold),
            Paragraph(p["realidade_auditada"], style_td)
        ])
    t_prom = Table(prom_rows, colWidths=[4.5*cm, 3.2*cm, 1.6*cm, 7.7*cm])
    t_prom.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_dark),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('ALIGN', (2,1), (2,-1), 'CENTER'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_prom)

    story.append(Spacer(1, 0.5 * cm))
    story.append(Paragraph(
        "<b>Índice Médio de Cumprimento: 62,5%</b>. Destaque absoluto para as vitórias na área social e na Reforma Tributária, contrastadas pela paralisia no corte de privilégios corporativos e no ritmo lento de execução de grandes obras do PAC.",
        style_callout
    ))
    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 7: O PAPEL DA MÍDIA & COBERTURA PLURAL
    # =========================================================================
    story.append(Paragraph("7. Painel Plural da Mídia: Fatos Cruzados Sem Monopólio", style_h1))
    story.append(Paragraph(
        "Para garantir que a análise não seja contaminada por viés ideológico de veículos específicos, compilamos a cobertura jornalística sobre a gestão federal cruzando diferentes espectros editoriais:",
        style_body
    ))
    story.append(Spacer(1, 0.4 * cm))

    from reportlab.platypus import KeepTogether
    with open(os.path.join(DATA_DIR, "noticias_plurais.json"), "r", encoding="utf-8") as f:
        noticias = json.load(f)

    for n in noticias:
        cor_pol = "#10b981" if n["polaridade"] == "Positiva" else ("#ef4444" if n["polaridade"] == "Crítica" else "#0284c7")
        box_data = [
            [
                Paragraph(f"<b>{n['veiculo']}</b> ({n['tipo_veiculo']}) • <font color='{cor_pol}'><b>{n['polaridade']}</b></font>", style_td_bold),
                Paragraph(n['data'], style_td)
            ],
            [
                Paragraph(f"<b>{n['titulo']}</b>", style_td),
                Paragraph("", style_td)
            ],
            [
                Paragraph(f"<font color='#475569'>{n['resumo']}</font>", style_td),
                Paragraph("", style_td)
            ]
        ]
        t_box = Table(box_data, colWidths=[14.0*cm, 3.0*cm])
        t_box.setStyle(TableStyle([
            ('SPAN', (0,1), (1,1)),
            ('SPAN', (0,2), (1,2)),
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
            ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
            ('TOPPADDING', (0,0), (-1,-1), 3),
            ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ]))
        story.append(t_box)
        story.append(Spacer(1, 0.25 * cm))

    story.append(PageBreak())

    # =========================================================================
    # PÁGINA 8: VEREDITO PRAGMÁTICO & BLINDAGEM JURÍDICA
    # =========================================================================
    story.append(Paragraph("8. Veredito Pragmático, Recomendações e Amparo Legal", style_h1))
    story.append(Paragraph(
        "Com base na estrita materialidade contábil, social e institucional, consolida-se o balanço técnico da gestão federal:",
        style_body
    ))
    story.append(Spacer(1, 0.3 * cm))

    ver_table_data = [
        [
            Paragraph("<font color='#065f46'><b>ACERTOS E VITÓRIAS REAIS DA SOCIEDADE</b></font>", style_td_bold),
            Paragraph("<font color='#991b1b'><b>ERROS, GARGALOS E AVISOS DE RISCO</b></font>", style_td_bold)
        ]
    ]
    pos_text = "".join([f"• <b>{p['titulo']}</b>: {p['detalhe']}<br/><br/>" for p in veredito["pontos_positivos"]])
    neg_text = "".join([f"• <b>{g['titulo']}</b>: {g['detalhe']}<br/><br/>" for g in veredito["gargalos_criticos"]])
    ver_table_data.append([
        Paragraph(pos_text, style_td),
        Paragraph(neg_text, style_td)
    ])
    t_ver = Table(ver_table_data, colWidths=[8.5*cm, 8.5*cm])
    t_ver.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,0), colors.HexColor("#d1fae5")),
        ('BACKGROUND', (1,0), (1,0), colors.HexColor("#fee2e2")),
        ('BACKGROUND', (0,1), (0,1), colors.HexColor("#f0fdf4")),
        ('BACKGROUND', (1,1), (1,1), colors.HexColor("#fef2f2")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#94a3b8")),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_ver)

    story.append(Spacer(1, 0.4 * cm))
    story.append(Paragraph("Declaração de Amparo Legal e Isenção de Responsabilidade:", style_h2))
    story.append(Paragraph(
        "Este dossiê constitui ato legítimo de controle social cívico e fiscalização da gestão pública republicana, expressamente protegido pela <b>Constituição Federal de 1988 (Art. 5º, incisos IV, IX e XIV)</b> e pela <b>Lei de Acesso à Informação (Lei nº 12.527/2011)</b>. Conforme pacificado pelo <b>Supremo Tribunal Federal na ADPF 130</b>, a compilação e reprodução fidedigna de dados constantes em registros oficiais do Estado não configura calúnia, difamação ou qualquer tipo ilícito, estando imune a perseguições ou cerceamentos.",
        style_callout
    ))
    story.append(Spacer(1, 0.4 * cm))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=5, spaceAfter=8))
    story.append(Paragraph(
        "<b>Plataforma Brasil Transparente</b> • Código e Metodologia 100% Abertos e Auditáveis.",
        ParagraphStyle('FooterNotice', fontName='Helvetica', fontSize=8, leading=10, textColor=c_muted, alignment=1)
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"[+] Dossiê Federal em PDF gerado com sucesso em: {PDF_OUTPUT}")


if __name__ == "__main__":
    build_pdf()
