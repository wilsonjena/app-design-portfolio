import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onSuccessToast: (msg: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    onSuccessToast(`Studio invitation dispatched to ${email}`);
  };

  return (
    <section className="py-24 bg-[#F8F5F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative glass-card-amber rounded-3xl p-10 sm:p-16 border border-white/90 overflow-hidden text-center shadow-xl">
          
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full ambient-glow-amber pointer-events-none blur-3xl opacity-50"
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667]">
              <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
              <span>Begin Your Practice Onboarding</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl font-semibold text-[#2B1F17] tracking-tight leading-tight">
              Ready to shape spaces that <span className="italic font-normal text-[#B45E28]">feel alive</span>?
            </h2>

            <p className="text-base text-[#68584E] leading-relaxed">
              Experience the collaborative spatial OS trusted by over 420 premier design studios. Instant 14-day trial with full PBR material twin access.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-white/80 border border-[#B45E28]/30 max-w-md mx-auto space-y-2 animate-fade-in">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#2B1F17]">
                  <CheckCircle2 className="w-5 h-5 text-[#B45E28]" />
                  <span>Your Studio Environment Is Ready</span>
                </div>
                <p className="text-xs text-[#7C6D63]">
                  We sent your activation token to <strong className="text-[#2B1F17]">{email}</strong>. Check your inbox to begin uploading CAD files.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your studio email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-sm text-[#2B1F17] placeholder-[#9C8B80] focus:outline-none focus:ring-2 focus:ring-[#B45E28] focus:border-transparent transition-all shadow-xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] shadow-md hover:shadow-lg transition-all active:scale-[0.98] whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#7C6D63] pt-4">
              <span>No credit card required</span>
              <span aria-hidden="true">·</span>
              <span>14 days unrestricted studio access</span>
              <span aria-hidden="true">·</span>
              <span>SOC2 Type II compliant</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
