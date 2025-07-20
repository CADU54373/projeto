import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Logo Z */}
              <div className="relative">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-mono tracking-wider relative z-10">
                  [Z]
                </h1>
                {/* Glow Effect */}
                <div className="absolute inset-0 text-4xl font-bold text-cyan-400 font-mono tracking-wider opacity-50 blur-sm animate-pulse">
                  [Z]
                </div>
                <div className="absolute inset-0 text-4xl font-bold text-cyan-400 font-mono tracking-wider opacity-30 blur-md">
                  [Z]
                </div>
              </div>
              
              {/* Subtitle EFFECTS */}
              <div className="text-xs font-light text-gray-300 tracking-[0.3em] uppercase mt-1 ml-1">
                EFFECTS
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative">
            <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-bold text-black hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/30 animate-bounce">
              <span className="relative z-10 text-sm md:text-base">
                🚀 Garantir Pack Z
              </span>
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-75 animate-ping"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
            
            {/* Additional Glow Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse scale-110"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;