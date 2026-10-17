import React, { useState } from 'react'
import { Lock, AlertTriangle, ShieldCheck, FileWarning, ArrowUpRight, PieChart, Users, ChevronDown, CheckCircle } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import emendasData from '../data/emendas_congresso.json'

export default function EmendasParlamentaresSection() {
  const { 
    serie_historica, 
    problemas_materiais, 
    contexto, 
    distribuicao_espectro, 
    ranking_partidos, 
    conclusao_materialista 
  } = emendasData

  const [filtroEspectro, setFiltroEspectro] = useState('todos')

  const partidosFiltrados = ranking_partidos.filter((p) => {
    if (filtroEspectro === 'todos') return true
    return p.espectro.toLowerCase() === filtroEspectro.toLowerCase()
  })

  // Cores dos espectros para badges
  const espectroBadge = {
    'Centro-Direita': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    'Centro': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Centro-Esquerda': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'Direita': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Esquerda': 'bg-red-500/10 text-red-400 border-red-500/20',
  }

  return (
    <section id="emendas" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
          <Lock className="w-3.5 h-3.5" />
          <span>O 'Bode na Sala' da República</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          O Sequestro do Orçamento Federal: <br />
          <span className="text-amber-400">Como o Centrão Passou a Mandar em R$ 53 Bilhões</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          {contexto}
        </p>
      </div>

      {/* Gráfico da Explosão das Emendas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        
        {/* Gráfico */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">
                A Escalada Histórica das Emendas Parlamentares (R$ Bilhões)
              </h3>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                +450% em 10 anos
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              De 2014 a 2025, os parlamentares multiplicaram por mais de 5 vezes a fatia do orçamento sob controle de deputados e senadores.
            </p>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serie_historica} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="ano" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(val) => [`R$ ${val} Bilhões`, 'Volume de Emendas']}
                />
                <Bar dataKey="valor_bi" fill="#f59e0b" radius={[6, 6, 0, 0]} name="Emendas do Congresso" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card Informativo STF / Dino */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>

            <h4 className="text-lg font-bold text-white leading-snug">
              A Guerra Institucional das 'Emendas Pix'
            </h4>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Em 2024, o ministro do STF <b>Flávio Dino</b> suspendeu a execução das Emendas Pix, determinando que o Congresso e o Executivo garantam rastreabilidade, prestação de contas prévia e transparência sobre quem indicou e quem recebeu o dinheiro.
            </p>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>O que diz a Constituição Federal:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                O orçamento público pertence ao povo brasileiro e deve obedecer aos princípios da publicidade, impessoalidade e planejamento republicano.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-300 font-semibold flex items-center justify-between">
            <span>Fonte: SIOP & Supremo Tribunal Federal</span>
            <span className="font-mono">ADPFs 850 e 854</span>
          </div>
        </div>

      </div>

      {/* NOVO BLOCO: DISTRIBUIÇÃO POR ESPECTRO IDEOLÓGICO & PARTIDOS */}
      <div className="mt-10 sm:mt-14 p-4 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl mb-12">
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <PieChart className="w-3.5 h-3.5" />
            <span>Raio-X Ideológico & Partidário</span>
          </div>

          <h3 className="text-lg sm:text-3xl font-extrabold text-white tracking-tight">
            Para Onde Foi o Dinheiro das Emendas? <br />
            <span className="text-cyan-400">Distribuição por Espectro Político e Partidos</span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Cruzamos os dados oficiais do SIOP e da Execução Orçamentária da Câmara e do Senado. Veja a fatia exata de cada espectro ideológico no bolo de mais de <b>R$ 53,2 bilhões</b>:
          </p>
        </div>

        {/* 5 Cards de Indicadores por Espectro */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 mb-8">
          {distribuicao_espectro.map((esp, i) => (
            <div
              key={i}
              className={`p-3 sm:p-4 rounded-xl bg-slate-950 border transition-all ${
                i === 4 ? 'col-span-2 sm:col-span-1' : ''
              } ${
                esp.espectro === 'Centro-Direita'
                  ? 'border-sky-500/40 bg-sky-950/10'
                  : esp.espectro === 'Centro'
                  ? 'border-purple-500/40 bg-purple-950/10'
                  : esp.espectro === 'Centro-Esquerda'
                  ? 'border-orange-500/40 bg-orange-950/10'
                  : esp.espectro === 'Direita'
                  ? 'border-blue-500/40 bg-blue-950/10'
                  : 'border-red-500/40 bg-red-950/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {esp.espectro}
                </span>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: esp.cor }} />
              </div>

              <div className="text-lg sm:text-2xl font-black text-white">
                {esp.percentual}%
              </div>

              <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400 mt-0.5">
                R$ {esp.valor_bi.toFixed(2)} Bi
              </div>

              <p className="mt-2 text-[10px] text-slate-400 leading-tight border-t border-slate-900 pt-2">
                {esp.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Barra Visual Segmentada de 100% */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
            <span>Composição do Orçamento de Emendas (100% do Bolo):</span>
            <span className="font-mono text-cyan-400">Total: R$ 53,2 Bilhões</span>
          </div>

          <div className="w-full h-4 rounded-full bg-slate-950 flex overflow-hidden border border-slate-800">
            {distribuicao_espectro.map((esp, idx) => (
              <div
                key={idx}
                style={{ width: `${esp.percentual}%`, backgroundColor: esp.cor }}
                className="h-full relative group transition-all hover:opacity-80"
                title={`${esp.espectro}: ${esp.percentual}% (R$ ${esp.valor_bi} Bi)`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-3 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#38bdf8]" /> Centro-Direita (37,3%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#a855f7]" /> Centro (26,7%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#f97316]" /> Centro-Esquerda (18,5%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#3b82f6]" /> Direita (15,9%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ef4444]" /> Esquerda (1,6%)</span>
          </div>
        </div>

        {/* Callout de Revelação Pragmática */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-950 to-slate-950 border border-cyan-500/30 mb-8 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <b>A Conclusão Materialista dos Números:</b> {conclusao_materialista}
          </p>
        </div>

        {/* Tabela dos Partidos que Mais Receberam Emendas */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Ranking dos Partidos no Controle das Emendas</span>
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Volumes empenhados e indicados pelos deputados e senadores de cada legenda
              </p>
            </div>

            {/* Filtro por espectro */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {['todos', 'Centro-Direita', 'Centro', 'Centro-Esquerda', 'Direita', 'Esquerda'].map((filtro) => (
                <button
                  key={filtro}
                  onClick={() => setFiltroEspectro(filtro)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all shrink-0 ${
                    filtroEspectro === filtro
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {filtro === 'todos' ? 'Todos' : filtro}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto -mx-1 sm:mx-0">
            <table className="w-full min-w-[620px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-2.5 px-3">Posição / Partido</th>
                  <th className="py-2.5 px-3">Espectro</th>
                  <th className="py-2.5 px-3 text-center">Bancada (Câmara + Senado)</th>
                  <th className="py-2.5 px-3 text-right">Volume (R$ Bi)</th>
                  <th className="py-2.5 px-3 text-right">% do Total</th>
                  <th className="py-2.5 px-3">Destaque Político</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {partidosFiltrados.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                      <span className="w-5 text-slate-500 font-mono text-[10px]">{idx + 1}º</span>
                      <span>{item.partido}</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        espectroBadge[item.espectro] || 'bg-slate-800 text-slate-300'
                      }`}>
                        {item.espectro}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono text-slate-400">
                      {item.bancada_camara} dep / {item.bancada_senado} sen
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-amber-400">
                      R$ {item.valor_bi.toFixed(2)} Bi
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-white">
                      {item.percentual.toFixed(1)}%
                    </td>
                    <td className="py-3 px-3 text-slate-400 text-[11px]">
                      {item.lideranca_destaque}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Os 3 Problemas Materiais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problemas_materiais.map((prob, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-black flex items-center justify-center text-xs mb-3">
                0{i + 1}
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                {prob.titulo}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {prob.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
