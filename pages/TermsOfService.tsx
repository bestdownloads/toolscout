
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-12 uppercase">Terms <span className="text-cyan-500">of Service</span></h1>
      <div className="prose prose-invert prose-cyan max-w-none text-gray-400 space-y-8">
        <section>
          <h2 className="text-white text-xl font-bold mb-4">1. Usage Rights</h2>
          <p>All content on TechCompare is for informational purposes. You may not reproduce our benchmarks or proprietary review data without explicit written permission.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-bold mb-4">2. Accuracy of Information</h2>
          <p>While we strive for absolute accuracy in our benchmarks, software updates frequently. We are not responsible for discrepancies caused by newer version releases of the tools we review.</p>
        </section>
        <section>
          <h2 className="text-white text-xl font-bold mb-4">3. External Links</h2>
          <p>Our site contains links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites or services.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
