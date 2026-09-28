import React from 'react';
import { 
  Sparkles, 
  Layers, 
  SunMedium, 
  Users, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowUpRight,
  Eye,
  Sliders
} from 'lucide-react';

interface CoreCapabilitiesProps {
  onOpenDemoModal: () => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="platform" className="py-24 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
              <span>Core Architecture</span>
              <span aria-hidden="true">·</span>
              <span>The Spatial Studio OS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#2B1F17] tracking-tight">
              Crafted for the rigor of architectural experience.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E5D52] max-w-md leading-relaxed">
            Replaces disconnected CAD viewers, heavy render pipelines, and PDF swatch binders with a unified spatial collaboration engine.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Material Twin Library (col-span-7) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs hover:border-[#2B1F17]/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-editorial text-xl font-semibold text-[#B45E28]">
                  01. Tactile Material Twin Library
                </span>
                <span className="text-xs text-[#8C7B70]">Physical PBR Physics</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#2B1F17] tracking-tight mb-3">
                Calibrated against real-world stone, wood, metals, and textiles.
              </h3>
              <p className="text-sm text-[#6B5A4F] leading-relaxed mb-6">
                Every material includes laboratory-measured micro-roughness, subsurface scattering, and specular sheen. Toggle between honed Italian travertine, smoked oak, brushed patinas, and fluted glass with true optical fidelity.
              </p>
            </div>

            {/* Interactive Material Preview Strip */}
            <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#2B1F17]/10 grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-xl border border-[#2B1F17]/10">
                <div className="w-full h-12 rounded-lg bg-[#EAE0D0] mb-2 flex items-center justify-center border border-black/5">
                  <span className="w-6 h-6 rounded-full bg-[#D8CBBA] shadow-xs" />
                </div>
                <div className="text-xs font-semibold text-[#2B1F17] truncate">Travertine Navona</div>
                <div className="text-[11px] text-[#7C6D63]">Reflectance 46%</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#2B1F17]/10">
                <div className="w-full h-12 rounded-lg bg-[#443328] mb-2 flex items-center justify-center border border-black/5">
                  <span className="w-6 h-6 rounded-full bg-[#2B1F17] shadow-xs" />
                </div>
                <div className="text-xs font-semibold text-[#2B1F17] truncate">Fluted Smoked Oak</div>
                <div className="text-[11px] text-[#7C6D63]">Roughness 0.34 Ra</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#2B1F17]/10">
                <div className="w-full h-12 rounded-lg bg-[#D6BF9E] mb-2 flex items-center justify-center border border-black/5">
                  <span className="w-6 h-6 rounded-full bg-[#BA9F76] shadow-xs" />
                </div>
                <div className="text-xs font-semibold text-[#2B1F17] truncate">Champagne Brass</div>
                <div className="text-[11px] text-[#7C6D63]">Specular 0.84</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Photometric Lighting Simulation (col-span-5) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs hover:border-[#2B1F17]/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-editorial text-xl font-semibold text-[#B45E28]">
                  02. Real-Time Solar Studies
                </span>
                <span className="text-xs text-[#8C7B70]">Astronomical Accuracy</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#2B1F17] tracking-tight mb-3">
                Simulate sun azimuth and architectural shadow play.
              </h3>
              <p className="text-sm text-[#6B5A4F] leading-relaxed mb-6">
                Set geographic coordinates, month, and solar zenith to study how natural light washes across interiors from morning to golden hour.
              </p>
            </div>

            {/* Visual Solar Meter */}
            <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#2B1F17]/10 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#2B1F17]">Solar Coordinate Ingest</span>
                <span className="text-[#B45E28] font-bold">34.0522° N, 118.2437° W</span>
              </div>
              <div className="h-2 w-full bg-[#E5DCD2] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#D98246] via-[#B45E28] to-[#6E3512] w-3/4 rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] text-[#7C6D63]">
                <span>Equinox Daylight Throw</span>
                <span>Calibrated 2,900K - 5,500K</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Immersive Client Presentation Suite (col-span-5) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs hover:border-[#2B1F17]/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-editorial text-xl font-semibold text-[#B45E28]">
                  03. Client Presentation Suite
                </span>
                <span className="text-xs text-[#8C7B70]">Zero-Install Share</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#2B1F17] tracking-tight mb-3">
                Clients explore and approve on iPad or desktop in seconds.
              </h3>
              <p className="text-sm text-[#6B5A4F] leading-relaxed mb-6">
                Send a private, branded web link. Clients walk through, toggle curated material options, and leave spatial pin comments directly inside the 3D scene.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#2B1F17]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#2B1F17] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B45E28]" />
                <span>Zero app install required for clients</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2B1F17] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B45E28]" />
                <span>Pinpoint spatial feedback & sign-off log</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Automated Schedules & Contractor Specs (col-span-7) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-[#2B1F17]/10 shadow-xs hover:border-[#2B1F17]/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-editorial text-xl font-semibold text-[#B45E28]">
                  04. Automated Fabrication Schedules
                </span>
                <span className="text-xs text-[#8C7B70]">Direct Millwork Export</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#2B1F17] tracking-tight mb-3">
                Turn approved spatial models into contractor-ready cut sheets.
              </h3>
              <p className="text-sm text-[#6B5A4F] leading-relaxed mb-6">
                Generate instant bill-of-materials, surface area takeoffs, fixture schedules, and manufacturer swatch codes without tedious manual drafting.
              </p>
            </div>

            {/* Data snippet table */}
            <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#2B1F17]/10 overflow-hidden">
              <div className="grid grid-cols-4 gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#8C7B70] pb-2 border-b border-[#2B1F17]/10">
                <span>Material / Element</span>
                <span>Area (SQ FT)</span>
                <span>Supplier Spec</span>
                <span className="text-right">Sign-Off</span>
              </div>
              <div className="space-y-1.5 pt-2 text-xs font-medium text-[#2B1F17]">
                <div className="grid grid-cols-4 gap-2 py-1 items-center">
                  <span>Honed Travertine Slab</span>
                  <span className="tabular-nums">1,420 sq ft</span>
                  <span className="text-[#6B5A4F] truncate">Salvatori Italian Quarry</span>
                  <span className="text-right text-[#B45E28] font-semibold">Approved</span>
                </div>
                <div className="grid grid-cols-4 gap-2 py-1 items-center border-t border-[#2B1F17]/5">
                  <span>Fluted Smoked Oak Millwork</span>
                  <span className="tabular-nums">860 sq ft</span>
                  <span className="text-[#6B5A4F] truncate">Schotten & Hansen</span>
                  <span className="text-right text-[#B45E28] font-semibold">Approved</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
