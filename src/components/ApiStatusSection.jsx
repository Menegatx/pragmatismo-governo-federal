import React from 'react'
import { Database, FileText, Download, CheckCircle, Shield, RefreshCw, ArrowUpRight } from 'lucide-react'

export default function ApiStatusSection() {
  return (
    <section id="api-status" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Painel da API e Integração Contínua */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <Database className="w-3.5 h-3.5" />
              <span>Pipeline Automatizado de Dados Federais</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Bases Primárias Oficiais e Auditadas
            </h3>

            <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
              Todos os dados desta auditoria são obtidos diretamente dos bancos de dados públicos oficiais da União, sem manipulação de planilhas locais ou filtros partidários:
            </p>

            {/* Status das APIs */}
            <div className="mt-6 space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div>
                    <div className="text-xs font-bold text-white">Tesouro Nacional (RTN & Balanços Fiscais)</div>
                    <div className="text-[10px] text-slate-400 font-mono">tesouronacional.fazenda.gov.br • Relatórios RTN</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  SINCRONIZADO
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div>
                    <div className="text-xs font-bold text-white">Banco Central do Brasil (API SGS)</div>
                    <div className="text-[10px] text-slate-400 font-mono">api.bcb.gov.br/dados/serie/bcdata.sgs • Selic, Dívida & Juros</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div>
                    <div className="text-xs font-bold text-white">IBGE (PNAD Contínua & SIDRA)</div>
                    <div className="text-[10px] text-slate-400 font-mono">servicodados.ibge.gov.br • Desemprego, Renda & IPCA</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AUDITADO
                </span>
              </div>
            </div>

            {/* Sincronização Autônoma */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <RefreshCw className="w-4 h-4 text-cyan-400" />
                  <span>Sincronização 100% Autônoma</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Transparência Ativa
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                A plataforma foi desenvolvida com código aberto e pipelines de dados verificáveis, garantindo que qualquer cidadão, jornalista ou acadêmico possa reproduzir os cálculos sem distorções.
              </p>
              <div className="flex items-center justify-between pt-2.5 border-t border-slate-900 text-[11px]">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Código e metodologia 100% públicos
                </span>
                <a
                  href="https://github.com/Menegatx/pragmatismo-governo-federal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <span>Auditar no GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Última consolidação: Outubro/2026</span>
            <span className="text-slate-500">Dados 100% Públicos</span>
          </div>
        </div>

        {/* Card de Download do Dossiê em PDF */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 mb-5">
              <FileText className="w-6 h-6 stroke-[2.5]" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Documento Cívico de Auditoria</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-snug">
              Dossiê de Auditoria Federal: Lula 3 (2023–2026)
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Baixe o relatório completo de 8 páginas pronto para leitura offline, impressão, compartilhamento e consulta pública.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Storytelling completo da 'Casa do Brasil' (R$ 10.000)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Raio-X de emprego, cesta básica e combate à fome</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>O dreno anual de R$ 748 bilhões de juros para bancos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Promessômetro de campanha TSE com 8 metas auditadas</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <a
              href="/dossie-auditoria-governo-federal.pdf"
              download="Dossie-Auditoria-Governo-Federal-Lula3.pdf"
              className="w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-center"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Baixar Dossiê Federal (PDF - 8 Páginas)</span>
            </a>
            <p className="text-center text-[10px] text-slate-500 mt-2">
              Arquivo em PDF de alta resolução • Formato A4 padrão
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
