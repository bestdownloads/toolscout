
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-12 uppercase">Privacy <span className="text-cyan-500">Policy</span></h1>
      <div className="prose prose-invert prose-cyan max-w-none text-gray-400 space-y-8">
        <section>
          <h2 className="text-white text-xl font-bold mb-4">1. Introduction</h2>
          <p>At TechCompare, we respect your privacy and are committed to protecting the personal data we hold about you. This policy explains how we collect and use your information when you visit our site.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-bold mb-4">2. Data We Collect</h2>
          <p>We collect minimal data to provide a better user experience. This includes usage statistics via cookies (anonymized) and email addresses if you subscribe to our newsletter.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-bold mb-4">3. Affiliate Links</h2>
          <p>TechCompare participates in various affiliate marketing programs. Clicking on these links may result in a commission for us, but it does not affect your privacy or the price you pay.</p>
        </section>
        <section className="bg-white/5 p-8 rounded-2xl border border-white/5">
          <p className="text-sm italic">Last Updated: October 2024. We reserve the right to update this policy at any time.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
