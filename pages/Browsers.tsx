
import React from 'react';
import ComparisonMatrix from '../components/ComparisonMatrix';
import { PageType } from '../App';
import { Shield, Zap, Globe, Layout, ArrowRight } from 'lucide-react';

interface BrowsersProps {
  onNavigate: (page: PageType, articleId?: string) => void;
}

const Browsers: React.FC<BrowsersProps> = ({ onNavigate }) => {
  const browsers = [
    { 
      id: 'opera-gx-2026',
      name: 'Opera GX', 
      tagline: 'The browser for gamers', 
      rating: 4.9, 
      features: ['RAM/CPU Limiter', 'Twitch Integration', 'Free VPN'],
      color: 'border-red-500/30'
    },
    { 
      id: 'avast-browser-2026',
      name: 'Avast Secure Browser', 
      tagline: 'Private, fast, and secure', 
      rating: 4.7, 
      features: ['Bank Mode', 'Anti-Fingerprinting', 'Adblock'],
      color: 'border-orange-500/30'
    },
    { 
      id: 'avg-browser-2026',
      name: 'AVG Secure Browser', 
      tagline: 'Speed meets security', 
      rating: 4.6, 
      features: ['Stealth Mode', 'Flash Blocker', 'Privacy Cleaner'],
      color: 'border-green-500/30'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">BEST WEB BROWSERS <span className="text-cyan-400">2026</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">From gaming performance to military-grade encryption, we tested every major browser to find the elite few for the next tech era.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {browsers.map((b) => (
          <div key={b.name} className={`glass p-8 rounded-3xl border ${b.color} group hover:scale-[1.02] transition-all`}>
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{b.name}</h3>
            <p className="text-sm text-gray-500 mb-6">{b.tagline}</p>
            <div className="space-y-3 mb-8">
              {b.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-cyan-500" /> {f}
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('article', b.id)}
              className="w-full bg-white text-black py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all"
            >
              Read Detailed Review
            </button>
          </div>
        ))}
      </div>

      <ComparisonMatrix />
      
      <div className="mt-20 glass p-12 rounded-[40px] border border-white/5 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Why Privacy Browsers Matter?</h2>
          <p className="text-gray-400 leading-relaxed mb-6">In 2026, standard browsers track your fingerprint across every site using advanced AI. Secure browsers like Avast and AVG create a specialized sandbox for your banking and private activities.</p>
          <button onClick={() => onNavigate('article', 'avast-browser-2026')} className="flex items-center gap-2 text-cyan-400 font-bold uppercase text-xs tracking-widest group">
            Read Full Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
           <div className="aspect-square glass rounded-2xl flex flex-col items-center justify-center gap-2">
              <Shield className="text-cyan-500 w-8 h-8" />
              <span className="text-[10px] font-bold">SECURITY</span>
           </div>
           <div className="aspect-square glass rounded-2xl flex flex-col items-center justify-center gap-2">
              <Zap className="text-cyan-500 w-8 h-8" />
              <span className="text-[10px] font-bold">SPEED</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Browsers;
