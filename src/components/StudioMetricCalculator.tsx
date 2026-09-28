import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles } from 'lucide-react';

export const StudioMetricCalculator: React.FC = () => {
  const [projectCount, setProjectCount] = useState<number>(6);
  const [teamSize, setTeamSize] = useState<number>(4);

  // Calculations
  const hoursSavedPerProject = 38; // 38 hours saved on rendering, client decks, and revision cycles
  const totalHoursSaved = projectCount * hoursSavedPerProject * Math.max(1, teamSize * 0.75);
  const averageHourlyBillingRate = 165; // $165/hr spatial architect billing rate
  const annualSavings = Math.round((totalHoursSaved * averageHourlyBillingRate) / 1000) * 1000;
  const cycleReduction = '68%';

  return (
    <section className="py-24 bg-[#F8F5F0] border-t border-[#2B1F17]/8 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
            <span>Studio Impact & Velocity</span>
            <span aria-hidden="true">·</span>
            <span>Measurable Economics</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-4">
            Calculate your practice’s design velocity gain.
          </h2>
          <p className="text-base text-[#6B5A4F] leading-relaxed">
            By shifting from static offline renders to real-time interactive spatial previews, architectural teams eliminate costly revision lag and compress sign-off cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Card (6 Cols) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs space-y-8">
            
            {/* Project Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#2B1F17]">
                  Annual Active Spatial Projects
                </label>
                <span className="text-lg font-bold text-[#B45E28] tabular-nums">
                  {projectCount} Projects
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                step="1"
                value={projectCount}
                onChange={(e) => setProjectCount(parseInt(e.target.value))}
                className="w-full h-2 bg-[#EAE2D7] rounded-lg appearance-none cursor-pointer accent-[#B45E28]"
              />
              <div className="flex justify-between text-[11px] text-[#8C7B70] mt-1.5 font-medium">
                <span>2 Projects (Boutique)</span>
                <span>12 Projects</span>
                <span>24 Projects (Firm)</span>
              </div>
            </div>

            {/* Team Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#2B1F17]">
                  Studio Spatial Designers & Architects
                </label>
                <span className="text-lg font-bold text-[#B45E28] tabular-nums">
                  {teamSize} {teamSize === 1 ? 'Designer' : 'Designers'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="16"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2 bg-[#EAE2D7] rounded-lg appearance-none cursor-pointer accent-[#B45E28]"
              />
              <div className="flex justify-between text-[11px] text-[#8C7B70] mt-1.5 font-medium">
                <span>1 Solo Atelier</span>
                <span>8 Practice</span>
                <span>16+ Global</span>
              </div>
            </div>

            {/* Benchmark notice */}
            <div className="pt-4 border-t border-[#2B1F17]/10 text-xs text-[#7C6D63] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B45E28] shrink-0" />
              <span>Calibrated on average $165/hr architectural billing rate across 420+ studios.</span>
            </div>

          </div>

          {/* Results Summary Box (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-3xl glass-card-amber border border-white/90">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C7B70] mb-2">
                <DollarSign className="w-4 h-4 text-[#B45E28]" />
                <span>Estimated Value Saved</span>
              </div>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#2B1F17] tracking-tight tabular-nums mb-1">
                ${(annualSavings / 1000).toFixed(0)}K
              </div>
              <div className="text-xs text-[#7C6D63]">
                Annual billable time reclaimed from static rendering pipelines.
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C7B70] mb-2">
                <Clock className="w-4 h-4 text-[#B45E28]" />
                <span>Production Hours</span>
              </div>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#2B1F17] tracking-tight tabular-nums mb-1">
                {Math.round(totalHoursSaved)} hrs
              </div>
              <div className="text-xs text-[#7C6D63]">
                Saved annually across design revisions and export schedules.
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C7B70] mb-2">
                <TrendingUp className="w-4 h-4 text-[#B45E28]" />
                <span>Approval Velocity</span>
              </div>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#B45E28] tracking-tight tabular-nums mb-1">
                {cycleReduction}
              </div>
              <div className="text-xs text-[#7C6D63]">
                Faster client sign-off on material selections & lighting schemes.
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C7B70] mb-2">
                <Calculator className="w-4 h-4 text-[#B45E28]" />
                <span>Revision Rounds</span>
              </div>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#2B1F17] tracking-tight tabular-nums mb-1">
                1.4
              </div>
              <div className="text-xs text-[#7C6D63]">
                Average review rounds down from traditional 4.6 offline rounds.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
