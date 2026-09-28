import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2EDE5] border-t border-[#2B1F17]/8 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
            <span>Studio Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Real Architecture Outcomes</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-4">
            Trusted by the world’s leading spatial ateliers.
          </h2>
          <p className="text-base text-[#6B5A4F] leading-relaxed">
            See how award-winning architectural practices and spatial directors use Aura Studio to win competitive pitches and secure rapid client consensus.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs flex flex-col justify-between hover:border-[#2B1F17]/25 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#F6F1EA] flex items-center justify-center text-[#B45E28] mb-6">
                  <Quote className="w-5 h-5 fill-current opacity-80" />
                </div>
                <p className="font-editorial text-xl italic text-[#2B1F17] leading-snug mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#2B1F17]/10">
                <div className="font-semibold text-sm text-[#2B1F17]">{t.author}</div>
                <div className="text-xs text-[#7C6D63] mb-2">{t.role} · {t.studio}</div>
                <div className="flex items-center gap-2 text-xs text-[#8C7B70]">
                  <span>{t.city}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#B45E28] font-medium">{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
