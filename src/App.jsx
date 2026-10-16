import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TabNavigation from './components/TabNavigation'
import StorytellingSection from './components/StorytellingSection'
import SocialIndicatorsSection from './components/SocialIndicatorsSection'
import FiscalMacroSection from './components/FiscalMacroSection'
import EmendasParlamentaresSection from './components/EmendasParlamentaresSection'
import GovernmentPlanSection from './components/GovernmentPlanSection'
import TaxCalculatorSection from './components/TaxCalculatorSection'
import MediaPluralSection from './components/MediaPluralSection'
import PragmaticVerdictSection from './components/PragmaticVerdictSection'
import ApiStatusSection from './components/ApiStatusSection'
import FooterSection from './components/FooterSection'

export default function App() {
  const [activeTab, setActiveTab] = useState('todas')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab 1: Storytelling */}
        {(activeTab === 'todas' || activeTab === 'storytelling') && (
          <StorytellingSection />
        )}

        {/* Tab 2: Trabalhador & Social */}
        {(activeTab === 'todas' || activeTab === 'trabalhador') && (
          <SocialIndicatorsSection />
        )}

        {/* Tab 3: Fiscal, Dívida & Juros */}
        {(activeTab === 'todas' || activeTab === 'fiscal') && (
          <FiscalMacroSection />
        )}

        {/* Tab 4: Emendas Parlamentares & Centrão */}
        {(activeTab === 'todas' || activeTab === 'emendas') && (
          <EmendasParlamentaresSection />
        )}

        {/* Tab 5: Promessômetro TSE */}
        {(activeTab === 'todas' || activeTab === 'promessometro') && (
          <GovernmentPlanSection />
        )}

        {/* Tab 6: Calculadora Cidadã */}
        {(activeTab === 'todas' || activeTab === 'calculadora') && (
          <TaxCalculatorSection />
        )}

        {/* Tab 7: Painel Plural da Mídia */}
        {(activeTab === 'todas' || activeTab === 'midia') && (
          <MediaPluralSection />
        )}

        {/* Tab 8: Veredito Pragmático */}
        {(activeTab === 'todas' || activeTab === 'veredito') && (
          <PragmaticVerdictSection />
        )}

        {/* Status das APIs & Download do Dossiê */}
        <ApiStatusSection />
      </main>

      <FooterSection />
    </div>
  )
}
