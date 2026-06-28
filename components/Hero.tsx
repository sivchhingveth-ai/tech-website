import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewFeatures: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewFeatures }) => {
  return (
    <div className="relative bg-transparent overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 overflow-hidden">
            <p className="text-xl text-gray-300 font-medium sm:max-w-xl lg:mx-0 pr-4">
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
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
        <div className="h-64 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 lg:w-32 w-full h-full lg:h-auto top-0 bottom-0 left-0 pointer-events-none"></div>
          <img
            src="/hero.png"
            alt="Tech Setup"
            className="h-[70%] w-[70%] object-cover object-center relative z-0 scale-110"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/40 lg:hidden pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;