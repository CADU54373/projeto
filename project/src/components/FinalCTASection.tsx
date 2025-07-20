import React, { useEffect, useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
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

    const element = document.getElementById('final-cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-cta-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className={`relative p-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-6 right-6">
            <Zap className="w-10 h-10 text-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Agora é com você.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vai continuar editando como amador, ou quer dar um <span className="text-cyan-400 font-semibold">salto profissional</span> nos seus vídeos com o Pack Z?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-red-900/20 border border-red-400/30 rounded-xl">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Sem o Pack Z</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Horas perdidas criando efeitos</li>
                <li>• Resultado amador</li>
                <li>• Clientes insatisfeitos</li>
                <li>• Menos trabalhos</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-900/20 border border-green-400/30 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Com o Pack Z</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Vídeos profissionais em minutos</li>
                <li>• Clientes impressionados</li>
                <li>• Mais trabalhos e reconhecimento</li>
                <li>• Economia de tempo e dinheiro</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="text-3xl font-bold text-green-400 mb-2">R$97</div>
            <div className="text-gray-300 mb-4">Investimento único • Acesso vitalício</div>
            <div className="text-sm text-gray-400">Menos de R$0,20 por overlay</div>
          </div>
          
          <button className="group relative px-16 py-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-bold text-2xl text-black hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-400/30 mb-8">
            <span className="relative z-10 flex items-center gap-3">
              Sim, quero turbinar meus vídeos com o Pack Z
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </button>
          
          <p className="text-sm text-gray-400">
            🔒 Pagamento 100% seguro • Garantia de 7 dias • Acesso imediato
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-gray-800/50">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo Z EFFECTS */}
            <div className="md:col-span-1">
              <div className="relative">
                <div className="relative">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-mono tracking-wider relative z-10">
                    [Z]
                  </h1>
                  <div className="absolute inset-0 text-3xl font-bold text-cyan-400 font-mono tracking-wider opacity-50 blur-sm animate-pulse">
                    [Z]
                  </div>
                  <div className="absolute inset-0 text-3xl font-bold text-cyan-400 font-mono tracking-wider opacity-30 blur-md">
                    [Z]
                  </div>
                </div>
                <div className="text-xs font-light text-gray-300 tracking-[0.3em] uppercase mt-1 ml-1">
                  EFFECTS
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Transforme seus vídeos em produções cinematográficas profissionais com mais de 500 overlays exclusivos.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#como-funciona" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#garantia" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    Garantia
                  </a>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-lg">Suporte</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:suporte@packz.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2">
                    <span>📧</span> suporte@packz.com
                  </a>
                </li>
                <li>
                  <a href="#termos" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2">
                    <span>📋</span> Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#privacidade" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2">
                    <span>🔒</span> Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2">
                    <span>💬</span> Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Informações da Marca */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-lg">Pack Z</h3>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">
                  <span className="text-cyan-400">✨</span> Criado por João Silva
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-cyan-400">🎬</span> +7 anos no audiovisual
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-cyan-400">🏆</span> +1000 clientes satisfeitos
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-cyan-400">🔥</span> Qualidade profissional
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  Pack Z © 2024 • Todos os direitos reservados
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Marca registrada • CNPJ: 00.000.000/0001-00
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTASection;