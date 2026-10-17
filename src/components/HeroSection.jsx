import React from 'react'
import { Landmark, TrendingDown, AlertTriangle, Lock, ShieldCheck, ArrowDownRight, FileText } from 'lucide-react'
import macroData from '../data/macro_fiscal.json'

export default function HeroSection() {
  const kpis = macroData.kpis_principais

  return (
    <section className="relative pt-6 sm:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Badge suprapartidária */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-[11px] sm:text-xs shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
          <span className="font-semibold text-white">Auditoria Cívica</span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-400 font-mono">Tesouro, BCB & IBGE</span>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
          Para onde vai o dinheiro do Brasil? <br />
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
            O Raio-X do Governo Lula 3
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 text-xs sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Esqueça o ruído ideológico, os memes de WhatsApp e a guerra de torcidas. 
          Auditamos as contas públicas federais sob a ótica do <b>pragmatismo político e materialista</b>: 
          o que mudou no bolso do trabalhador, quem ganha com os juros da dívida e quanto o Congresso sequestrou do orçamento nacional.
        </p>

        {/* Action Buttons responsivos */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <a
            href="#storytelling"
            className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm text-center shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            Ver a "Casa do Brasil" (Storytelling)
          </a>
          <a
            href="/dossie-auditoria-governo-federal.pdf"
            download="Dossie-Auditoria-Governo-Federal-Lula3.pdf"
            className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:border-slate-600"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Baixar Dossiê (PDF - 8 Págs)</span>
          </a>
        </div>
      </div>

      {/* 4 Grandes KPIs */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* KPI 1 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {kpis[0].titulo}
            </span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Landmark className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {kpis[0].valor}
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            {kpis[0].subtexto}
          </p>
        </div>

        {/* KPI 2 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {kpis[1].titulo}
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400">
            {kpis[1].valor}
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            {kpis[1].subtexto}
          </p>
        </div>

        {/* KPI 3 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-red-500/30 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-red-500/50 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
              {kpis[2].titulo}
            </span>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-red-400">
            {kpis[2].valor}
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            {kpis[2].subtexto}
          </p>
        </div>

        {/* KPI 4 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-amber-500/50 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {kpis[3].titulo}
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Lock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-400">
            {kpis[3].valor}
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            {kpis[3].subtexto}
          </p>
        </div>

      </div>

    </section>
  )
}
