import React, { useEffect, useState } from 'react';
import { Clock, Frown, Target } from 'lucide-react';

const PainSection = () => {
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

    const element = document.getElementById('pain-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pain-section" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Já passou por isso?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative p-8 bg-gradient-to-br from-red-900/20 to-gray-900/40 rounded-2xl border border-red-500/20 backdrop-blur-sm">
                <div className="absolute top-4 right-4">
                  <Frown className="w-8 h-8 text-red-400 opacity-50" />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Horas perdidas editando</h3>
                      <p className="text-gray-300">Você passa uma eternidade tentando criar efeitos visuais do zero, quando poderia estar focando na criatividade.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Resultado "amador"</h3>
                      <p className="text-gray-300">Mesmo com todo o esforço, seus vídeos ainda não têm aquele toque cinematográfico profissional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/40 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">!</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">🎥 A verdade é...</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Se você já passou horas tentando dar um visual profissional aos seus vídeos, mas ainda sente que falta aquele <span className="text-cyan-400 font-semibold">toque de cinema</span>... o Pack Z vai mudar isso.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Você quer entregar um vídeo de impacto, mas não quer gastar uma eternidade editando manualmente, <span className="text-cyan-400 font-semibold">certo?</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;