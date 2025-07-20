import React, { useEffect, useState } from 'react';
import { Play, Award, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Criado por profissional com +7 anos no audiovisual</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Mais de 500 Overlays<br />
            <span className="text-white">Cinematográficos</span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ideal para editores, criadores e videomakers que querem elevar o visual com rapidez e qualidade profissional – <span className="text-cyan-400 font-semibold">sem precisar criar do zero.</span>
          </p>

          {/* Video Preview */}
          <div className={`relative max-w-4xl mx-auto mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Preview do Pack Z" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="flex items-center gap-3 px-8 py-4 bg-cyan-400/20 backdrop-blur-sm rounded-full border border-cyan-400/50 hover:bg-cyan-400/30 transition-all duration-300 group">
                  <Play className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Assistir Preview</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-bold text-xl text-black hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-400/30">
              <span className="relative z-10">🎬 Quero acessar agora o Pack Z</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </button>
          </div>

          {/* Trust Elements */}
          <div className={`flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-gray-400 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Suporte Vitalício</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;