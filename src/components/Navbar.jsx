import React from 'react'
import { Landmark, Shield, FileText, Download, ExternalLink } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20">
            <Landmark className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">
                Brasil<span className="text-cyan-400">Transparente</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Lula 3 (2023–2026)
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Auditoria Cívica e Materialista das Contas da União
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#veredito"
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors hidden md:block"
          >
            Veredito Técnico
          </a>
          <a
            href="#promessometro"
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors hidden md:block"
          >
            Promessômetro TSE
          </a>
          
          <a
            href="/dossie-auditoria-governo-federal.pdf"
            download="Dossie-Auditoria-Governo-Federal-Lula3.pdf"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Baixar Dossiê (PDF)</span>
          </a>
        </div>

      </div>
    </header>
  )
}
