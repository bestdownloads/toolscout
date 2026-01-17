
import React, { useState, useEffect } from 'react';
import { LATEST_ARTICLE, BROWSER_ARTICLES } from '../constants';
import { ChevronRight, Play, CheckCircle, XCircle, Clock, Calendar, User, Layout, ArrowRight } from 'lucide-react';

interface ArticleProps {
  articleId?: string;
}

const Article: React.FC<ArticleProps> = ({ articleId }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find the requested article or fallback to latest
  const article = BROWSER_ARTICLES.find(a => a.id === articleId) || LATEST_ARTICLE;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-12">
      {/* Scroll Progress Bar */}
      <div className="fixed top-[73px] left-0 w-full h-1 z-50 bg-white/5">
        <div 
          className="h-full bg-cyan-500 transition-all duration-100 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">
          <a href="#" className="hover:text-white">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:text-white">{article.category}</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-cyan-400">{article.title.substring(0, 30)}...</span>
        </nav>

        <header className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-2"><User className="w-4 h-4 text-cyan-500" /> By {article.author}</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Published {article.date}</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</div>
            <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded uppercase">{article.category}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden mb-12 aspect-video group">
              <img src={article.image} alt="Tech Review" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                  <Play className="w-8 h-8 fill-black ml-1" />
                </button>
              </div>
            </div>

            <article className="prose prose-invert prose-cyan max-w-none text-gray-300 text-lg leading-relaxed space-y-8">
              <p className="first-letter:text-7xl first-letter:font-black first-letter:text-cyan-500 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                {article.content}
              </p>

              <div className="glass p-10 rounded-3xl my-12 border border-white/10">
                <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest">Key Performance Indicators (2026)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 font-bold text-cyan-400 text-sm uppercase tracking-widest">
                      <Layout className="w-4 h-4" /> Strengths
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Industry Leading Performance',
                        'Zero-Zero Latency Infrastructure',
                        'Decentralized Privacy Protection',
                        'Optimized Resource Handling'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                          <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6 opacity-60">
                    <div className="flex items-center gap-2 font-bold text-gray-400 text-sm uppercase tracking-widest">
                      <Layout className="w-4 h-4" /> Room for Growth
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Higher initial resource spike',
                        'Complexity of advanced features',
                        'Strict hardware requirements',
                        'Longer setup time'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                          <XCircle className="w-5 h-5 text-red-500/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-black mt-16 mb-8 uppercase">Detailed Benchmarking results</h2>
              <p>Our lab testing confirms that the 2026 browser landscape has shifted towards heavy AI integration. Users now demand instantaneous responses and local processing of sensitive data. In our tests, this browser managed to outperform all competitors in script execution speed and memory reclamation efficiency.</p>

              <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-12 rounded-[40px] border-l-8 border-cyan-500 my-20">
                <blockquote className="text-2xl font-light italic leading-relaxed text-white">
                  "Efficiency is not just about speed, but about doing more with less. The latest 2026 browser architectures prove that we are entering a new era of personal computing."
                </blockquote>
                <cite className="block mt-8 text-sm font-bold uppercase tracking-widest text-cyan-400">— TechCompare Lab Research</cite>
              </div>
            </article>

            {/* Author Profile */}
            <div className="mt-20 glass p-10 rounded-3xl border border-white/5 flex items-center gap-10">
              <img src="https://picsum.photos/seed/author/200" alt="Author" className="w-24 h-24 rounded-2xl grayscale" />
              <div>
                <h4 className="text-xl font-bold mb-2">About the Author: {article.author}</h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                  {article.author} is a senior analyst at TechCompare. With extensive experience in software benchmarking and digital privacy, they focus on providing users with objective data to make informed technology choices.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-24 space-y-12">
              <div className="glass p-8 rounded-2xl border border-white/10">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">On this page</h5>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                  {['01 Performance Engine', '02 Privacy Analysis', '03 UI/UX Design', '04 Final Verdict'].map((item, i) => (
                    <li key={i} className={`cursor-pointer hover:text-cyan-400 transition-colors ${i === 0 ? 'text-cyan-400' : 'text-gray-400'}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-8 rounded-2xl border border-white/10">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Related News</h5>
                <div className="space-y-4">
                  {[
                    { label: 'Cloud Gaming 2.0', date: 'Jan 20' },
                    { label: 'Quantum Privacy', date: 'Feb 15' },
                    { label: 'AI Browser Wars', date: 'Mar 02' }
                  ].map((cat, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm font-bold text-gray-300 group-hover:text-cyan-400 transition-colors">{cat.label}</span>
                      <span className="text-[10px] text-gray-600">{cat.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Articles */}
        <section className="mt-40">
          <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tight">Read More Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BROWSER_ARTICLES.filter(a => a.id !== article.id).map((art, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-6 border border-white/5 group-hover:border-cyan-500/30 transition-all">
                  <img src={art.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest mb-4">{art.category}</span>
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors leading-tight">
                  {art.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Article;
