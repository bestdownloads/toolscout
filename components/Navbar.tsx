
import React from 'react';
import { Search, Monitor, Shield, Gamepad2, BrainCircuit } from 'lucide-react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  activePage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const navItems: { icon: any, label: string, id: PageType }[] = [
    { icon: Monitor, label: 'Browsers', id: 'browsers' },
    { icon: BrainCircuit, label: 'AI Tools', id: 'aitools' },
    { icon: Shield, label: 'VPNs', id: 'vpns' },
    { icon: Gamepad2, label: 'Gaming', id: 'gaming' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <div className="bg-cyan-500 p-1.5 rounded-lg group-hover:bg-cyan-400 transition-colors">
          <BrainCircuit className="w-6 h-6 text-black" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          TECH<span className="text-cyan-400">COMPARE</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              activePage === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search tech..."
            className="bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 w-64 transition-all"
          />
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all transform active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          SUBSCRIBE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
