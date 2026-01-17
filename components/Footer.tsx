
import React from 'react';
import { BrainCircuit, Share2, Mail } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/5 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <BrainCircuit className="w-8 h-8 text-cyan-500" />
            <span className="text-2xl font-bold text-white tracking-tighter">TECH<span className="text-cyan-500">COMPARE</span></span>
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            We provide rigorous testing and data-driven reviews for the tools shaping the future of digital work. Our lab uses proprietary benchmarks to ensure accuracy.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
              onClick={() => onNavigate('contact')}
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Categories</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><button onClick={() => onNavigate('browsers')} className="hover:text-cyan-400 transition-colors">Browser Matrix</button></li>
            <li><button onClick={() => onNavigate('aitools')} className="hover:text-cyan-400 transition-colors">AI Tool Hub</button></li>
            <li><button onClick={() => onNavigate('vpns')} className="hover:text-cyan-400 transition-colors">VPN Benchmarks</button></li>
            <li><button onClick={() => onNavigate('gaming')} className="hover:text-cyan-400 transition-colors">Gaming Tech</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-gray-500 text-left">
            <li><button onClick={() => onNavigate('review-process')} className="hover:text-cyan-400 transition-colors">Review Process</button></li>
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-cyan-400 transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('terms')} className="hover:text-cyan-400 transition-colors">Terms of Service</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors">Contact Us</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        <p>© 2024 TechCompare Lab. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Last Updated: Oct 2024</span>
          <span>Version 2.4.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
