import React, { useState } from 'react'
import { Newspaper, ExternalLink, Filter, TrendingUp, AlertTriangle } from 'lucide-react'
import noticiasData from '../data/noticias_plurais.json'

export default function MediaPluralSection() {
  const [filter, setFilter] = useState('todos')

  const filtered = noticiasData.filter((n) => {
    if (filter === 'positiva') return n.polaridade.includes('Positiva')
    if (filter === 'critica') return n.polaridade.includes('Crítica')
    return true
  })

  return (
    <section id="midia" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Equilíbrio Informativo Suprapartidário</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Painel Plural da Mídia: <br />
          <span className="text-cyan-400">Cruzamento de Notícias de Diversos Espectros Editoriais</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Para evitar a acusação de viés ("você só usa a Globo" ou "você só usa o Estadão"), cruzamos manchetes de veículos de diferentes linhas editoriais. Cobrimos tanto as conquistas históricas quanto as crises fiscais e institucionais.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        <button
          onClick={() => setFilter('todos')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'todos' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Todas as Notícias ({noticiasData.length})
        </button>
        <button
          onClick={() => setFilter('positiva')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'positiva' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-slate-900 text-emerald-400 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          Conquistas & Resultados Positivos
        </button>
        <button
          onClick={() => setFilter('critica')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
            filter === 'critica' ? 'bg-red-500 text-slate-950 shadow-md' : 'bg-slate-900 text-red-400 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          Crises, Riscos & Gargalos
        </button>
      </div>

      {/* Grid de Notícias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const isPos = item.polaridade.includes('Positiva')
          const isCrit = item.polaridade.includes('Crítica')

          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    {item.veiculo}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    isPos
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : isCrit
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.polaridade}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-mono mb-2">
                  {item.tipo_veiculo} • {item.data}
                </div>

                <h3 className="text-sm font-bold text-white leading-snug mb-3">
                  {item.titulo}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.resumo}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Fato Documentado</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <span>Ler Matéria</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
