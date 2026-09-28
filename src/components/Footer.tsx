import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#201712] text-[#E5DCD2] pt-18 pb-12 border-t border-[#382B24]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#382B24]">
          
          {/* Brand Column (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#382B24] border border-[#544338] flex items-center justify-center font-editorial text-lg text-[#F8F5F0] font-semibold">
                A<span className="text-[#B45E28] text-xs -mt-1 ml-0.5">✦</span>
              </div>
              <span className="font-editorial text-2xl font-semibold tracking-wide text-[#F8F5F0]">
                Aura Studio
              </span>
            </div>

            <p className="text-xs text-[#A8988C] max-w-sm leading-relaxed">
              The collaborative spatial design operating system. Unifying 3D architectural models, calibrated material twins, and real-time daylight simulations for premier global practices.
            </p>

            <div className="text-xs text-[#8C7A6D] pt-2">
              Studio Locations: <span className="text-[#D98246]">Milan</span> · <span className="text-[#D98246]">Tokyo</span> · <span className="text-[#D98246]">London</span> · <span className="text-[#D98246]">Los Angeles</span>
            </div>
          </div>

          {/* Links Columns (8 Cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Col 1: Platform */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#F8F5F0]">
                Platform
              </div>
              <ul className="space-y-2 text-xs text-[#A8988C]">
                <li><a href="#platform" className="hover:text-white transition-colors">Tactile Material Library</a></li>
                <li><a href="#spatial-viewer" className="hover:text-white transition-colors">Photometric Sun Engine</a></li>
                <li><a href="#workflow" className="hover:text-white transition-colors">Client Walkthrough Suite</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">CAD & BIM Ingestion</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Fabrication Schedules</a></li>
              </ul>
            </div>

            {/* Col 2: Resources */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#F8F5F0]">
                Resources
              </div>
              <ul className="space-y-2 text-xs text-[#A8988C]">
                <li><a href="#workflow" className="hover:text-white transition-colors">Architectural Benchmarks</a></li>
                <li><a href="#spatial-viewer" className="hover:text-white transition-colors">PBR Material Calibration Guide</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Rhino 8 Plugin Documentation</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Revit Synchronization SDK</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Community Studio Discord</a></li>
              </ul>
            </div>

            {/* Col 3: Practice & Trust */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#F8F5F0]">
                Studio & Legal
              </div>
              <ul className="space-y-2 text-xs text-[#A8988C]">
                <li><a href="#contact" className="hover:text-white transition-colors">About Aura Systems</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Careers & Roles</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">SOC2 Type II Security</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Terms of Architectural Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Quiet Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#806E61] gap-4">
          <div>
            © {new Date().getFullYear()} Aura Studio Systems, Inc. All rights reserved. Shape spaces that feel alive.
          </div>
          <div className="flex items-center gap-6">
            <span>Direct CAD Encryption TLS 1.3</span>
            <span>Zero IP Claims on User Models</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
