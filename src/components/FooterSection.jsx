import React from 'react'
import { Landmark, ShieldCheck } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Landmark className="w-3.5 h-3.5" />
            </div>
            <span className="font-extrabold text-white text-sm">
              Brasil<span className="text-cyan-400">Transparente</span>
            </span>
            <span className="text-[10px] text-slate-500">• Auditoria Cívica Nacional</span>
          </div>
          <p className="max-w-xl text-[11px] leading-relaxed text-slate-400">
            Plataforma independente de fiscalização das contas públicas do Governo Federal (Lula 3: 2023–2026). 
            Desenvolvida sob os princípios do pragmatismo político e da materialidade contábil.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] leading-relaxed max-w-md">
          <div className="flex items-center gap-1.5 text-white font-bold mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Blindagem e Amparo Legal:</span>
          </div>
          <p className="text-slate-400">
            Esta iniciativa é amparada pela <b>Constituição Federal de 1988 (Art. 5º, IV, IX e XIV)</b> e pela <b>Lei de Acesso à Informação (Lei 12.527/11)</b>. Conforme pacificado pelo <b>STF na ADPF 130</b>, a compilação e reprodução fidedigna de dados oficiais de interesse público é ato lícito de controle social republicano.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
        <div>
          © 2026 Brasil Transparente • Auditoria das Finanças Públicas da União
        </div>
        <div className="flex items-center gap-4">
          <a href="#storytelling" className="hover:text-cyan-400 transition-colors">A Casa do Brasil</a>
          <a href="#fiscal" className="hover:text-cyan-400 transition-colors">Contas Fiscais</a>
          <a href="#promessometro" className="hover:text-cyan-400 transition-colors">Promessômetro</a>
          <a href="#veredito" className="hover:text-cyan-400 transition-colors">Veredito</a>
        </div>
      </div>
    </footer>
  )
}
