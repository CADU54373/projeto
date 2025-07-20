import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'Serve para CapCut?',
      answer: 'Sim! O Pack Z é compatível com CapCut, Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve e outros editores principais.'
    },
    {
      question: 'Preciso ter experiência em edição?',
      answer: 'Não! Os overlays são super fáceis de usar - basta arrastar e soltar. Além disso, você recebe aulas bônus mostrando como aplicar os efeitos.'
    },
    {
      question: 'Recebo os arquivos na hora?',
      answer: 'Sim! Após a confirmação do pagamento, você recebe acesso imediato ao Pack Z e pode fazer o download instantaneamente.'
    },
    {
      question: 'As aulas têm suporte?',
      answer: 'Sim! Você terá acesso ao grupo exclusivo de compradores onde pode tirar dúvidas e receber suporte vitalício.'
    },
    {
      question: 'Posso usar nos meus vídeos comerciais?',
      answer: 'Sim! Você pode usar os overlays em projetos pessoais e comerciais sem limitações. Licença vitalícia incluída.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Perguntas Frequentes
          </h2>
          
          <p className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Tire suas dúvidas sobre o Pack Z
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-cyan-400/20 backdrop-blur-sm overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="text-cyan-400 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;