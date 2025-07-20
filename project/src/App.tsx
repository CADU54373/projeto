import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import TestimonialsSection from './components/TestimonialsSection';
import ComparisonSection from './components/ComparisonSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import UrgencySection from './components/UrgencySection';
import FinalCTASection from './components/FinalCTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)] pointer-events-none" />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <PainSection />
          <SolutionSection />
          <TestimonialsSection />
          <ComparisonSection />
          <OfferSection />
          <GuaranteeSection />
          <FAQSection />
          <UrgencySection />
          <FinalCTASection />
        </div>
        
        {/* Floating Elements */}
        <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="fixed top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" />
        <div className="fixed bottom-40 left-20 w-3 h-3 bg-cyan-300 rounded-full animate-pulse opacity-30" />
      </div>
    </div>
  );
}

export default App;