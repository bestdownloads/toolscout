
import React from 'react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-black mb-8 uppercase leading-none">GET IN <span className="text-gradient">TOUCH</span></h1>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            Have a tool you want us to review? Or just want to talk tech? Our team is always ready for a challenge.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-cyan-500 border border-white/10">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">General Inquiries</div>
                <div className="text-lg font-bold">contact@techcompare.pro</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-purple-500 border border-white/10">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Business & Ads</div>
                <div className="text-lg font-bold">partners@techcompare.pro</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-green-500 border border-white/10">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">HQ Lab Location</div>
                <div className="text-lg font-bold">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px]" />
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 appearance-none transition-all">
                <option>Partnership Inquiry</option>
                <option>Software Review Request</option>
                <option>Technical Issue</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-cyan-500 text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center justify-center gap-3">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
