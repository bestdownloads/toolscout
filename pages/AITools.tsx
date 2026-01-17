
import React from 'react';
import { FEATURED_AI } from '../constants';
import { PageType } from '../App';
import { Sparkles, Code, Image as ImageIcon, MessageSquare, ArrowRight } from 'lucide-react';

interface AIToolsProps {
  onNavigate: (page: PageType) => void;
}

const AITools: React.FC<AIToolsProps> = ({ onNavigate }) => {
  const categories = [
    { icon: MessageSquare, name: 'LLMs & Chat', color: 'text-blue-400' },
    { icon: ImageIcon, name: 'Image Gen', color: 'text-purple-400' },
    { icon: Code, name: 'Coding', color: 'text-green-400' },
    { icon: Sparkles, name: 'Creative', color: 'text-orange-400' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h1 className="text-5xl font-black mb-4 uppercase italic">AI TOOL <span className="text-cyan-400">DIRECTORY</span></h1>
          <p className="text-gray-400">The most comprehensive database of AI-driven software, tested by humans, for humans.</p>
        </div>
        <div className="flex gap-4">
          {categories.map(cat => (
            <button key={cat.name} className="glass px-6 py-3 rounded-xl border border-white/5 text-xs font-bold hover:border-cyan-500/30 transition-all flex items-center gap-2">
              <cat.icon className={`w-4 h-4 ${cat.color}`} /> {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_AI.concat(FEATURED_AI).map((ai, i) => (
          <div key={`${ai.id}-${i}`} className="glass rounded-[32px] overflow-hidden group border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="aspect-[16/10] relative">
              <img src={ai.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={ai.name} />
              <div className="absolute top-4 left-4">
                 <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border border-white/10">
                   {ai.tag}
                 </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{ai.name}</h3>
                <div className="text-cyan-400 font-black text-sm">9.8</div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">{ai.description}</p>
              <div className="flex items-center gap-4">
                <button className="flex-1 bg-cyan-500 text-black py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all">Visit Website</button>
                <button onClick={() => onNavigate('article')} className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AITools;
