import React, { useState } from 'react'
import { Calculator, DollarSign, ArrowRight, ShieldAlert, Heart, Landmark, Lock, Hammer } from 'lucide-react'

export default function TaxCalculatorSection() {
  const [salario, setSalario] = useState(4000)

  // Estimativa de tributação federal direta e indireta média no Brasil (IRPF + PIS/COFINS/IPI/Combustíveis embutidos: ~25%)
  const impostoFederalEstimado = salario * 0.25

  // Repartição percentual do OGU
  const distribuicao = [
    { nome: 'Previdência Social (INSS)', pct: 0.358, cor: 'text-cyan-400', desc: 'Aposentadorias e pensões do INSS' },
    { nome: 'Juros da Dívida para Bancos', pct: 0.272, cor: 'text-red-400', desc: 'Remuneração de rentistas e títulos públicos' },
    { nome: 'Folha e Servidores da União', pct: 0.139, cor: 'text-slate-300', desc: 'Médicos, professores, policiais e juízes' },
    { nome: 'Saúde Pública (SUS)', pct: 0.084, cor: 'text-emerald-400', desc: 'Hospitais, vacinas e cirurgias' },
    { nome: 'Educação Federal (Universidades/IFs)', pct: 0.066, cor: 'text-blue-400', desc: 'Institutos federais e bolsas' },
    { nome: 'Bolsa Família & Combate à Fome', pct: 0.061, cor: 'text-purple-400', desc: 'Transferência direta de renda' },
    { nome: 'Investimentos Reais em Obras', pct: 0.031, cor: 'text-emerald-300', desc: 'Estradas, portos e saneamento' },
    { nome: 'Emendas do Congresso Nacional', pct: 0.019, cor: 'text-amber-400', desc: 'Dinheiro para bases eleitorais de deputados' },
  ]

  return (
    <section id="calculadora" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Calculadora de Bolso</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Para Onde Vai o Seu Suor? <br />
          <span className="text-cyan-400">Descubra a Destinação Exata dos Seus Impostos Federais</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Mesmo quem não paga Imposto de Renda paga tributos federais embutidos na gasolina, no arroz, na luz e no celular (PIS, COFINS, IPI). Insira a renda mensal da sua família para ver o rastro do seu dinheiro:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controle do Salário */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Renda Familiar Bruta Mensal:
          </label>
          
          <div className="text-3xl sm:text-4xl font-black text-white mb-4">
            R$ {salario.toLocaleString('pt-BR')}
            <span className="text-sm font-normal text-slate-400 ml-1">/mês</span>
          </div>

          <input
            type="range"
            min="1518"
            max="30000"
            step="500"
            value={salario}
            onChange={(e) => setSalario(Number(e.target.value))}
            className="w-full accent-cyan-400 h-2 bg-slate-950 rounded-lg cursor-pointer mb-6"
          />

          <div className="flex justify-between text-[11px] text-slate-500 font-mono mb-6">
            <span>R$ 1.518 (1 Sal. Mínimo)</span>
            <span>R$ 15.000</span>
            <span>R$ 30.000</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              Impostos Federais Estimados (Diretos + Embutidos no Consumo):
            </span>
            <div className="text-2xl font-black text-cyan-400">
              R$ {impostoFederalEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-xs font-normal text-slate-400 ml-1">/mês recolhidos</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              Cálculo baseado na carga tributária federal média efetiva sobre consumo e renda no Brasil (~25%).
            </p>
          </div>
        </div>

        {/* Repartição na Prática */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <h3 className="text-base font-bold text-white mb-4">
            O Destino Real dos Seus R$ {impostoFederalEstimado.toFixed(0)} Pagos à União:
          </h3>

          <div className="space-y-3.5">
            {distribuicao.map((item, idx) => {
              const valorItem = impostoFederalEstimado * item.pct
              const isJuros = item.nome.includes('Juros')

              return (
                <div key={idx} className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/60">
                  <div>
                    <div className="font-bold text-slate-200 flex items-center gap-1.5">
                      <span>{item.nome}</span>
                      {isJuros && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-400 font-bold">
                          Maior Ralo
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500">{item.desc}</div>
                  </div>

                  <div className="text-right">
                    <div className={`font-mono font-bold text-sm ${item.cor}`}>
                      R$ {valorItem.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {(item.pct * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

    </section>
  )
}
