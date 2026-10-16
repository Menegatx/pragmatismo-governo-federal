import React, { useState } from 'react'
import { CheckSquare, CheckCircle, Clock, AlertOctagon, Filter } from 'lucide-react'
import promessasData from '../data/promessometro_federal.json'

export default function GovernmentPlanSection() {
  const [filter, setFilter] = useState('todos')
  const { metas, percentual_cumprimento_medio } = promessasData

  const filteredMetas = metas.filter((m) => {
    if (filter === 'cumpridas') return m.cor === 'emerald'
    if (filter === 'andamento') return m.cor === 'amber'
    if (filter === 'travadas') return m.cor === 'red'
    return true
  })

  return (
    <section id="promessometro" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Tribunal Superior Eleitoral (TSE)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Promessômetro Federal: <br />
            <span className="text-cyan-400">O Plano Registrado na Campanha vs. O Brasil Real</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Confronto objetivo entre o programa de governo registrado no TSE pela campanha vencedora em 2022 e o que foi transformado em lei, orçamento e entregas materiais efetivas:
          </p>
        </div>

        {/* Card do Termômetro Geral */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shrink-0 shadow-lg">
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Taxa Geral de Execução
            </span>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">
              {percentual_cumprimento_medio}%
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <CheckSquare className="w-6 h-6 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        <button
          onClick={() => setFilter('todos')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'todos' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Todas as Metas ({metas.length})
        </button>
        <button
          onClick={() => setFilter('cumpridas')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'cumpridas' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-slate-900 text-emerald-400 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          Cumpridas (3)
        </button>
        <button
          onClick={() => setFilter('andamento')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'andamento' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          Em Andamento / Parciais (4)
        </button>
        <button
          onClick={() => setFilter('travadas')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'travadas' ? 'bg-red-500 text-slate-950 shadow-md' : 'bg-slate-900 text-red-400 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          Travadas / Não Cumpridas (1)
        </button>
      </div>

      {/* Grid de Metas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMetas.map((m) => {
          const isEmerald = m.cor === 'emerald'
          const isAmber = m.cor === 'amber'
          const isRed = m.cor === 'red'

          return (
            <div
              key={m.id}
              className={`p-6 rounded-2xl bg-slate-900 border transition-all flex flex-col justify-between ${
                isEmerald
                  ? 'border-emerald-500/30 hover:border-emerald-500/50'
                  : isAmber
                  ? 'border-amber-500/30 hover:border-amber-500/50'
                  : 'border-red-500/30 hover:border-red-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isEmerald
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : isAmber
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {m.status}
                  </span>

                  <span className="text-xs font-black text-white font-mono">
                    {m.percentual}%
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {m.titulo}
                </h3>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-3 text-xs">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">
                    Promessa Registrada no TSE:
                  </span>
                  <p className="text-slate-300 leading-relaxed italic">
                    "{m.promessa}"
                  </p>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase block mb-1">
                    Realidade Material Auditada:
                  </span>
                  <p className="text-slate-300">
                    {m.realidade_auditada}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-5 pt-3 border-t border-slate-800">
                <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isEmerald ? 'bg-emerald-400' : isAmber ? 'bg-amber-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${m.percentual}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
