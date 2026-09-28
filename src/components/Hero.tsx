import React, { useState } from 'react';
import { ArrowRight, Bookmark, Sparkles, Sun, Compass, Sliders, Briefcase, Building, Check, Eye } from 'lucide-react';
import { LIGHTING_PRESETS } from '../data/mockData';
import { LightingMode } from '../types';

interface HeroProps {
  onOpenDemoModal: () => void;
  onExploreRoleModal: () => void;
  activeLighting: LightingMode;
  setActiveLighting: (mode: LightingMode) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemoModal,
  onExploreRoleModal,
  activeLighting,
  setActiveLighting,
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentPreset = LIGHTING_PRESETS.find(p => p.id === activeLighting) || LIGHTING_PRESETS[0];

  const handleBookmarkToggle = () => {
    const nextState = !bookmarked;
    setBookmarked(nextState);
    setToastMessage(nextState ? 'Position saved to your studio portfolio' : 'Removed from bookmarks');
    setTimeout(() => setToastMessage(null), 3200);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-18 lg:pb-32 transition-colors duration-500">
      {/* Dynamic Ambient Background Glow reacting to lighting mode */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] pointer-events-none rounded-full blur-3xl opacity-40 transition-all duration-700"
        style={{ background: currentPreset.glowColor }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Conversion Core */}
          <div className="lg:col-span-6 space-y-8">
            {/* Clean unboxed announcement text with separator - Zero Pill Discipline */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#8C7667]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B45E28] animate-pulse" />
              <span className="text-[#B45E28]">Aura Studio OS 3.4</span>
              <span aria-hidden="true" className="text-[#8C7667]/60">·</span>
              <span>Photometric Spatial Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[1.08] tracking-tight text-[#2B1F17] text-balance">
              Shape spaces that <span className="italic font-normal text-[#B45E28]">feel alive</span>.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-lg text-[#615147] leading-relaxed max-w-xl font-normal">
              The collaborative spatial operating system for interior architects, luxury retail studios, and 3D environment teams. Unify CAD models, tactile PBR material twins, real-time sunlight simulations, and client walkthroughs in one fluid workspace.
            </p>

            {/* CTAs and Outcomes */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemoModal}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#964B1D] hover:from-[#C56C34] hover:to-[#A35322] rounded-xl shadow-[0_8px_24px_rgba(180,94,40,0.28)] hover:shadow-[0_12px_32px_rgba(180,94,40,0.38)] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-[0.99] whitespace-nowrap"
              >
                <span>Start Studio Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#spatial-viewer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-wider font-semibold text-[#4A3B31] bg-white/70 hover:bg-white border border-[#2B1F17]/15 rounded-xl shadow-xs hover:border-[#2B1F17]/30 transition-all duration-200 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 text-[#8C7667]" />
                <span>Explore Live Environment</span>
              </a>
            </div>

            {/* Claim-to-Proof Adjacency - Clean unboxed metadata with separators */}
            <div className="pt-4 border-t border-[#2B1F17]/10 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#7C6D63]">
              <span className="font-semibold text-[#2B1F17]">420+ Studios</span>
              <span aria-hidden="true">·</span>
              <span>Milan</span>
              <span aria-hidden="true">·</span>
              <span>Tokyo</span>
              <span aria-hidden="true">·</span>
              <span>London</span>
              <span aria-hidden="true">·</span>
              <span>Los Angeles</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#B45E28] font-medium">78% Faster Client Approvals</span>
            </div>
          </div>

          {/* Right Column: Tactile Glass Showcase inspired directly by the reference image */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Interactive Lighting Control Dial above/beside the card */}
            <div className="w-full max-w-[430px] mb-4 flex items-center justify-between p-2 rounded-2xl glass-panel text-xs text-[#5C4C40]">
              <span className="font-semibold tracking-wider uppercase text-[10px] text-[#7C6D63] pl-2 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#B45E28]" />
                Sunlight Phase
              </span>
              <div className="flex items-center gap-1 bg-[#EBE2D7]/60 p-1 rounded-xl">
                {LIGHTING_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setActiveLighting(preset.id)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                      activeLighting === preset.id
                        ? 'bg-white text-[#2B1F17] shadow-xs'
                        : 'text-[#7C6D63] hover:text-[#2B1F17]'
                    }`}
                  >
                    {preset.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* The Tactile Frosted Glass Card Container */}
            <div className="relative w-full max-w-[430px] p-2">
              
              {/* Architectural sculptural backdrop elements */}
              <div 
                className="absolute -top-10 -left-6 w-32 h-44 rounded-t-full border border-white/40 bg-gradient-to-b from-white/70 via-[#EAE1D5]/40 to-transparent -z-10 shadow-xs pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-[#D1C3B2] to-[#FAF8F5] -z-10 shadow-md border border-white/50 pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -bottom-8 left-12 w-28 h-10 rounded-full bg-gradient-to-r from-[#DFD7CC] via-[#C9BCAE] to-[#EDE7DF] -z-10 shadow-sm pointer-events-none opacity-80" 
                aria-hidden="true" 
              />

              {/* The Master Frosted Card */}
              <div className="glass-panel rounded-3xl p-7 relative transition-all duration-300 hover:shadow-[0_28px_60px_-16px_rgba(54,38,25,0.14)]">
                
                {/* Header: Studio Monogram + Save For Later */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#EAE1D5]/80 border border-white/90 flex items-center justify-center font-editorial text-2xl text-[#2B1F17] font-semibold shadow-xs">
                      A<span className="text-[#B45E28] text-xs -mt-1 ml-0.5">✦</span>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#47382E]">
                        Aura Studio
                      </div>
                      <div className="text-xs text-[#806E63] font-normal leading-tight">
                        Designing spaces. Elevating lives.
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBookmarkToggle}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      bookmarked 
                        ? 'bg-[#B45E28] text-white shadow-xs' 
                        : 'bg-[#EAE2D7]/65 hover:bg-[#EAE2D7] text-[#4F4036] border border-white/50'
                    }`}
                    aria-label="Save for later"
                  >
                    <span>{bookmarked ? 'Saved' : 'Save for later'}</span>
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Subtitle / Kicker */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B5A4F]">
                    Featured Role
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B45E28]" />
                </div>

                {/* Card Main Title */}
                <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-2">
                  Spatial Designer
                </h2>

                {/* Mantra statement */}
                <p className="text-sm font-medium text-[#7C6D63] mb-6">
                  Shape spaces that <span className="text-[#B45E28] font-semibold">feel alive</span>.
                </p>

                {/* Tactile Frosted Chips for Role Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="glass-pill rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D98246] to-[#B45E28] text-white flex items-center justify-center shadow-xs shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#2B1F17] truncate">Full-Time</div>
                      <div className="text-[11px] text-[#7C6D63] truncate">Permanent</div>
                    </div>
                  </div>

                  <div className="glass-pill rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D98246] to-[#B45E28] text-white flex items-center justify-center shadow-xs shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#2B1F17] truncate">Creative Studio</div>
                      <div className="text-[11px] text-[#7C6D63] truncate">Collaborative Team</div>
                    </div>
                  </div>
                </div>

                {/* Hairline Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2B1F17]/15 to-transparent mb-6" />

                {/* Bottom Row: Compensation + CTA Button */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#7C6D63] mb-1">
                      Compensation
                    </div>
                    <div className="font-semibold text-xl text-[#2B1F17] tracking-tight tabular-nums">
                      $120K – $180K
                    </div>
                    <div className="text-[11px] text-[#7C6D63]">
                      + Performance Bonus
                    </div>
                    <div className="text-[11px] text-[#8C7B70] mt-2 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#B45E28]" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>

                  <button
                    onClick={onExploreRoleModal}
                    className="group inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] rounded-2xl shadow-[0_6px_18px_rgba(180,94,40,0.3)] transition-all duration-200 active:scale-95 whitespace-nowrap"
                  >
                    <span>Explore Role</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Underglow sphere accent at bottom of card */}
                <div 
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border border-[#E8DEC8] shadow-[0_8px_20px_rgba(180,94,40,0.3)] flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-t from-[#B45E28] to-white/90 opacity-90 blur-[1px]" />
                </div>
              </div>

              {/* Toast confirmation */}
              {toastMessage && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#2B1F17] text-white text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-fade-in z-20 whitespace-nowrap">
                  <Check className="w-3.5 h-3.5 text-[#E08544]" />
                  <span>{toastMessage}</span>
                </div>
              )}
            </div>

            {/* Architectural details caption */}
            <div className="mt-8 text-center text-xs text-[#7C6D63]">
              <span className="font-medium text-[#2B1F17]">{currentPreset.name} ({currentPreset.time})</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{currentPreset.kelvin}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{currentPreset.lux}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
