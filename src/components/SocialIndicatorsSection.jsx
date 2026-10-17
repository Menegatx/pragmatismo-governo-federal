import React from 'react'
import { ShoppingBag, TrendingUp, TrendingDown, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import trabalhadorData from '../data/trabalhador_social.json'

export default function SocialIndicatorsSection() {
  const { indicadores_sociais, inflacao_detalhada } = trabalhadorData

  return (
    <section id="trabalhador" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Economia Real e Condições Materiais</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          O Bolso, a Mesa e a Fome: <br />
          <span className="text-emerald-400">O Que Mudou na Vida Prática do Povo</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          O pragmatismo político avalia o governo pelo que chega na mesa e no bolso de quem trabalha de sol a sol. 
          Abaixo estão os dados oficiais do IBGE, DIEESE, DATASUS e relatórios da ONU:
        </p>
      </div>

      {/* Grid de Indicadores Materiais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {indicadores_sociais.map((ind, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {ind.indicador}
              </span>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Fim de 2022</div>
                  <div className="text-sm font-semibold text-slate-400">{ind.valor_2022}</div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-600" />

                <div className="text-right">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase">Gestão Lula 3</div>
                  <div className="text-lg font-black text-white">{ind.valor_atual}</div>
                </div>
              </div>

              <div className="mt-4 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-emerald-300">{ind.variacao_real}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400 leading-relaxed pt-3 border-t border-slate-800/80">
              {ind.impacto}
            </p>
          </div>
        ))}
      </div>

      {/* Tabela de Preços e Inflação no Prato */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span>O Preço da Comida no Mercado (IPCA & Alimentos)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Variação real dos preços que pesam no estômago do trabalhador
            </p>
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
            Fonte: IBGE / IPCA-15
          </span>
        </div>

        <div className="overflow-x-auto -mx-1 sm:mx-0">
          <table className="w-full min-w-[500px] text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Item Alimentar / Categoria</th>
                <th className="py-3 px-4 text-center">Ano 2022</th>
                <th className="py-3 px-4 text-center">Gestão Lula 3</th>
                <th className="py-3 px-4 text-right">Diagnóstico Material</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {inflacao_detalhada.map((inf, i) => (
                <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">{inf.item}</td>
                  <td className="py-3.5 px-4 text-center text-slate-400 font-mono">{inf.valor_2022}</td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-cyan-400">{inf.valor_atual}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                      inf.status.includes('Queda') || inf.status.includes('Dentro')
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {inf.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  )
}
