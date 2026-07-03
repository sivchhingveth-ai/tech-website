import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewFeatures: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewFeatures }) => {
  return (
    <div className="relative bg-transparent overflow-hidden border-b border-white/10">
      {/* Full-width video background behind borders */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-nexus-black via-transparent to-nexus-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-transparent to-nexus-black/50" />
        {/* Vignette effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)'
        }} />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
          backgroundSize: '128px 128px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto overflow-hidden">
        <div className="relative pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 overflow-hidden">
            <p className="text-xl text-gray-300 font-medium sm:max-w-xl lg:mx-0 pr-4">
              Your ultimate destination for premium keyboards, mice, and gaming accessories. Elevate your setup today.
            </p>

            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  onClick={onViewFeatures}
                  className="animate-btn-explore w-full flex items-center justify-center px-8 py-4 border border-nexus-border text-base font-bold rounded-lg text-gray-300 bg-nexus-dark md:text-lg transition-all duration-300 group hover:bg-nexus-card hover:text-white hover:border-nexus-accent hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 animate-arrow-loop group-hover:translate-x-2 group-hover:text-nexus-accent transition-all" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;