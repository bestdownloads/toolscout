
import React from 'react';
import ComparisonMatrix from '../components/ComparisonMatrix';
import Sidebar from '../components/Sidebar';
import { FEATURED_AI } from '../constants';
import { Star, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'article') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen">
      {/* Hero / Big Header */}
      <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          THE ULTIMATE TECH<br />
          <span className="text-gradient">SHOWDOWN: AI & BROWSERS</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Expert comparisons and curated lists of the world’s most powerful digital tools, optimized for performance and privacy.
        </p>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Browser Comparison Matrix (Integrated Component) */}
            <div className="-mx-6">
              <ComparisonMatrix />
            </div>

            {/* AI Tools List */}
            <section className="py-12">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold">TOP 10 AI TOOLS <span className="text-cyan-400 italic">FOR PRODUCTIVITY</span></h2>
                <div className="h-0.5 flex-1 mx-8 bg-white/5 hidden md:block"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FEATURED_AI.map((ai, i) => (
                  <div 
                    key={ai.id} 
                    className="glass rounded-2xl p-8 group relative overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
                    onClick={() => onNavigate('article')}
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <span className="text-9xl font-black italic">{i + 1}</span>
                    </div>
                    
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-cyan-400 fill-cyan-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold">{ai.name}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded uppercase tracking-wider">{ai.tag}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {ai.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{ai.score}</div>
                      <button className="text-cyan-400 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                        TRY NOW <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <button className="border border-white/10 px-10 py-4 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-white/5 transition-all">
                  Load 6 More Tools
                </button>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
