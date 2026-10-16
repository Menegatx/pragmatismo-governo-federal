import React from 'react'
import { 
  Layers, Home, ShoppingBag, Landmark, Lock, CheckSquare, 
  Calculator, Newspaper, Scale 
} from 'lucide-react'

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'todas', label: 'Visão Completa', icon: Layers },
    { id: 'storytelling', label: 'A Casa do Brasil (R$ 10k)', icon: Home },
    { id: 'trabalhador', label: 'Bolso, Mesa & Fome', icon: ShoppingBag },
    { id: 'fiscal', label: 'Dívida, Déficit & Juros', icon: Landmark },
    { id: 'emendas', label: 'Sequestro do Centrão', icon: Lock },
    { id: 'promessometro', label: 'Promessômetro TSE', icon: CheckSquare },
    { id: 'calculadora', label: 'Calculadora Cidadã', icon: Calculator },
    { id: 'midia', label: 'Painel da Mídia', icon: Newspaper },
    { id: 'veredito', label: 'Veredito Pragmático', icon: Scale },
  ]

  return (
    <div className="sticky top-16 z-40 bg-slate-950/90 backdrop-blur-md border-y border-slate-800/80 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  if (tab.id !== 'todas') {
                    const el = document.getElementById(tab.id)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
