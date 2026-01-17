
import React from 'react';
import { BROWSER_COMPARISON } from '../constants';
import { CheckCircle2, XCircle, Zap, ShieldCheck } from 'lucide-react';

const ComparisonMatrix: React.FC = () => {
  const products = ['Opera GX', 'Avast Secure', 'AVG Browser'];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'built-in': return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'high': return <div className="h-1.5 w-16 bg-cyan-500 rounded-full" />;
      case 'medium': return <div className="h-1.5 w-16 bg-gray-600 rounded-full" />;
      case 'none': return <XCircle className="w-5 h-5 text-gray-600" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">BROWSER COMPARISON MATRIX</h2>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          Direct benchmark testing results 2024
          <span className="bg-cyan-500/10 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE DATA</span>
        </p>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5">
              <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest w-1/4">Criteria</th>
              {products.map((p) => (
                <th key={p} className="p-8 w-1/4">
                  <div className="text-lg font-bold text-white">{p}</div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded mt-1 inline-block ${
                    p === 'Opera GX' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-gray-400'
                  }`}>
                    {p === 'Opera GX' ? 'BEST FOR GAMERS' : p === 'Avast Secure' ? 'SECURITY FIRST' : 'MINIMALIST'}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BROWSER_COMPARISON.map((row, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-8 flex items-center gap-3 text-sm font-semibold text-gray-300">
                  {row.criteria === 'Privacy Score' && <ShieldCheck className="w-4 h-4 text-cyan-500" />}
                  {row.criteria === 'Gaming Mode' && <Zap className="w-4 h-4 text-cyan-500" />}
                  {row.criteria}
                </td>
                {row.products.map((p, pIdx) => (
                  <td key={pIdx} className="p-8">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(p.status)}
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        p.status === 'built-in' ? 'text-cyan-400' : 'text-gray-400'
                      }`}>
                        {p.value}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-8"></td>
              <td className="p-8">
                <button className="w-full bg-cyan-500 text-black py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all">Visit Site</button>
              </td>
              <td className="p-8">
                <button className="w-full border border-white/10 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">Learn More</button>
              </td>
              <td className="p-8">
                <button className="w-full border border-white/10 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">Learn More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
