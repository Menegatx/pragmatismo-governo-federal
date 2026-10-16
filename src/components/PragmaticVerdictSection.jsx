import React from 'react'
import { Scale, CheckCircle, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react'
import vereditoData from '../data/veredito_pragmatico.json'

export default function PragmaticVerdictSection() {
  const { resumo_executivo, pontos_positivos, gargalos_criticos } = vereditoData

  return (
    <section id="veredito" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>Balanço Técnico Suprapartidário</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          O Veredito Pragmático: <br />
          <span className="text-cyan-400">Onde o Governo Lula Acertou e Onde Está Errendo</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          {resumo_executivo}
        </p>
      </div>

      {/* Grid de 2 Colunas: Acertos vs Gargalos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
        
        {/* Coluna Positiva (Acertos) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/10 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-6 text-emerald-400 font-extrabold text-base uppercase tracking-wider">
              <CheckCircle className="w-5 h-5 stroke-[2.5]" />
              <span>Acertos & Vitórias Reais da População</span>
            </div>

            <div className="space-y-4">
              {pontos_positivos.map((pos, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/20">
                  <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{pos.titulo}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pos.detalhe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna Crítica (Gargalos) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-red-950/10 border border-red-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-6 text-red-400 font-extrabold text-base uppercase tracking-wider">
              <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
              <span>Erros, Gargalos & Alertas Críticos</span>
            </div>

            <div className="space-y-4">
              {gargalos_criticos.map((crit, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-red-500/20">
                  <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span>{crit.titulo}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {crit.detalhe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Caixa de Conclusão Pragmática */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
        <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <span>A Síntese Materialista das Contas Públicas Federais</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          O Brasil de 2023 a 2026 provou materialmente que políticas públicas bem desenhadas geram emprego na ponta e tiram milhões da miséria extrema. No entanto, o país continua aprisionado em um tripé perverso: <b>altas taxas de juros pagas a rentistas, um Congresso que tomou o orçamento para interesses paroquiais e uma estrutura tributária que hesita em cortar os R$ 500 bilhões de privilégios de corporações</b>. O desafio do Brasil não é ideológico, é a coragem de redirecionar a riqueza nacional para a produção e para quem realmente constrói o país.
        </p>
      </div>

    </section>
  )
}
