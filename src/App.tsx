/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveSpatialViewer } from './components/InteractiveSpatialViewer';
import { CoreCapabilities } from './components/CoreCapabilities';
import { WorkflowSection } from './components/WorkflowSection';
import { StudioMetricCalculator } from './components/StudioMetricCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DemoModal, AuthModal, ExploreRoleModal } from './components/Modals';
import { LightingMode, PricingPlan } from './types';
import { Check, X } from 'lucide-react';

export default function App() {
  const [activeLighting, setActiveLighting] = useState<LightingMode>('golden');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<PricingPlan | null>(null);
  const [globalToast, setGlobalToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setGlobalToast(message);
    setTimeout(() => {
      setGlobalToast(null);
    }, 3800);
  };

  const handleSelectPlan = (plan: PricingPlan, _billingCycle: 'monthly' | 'annual') => {
    setPreselectedPlan(plan);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] text-[#2B1F17] font-sans antialiased selection:bg-[#B45E28]/20 selection:text-[#B45E28]">
      
      {/* Global Top Banner / Toast Alert */}
      {globalToast && (
        <aside 
          aria-label="Notification"
          className="fixed top-24 right-6 z-50 glass-card-amber p-4 rounded-2xl shadow-xl border border-white/90 flex items-center gap-3 animate-fade-in max-w-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#B45E28] text-white flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="text-xs text-[#2B1F17] font-medium pr-2">
            {globalToast}
          </div>
          <button 
            onClick={() => setGlobalToast(null)}
            className="text-[#7C6D63] hover:text-[#2B1F17] p-1"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* 3-Zone Top Bar Contract */}
      <Navbar
        onOpenDemoModal={() => {
          setPreselectedPlan(null);
          setDemoModalOpen(true);
        }}
        onOpenAuthModal={() => setAuthModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with tactile card & lighting controls */}
        <Hero
          onOpenDemoModal={() => {
            setPreselectedPlan(null);
            setDemoModalOpen(true);
          }}
          onExploreRoleModal={() => setRoleModalOpen(true)}
          activeLighting={activeLighting}
          setActiveLighting={setActiveLighting}
        />

        {/* Core Capabilities: Asymmetric Bento Grid (01 to 04) */}
        <CoreCapabilities 
          onOpenDemoModal={() => {
            setPreselectedPlan(null);
            setDemoModalOpen(true);
          }} 
        />

        {/* Real-time Interactive 3D Spatial Canvas */}
        <InteractiveSpatialViewer />

        {/* 3-Step Architectural Workflow */}
        <WorkflowSection 
          onOpenDemoModal={() => {
            setPreselectedPlan(null);
            setDemoModalOpen(true);
          }} 
        />

        {/* Measurable Studio Impact & Billable Savings Calculator */}
        <StudioMetricCalculator />

        {/* Attributable Testimonials from Renowned Practices */}
        <TestimonialsSection />

        {/* Transparent Studio Licensing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Comprehensive Architecture & Security FAQs */}
        <FaqSection />

        {/* Final Conversion Section */}
        <CtaSection onSuccessToast={showToast} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Functional Interactive Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onSuccess={showToast}
        preselectedPlan={preselectedPlan}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={showToast}
      />

      <ExploreRoleModal
        isOpen={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        onSuccess={showToast}
      />

    </div>
  );
}
