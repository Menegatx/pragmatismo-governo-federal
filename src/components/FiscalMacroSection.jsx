import React from 'react'
import { Landmark, TrendingUp, AlertTriangle, Coins, ShieldAlert } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import macroData from '../data/macro_fiscal.json'

export default function FiscalMacroSection() {
  const { evolucao_fiscal, divisao_orcamentaria } = macroData

  return (
    <section id="fiscal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Landmark className="w-3.5 h-3.5" />
          <span>Macroeconomia Fiscal & Banco Central</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          O Nó das Contas Públicas: <br />
          <span className="text-cyan-400">Juros de R$ 748 Bilhões, Dívida e o Arcabouço</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Nenhuma narrativa política resiste à contabilidade pública. Auditamos a evolução do resultado primário, a trajetória da dívida bruta do Brasil e para onde os trilhões de reais do Orçamento Geral da União (OGU) estão realmente escorrendo.
        </p>
      </div>

      {/* Gráfico de Evolução: Investimentos vs Juros e Dívida */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Evolução do Investimento Real em Obras (R$ Bilhões)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              O investimento público federal reagiu em relação a 2021/2022, mas ainda é uma fração diminuta perto dos juros pagos.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              Investimento Real (R$ Bi)
            </span>
          </div>
        </div>

        <div className="h-64 sm:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={evolucao_fiscal} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="ano" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                formatter={(val, name) => [`R$ ${val} Bilhões`, name === 'investimento_real' ? 'Investimento Real' : name]}
              />
              <Bar dataKey="investimento_real" fill="#10b981" radius={[6, 6, 0, 0]} name="Investimento em Obras" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela de Séries Históricas das Contas Federais */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <h3 className="text-lg font-bold text-white mb-2">
          Histórico das Contas Fiscais da União (2020 a 2026)
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Comparativo entre governos Bolsonaro e Lula 3 com base em dados do Tesouro Nacional (RTN) e Banco Central (SGS).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Exercício</th>
                <th className="py-3 px-3">Gestão</th>
                <th className="py-3 px-3 text-center">Resultado Primário</th>
                <th className="py-3 px-3 text-center">Dívida / PIB</th>
                <th className="py-3 px-3 text-center">Taxa Selic Média</th>
                <th className="py-3 px-3 text-center">Desemprego</th>
                <th className="py-3 px-3 text-right">Investimento Obras</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {evolucao_fiscal.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">{row.ano}</td>
                  <td className="py-3 px-3 text-slate-300 font-semibold">{row.presidente}</td>
                  <td className={`py-3 px-3 text-center font-mono font-bold ${
                    row.resultado_primario > 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {row.resultado_primario > 0 ? `+R$ ${row.resultado_primario} bi` : `-R$ ${Math.abs(row.resultado_primario)} bi`}
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-slate-300 font-bold">
                    {row.divida_pib}%
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-amber-400">
                    {row.selic.toFixed(2)}%
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-cyan-400">
                    {row.desemprego}%
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-emerald-400 font-bold">
                    R$ {row.investimento_real} bi
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alerta Pragmático */}
        <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <b className="text-white">Alerta de Responsabilidade Fiscal:</b> O déficit acentuado de 2023 (-R$ 230,5 bilhões) decorreu em grande parte do pagamento extraordinário de <b>R$ 92,4 bilhões de precatórios acumulados</b> pelo governo anterior e compensações tributárias a estados. A partir de 2024, as contas convergiram para a margem da meta do Arcabouço, mas a dívida bruta segue em patamar de atenção (~78% do PIB) devido ao custo cavalar da Selic.
          </p>
        </div>
      </div>

    </section>
  )
}
