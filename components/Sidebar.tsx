
import React from 'react';
import { TOP_VPNS } from '../constants';
import { Key, Tag, Gift, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-8">
      {/* VPN Rankings */}
      <div className="glass rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-2 mb-6">
          <Key className="w-5 h-5 text-cyan-400" />
          <h3 className="font-bold text-sm tracking-widest uppercase">Top 5 VPNs</h3>
        </div>
        <div className="space-y-4">
          {TOP_VPNS.map((vpn, i) => (
            <div key={vpn.id} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm group-hover:text-cyan-400 transition-colors">{vpn.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-cyan-400 text-xs font-bold mb-1">{vpn.score}</div>
                <button className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-[9px] font-bold hover:bg-cyan-500 hover:text-black transition-all">GET DEAL</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="glass rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Mail className="w-20 h-20" />
        </div>
        <h3 className="text-xl font-bold mb-2">Join the AI Revolution</h3>
        <p className="text-xs text-gray-400 mb-6 leading-relaxed">
          Weekly tech insights and secret software deals delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-cyan-500/50"
          />
          <button className="w-full bg-cyan-500 text-black py-3 rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
            Subscribe Now
          </button>
          <p className="text-[9px] text-center text-gray-500">No spam. Ever. Unsubscribe at any time.</p>
        </div>
      </div>

      {/* Deals */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Hottest Deals Today</h3>
        <div className="glass p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-cyan-500/30 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Tag className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-bold">80% OFF PureVPN</div>
            <div className="text-[10px] text-gray-500">Exclusive 2-year plan</div>
          </div>
        </div>
        <div className="glass p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-cyan-500/30 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <Gift className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <div className="text-xs font-bold">Free Trial: ChatGPT</div>
            <div className="text-[10px] text-gray-500">Limited time access</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
