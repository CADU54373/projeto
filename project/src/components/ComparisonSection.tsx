import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
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

    const element = document.getElementById('comparison-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const comparisonItems = [
    { feature: '+500 arquivos', packZ: true, others: false },
    { feature: 'Suporte vitalício', packZ: true, others: false },
    { feature: 'Aulas bônus', packZ: true, others: false },
    { feature: 'Preço acessível', packZ: true, others: false },
    { feature: 'Atualizações gratuitas', packZ: true, others: false },
    { feature: 'Compatibilidade total', packZ: true, others: false }
  ];

  return (
    <section id="comparison-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Pack Z vs Concorrência
          </h2>
          
          <p className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Veja por que somos a melhor opção do mercado
          </p>
        </div>

        <div className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-cyan-400/20 backdrop-blur-sm p-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-6 pr-8">
                    <span className="text-xl font-semibold text-gray-300">Características</span>
                  </th>
                  <th className="text-center py-6 px-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold px-4 py-2 rounded-full">
                      Pack Z
                    </div>
                  </th>
                  <th className="text-center py-6 pl-4">
                    <div className="bg-gray-600 text-white font-medium px-4 py-2 rounded-full">
                      Outros Packs
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-700/50 hover:bg-gray-800/30 transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <td className="py-4 pr-8">
                      <span className="text-gray-300 font-medium">{item.feature}</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 pl-4">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;