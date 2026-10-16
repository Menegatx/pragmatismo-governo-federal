import React from 'react'
import { Lock, AlertTriangle, ShieldCheck, FileWarning, ArrowUpRight } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import emendasData from '../data/emendas_congresso.json'

export default function EmendasParlamentaresSection() {
  const { serie_historica, problemas_materiais, contexto } = emendasData

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
        
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
