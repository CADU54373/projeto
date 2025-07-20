import React, { useEffect, useState } from 'react';
import { Shield, CreditCard, Lock, CheckCircle } from 'lucide-react';

const GuaranteeSection = () => {
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

    const element = document.getElementById('guarantee-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const guarantees = [
    { icon: Lock, text: 'Compra segura' },
    { icon: CreditCard, text: 'Aceitamos Pix, Cartão, Boleto' },
    { icon: CheckCircle, text: 'Garantia 100% de satisfação' }
  ];

  return (
    <section id="guarantee-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Garantia & Segurança
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Guarantee Badge */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative p-8 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl border border-green-400/30 backdrop-blur-sm text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12 text-black" />
              </div>
              
              <h3 className="text-3xl font-bold text-green-400 mb-4">7 Dias</h3>
              <p className="text-xl text-white font-semibold mb-4">Garantia Total</p>
              <p className="text-gray-300">
                Se em até 7 dias você não ficar satisfeito, devolvemos seu dinheiro. <span className="text-green-400 font-semibold">Simples assim.</span>
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                  <guarantee.icon className="w-6 h-6 text-black" />
                </div>
                <span className="text-lg font-medium text-white">{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;