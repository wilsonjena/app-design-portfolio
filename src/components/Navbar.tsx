import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
  onOpenAuthModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal, onOpenAuthModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5F0]/85 backdrop-blur-md border-b border-[#2B1F17]/8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark in Display Font */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-[#2B1F17] hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#EFE7DE] border border-[#2B1F17]/15 flex items-center justify-center font-editorial text-lg text-[#2B1F17] font-semibold shadow-xs">
            A<span className="text-[#B45E28] text-xs -mt-1 ml-0.5">✦</span>
          </div>
          <span className="font-editorial text-2xl font-semibold tracking-wide text-[#2B1F17]">
            Aura Studio
          </span>
        </a>

        {/* Zone 2: 4-6 Clean Text Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#7C6D63]">
          <a href="#platform" className="hover:text-[#2B1F17] transition-colors py-1">
            Platform
          </a>
          <a href="#material-engine" className="hover:text-[#2B1F17] transition-colors py-1">
            Material Engine
          </a>
          <a href="#spatial-viewer" className="hover:text-[#2B1F17] transition-colors py-1">
            Spatial Viewer
          </a>
          <a href="#workflow" className="hover:text-[#2B1F17] transition-colors py-1">
            Workflow
          </a>
          <a href="#pricing" className="hover:text-[#2B1F17] transition-colors py-1">
            Pricing
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenAuthModal}
            className="text-xs uppercase tracking-wider font-semibold text-[#5C4D43] hover:text-[#2B1F17] transition-colors py-2 px-3 whitespace-nowrap"
          >
            Studio Login
          </button>
          <button
            onClick={onOpenDemoModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] rounded-xl shadow-[0_4px_16px_rgba(180,94,40,0.25)] hover:shadow-[0_6px_20px_rgba(180,94,40,0.35)] transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            <span>Start Free Trial</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#B45E28] rounded-lg"
          >
            Try Free
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2B1F17] hover:bg-[#EFE7DE] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2B1F17]/10 bg-[#F8F5F0] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#7C6D63]">
            <a 
              href="#platform" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B1F17]"
            >
              Platform
            </a>
            <a 
              href="#material-engine" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B1F17]"
            >
              Material Engine
            </a>
            <a 
              href="#spatial-viewer" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B1F17]"
            >
              Spatial Viewer
            </a>
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B1F17]"
            >
              Workflow
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B1F17]"
            >
              Pricing
            </a>
          </nav>

          <div className="pt-4 border-t border-[#2B1F17]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal();
              }}
              className="w-full text-center py-2.5 text-xs uppercase tracking-wider font-semibold text-[#5C4D43] bg-[#EFE8DE] rounded-xl"
            >
              Studio Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] rounded-xl shadow-sm text-center"
            >
              Start Free 14-Day Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
