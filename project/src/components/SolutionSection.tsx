import React, { useEffect, useState } from 'react';
import { Check, Zap, Download, Palette, Video, Gift } from 'lucide-react';

const SolutionSection = () => {
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

    const element = document.getElementById('solution-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Download, text: '+500 overlays exclusivos', delay: 0 },
    { icon: Video, text: 'Compatível com Premiere, After, Final Cut, DaVinci e CapCut', delay: 100 },
    { icon: Zap, text: 'Prontos para arrastar e soltar', delay: 200 },
    { icon: Palette, text: 'Otimizados para Reels, Shorts, YouTube e clipes', delay: 300 },
    { icon: Check, text: 'Crie visuais cinematográficos em segundos', delay: 400 },
    { icon: Gift, text: 'Bônus: Aulas mostrando como aplicar', delay: 500 }
  ];

  return (
    <section id="solution-section" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Apresentamos o Pack Z
          </h2>
          
          <p className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A solução definitiva para transformar seus vídeos em produções cinematográficas profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${feature.delay + 400}ms` }}
              >
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <span className="text-lg font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Visual Preview */}
          <div className={`relative transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1" 
                alt="Pack Z Preview" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Numbers */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-cyan-400/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/50">
                  <span className="text-cyan-400 font-bold text-lg">500+</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-blue-400/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-blue-400/50">
                  <span className="text-blue-400 font-medium">Pack Z</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Gallery */}
        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Preview dos Efeitos</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-semibold group-hover:scale-110 transition-transform">Preview {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;