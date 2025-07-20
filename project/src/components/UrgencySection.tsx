import React, { useEffect, useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const UrgencySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('urgency-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="urgency-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className={`relative p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border border-red-400/30 backdrop-blur-sm text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-4 right-4">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-6">
            ⚠️ Oferta por Tempo Limitado
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bônus disponíveis por tempo limitado – acesso vitalício até às 23h59 de hoje.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="text-gray-300">Tempo restante:</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-red-400/20 border border-red-400/30 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-red-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">HORAS</div>
              </div>
              
              <div className="text-red-400 text-2xl">:</div>
              
              <div className="bg-red-400/20 border border-red-400/30 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-red-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">MINUTOS</div>
              </div>
              
              <div className="text-red-400 text-2xl">:</div>
              
              <div className="bg-red-400/20 border border-red-400/30 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-red-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">SEGUNDOS</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-400/10 to-orange-400/10 border border-red-400/20 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-300">
              <span className="text-red-400 font-semibold">ATENÇÃO:</span> Após o término do prazo, o preço volta para R$299 e os bônus não estarão mais disponíveis.
            </p>
          </div>
          
          <button className="px-12 py-4 bg-gradient-to-r from-red-400 to-orange-400 text-black font-bold text-xl rounded-full hover:from-red-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-400/30">
            🔥 Garantir agora antes que acabe
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;