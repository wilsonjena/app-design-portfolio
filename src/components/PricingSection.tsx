import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'monthly' | 'annual') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-24 bg-[#F8F5F0] border-t border-[#2B1F17]/8 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
            <span>Transparent Investment</span>
            <span aria-hidden="true">·</span>
            <span>Studio Licensing</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-4 text-balance">
            Predictable plans for ambitious spatial practices.
          </h2>
          <p className="text-base text-[#6B5A4F] leading-relaxed">
            All plans include full photometrics, client presentation links, and unlimited 4K spatial exports. No hidden render tokens.
          </p>

          {/* Billing Toggle (Segmented Control - Allowed under Frontend Design constitution) */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-[#EAE2D7] rounded-2xl border border-[#2B1F17]/10">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#2B1F17] shadow-xs'
                  : 'text-[#6E5D52] hover:text-[#2B1F17]'
              }`}
            >
              Annual Billing <span className="text-[#B45E28] font-bold ml-1">· Save 20%</span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#2B1F17] shadow-xs'
                  : 'text-[#6E5D52] hover:text-[#2B1F17]'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isHighlight = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative border ${
                  isHighlight
                    ? 'glass-card-amber border-[#B45E28]/40 shadow-xl shadow-[rgba(180,94,40,0.1)] lg:-translate-y-2'
                    : 'bg-white border-[#2B1F17]/10 shadow-xs hover:border-[#2B1F17]/25'
                }`}
              >
                {/* Popular Marker */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B45E28] text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Selected by Studios
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-editorial text-2xl font-bold text-[#2B1F17] mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#7C6D63] min-h-[32px]">
                      {plan.tierSubtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-[#2B1F17]/10">
                    <span className="font-editorial text-5xl font-bold text-[#2B1F17] tabular-nums">
                      ${price}
                    </span>
                    <span className="text-xs text-[#7C6D63]">
                      / month {billingCycle === 'annual' ? 'billed annually' : 'billed monthly'}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B5A4F] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8C7B70]">
                      Included in {plan.name}:
                    </div>
                    {plan.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#2B1F17]">
                        <Check className="w-4 h-4 text-[#B45E28] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectPlan(plan, billingCycle)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                    isHighlight
                      ? 'bg-gradient-to-r from-[#B45E28] to-[#974A1B] text-white hover:from-[#C46D35] hover:to-[#A35322] shadow-md hover:shadow-lg active:scale-[0.98]'
                      : 'bg-[#EAE2D7] text-[#2B1F17] hover:bg-[#DFD5C8] active:scale-[0.98]'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Notice */}
        <div className="mt-12 text-center text-xs text-[#7C6D63]">
          Need an on-premise installation or custom CAD format pipeline?{' '}
          <a href="#contact" className="text-[#B45E28] font-semibold underline hover:opacity-80">
            Speak with an architectural systems engineer →
          </a>
        </div>

      </div>
    </section>
  );
};
