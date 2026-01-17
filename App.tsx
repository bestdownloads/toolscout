
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Article from './pages/Article';
import Browsers from './pages/Browsers';
import AITools from './pages/AITools';
import VPNs from './pages/VPNs';
import Gaming from './pages/Gaming';
import ReviewProcess from './pages/ReviewProcess';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import AffiliateDisclosure from './components/AffiliateDisclosure';

export type PageType = 
  | 'home' 
  | 'article' 
  | 'browsers' 
  | 'aitools' 
  | 'vpns' 
  | 'gaming' 
  | 'review-process' 
  | 'contact' 
  | 'privacy' 
  | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageType, articleId?: string) => {
    setCurrentPage(page);
    setSelectedArticleId(articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'article': return <Article articleId={selectedArticleId} />;
      case 'browsers': return <Browsers onNavigate={handleNavigate} />;
      case 'aitools': return <AITools onNavigate={handleNavigate} />;
      case 'vpns': return <VPNs onNavigate={handleNavigate} />;
      case 'gaming': return <Gaming onNavigate={handleNavigate} />;
      case 'review-process': return <ReviewProcess />;
      case 'contact': return <ContactUs />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
      <AffiliateDisclosure />
      <Navbar onNavigate={handleNavigate} activePage={currentPage} />
      
      <div className="flex-grow transition-opacity duration-300">
        {renderPage()}
      </div>

      <Footer onNavigate={handleNavigate} />
      
      {/* Scroll to Top Trigger */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all shadow-xl"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
