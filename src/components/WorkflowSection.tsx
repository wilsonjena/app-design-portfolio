import React, { useState } from 'react';
import { UploadCloud, Palette, Share2, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenDemoModal: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenDemoModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Import Any 3D Spatial Model',
      subtitle: 'Native CAD & BIM ingestion in seconds',
      description: 'Upload your Rhino 3DM, Revit IFC, SketchUp SKP, or Blender file. Aura Studio preserves component hierarchies, dimensional scales, and architectural camera keyframes automatically.',
      icon: UploadCloud,
      highlight: 'Rhino 8, Revit, SketchUp, USDZ supported'
    },
    {
      number: '02',
      title: 'Calibrate Materials & Sun Studies',
      subtitle: 'Photometric PBR twins & geographic solar angles',
      description: 'Drag and drop calibrated physical materials onto architectural surfaces. Adjust natural sunlight based on real latitude, longitude, and seasonal daylight to assess glare and warmth.',
      icon: Palette,
      highlight: '650+ lab-measured PBR material swatches'
    },
    {
      number: '03',
      title: 'Share Live Spatial Link for Sign-Off',
      subtitle: 'Zero installation required for clients or contractors',
      description: 'Send a private studio URL. Clients explore the design on iPad or desktop, toggle between curated material schemes, and approve specific finishes with recorded audit trails.',
      icon: Share2,
      highlight: 'Clients approve 78% faster than static renders'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#F2EDE5] border-t border-[#2B1F17]/8 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
            <span>Workflow Simplicity</span>
            <span aria-hidden="true">·</span>
            <span>Three Architectural Steps</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight mb-4">
            From raw CAD to client approval in a single afternoon.
          </h2>
          <p className="text-base text-[#6B5A4F] leading-relaxed">
            Eliminate endless render farm waits and confusing PDF revision markups. Your clients experience the actual atmosphere of the space.
          </p>
        </div>

        {/* 3 Step Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-white border-[#B45E28] shadow-[0_16px_36px_rgba(180,94,40,0.12)] scale-[1.02]'
                    : 'bg-white/60 hover:bg-white border-[#2B1F17]/10 hover:border-[#2B1F17]/25'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-editorial text-3xl font-bold text-[#B45E28]">
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#B45E28] text-white' : 'bg-[#EAE2D7] text-[#6E5D52]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#2B1F17] tracking-tight mb-2">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-[#B45E28] mb-3">
                  {step.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#6E5D52] leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-[#2B1F17]/10 flex items-center gap-2 text-xs font-semibold text-[#2B1F17]">
                  <CheckCircle2 className="w-4 h-4 text-[#B45E28] shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="glass-panel rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold text-[#2B1F17] mb-1">
              Ready to see your own architectural model in Aura Studio?
            </div>
            <div className="text-sm text-[#7C6D63]">
              Upload a sample file or book an interactive studio walkthrough with our architectural specialists.
            </div>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] rounded-xl shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>Book Studio Walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
