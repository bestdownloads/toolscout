
import React from 'react';
import { ShieldCheck, BarChart3, FlaskConical, Search, Cpu, Globe } from 'lucide-react';

const ReviewProcess: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Market Analysis",
      desc: "Our team monitors over 500+ software releases monthly to identify tools that actually provide value."
    },
    {
      icon: FlaskConical,
      title: "Lab Testing",
      desc: "Each software is installed in a sandboxed environment to monitor impact on system resources."
    },
    {
      icon: BarChart3,
      title: "Benchmarking",
      desc: "We run proprietary benchmarks for speed, latency, and privacy leakage using industry-standard tools."
    },
    {
      icon: ShieldCheck,
      title: "Security Audit",
      desc: "For VPNs and Browsers, we perform deep packet inspection to verify encryption claims."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">OUR REVIEW <span className="text-cyan-500">PROCESS</span></h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          At TechCompare, we believe in radical transparency. We don't just "try" software; we stress-test it in our dedicated labs to ensure our readers get data-driven recommendations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {steps.map((step, i) => (
          <div key={i} className="glass p-10 rounded-[40px] border border-white/5 flex gap-8 group hover:border-cyan-500/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-black transition-all">
              <step.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="glass rounded-[50px] p-12 md:p-20 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
           <Cpu className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-black mb-8 uppercase">Testing Hardware</h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Consistency is key to benchmarks. All software reviews are conducted on identical hardware configurations:
          </p>
          <ul className="space-y-4 font-bold text-sm uppercase tracking-widest text-cyan-400">
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-cyan-500" /> AMD Ryzen 9 7950X Performance Core</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-cyan-500" /> 64GB DDR5 6000MHz Memory</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-cyan-500" /> Clean Install of Windows 11 / macOS Sonoma</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-cyan-500" /> 1Gbps Dedicated Fiber Connection</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ReviewProcess;
