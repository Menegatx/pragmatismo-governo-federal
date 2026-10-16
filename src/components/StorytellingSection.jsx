import React from 'react'
import { Home, HeartHandshake, CreditCard, Users, Activity, GraduationCap, ShoppingBag, Coins, Hammer, AlertCircle } from 'lucide-react'
import storytellingData from '../data/storytelling_brasil.json'

const iconMap = {
  HeartHandshake,
  CreditCard,
  Users,
  Activity,
  GraduationCap,
  ShoppingBag,
  Coins,
  Hammer
}

export default function StorytellingSection() {
  return (
    <section id="storytelling" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Home className="w-3.5 h-3.5" />
          <span>Storytelling com Dados (Cole Nussbaumer Knaflic)</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          A Casa da República: <br />
          <span className="text-cyan-400">Se o Brasil Fosse uma Família com Renda de R$ 10.000</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          {storytellingData.analogia}
        </p>
      </div>

      {/* Grid com a distribuição da família */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {storytellingData.itens.map((item, idx) => {
          const Icon = iconMap[item.icone] || Home
          const isJuros = item.titulo.includes("Juros")
          const isInvest = item.titulo.includes("Reforma")

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-900 border transition-all duration-300 flex flex-col justify-between ${
                isJuros
                  ? 'border-red-500/40 bg-red-950/10 shadow-lg shadow-red-950/30'
                  : isInvest
                  ? 'border-emerald-500/40 bg-emerald-950/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isJuros ? 'bg-red-500/20 text-red-400' : isInvest ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-cyan-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isJuros ? 'bg-red-500/20 text-red-400' : isInvest ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.percentual}
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-black text-white">
                  {item.valor}
                  <span className="text-xs font-normal text-slate-400 ml-1">/mês</span>
                </div>

                <h3 className="text-xs font-bold text-slate-200 mt-1 line-clamp-1">
                  {item.titulo}
                </h3>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              {/* Barra de progresso visual proporcional */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isJuros ? 'bg-red-400' : isInvest ? 'bg-emerald-400' : 'bg-cyan-400'
                    }`}
                    style={{ width: item.percentual.replace(',', '.') }}
                  />
                </div>
              </div>

            </div>
          )
        })}
      </div>

      {/* Callout de Contraste Brutal */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-slate-900 to-slate-900 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
          <AlertCircle className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            O Contraste Material Central da República Brasileira
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Todo mês, a família brasileira entrega <b className="text-red-400">R$ 2.720</b> diretamente para o banco em juros da dívida pública (quase 9 vezes mais do que gasta consertando a casa). Enquanto isso, sobram apenas <b className="text-emerald-400">R$ 310</b> para duplicar estradas, construir ferrovias e investir no futuro dos filhos.
          </p>
        </div>
      </div>

    </section>
  )
}
