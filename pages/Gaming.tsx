
import React from 'react';
import { PageType } from '../App';
import { Gamepad2, Trophy, Users, Monitor, MousePointer2 } from 'lucide-react';

interface GamingProps {
  onNavigate: (page: PageType) => void;
}

const Gaming: React.FC<GamingProps> = ({ onNavigate }) => {
  const games = [
    { title: 'Cyberpunk 2077', rating: '9.0', img: 'https://picsum.photos/seed/cyber/800/400' },
    { title: 'Elden Ring', rating: '9.8', img: 'https://picsum.photos/seed/elden/800/400' },
    { title: 'Starfield', rating: '8.5', img: 'https://picsum.photos/seed/starfield/800/400' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative rounded-[50px] overflow-hidden aspect-[21/9] mb-20 group border border-white/5">
        <img src="https://picsum.photos/seed/gaming-hero/1600/700" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
          <div className="flex items-center gap-4 mb-4">
             <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Hot Tech</span>
          </div>
          <h1 className="text-6xl font-black mb-6 leading-none">OPERA GX: THE ULTIMATE<br />GAMING BROWSER REVIEW</h1>
          <p className="text-gray-300 max-w-xl mb-8 font-medium">Why millions of gamers are switching to Opera GX to save system resources and level up their aesthetics.</p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all">Read Review</button>
            <button className="glass border border-white/20 px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all">Download GX</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
        {[
          { icon: Monitor, label: 'Performance', val: 'Low Latency' },
          { icon: Users, label: 'Community', val: '1M+ Gamers' },
          { icon: Trophy, label: 'Rewards', val: 'Loot Boxes' },
          { icon: MousePointer2, label: 'Input', val: 'Zero Lag' }
        ].map((stat, i) => (
          <div key={i} className="glass p-8 rounded-[32px] border border-white/5 flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
               <stat.icon className="text-cyan-500 w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-lg font-bold text-white">{stat.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black uppercase">Trending Reviews</h2>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all">←</button>
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all">→</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] mb-6 relative border border-white/5">
                <img src={game.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center font-black text-cyan-400">
                  {game.rating}
                </div>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{game.title}</h3>
              <p className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-widest">Action RPG • Review</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaming;
