
import React from 'react';
import { TOP_VPNS } from '../constants';
import { PageType } from '../App';
import { ShieldCheck, Lock, Zap, Server, Check } from 'lucide-react';

interface VPNsProps {
  onNavigate: (page: 'home' | 'article' | 'browsers' | 'aitools' | 'vpns' | 'gaming') => void;
}

const VPNs: React.FC<VPNsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-cyan-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Privacy First Solutions</span>
      </div>
      <h1 className="text-6xl font-black mb-16 leading-tight">TOP-RATED VPNs<br />OF <span className="text-gradient underline italic">OCTOBER 2024</span></h1>

      <div className="space-y-8">
        {TOP_VPNS.map((vpn, idx) => (
          <div key={vpn.id} className="glass rounded-[40px] p-2 border border-white/5 hover:border-cyan-500/20 transition-all group">
            <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
              <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-3xl font-black text-white/10 group-hover:text-cyan-500/20 transition-colors">
                {idx + 1}
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-4 mb-2">
                  <h2 className="text-3xl font-bold">{vpn.name}</h2>
                  <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest border border-cyan-500/20">Editor's Choice</span>
                </div>
                <p className="text-gray-500 font-medium mb-6">{vpn.description}</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"><Server className="w-4 h-4 text-cyan-500" /> 6500+ Servers</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"><Lock className="w-4 h-4 text-cyan-500" /> No-Log Policy</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"><Zap className="w-4 h-4 text-cyan-500" /> Ultra Fast</div>
                </div>
              </div>

              <div className="w-full lg:w-px h-px lg:h-32 bg-white/5" />

              <div className="text-center space-y-4 min-w-[200px]">
                <div className="text-4xl font-black text-white">{vpn.score}</div>
                <button className="w-full bg-cyan-500 text-black py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">Get Deal</button>
                <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">30-Day Money Back</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6">
             <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Unblock Streaming</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Access Netflix, Hulu, and HBO Max libraries from anywhere in the world with specialized obfuscated servers.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
             <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Military-Grade Encryption</h3>
          <p className="text-sm text-gray-500 leading-relaxed">AES-256 bit encryption ensures your data remains private even on unsecured public Wi-Fi networks.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
             <Server className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Dedicated IPs</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Get a static IP address to avoid CAPTCHAs and maintain access to sensitive corporate networks.</p>
        </div>
      </div>
    </div>
  );
};

export default VPNs;
