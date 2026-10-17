import React from 'react'
import { Landmark, Download, FileText } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-cyan-500/20 shrink-0">
            <Landmark className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white truncate">
                Brasil<span className="text-cyan-400">Transparente</span>
              </span>
              
              {/* Badge oculto em telas pequenas para evitar quebra de layout */}
              <span className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                Lula 3 (2023–2026)
              </span>
            </div>
            
            <p className="text-[10px] sm:text-[11px] text-slate-400 hidden md:block truncate">
              Auditoria Cívica e Materialista das Contas da União
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#veredito"
            className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-900 transition-colors hidden md:block"
          >
            Veredito Técnico
          </a>
          <a
            href="#promessometro"
            className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-900 transition-colors hidden md:block"
          >
            Promessômetro TSE
          </a>
          
          {/* Botão compacto e responsivo: em mobile fica elegante em 1 linha */}
          <a
            href="/dossie-auditoria-governo-federal.pdf"
            download="Dossie-Auditoria-Governo-Federal-Lula3.pdf"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-[11px] sm:text-xs shadow-md shadow-cyan-500/20 transition-all active:scale-95 whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>
              <span className="hidden sm:inline">Baixar </span>Dossiê PDF
            </span>
          </a>
        </div>

      </div>
    </header>
  )
}
