import React, { useEffect, useState } from 'react';
import { Gift, Star, Users, BookOpen, FileVideo } from 'lucide-react';

const OfferSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('offer-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const overlayTypes = [
    { name: 'Film Burns', count: 138 },
    { name: 'Glitchs', count: 56 },
    { name: 'Light Leaks', count: 131 },
    { name: 'Film Letters', count: 40 },
    { name: 'Burning Paper', count: 10 },
    { name: 'Punch Hole', count: 14 },
    { name: 'Wipe & Bright SFX', count: 31 },
    { name: 'Super 8mm', count: 15 },
    { name: 'Lens Flare', count: 105 }
  ];

  const bonuses = [
    { icon: BookOpen, text: 'Aulas passo a passo (como aplicar)' },
    { icon: FileVideo, text: 'Template de workflow no Premiere' },
    { icon: Users, text: 'Grupo exclusivo de compradores' }
  ];

  return (
    <section id="offer-section" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Oferta Completa
          </h2>
          
          <p className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Veja tudo o que você vai receber hoje
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Package */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm">
              <div className="absolute top-4 right-4">
                <Gift className="w-8 h-8 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">🎁 +500 Overlays</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {overlayTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <span className="text-gray-300 text-sm">{type.name}</span>
                    <span className="text-cyan-400 font-semibold">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-400/30 backdrop-blur-sm mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">🎓 + Bônus</h3>
              
              <div className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="p-2 bg-blue-400/20 rounded-full">
                      <bonus.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{bonus.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="relative p-8 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl border border-green-400/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <span className="text-2xl text-gray-400 line-through">De R$299</span>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    -67%
                  </div>
                </div>
                
                <div className="text-5xl font-bold text-green-400 mb-2">R$97</div>
                <p className="text-gray-300 mb-6">acesso vitalício e imediato</p>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-300 ml-2">Satisfação garantida</span>
                </div>
                
                <button className="w-full py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold text-lg rounded-full hover:from-green-300 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105">
                  🚀 Garantir meu Pack Z agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;