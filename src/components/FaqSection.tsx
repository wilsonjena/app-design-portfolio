import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#F2EDE5] border-t border-[#2B1F17]/8 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
            <span>Questions & Verification</span>
            <span aria-hidden="true">·</span>
            <span>Studio Governance</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-4 text-balance">
            Frequently answered by our engineering team.
          </h2>
          <p className="text-base text-[#6B5A4F] leading-relaxed">
            Everything you need to know about CAD format compatibility, client security, and GPU browser acceleration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#2B1F17]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B45E28] shrink-0">
                      {item.category}
                    </span>
                    <span className="text-base font-semibold text-[#2B1F17]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C7B70] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#B45E28]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#68584E] leading-relaxed border-t border-[#2B1F17]/5 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center text-xs text-[#7C6D63]">
          Have a question not listed here?{' '}
          <a href="mailto:support@aurastudio.design" className="text-[#B45E28] font-semibold underline hover:opacity-80">
            Reach out to our architectural support team →
          </a>
        </div>

      </div>
    </section>
  );
};
