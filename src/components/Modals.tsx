import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Building, Mail, User, Briefcase, Calendar, ShieldCheck, Compass } from 'lucide-react';
import { PricingPlan } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  preselectedPlan?: PricingPlan | null;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  preselectedPlan
}) => {
  const [studioName, setStudioName] = useState('');
  const [email, setEmail] = useState('');
  const [cadTool, setCadTool] = useState('Rhino 8');
  const [teamSize, setTeamSize] = useState('5-15 Designers');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess(`Walkthrough scheduled for ${studioName || 'your studio'}. Invitation sent to ${email}`);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201712]/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg glass-card-amber rounded-3xl p-8 border border-white/90 shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#7C6D63] hover:text-[#2B1F17] hover:bg-white/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#B45E28] text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#2B1F17]">
              Studio Walkthrough Confirmed
            </h3>
            <p className="text-sm text-[#6E5D52] max-w-sm mx-auto">
              Our architectural solutions lead will meet with your team to demonstrate live CAD ingestion and custom PBR material twinning.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8C7B70] mb-1">
                Studio Verification
              </div>
              <h3 className="font-editorial text-3xl font-bold text-[#2B1F17] tracking-tight">
                {preselectedPlan ? `Start ${preselectedPlan.name} Trial` : 'Book Studio Walkthrough'}
              </h3>
              <p className="text-xs text-[#7C6D63] mt-1">
                Experience real-time spatial photometrics calibrated to your firm’s specific CAD workflow.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#4A3B31] mb-1">
                  Studio or Practice Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#8C7B70] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Atelier Rossi & Associates"
                    value={studioName}
                    onChange={(e) => setStudioName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B31] mb-1">
                  Director or Studio Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C7B70] absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="partner@yourstudio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B31] mb-1">
                    Primary 3D CAD
                  </label>
                  <select
                    value={cadTool}
                    onChange={(e) => setCadTool(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
                  >
                    <option>Rhino 8</option>
                    <option>Revit / BIM</option>
                    <option>SketchUp Pro</option>
                    <option>Blender</option>
                    <option>Vectorworks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B31] mb-1">
                    Practice Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
                  >
                    <option>1-4 Designers</option>
                    <option>5-15 Designers</option>
                    <option>16-50 Designers</option>
                    <option>50+ Multi-Office</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Confirm Studio Activation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-[11px] text-center text-[#7C6D63] flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B45E28]" />
              <span>Full confidentiality & intellectual property protections apply.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(tab === 'signin' ? `Welcome back to Aura Studio (${email || 'architect'})` : `Studio workspace created for ${email}`);
    onClose();
  };

  const handleQuickDemo = (role: string) => {
    onSuccess(`Authenticated as ${role} · Studio Rostova Milan`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201712]/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md glass-card-amber rounded-3xl p-8 border border-white/90 shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#7C6D63] hover:text-[#2B1F17] hover:bg-white/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="w-10 h-10 rounded-full bg-[#EAE1D5] border border-white flex items-center justify-center font-editorial text-xl text-[#2B1F17] font-semibold mb-3 shadow-xs">
            A<span className="text-[#B45E28] text-xs -mt-1 ml-0.5">✦</span>
          </div>
          <h3 className="font-editorial text-3xl font-bold text-[#2B1F17] tracking-tight">
            {tab === 'signin' ? 'Studio Sign In' : 'Create Studio Space'}
          </h3>
          <p className="text-xs text-[#7C6D63] mt-1">
            Access your spatial projects, client walkthrough links, and PBR twins.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex p-1 bg-[#EAE2D7]/70 rounded-xl mb-5">
          <button
            onClick={() => setTab('signin')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              tab === 'signin' ? 'bg-white text-[#2B1F17] shadow-xs' : 'text-[#7C6D63]'
            }`}
          >
            Studio Sign In
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              tab === 'signup' ? 'bg-white text-[#2B1F17] shadow-xs' : 'text-[#7C6D63]'
            }`}
          >
            New Practice
          </button>
        </div>

        <form onSubmit={handleAction} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#4A3B31] mb-1">
              Studio Email Address
            </label>
            <input
              type="email"
              required
              placeholder="architect@practice.design"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A3B31] mb-1">
              Studio Password or SSO Token
            </label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] shadow-md transition-all active:scale-[0.98] mt-2"
          >
            {tab === 'signin' ? 'Enter Studio Workspace' : 'Initialize Workspace'}
          </button>
        </form>

        {/* Quick Demo Switcher */}
        <div className="pt-5 mt-5 border-t border-[#2B1F17]/10 space-y-2">
          <div className="text-[10px] uppercase tracking-wider font-bold text-[#8C7B70] text-center">
            One-Click Studio Demo Profile
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleQuickDemo('Design Principal')}
              className="flex-1 py-2 px-2 text-[11px] font-medium bg-white/70 hover:bg-white text-[#2B1F17] rounded-lg border border-[#2B1F17]/10 transition-all text-center truncate"
            >
              Elena Rostova (Principal)
            </button>
            <button
              onClick={() => handleQuickDemo('Lead Spatial Designer')}
              className="flex-1 py-2 px-2 text-[11px] font-medium bg-white/70 hover:bg-white text-[#2B1F17] rounded-lg border border-[#2B1F17]/10 transition-all text-center truncate"
            >
              Marcus Vance (Lead 3D)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

interface ExploreRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const ExploreRoleModal: React.FC<ExploreRoleModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [applied, setApplied] = useState(false);
  const [name, setName] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    onSuccess(`Portfolio submitted for Spatial Designer position. Thank you, ${name}!`);
    setTimeout(() => {
      onClose();
      setApplied(false);
    }, 2600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201712]/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card-amber rounded-3xl p-8 border border-white/90 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#7C6D63] hover:text-[#2B1F17] hover:bg-white/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {applied ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#B45E28] text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#2B1F17]">
              Application Received
            </h3>
            <p className="text-sm text-[#6E5D52] max-w-md mx-auto">
              Our studio curation team will review your portfolio and reach out regarding spatial design projects in Los Angeles.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header Lockup mirroring reference card */}
            <div className="border-b border-[#2B1F17]/10 pb-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C7667] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B45E28]" />
                <span>AURA STUDIO · RESIDENT PRACTICE</span>
              </div>
              <h2 className="font-editorial text-4xl font-bold text-[#2B1F17] tracking-tight mb-2">
                Spatial Designer
              </h2>
              <p className="text-sm font-medium text-[#7C6D63]">
                Shape spaces that <span className="text-[#B45E28] font-semibold">feel alive</span>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#2B1F17]/10 text-xs">
                <div>
                  <div className="text-[#8C7B70] uppercase text-[10px] tracking-wider">Role Type</div>
                  <div className="font-semibold text-[#2B1F17]">Full-Time Permanent</div>
                </div>
                <div>
                  <div className="text-[#8C7B70] uppercase text-[10px] tracking-wider">Studio Team</div>
                  <div className="font-semibold text-[#2B1F17]">Spatial Environment Lab</div>
                </div>
                <div>
                  <div className="text-[#8C7B70] uppercase text-[10px] tracking-wider">Compensation</div>
                  <div className="font-semibold text-[#2B1F17]">$120K – $180K + Bonus</div>
                </div>
                <div>
                  <div className="text-[#8C7B70] uppercase text-[10px] tracking-wider">Location</div>
                  <div className="font-semibold text-[#2B1F17]">Los Angeles, CA</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-xs sm:text-sm text-[#6E5D52] leading-relaxed">
              <h4 className="font-semibold text-sm text-[#2B1F17] uppercase tracking-wider">
                About the Role & Vision
              </h4>
              <p>
                At Aura Studio, we believe spatial environments are not passive backdrops—they are living sensorial experiences. As a Senior Spatial Designer, you will architect virtual spatial pavilions, luxury retail concept environments, and high-end residential interiors using our real-time photometric engine.
              </p>
              
              <h4 className="font-semibold text-sm text-[#2B1F17] uppercase tracking-wider pt-2">
                Key Responsibilities
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5C4D43]">
                <li>Design bespoke 3D spatial environments, custom furniture millwork, and lighting narratives.</li>
                <li>Curate and calibrate PBR material twins (travertine, fluted timber, patinated metals, tactile textiles).</li>
                <li>Conduct daylighting and solar throw studies to optimize interior sensory calm.</li>
                <li>Collaborate directly with design partners in Milan, Tokyo, and London.</li>
              </ul>
            </div>

            {/* Quick Application Form */}
            <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-white/80 border border-[#2B1F17]/10 space-y-3">
              <div className="font-semibold text-xs text-[#2B1F17] uppercase tracking-wider">
                Submit Portfolio for Consideration
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
                />
              </div>

              <input
                type="url"
                required
                placeholder="Portfolio Link (Web, PDF, or Behance)"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2B1F17]/15 text-xs text-[#2B1F17] focus:outline-none focus:ring-2 focus:ring-[#B45E28]"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#B45E28] to-[#974A1B] hover:from-[#C46D35] hover:to-[#A35322] shadow-sm transition-all"
              >
                Submit Application to Aura Studio
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
