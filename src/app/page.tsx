'use client';

import React, { useState } from 'react';
import { TopUtilityBar } from '@/components/common/TopUtilityBar';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { FloatingActions } from '@/components/common/FloatingActions';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SpecsSection } from '@/components/sections/SpecsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ProjectHighlight } from '@/components/sections/ProjectHighlight';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteModal } from '@/components/modals/QuoteModal';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const openQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen page-shell">
      <TopUtilityBar />
      <Navbar onOpenQuote={() => openQuoteModal()} />

      <main className="overflow-hidden">
        <HeroSection onOpenQuote={() => openQuoteModal()} />

        <ScrollRevealSection className="bg-slate-50 py-16 sm:py-20" delay={120}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal-card">
              <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest block mb-2">Complete Turn-Key Coverage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                From government approvals to PUF kiosk delivery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  title: 'Regulatory Approvals',
                  text: 'DM, NHAI, PWD, Forest, CLU, and gas/water pipeline clearance support for fuel sites, warehouses, and private properties.',
                },
                {
                  title: 'PUF Panel Manufacturing',
                  text: 'Custom kiosk and store fabrication using 60mm wall and 65mm roof insulated sandwich panels for durable site-ready execution.',
                },
                {
                  title: 'Fast Execution',
                  text: 'Manufacturing in 5–7 days and on-site installation in 2–3 days with a focus on minimal site disruption and accelerated delivery.',
                },
                {
                  title: 'Long-Term Reliability',
                  text: '10-year panel and insulation warranty, strong structural load retention, and easy relocation or modification for future expansion.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="reveal-card bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 soft-hover"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 text-lg font-bold">
                    {item.title.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollRevealSection>

        <ServicesSection onSelectService={(srvTitle) => openQuoteModal(srvTitle)} />
        <SpecsSection onOpenQuote={() => openQuoteModal()} />
        <ProcessSection onOpenQuote={() => openQuoteModal()} />
        <BenefitsSection />
        <ProjectHighlight onOpenQuote={() => openQuoteModal()} />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={closeQuoteModal}
        defaultService={selectedService}
      />
    </div>
  );
}