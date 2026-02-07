import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewFeatures: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewFeatures }) => {
  return (
    <div className="relative bg-nexus-dark overflow-hidden border-b border-nexus-border">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-nexus-dark sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              
              <h1 className="text-4xl tracking-tight font-black sm:text-5xl md:text-6xl uppercase mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  KEY-CRAFT STUDIO WELCOME!!
                </span>
              </h1>
              
              <p className="mt-3 text-xl text-gray-300 font-medium sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Your ultimate destination for premium keyboards, mice, and gaming accessories. Elevate your setup today.
              </p>

              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={onViewFeatures}
                    className="w-full flex items-center justify-center px-8 py-4 border border-nexus-border text-base font-bold rounded-lg text-gray-300 bg-nexus-dark md:text-lg transition-all duration-300 group hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]"
                  >
                    Explore Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-64 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-nexus-dark via-nexus-dark/50 to-transparent z-10 lg:w-32 w-full h-full lg:h-auto top-0 bottom-0 left-0"></div>
            <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1600&auto=format&fit=crop"
            alt="Tech Setup"
            />
            {/* Overlay gradient for text readability on mobile if image is behind */}
            <div className="absolute inset-0 bg-nexus-dark/40 lg:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;